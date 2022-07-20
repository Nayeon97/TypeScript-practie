// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function sum2(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식 ( 가장 기본)
function sum3(a: number, b: number): number {
  return a + b;
}

sum3(10, 20, 30); // 불필요한 인자값에 대한 error 발생

// 함수의 옵셔널 파라미터
function log(
  a: string,
  b?: string,
  c?: string
): {
  // b, c 는 필수인자 X
};
