interface FoodInfo {
    name: string,
    price: number
}

// 변수에 인터페이스 활용
let foodInfo: FoodInfo = {
    name: 'Tteokbokki',
    price: 12000
}

//함수에 인터페이스 활용 -> 많이 사용!
function getFood(food: FoodInfo) {
    console.log(food)
}

const food = {
    name: 'Tteokbokki',
    price: 12000
}

getFood(food); // Property 'price' is missing in type '{ name: string; }' but required in type 'FoodInfo'.

// 함수의  구조(스펙)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum= function (a: number, b: number): number {
  return a + b;
};

// 인덱싱 방식을 정의하는 인터페이스 
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] ; // 'a'

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary { 
 [key: string] : RegExp;
}

let obj: StringRegexDictionary = {
    // cssFile : 'css'  // error
    cssFile : /\.css$/,
}

//obj['cssFile'] = '1' //Type 'string' is not assignable to type 'RegExp'

// 인터페이스 확장 (상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

let capt: Developer = {
   language: 'react'
} // Type '{ language: string; }' is missing the following properties from type 'Developer': name, age