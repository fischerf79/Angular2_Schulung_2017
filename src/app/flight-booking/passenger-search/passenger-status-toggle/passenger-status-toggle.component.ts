import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: "passenger-status-toggle",
    templateUrl: "./passenger-status-toggle.component.html"
})
export class PassengerStatusToogleComponent {
    
    @Input() public status: string; 
    @Output() public statusChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {        
    }

    public setNexStatus(): void {
        switch(this.status) {
            case "A":
                this.status = "B";                
                break;
            case "B":
                this.status = "C";
                break;
            case "C":
                this.status = "A";
                break;
            default:
                break;
        }
        this.statusChange.next(this.status);
    }
}