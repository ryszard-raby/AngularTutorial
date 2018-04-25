class Variables{
    printNumbers(){
        let i = 100;
        for (let i = 0; i < 3; i++){
            console.log(i);
        }
        console.log(i);
    }
}

let variable = new Variables();
variable.printNumbers();