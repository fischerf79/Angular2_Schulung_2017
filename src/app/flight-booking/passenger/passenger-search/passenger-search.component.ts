import { Passenger } from './../../../model/passenger';
import { AbstractPassengerService } from './abstractPassengerService';
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
    editPassenger: Passenger = null; 

     

    constructor(private passengerService: AbstractPassengerService) {
        //console.log("PassengerSearchComponent:", this.passengerService);
    }

    /**
     * Sucht einen Passagier nach seinem Namen 
     */
    public searchPassengerByName(): void {              
        this.passengerService.find(this.searchName);                
    }

    public get foundPassengers(): Array<Passenger> {
        return this.passengerService.foundPassengers;
    }

    public get basket(): Map<number, boolean> {
        return this.passengerService.basket;
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

    public currentPassengerIsSelected(passenger: Passenger): boolean {        
        if(passenger && this.basket && this.basket.has(passenger.id)) {
            return this.basket.get(passenger.id);
        }
        return false;
    }
}