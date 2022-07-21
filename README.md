# TypeScript


    마지막 프로젝트때 에러를 조금 더 사전에 예방할 수 있다는 정보를 듣고 TS 를 쓰고 싶었지만,    
    개발 일정 등을 고려해서 프로젝트를 완성 후에 마이그레이션하는 방향으로 계획하였다.     

[TypeScript란? ](#☑️-typescript-란)    
[장점](#☑️-장점)    
[기본 타입](#☑️-기본-타입-12가지)   
[함수](#☑️-함수)



## ☑️ TypeScript 란?   
 자바스크립트에 타입을 부여한 언어다.   


## ☑️ 장점?  

1. 에러를 사전에 미리 예방할 수 있다. 

2. 코드를 작성할 때 개발 툴의 기능을 최대로 활용할 수 있다. 
타입에 대한 자동 추론으로 각 타입에 대한 API 를 자동 완성을 제공한다.

3. 정적 타입 언어
자바스크립트는 동적 타입의 인터프리터 언어로 런타임에서 오류를 발견할 수 있지만,   
타입스크립트는 정적 타입의 컴파일 언어이기 때문에, 코드 작성 단계에서 타입을 체크하여 오류를 확인할 수 있다.      
그리고 미리 타입을 결정하기 때문에 실행 속도가 매우 빠르다.    



## ☑️ 기본 타입 (12가지)
1. String
2. Number
3. Boolean

```js
// String
let str: string = 'nayeon';

// Number
let num: number = 10;

// Boolean
let isTrue: boolean = false;

```

4. Object
     - interface : extends  
        - 여러 번 정의 가능 / 병합 가능 
     - type : & 
        - 여러 번 정의 불가능 

```js
// Object
let obj: object = {
    name: 'Tteokbokki',
    price: '12000'
}

// Object - 1. interface
interface FoodInfo1 {
    name: string,
    price: number
}

let obj2: FoodInfo1 = {name: 'Tteokbokki', price: '12000' }

// interface 확장 : extends
interface FoodNewInfo extends FoodInfo1 {
  subMenu: string
};

let obj2New: FoodNewInfo = {name: 'Tteokbokki', price: '12000', subMenu: 'none' }

// Object - 2. type
type FoodInfo3 {
    name: string,
    price: number
}

let obj3: FoodInfo3 = {name: 'Tteokbokki', price: '12000' }

// type 확장 : &
type FoodNewInfo3 = FoodInfo3 & {subMenu: string};

let obj3New: FoodNewInfo3 ={name: 'Tteokbokki', price: '12000', subMenu: 'none' }
```

5. Array
```js
let arr: number[] = [1,2,3];
let arr: Array<number> = [1,2,3];
```
6. Tuple
- 배열의 길이 고정 / 각 요소의 타입이 지정되어 있는 배열 형식.
- 정의하지 않은 타입, 인덱스로 접근할 경우 오류 발생
```js
let arr: [string, number] = ['hi', 10];
```
7. Enum  
- 특정 값(상수)들의 집합
- 인덱스 번호로도 접근 가능
- 이넘의 인덱스를 사용자 편의로 변경하여 사용 가능.
```js
enum Avengers1 { Capt, IronMan, Thor }
let hero: Avengers2 = Avengers.Capt;
let hero: Avengers3 = Avengers[0];

enum Avengers4 { Capt = 2, IronMan, Thor }
let hero: Avengers5 = Avengers[2]; // Capt
let hero: Avengers6 = Avengers[4]; // Thor
```
8. Any
- 모든 타입에 대해 허용
```js
let str: any = 'hi';
let num: any = 10;
```
9. Void
- 변수에 `undefined` 와 `null`만 할당, 함수에는 반환 값 설정 `X`   
(= 함수에 반환 값이 없을 때 반환 타입을 표현하기 위해 주로 사용.)
```js
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
}
```
10. Null
11. Undefined
12. Never
- 절대 발생할 수 없는 타입을 나타냄.   
- 에러를 발생시킬 때 사용
```js
function neverEnd(): never {
  while (true) {

  }
}
```

## ☑️ 함수
- 함수의 반환 값에 타입을 정하지 않을 때는 `void` 사용.
- ? 를 사용하면 매개변수의 갯수만큼 인자를 넘기지 않아도 된다.
```js
function sum(a: number, b?:number):number {
  return a+b;
}
```

+ ES6 Rest 문법
```js
function sum(a: number, ...nums: number[]): number {
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}
```
