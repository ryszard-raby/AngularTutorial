class ThisProblem{
    msg: string = 'hello';

    printFunction(){
        return function(){
            console.log(this.msg)
        }
    }

    printFunction2(){
        return () => {
            console.log(this.msg)
        }
    }
} 

var problem = new ThisProblem();
var run = problem.printFunction2();
run();  