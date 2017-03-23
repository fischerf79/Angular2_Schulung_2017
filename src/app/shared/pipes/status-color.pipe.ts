import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
    name: "statusColor",
    pure: true
})
export class StatusColorPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        
        let color: string = "";

        switch(value) {
            case "A":
                color = "orange";
                break;
            case "B":
                color = "blue";
                break;
            case "C":
                color = "green";
                break;
            default:
                color = "red";
                break;
        }

        return color;
    }
}