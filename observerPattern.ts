interface iObservable {
    subscribe : Function;
    unsubscribe : Function;
    publish : Function;
}          

class Observerble implements iObservable {

    private subscribers : any [] = new Array () ;

    public subscribe(cb){
        this.subscribers.push(cb);
        console.log(`${cb.name} has been subscribed! `);
    }

    public unsubscribe(cb){
        this.subscribers = this.subscribers.filter((e1) => {
            return e1 != cb ;
        });
    }

    public publish(data){
            this.subscribers.forEach((subscriber) => {
                subscriber(data);
            });
    }
} 

class Observer1 {
    constructor(data){
        console.log(`Here is the published message via Observer1 ${data}`);
    }
}

class Observer2 {
    constructor(data){
        console.log(`Here is the published message via Observer2 ${data}`);
    }
}

class MyObj extends Observerble{
    public publish(data){
        super.publish(data);
        console.log("I can then do whatever in MyObj");
    }
}

const observable = new Observerble();
observable.subscribe(Observer1);
observable.subscribe(Observer2);
observable.publish("Broadcast!!!!");
observable.unsubscribe(Observer1);
observable.publish("Broadcast after Observer1 unsubscribed");

const myObj = new MyObj();
myObj.subscribe(Observer1);
myObj.publish("Publishing from myObj");
