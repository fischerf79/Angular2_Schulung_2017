import { PassengerRoutingModule } from './passenger.routes';
import { PassengerEditComponent } from './../passenger/passenger-edit/passenger-edit.component';
import { PassengerComponent } from './passenger.component';
import { PassengerService } from './../passenger/passenger-search/passengerService';
import { PassengerStatusToogleComponent } from './../passenger/passenger-search/passenger-status-toggle/passenger-status-toggle.component';
import { PassengerCardComponent } from './../passenger/passenger-search/passenger-card/passenger-card.component';
import { PassengerSearchComponent } from './../passenger/passenger-search/passenger-search.component';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbstractPassengerService } from "../passenger/passenger-search/abstractPassengerService";
@NgModule({
    imports :[
        BrowserModule,
        FormsModule,
        SharedModule,
        PassengerRoutingModule
    ],
    declarations: [
        PassengerSearchComponent,
        PassengerEditComponent,
        PassengerCardComponent,
        PassengerStatusToogleComponent,
        PassengerComponent,
        PassengerSearchComponent,
        PassengerEditComponent
    ],
    providers: [        
    ],
    exports: [
        PassengerComponent,
        PassengerSearchComponent,
        PassengerEditComponent
    ]
})
export class PassengerModule {

}