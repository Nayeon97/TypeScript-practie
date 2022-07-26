// function Person(name, age) {
//     this.name = name;
//     this.age= age;
// }

class Person {
    constructor(name, age){
        console.log("생성 되었습니다.")
        this.name = name;
        this.age = age;
    }
}

let gilDong = new Person('세호', 30); // 생성 되었습니다. 
console.log(gilDong); 
//  Person {name: '세호', age: 30}
// age: 30
// name: "세호"


// 프로토타입과 클래스와의 관계
