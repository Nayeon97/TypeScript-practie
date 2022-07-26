//  특정 값들의 집합을 의미하는 자료형
// 이넘은 별도의 값을 지정하지 않으면 숫자형으로  설정된다! 
// 자동 증가! Nike = 0, Adidas = 1, Sth = 2
enum Shose {
    Nike,
    Adidas,
    Sth
}

let myShoes = Shose.Nike; // (enum member) Shose.Nike = 0 
console.log(myShoes); // 0 

enum Fruit {
    Apple = '사과',
    Banana = '바나나'
}

let myFruit = Fruit.Apple;
console.log(myFruit); // '사과'

//  이넘 활용 사례
enum Answer {
    Yes =  'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
 if(answer = Answer.Yes){
    console.log('정답입니다.');
 }
 if(answer = Answer.No){
    console.log('오답입니다.');
 }
}

askQuestion(Answer.Yes);
// askQuestion('Yes');  error