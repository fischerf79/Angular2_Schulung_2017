
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "status",
    pure: true
})
export class StatusPipe implements PipeTransform {

    constructor() {
    }

    transform(value: any, ...args: any[]) {
        
        let short: string = "";
        let long: string = "";

        switch(value){
            case "A": 
                short = "SEN";
                long = "Senator";
                break;
            case "B":
                short = "FTL";
                long = "Frequent Traveler";
                break;
            case "C": 
                short = "-";
                long = "Passenger";
                break;
            default: 
                short = long = value;
                break;
        }

        if(args && args.length > 0) {
            if(args[0] == "short") {
                return short;
            }
            return long;
        }
        return value;
    }
}