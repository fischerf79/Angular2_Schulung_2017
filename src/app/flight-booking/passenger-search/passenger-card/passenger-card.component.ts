import { Passenger } from './../../../model/passenger';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    templateUrl : "./passenger-card.component.html",
    selector: "passenger-card"      
})
export class PassengerCardComponent {
    @Input() public passenger: Passenger;
    @Input() public selected: boolean;
    @Output() public selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();


    public select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    public deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }
}   