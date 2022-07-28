// 타입 추론  기본 
var b= 10;

function getC(a = 10)  {
    var c = 'hi';
    return a + c ;
}

// 10 + '10'  => 1010

// 1. 인터페이스와 제네릭을 이용한 타입 추론 방식
// interface Example<T> {
//    value: T;
//    title: string;
// }

// var exampleItem: Example<string> = {
//    value: 'abc',
//    title: 'hello'
// }

// 2. 복잡한 구조에서의 타입 추론 방식
interface Example<T> {
    value: T;
    title: string;
 }
 

 interface DetailExample<K> extends Example<K>{
   description: string;
   tag: K;
 }
 
 var detailedExampleItem: DetailExample<string> = {
    title: 'abc',
    description: 'hello',
    value: 'a',
    tag: 'a'
 }

 // 가장 적절한 타입! Best Common Type
 var arr = [1,2,true, true, 'a'];
// var arr: (string | number | boolean)[]
