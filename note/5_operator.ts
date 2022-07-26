function logMessage(value: string) {
    console.log(value)
}

logMessage('hello');
// logMessage(100);  error 

function logMessage2(value: string | number){
    console.log(value)
}

logMessage2('hello');
logMessage2(100);


let nayeon: string | number | boolean;

function typeGuard(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

typeGuard('hello');
typeGuard(100);
// typeGuard(false); 


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // someone.skill , someone.age -> 유니온 타입에서는 접근 X
   // typeGuard 를 이용하여 추가적인 처리를 할 경우 -> 해결!
    someone.name; // 공통 속성만 접근 가능. 
}

function askSomeone2(someone: Developer & Person) {
   someone.name;
   someone.skill;
   someone.age; 
   //인터섹션을 이용하면 모든 속성 사용 가능.
   // 하지만 유니온 타입을 자주 사용함! 
}


//  유니온 타입과 인터섹션 타입의 차이점
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});

// askSomeone2({name: '디벨로퍼', age: 100}); // 에러 발생 -> name, age, skill 을 다 넘겨야함.

