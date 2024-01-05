import {NgModule} from "@angular/core";
import {MarkersPageComponent} from "./markers-page.component";
import {CommonModule} from "@angular/common";
import * as mapboxgl from 'mapbox-gl';
import {TuiCheckboxBlockModule, TuiCheckboxModule, TuiInputModule, TuiInputTimeModule, TuiTagModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiForModule} from "@taiga-ui/cdk";
import { ReactiveFormsModule } from "@angular/forms";
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw';

@NgModule({
    declarations: [MarkersPageComponent],
    exports: [
        MarkersPageComponent
    ],
  imports: [CommonModule, TuiInputModule, TuiButtonModule, TuiTagModule, TuiForModule, TuiCheckboxBlockModule, TuiInputTimeModule, ReactiveFormsModule]
})
export class MarkersPageModule {}
