interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {name: 'Tony', age: 22, skill: 'TS'}
}

var tony = introduce();
//console.log(tony.skill); // 유니온 타입을 사용하게 되면, 공통된 속성만 접근 가능!  -> 즉 name ! 

// 타입 단언을 통해 위의 문제 해결! 
if((tony as Developer).skill){
   let skill = (tony as Developer).skill;
   console.log(skill);
} else if ((tony as Person).age){
    let age = (tony as Person).age;
    console.log(age);
}

// 타입 단언으로도 해결가능하지만 위와 같이 매우 복잡.. 
// 타입 가드를 통해 해결! 

// is해당타입
// 타입 가드 정의 
function isDeveloper(target: Developer | Person): target is Developer {
   return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)){
   console.log(tony.skill);
}
else{
    console.log(tony.age);
}