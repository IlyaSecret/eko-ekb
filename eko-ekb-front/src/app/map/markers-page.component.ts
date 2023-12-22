import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';
import {Markers} from "../../shared/mocks/markersMock";

interface MarkerAndColor {
  marker: Marker;
  title: string,
  address: string,
  type: string[]
}

interface PlainMarker {
  lngLat: number[]
}


@Component({
  selector: 'app-map',
  templateUrl: './markers-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./markers-page.component.less']
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];


  public map?: Map;
  public currentLngLat: LngLat = new LngLat(60.594528, 56.837650);


  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.currentLngLat,
      zoom: 13,
    });

    this.readFromLocalStorage();

    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = ' '

    const marker = new Marker({
      color: 'red',
      element: markerHtml,
      draggable: false
    })
      .setLngLat( this.currentLngLat )
      .addTo( this.map );

  }

  // createMarker() {
  //   if ( !this.map ) return;
  //
  //   const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  //   const lngLat = this.map.getCenter();
  //
  //   this.addMarker( lngLat );
  // }


  addMarker( lngLat: LngLat, type: string[], title: string, address: string ) {
    if ( !this.map ) return;

    const marker = new Marker({
      draggable: false
    })
      .setLngLat( lngLat )
      .addTo( this.map );

    this.markers.push({ marker, type, title, address });
    this.saveToLocalStorage();

    marker.on('dragend', () => this.saveToLocalStorage() );
  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
  }

  flyTo( marker: Marker ) {

    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });

  }


  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map( ({ marker }) => {
      return {
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ));

  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';

    Markers.forEach( ({ lngLat , type, title, address}) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat );

      this.addMarker( coords,  type, title, address);
    })

  }


}
