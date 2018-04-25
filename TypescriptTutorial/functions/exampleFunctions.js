var ExampleFuction = /** @class */ (function () {
    function ExampleFuction() {
        this.msg = 'Hello world';
        this.fatArrow = function () { return console.log('fatArrow'); };
        this.fatArrowArrg = function (message) { return console.log('hello ' + message); };
        this.fatArrowReturn = function (message) { return message + ' return string'; };
    }
    ExampleFuction.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFuction.prototype.hello = function () {
        return 'hello function';
    };
    ExampleFuction.prototype.arrg = function (message) {
        console.log(message);
    };
    ExampleFuction.prototype.arrg2 = function (message, message2, message3) {
        if (message3 === void 0) { message3 = 'rrrw'; }
        console.log(message + ' ' + message2 + ' ' + message3);
    };
    return ExampleFuction;
}());
var example = new ExampleFuction();
example.showMsg();
example.arrg('wrrr');
example.arrg2('wrrr');
example.fatArrow();
example.fatArrowArrg('anonim');
console.log(example.fatArrowReturn('fatArrow'));
var Calculate = /** @class */ (function () {
    function Calculate() {
        this.sum = function (a, b) { return a + b; };
    }
    return Calculate;
}());
var calc = new Calculate();
console.log(calc.sum(2, 5));
