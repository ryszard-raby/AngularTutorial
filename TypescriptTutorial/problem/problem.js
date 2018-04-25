var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.msg = 'hello';
    }
    ThisProblem.prototype.printFunction = function () {
        return function () {
            console.log(this.msg);
        };
    };
    ThisProblem.prototype.printFunction2 = function () {
        var _this = this;
        return function () {
            console.log(_this.msg);
        };
    };
    return ThisProblem;
}());
var problem = new ThisProblem();
var run = problem.printFunction2();
run();
