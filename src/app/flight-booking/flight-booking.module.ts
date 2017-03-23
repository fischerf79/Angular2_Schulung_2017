import { PassengerStatusToogleComponent } from './passenger-search/passenger-status-toggle/passenger-status-toggle.component';
import { PassengerCardComponent } from './passenger-search/passenger-card/passenger-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerService } from './passenger-search/passengerService';
import { AbstractPassengerService } from './passenger-search/abstractPassengerService';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [        
        BrowserModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        PassengerSearchComponent,
        PassengerCardComponent,
        PassengerStatusToogleComponent
    ],
    providers: [
        {provide: AbstractPassengerService, useClass: PassengerService }
    ],
    exports: [
        PassengerSearchComponent        
    ]
})
export class FlightBookingModule {

}