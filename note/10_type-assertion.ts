// 타입 단언 (type assertion)

let q;
let w = 10; // number 로 추론

let e = q as string; 
// ts 보다 개발자가 더 타입을 잘 알고 잇다!
// ts 서버가 추론 X -> 개발자가 설정한 걸로! 
// DOM API 에서 가장 많이 쓰임! 

var div = document.querySelector('div'); 


