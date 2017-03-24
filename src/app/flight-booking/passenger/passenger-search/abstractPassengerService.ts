import { Observable } from 'rxjs/Observable';
import { Passenger } from '../../../model/passenger';

export abstract class AbstractPassengerService { 
    foundPassengers: Array<Passenger>;
    basket: Map<number, boolean>;

    abstract find(name: string): void;
    abstract save(passenger: Passenger): Observable<Passenger>;
}