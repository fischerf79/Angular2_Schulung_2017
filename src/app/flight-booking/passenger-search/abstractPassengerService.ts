import { Observable } from 'rxjs/Observable';
import { Passenger } from '../../model/passenger';

export abstract class AbstractPassengerService {
    abstract find(name: string): Observable<Array<Passenger>>;
    abstract save(passenger: Passenger): Observable<Passenger>;
}