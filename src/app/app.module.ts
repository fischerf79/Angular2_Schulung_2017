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
      FlightBookingModule       
  ],
  declarations: [
        AppComponent
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
