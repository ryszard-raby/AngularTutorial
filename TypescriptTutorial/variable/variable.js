var Variables = /** @class */ (function () {
    function Variables() {
    }
    Variables.prototype.printNumbers = function () {
        var i = 100;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            console.log(i_1);
        }
        console.log(i);
    };
    Variables.prototype.showConst = function () {
        var num = 100;
        console.log(num);
    };
    return Variables;
}());
var variable = new Variables();
variable.printNumbers();
