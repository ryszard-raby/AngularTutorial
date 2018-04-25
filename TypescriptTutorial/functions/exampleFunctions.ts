class ExampleFuction {
    msg: string = 'Hello world';
    
    showMsg(): void{
        console.log(this.msg);
    }

    hello(): string{
        return 'hello function';
    }

    arrg(message: string){
        console.log(message);
    }

    arrg2(message: string, message2?: string, message3 = 'rrrw'){
        console.log(message + ' ' + message2 + ' ' + message3);
    }

    fatArrow = () => console.log('fatArrow');
    fatArrowArrg = message => console.log('hello ' + message)
    fatArrowReturn = (message: string): string => {return message + ' return string'}
}

var example = new ExampleFuction();
example.showMsg();
example.arrg('wrrr');
example.arrg2('wrrr');
example.fatArrow();
example.fatArrowArrg('anonim')
console.log(example.fatArrowReturn('fatArrow'));


class Calculate {
    sum = (a:number, b:number) => {return a + b;}
}

var calc = new Calculate();
console.log(calc.sum(2,5));