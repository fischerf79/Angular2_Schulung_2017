
import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validators, AbstractControl } from "@angular/forms";

@Directive({
    selector: "input[bonusMile]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: BonusMileValidationDirective,
            multi: true
        }  
    ]
})
export class BonusMileValidationDirective implements Validators {    

    @Input() bonusMile: number;

    public validate(c: AbstractControl): any {
        if(c.value > this.bonusMile) {
            return {};
        }
        return {
            message: "Under needed bonus miles, you need more flights!",
            currentValue: c.value
        };
    }
}