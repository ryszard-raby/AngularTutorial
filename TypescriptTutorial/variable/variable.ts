class Variables{
    printNumbers(){
        let i = 100;
        for (let i = 0; i < 3; i++){
            console.log(i);
        }
        console.log(i);
    }

    showConst(){
        const num = 100;
        console.log(num);
    }
}

let variable = new Variables();
variable.printNumbers();