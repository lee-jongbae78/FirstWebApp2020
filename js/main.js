const name ="ljb";
//console.log(name);

const days = [ "mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//console.log(days[2]);

const ljbInfo = {name:"leejongbae", age:43, kids : ["first", "second", "third"]}; //array, object 혼합
//console.log(ljbInfo.kids[2]);

function sayHello(a){
    return `${a} hi!!!`;
}

const greetLjb = sayHello("LeeJB");

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    }
}

const _plus = calculator.plus(10, 5);
const _minus = calculator.minus(20, 3);

const title = document.querySelector("#title");
console.log(title);
title.innerHTML = name +"님 학습을 시작합니다.";
title.style.color = "red";
document.title= "title changed!";

