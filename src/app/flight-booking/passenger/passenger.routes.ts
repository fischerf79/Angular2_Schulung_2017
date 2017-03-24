import { PassengerComponent } from './passenger.component';
import { PassengerEditComponent } from './../passenger/passenger-edit/passenger-edit.component';
import { PassengerSearchComponent } from './../passenger/passenger-search/passenger-search.component';
import { Routes, RouterModule } from "@angular/router";

const PASSENGER_ROUTES: Routes = [
    {
        path: "passenger",
        component: PassengerComponent,
        children:[
            {
                path: "passenger-search",
                component: PassengerSearchComponent
            },
            {
                path : "passenger-edit",
                component : PassengerEditComponent
            }
        ]
    }        
];

export const PassengerRoutingModule = RouterModule.forChild(PASSENGER_ROUTES);