import { Passenger } from '../../model/passenger';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AbstractPassengerService } from "./abstractPassengerService";

@Injectable()
export class PassengerService implements AbstractPassengerService{

    public url: string = "http://www.angular.at/api/passenger";

    constructor(private httpService: Http) {
        //console.log("PassengerService:", this.httpService);
    }

    find(name: string): Observable<Array<Passenger>> {
        let headers = new Headers(); 
        headers.set('Accept', 'application/json'); 

        let search = new URLSearchParams(); 
        search.set('name', name); 

        return this
            .httpService
            .get(this.url, { headers, search})
            .map(response => response.json())
    }

    save(passenger: Passenger): Observable<Passenger> {
        let headers = new Headers(); 
        headers.set('Accept', 'application/json'); 
        
        return this
            .httpService
            .post(this.url, passenger, { headers })
            .map(resp => resp.json());
    }
}