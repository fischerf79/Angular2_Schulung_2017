import { AbstractPassengerService } from './abstractPassengerService';
import { Passenger } from './../../model/passenger';
import { AnonymousPassengerService } from './anonymousPassengerService';
import { PassengerService } from './passengerService';
import { Component } from '@angular/core';

// Eventuell in main.ts verschieben 
import 'rxjs/add/operator/map'; 


@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html',
    providers: [
        //{provide: AbstractPassengerService, useClass: AnonymousPassengerService } 
    ],
    styleUrls:['./passenger-search.component.css']
})
export class PassengerSearchComponent {
    searchName: string;

    foundPassengers: Array<Passenger>;
    editPassenger: Passenger = null; 

    basket: Map<number, boolean> = new Map<number, boolean>();  

    constructor(private passengerService: AbstractPassengerService) {
        //console.log("PassengerSearchComponent:", this.passengerService);
    }

    /**
     * Sucht einen Passagier nach seinem Namen 
     */
    public searchPassengerByName(): void {      
        
        this.passengerService
            .find(this.searchName)
            .subscribe((passengers) => {
                this.foundPassengers = passengers;
                
                this.basket.clear();
                this.foundPassengers.forEach(item => {
                    this.basket.set(item.id, false);
                });
            },
            (error) => {
                console.error("Fehler bei Suche nach Passagier.", error);
            });     
    }

    public setEditPassenger(passengerToEdit: Passenger): void {
        this.editPassenger = passengerToEdit;
        console.log("edit passenger: ", this.editPassenger);
    }

    public saveEditedPassenger(passenger: Passenger): void {        
        this.passengerService
            .save(passenger)
            .subscribe((savedPassenger: Passenger) => {
                console.log("Saved passenger:", savedPassenger);
                this.editPassenger = savedPassenger;
            },
            (error) => {
                console.error("Fehler beim Speichern:", error);
            });
    }
}