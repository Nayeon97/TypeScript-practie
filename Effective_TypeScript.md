## Effective_TypeScript 

1. & : 교집합 
```ts
interface Person {
 name: string;
}

interface Lifespan {
 brith: Date;
 death?: Date;
}

type PersonSpan = Person & Lifespan;
```
2. extends 
```ts
interface Person {
 name: string;
}

interface PersonSpan extends Person {
 brith: Date;
 death?: Date;
}

// or

function getKey<K extends string>(val: any, key: K){
//...
}
```
3. 타입 단언보다 타입 선언 사용.
4. 함수의 매개변수에 타입 선언을 하는 것보다 함수 표현식 전체 타입을 정의하는 것이 더 간결하고 안전! 🛟
   - 반복되는 함수 시그니처는 하나의 함수 타입으로 통합.
   ```ts
    function add(a: number, b: number) { return a + b; }
    function sub(a: number, b: number) {
    return a + b;
    }
    // 함수 타입 통합 
    type BinaryFn = (a: number, b: number) => number;
    const add: BinaryFn = (a, b) => a + b;
    const sub: BinaryFn = (a, b) => a - b;
   ```
 5. type, interface 차이점
    - 공통점 : 인덱스 사용 가능 / 함수 타입 정의 가능 / 제네릭 사용 가능 / 인터페이스는 타입 확장 가능 (단, interface 조건있음.) 
             타입은 인터페이스 확장 가능 / 
    - 차이점 : 인터페이스는 유니온 타입 X. (type AorB = 'a' | 'b' )  / augment 가능 
      ```ts
      interface IState {
       name: string;
       capital: string;
      }
      
      interface IState{
       population: number;
      }
      
      const name: IState = {name: ~, capital: ~ , populatio: ~}
      ```
      
      ? 어느 것을 사용해야 할지? 둘 중에 하나 "일관되게" 사용하는 것이 중요! 
        API 에 관한 타입 선언은 augment 가능한 interface 사용! => ( 프로젝트 내부적으로 사용되는 타입에 선언 병합 발생하는 것은 잘못된 설계)

6. 코드 중복 줄이자.
   반복되는 함수 타입 통합 / interface 확장 기능 / 
```ts
   type PersonWithBirthDate = Person & {birth: Date};
```
```ts
  interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
};

// 1단계: State 인덱싱으로 속성의 타입에서 중복을 제거할 수 있다.

type TopNavState = {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
};

// 2단계: 매핑된 타입 사용 => 매핑된 타입 : 배열의 필드를 루프 도는 것 
type TopNavState = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
};

// type Pick<T, K> = {[k in K]: T[k]};
// 완성
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>
```



 
   
        
        
      
             
             
