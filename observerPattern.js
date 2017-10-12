var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Observerble = (function () {
    function Observerble() {
        this.subscribers = new Array();
    }
    Observerble.prototype.subscribe = function (cb) {
        this.subscribers.push(cb);
        console.log(cb.name + " has been subscribed! ");
    };
    Observerble.prototype.unsubscribe = function (cb) {
        this.subscribers = this.subscribers.filter(function (e1) {
            return e1 != cb;
        });
    };
    Observerble.prototype.publish = function (data) {
        this.subscribers.forEach(function (subscriber) {
            subscriber(data);
        });
    };
    return Observerble;
}());
var Observer1 = (function () {
    function Observer1(data) {
        console.log("Here is the published message via Observer1 " + data);
    }
    return Observer1;
}());
var Observer2 = (function () {
    function Observer2(data) {
        console.log("Here is the published message via Observer2 " + data);
    }
    return Observer2;
}());
var MyObj = (function (_super) {
    __extends(MyObj, _super);
    function MyObj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyObj.prototype.publish = function (data) {
        _super.prototype.publish.call(this, data);
        console.log("I can then do whatever in MyObj");
    };
    return MyObj;
}(Observerble));
var observable = new Observerble();
observable.subscribe(Observer1);
observable.subscribe(Observer2);
observable.publish("Broadcast!!!!");
observable.unsubscribe(Observer1);
observable.publish("Broadcast after Observer1 unsubscribed");
var myObj = new MyObj();
myObj.subscribe(Observer1);
myObj.publish("Publishing from myObj");
