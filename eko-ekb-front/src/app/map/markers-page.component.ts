import {Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { Map, LngLat, Marker, Popup } from 'mapbox-gl';
import { PointsService } from '../services/points.service';
import { IPoint } from 'src/shared/models/IMarker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getPointTypes } from 'src/shared/helpers/getTypes';
import { mapTimeToString } from '../../shared/helpers/mapTimeToString';
import {TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TuiAlertService} from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';

interface MarkerAndColor {
  marker: Marker,
  type: string[],
  openTime: string,
  closeTime: string,
  title: string,
  address: string
}

interface PlainMarker {
  lngLat: number[]
}


@Component({
  selector: 'app-map',
  templateUrl: './markers-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./markers-page.component.less'],
  providers: [PointsService]

})
export class MarkersPageComponent implements OnInit{

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

  public searchTerm = new FormControl('');

  get isAuth(): string {
    return localStorage.getItem('isAuth')
  }

  readonly addNewPointGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    address: new FormControl(null, Validators.required),
    types: new FormGroup({
      isPaper: new FormControl(false),
      isPlactic: new FormControl(false),
      isMetal: new FormControl(false),
      isGlass: new FormControl(false),
      isBattery: new FormControl(false),
      isLamp: new FormControl(false),
      isClothes: new FormControl(false),
      isOther: new FormControl(false),
    }),
    workTime: new FormGroup({
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
    })
  })

  allTypesObj = {
    isPaper: false,
    isPlastic: false,
    isMetal: false,
    isGlass: false,
    isBattery: false,
    isLamp: false,
    isClothes: false,
    isOther: false,

  }

  selectedMarker: IPoint | null = null;
  infoLeft: number = 0;
  infoTop: number = 0;

  selectedTypes: Set<string> = new Set<string>();

  currentMarker: number[] | null = null;


  public map?: Map;
  public currentLngLat: LngLat = new LngLat(60.594528, 56.837650);

  points!: IPoint[];

  isAddNewPoint: boolean = false;

  allTypes: string[];

  constructor(private readonly pointsService: PointsService, @Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}


  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.currentLngLat,
      zoom: 13,
    });

    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = ' '
  }

  toggleTypeFilter(type: string): void {
    console.log(this.selectedTypes)
    if (this.selectedTypes.has(type)) {
      this.selectedTypes.delete(type)
      this.filterPoints()
    }
    else {
      this.selectedTypes.add(type);
      this.filterPoints()
    }
  }

  filterPoints(): void {

    if (this.searchTerm.value) {
      this.points = this.points.filter(point =>
        point.title.toLowerCase().includes(this.searchTerm.value.toLowerCase()) ||
        point.address.toLowerCase().includes(this.searchTerm.value.toLowerCase())
      );
    }
    else if (this.selectedTypes.size > 0) {
      this.pointsService.getAllPoints().subscribe(points => {
        this.points = points.filter(point =>
          point.type.some(type => this.selectedTypes.has(type))
        );
      });
    }
    else {
      this.pointsService.getAllPoints().subscribe(points => {
        this.points = points;
      });
    }
  }

  isTypeInFilters(type: string): boolean {
    return this.selectedTypes.has(type);
  }

  ngOnInit(): void {
    this.pointsService.getAllPoints().subscribe(points => {
      this.points = points;
      this.readFromLocalStorage();
      this.allTypes = this.getAllAvailableTypes();

      this.filterPoints();

      this.searchTerm.valueChanges.subscribe((value: string) => {
        this.filterPoints();
      });

      if (this.allTypes.includes('Бумага')) {
        this.allTypesObj.isPaper = true;
      }
      if (this.allTypes.includes('Батарейки')) {
        this.allTypesObj.isBattery = true;
      }
      if (this.allTypes.includes('Одежда')) {
        this.allTypesObj.isClothes = true;
      }
      if (this.allTypes.includes('Пластик')) {
        this.allTypesObj.isPlastic = true;
      }
      if (this.allTypes.includes('Металл')) {
        this.allTypesObj.isMetal = true;
      }
      if (this.allTypes.includes('Стекло')) {
        this.allTypesObj.isGlass = true;
      }
      if (this.allTypes.includes('Лампочки')) {
        this.allTypesObj.isLamp = true;
      }
      if (this.allTypes.includes('Другое')) {
        this.allTypesObj.isOther = true;
      }
    });


  }

  createMarker() {
    if ( !this.map ) return;

    const lngLat = this.map.getCenter();

    const { title, address, workTime } = this.addNewPointGroup.value;
    const typesMap = getPointTypes(this.addNewPointGroup.controls.types);
    // @ts-ignore
    this.addMarker(lngLat, typesMap, title, address, workTime?.start, workTime?.end);

  }

  getAllAvailableTypes(): string[] {
    let types = [];
    this.markers.forEach(marker => {
      types = types.concat(marker.type)
    })
    const typesSet = new Set(types);
    return [...typesSet];
  }



  addMarker(lngLat: LngLat, type: string[], title: string, address: string, openTime: string, closeTime: string) {
    if (!this.map) return;

    const marker = new Marker({
      draggable: true
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({ marker, type, title, address, openTime, closeTime });

    marker.on('dragend', () => this.saveToLocalStorage());
  }

  onAddPoint(): void {
    this.isAddNewPoint = !this.isAddNewPoint;
    if (this.isAddNewPoint) {
      this.createMarker();
    }
    else {
      this.deleteMarker(this.markers.length - 1)
    }
  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
  }

  flyTo( markerCords: {cord1: number, cord2: number}, address: string ) {

    this.map?.flyTo({
      zoom: 14,
      center: [markerCords.cord1, markerCords.cord2]
    });

    const currentMark = this.markers.filter(marker => marker.address === address);
  }


  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(({ marker }) => {
      marker.setDraggable(false);
      return {
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ));
  }

  readFromLocalStorage() {
    this.points.forEach( ({ ingLat , type, title, address, openTime, closeTime}) => {
      const lng = ingLat.cord1;
      const lat = ingLat.cord2;
      const coords = new LngLat( lng, lat );

      this.addMarker( coords, type, title, address, openTime, closeTime);
    })

  }

  some() {
    console.log(this.markers[this.markers.length - 1].marker.getLngLat());
  }


  sendNewPoint(): void {

    const lngLat = this.markers[this.markers.length - 1].marker.getLngLat()
    const { title, address, workTime } = this.addNewPointGroup.value;
    const typesMap = getPointTypes(this.addNewPointGroup.controls.types);
    this.pointsService.createPoint({
      ingLat: {
        cord1: lngLat.lng,
        cord2: lngLat.lat
      },
      address,
      closeTime: mapTimeToString(workTime?.end),
      openTime: mapTimeToString(workTime?.start),
      title,
      type: typesMap
    }).subscribe((_) => {
      this.alerts
        .open('<strong>Точка успешно добавлена</strong>', {
          status: 'success',
        })
        .subscribe();

      this.isAddNewPoint = false;
      this.pointsService.getAllPoints().subscribe(points => {
        this.points = points;
      });
      this.saveToLocalStorage();
      this.readFromLocalStorage();
    });
  }


}
