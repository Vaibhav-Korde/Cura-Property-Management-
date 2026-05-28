    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable({
    providedIn: 'root'
    })
    export class LocationService {

    constructor(private http: HttpClient) {}

    searchLocation(query: string): Observable<any> {

        const url =
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}, Pune, India`;

        return this.http.get(url);
    }
    }       