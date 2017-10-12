
import {human} from "./inheritance";
class teacher extends human{

    constructor(name:string){
        super(name);
    }

    walk(distance = 0){
        console.log("Walking...");
        super.walk(distance);
    }

    teach(lang:string){
        console.log("Teaching");
    }

    
}

class swimmer extends human{

    constructor(name:string){
        super(name);
    }

    swim(distance = 0){
        console.log("Swimming...");
        super.swim(distance);
    }
}


export { teacher };
export{swimmer};