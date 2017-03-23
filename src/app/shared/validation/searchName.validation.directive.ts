import { AbstractControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';
import { Validators } from '@angular/forms';

@Directive({
    selector: "[val-name]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SearchNameValidationDirective,
            multi: true
        }
    ]
})
export class SearchNameValidationDirective implements Validators {
    
    public validate(c: AbstractControl): any {
        let error: any = {
            message: "invalid",
            currentValue: c.value            
         };
        
        let str: string = c.value;        
        if (!str) return error;
        let ok = str.match(/^[a-zA-Z\-]*$/); 
        if (ok) { 
            return {};
        }
        return error;
    }
    
}