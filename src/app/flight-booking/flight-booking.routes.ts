import { PassengerEditComponent } from './passenger/passenger-edit/passenger-edit.component';
import { FlightSearchComponent } from './flight/flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger/passenger-search/passenger-search.component';
import { Routes, RouterModule } from "@angular/router";

const FLIGHT_BOOKING_ROUTES: Routes = [   
    {
        path: "flight-search",
        component: FlightSearchComponent
    }
];

export const FlightBookingRoutesModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);