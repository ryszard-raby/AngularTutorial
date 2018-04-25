class ClassInterface{
    msg: string = "ClassInterface"

    constructor(){
    }

    printMsg(){
        console.log(this.msg)
    }
}


var message = new ClassInterface();
message.printMsg();

interface Dinosaur{
    name: string;
    age: number;
    color: string;
    date?: Date;
}

let dinosaur: Dinosaur = ({name: 'T-Rex', age: 23, color: 'gray'})

console.log(dinosaur)

let json = '{"name": "Stegosaurus", "age": 14, "color": "green", "date": "2018-04-25"}';
let myDino: Dinosaurr = JSON.parse(json)

console.log(myDino)
