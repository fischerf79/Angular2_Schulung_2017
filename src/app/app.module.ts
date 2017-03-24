import { PassengerModule } from './flight-booking/passenger/passenger.module';
import { AppRoutesModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [        
      BrowserModule,
      HttpModule,        
      FlightBookingModule,
      PassengerModule,
      AppRoutesModule
  ],
  declarations: [
        AppComponent,
        HomeComponent
  ],  
  providers: [    
     //{provide: AbstractPassengerService, useClass: AnonymousPassengerService }
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [
        AppComponent
    ] 
})
export class AppModule {   
}
