// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10); // 10
// logText('하이'); // 문자열 하이
// logText(false); // 진위값 true

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

//ogText<string>('하이');

// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
function logText(text: string){
    console.log(text);
    return text;
}

function logNumber(num: number){
    console.log(num);
    return num;
}

logText('a');
const number = logNumber(10);

// 기존 타입 정의 방식과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점

function unionLogText(text: string | number){
    console.log(text);
    return text;
}

const a = unionLogText('a');
// a.split // Property 'split' does not exist on type 'number'
unionLogText(10);

//제네릭의 장점과 타입 추론에서의 이점
function genericeLogoText<T>(text: T):T{
    console.log(text);
    return text;
}

const genericeString = genericeLogoText<string>("나연");
genericeString.split('');
genericeLogoText<number>(2);
genericeLogoText<boolean>(true);

// 함수를 정의할 때 타입을 비워놓고, 함수를 호출할 시점에  타입을 정의하는 방식 => 제네릭! 
//  타입을 추론해서 반환값까지 ! 

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = {
//     value: 'abc',
//     selected: false
// };

interface Dropdown<T>{
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false}