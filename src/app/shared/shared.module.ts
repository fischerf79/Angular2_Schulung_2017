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
        StatusColorPipe
    ],
    providers: [

    ],
    exports: [
        StatusPipe,
        StatusColorPipe
    ]
})
export class SharedModule {

}