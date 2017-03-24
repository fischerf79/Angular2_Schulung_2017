import { Passenger } from '../../../model/passenger';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AbstractPassengerService } from "./abstractPassengerService";

@Injectable()
export class PassengerService implements AbstractPassengerService{

    public url: string = "http://www.angular.at/api/passenger";
    public foundPassengers: Array<Passenger> = [];
    public basket: Map<number, boolean> = new Map<number, boolean>(); 

    constructor(private httpService: Http) {
        //console.log("PassengerService:", this.httpService);
    }

    find(name: string): void {
        let headers = new Headers(); 
        headers.set('Accept', 'application/json'); 

        let search = new URLSearchParams(); 
        search.set('name', name); 

        this
        .httpService
        .get(this.url, { headers, search})
        .map(response => response.json())
        .subscribe((value: Array<Passenger>) => {
            this.foundPassengers = value;

            this.basket.clear();
            this.foundPassengers.forEach(item => {
                this.basket.set(item.id, false);
            },
            (error) => {
                console.error("Failed loading passengers.", error);
            });
        });
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