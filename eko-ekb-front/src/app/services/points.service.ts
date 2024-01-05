import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMarker, IPoint } from "src/shared/models/IMarker";
import { HttpClient } from '@angular/common/http';
import { api } from "../consts/consts";

@Injectable({
    providedIn: 'root'
})
export class PointsService {

    constructor(private readonly httpClient: HttpClient) {
    }

    createPoint(data: IPoint): Observable<any> {
        return this.httpClient.post(`${api}/point/create`, {...data})
    }

    getAllPoints(): Observable<IPoint[]> {
        return this.httpClient.get<IPoint[]>(`${api}/point/get`);
    }
}