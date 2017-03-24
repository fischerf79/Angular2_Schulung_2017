import { PassengerService } from './../passenger/passenger-search/passengerService';
import { AbstractPassengerService } from '../../flight-booking/passenger/passenger-search/abstractPassengerService';
import { Component } from '@angular/core';

@Component({
    selector : "passenger",
    templateUrl : "./passenger.component.html",
    providers: [
      {provide: AbstractPassengerService, useClass: PassengerService }  
    ]
})
export class PassengerComponent {
    constructor() {}
}