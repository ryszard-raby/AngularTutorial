var ClassInterface = /** @class */ (function () {
    function ClassInterface() {
        this.msg = "ClassInterface";
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var message = new ClassInterface();
message.printMsg();
var dinosaur = ({ name: 'T-Rex', age: 23, color: 'gray' });
console.log(dinosaur);
var json = '{"name": "Stegosaurus", "age": 14, "color": "green", "date": "2018-04-25"}';
var myDino = JSON.parse(json);
console.log(myDino);
