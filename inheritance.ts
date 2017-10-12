class human{

    constructor(public name: string){

    }

    walk(distance: number = 5){
        console.log(`${this.name} walked ${distance} m !`);
    }

    swim(distance: number = 0){
        console.log(`${this.name} swam ${distance} m !`);
    }
}

// class teacher7 extends human{

//     constructor(name:string){
//         super(name);
//     }

//     walk(distance = 5){
//         console.log("Teaching...");
//         super.walk(distance);
//     }
// }

// class swimmer extends human{

//     constructor(name:string){
//         super(name);
//     }

//     walk(distance = 400){
//         console.log("Swimming...");
//         super.walk(distance);
//     }

//     swim(){
//         console.log("Swimming...");
//     }
// }

// let hansi = new swimmer("hansi the swimmer");
// let Nyahan = new teacher7("Nyahan the teacher");
// hansi.walk(100);
// //hansi.swim();
// Nyahan.walk(100);

export default human;