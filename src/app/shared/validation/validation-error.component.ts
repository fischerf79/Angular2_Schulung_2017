import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:"validation-error",
    templateUrl: "./validation-error.component.html"
})
export class ValidationErrorComponent implements OnInit {
    
    @Input() public errors: any;

    public ngOnInit(): void {
        console.debug("validation errors: ", this.errors);
    }   
}