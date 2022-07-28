// 타입 호환 - 특정 타입이 다른 타입에 잘  맞는지를 의미한다! 

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var d: Developer;
var p: Person

// 함수

var add = function(a: number) {
   //...
}

var sum = function(a:number, b: number){
    //...
}

sum = add;

// 제네릭 
interface Empty<T>{
    //...
}

var empty1: Empty<string>;
var empty0: Empty<number>;

