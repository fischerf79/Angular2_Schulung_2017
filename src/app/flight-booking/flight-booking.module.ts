import { FlightSearchComponent } from './flight/flight-search/flight-search.component';
import { PassengerRoutingModule } from './passenger/passenger.routes';
import { PassengerModule } from './passenger/passenger.module';
import { FlightBookingRoutesModule } from './flight-booking.routes';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [        
        BrowserModule,
        FormsModule,
        SharedModule,
        FlightBookingRoutesModule        
    ],
    declarations: [ 
        FlightSearchComponent               
    ],
    providers: [
        
    ],
    exports: [        
    ]
})
export class FlightBookingModule {

}