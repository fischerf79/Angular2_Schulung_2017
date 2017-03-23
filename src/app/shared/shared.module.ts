import { ValidationErrorComponent } from './validation/validation-error.component';
import { SearchNameValidationDirective } from './validation/searchName.validation.directive';
import { BonusMileValidationDirective } from './validation/bonus.mile.validation.directive';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StatusPipe,
        StatusColorPipe,
        BonusMileValidationDirective,
        SearchNameValidationDirective,
        ValidationErrorComponent
    ],
    providers: [

    ],
    exports: [
        StatusPipe,
        StatusColorPipe,
        BonusMileValidationDirective,
        SearchNameValidationDirective,
        ValidationErrorComponent
    ]
})
export class SharedModule {

}