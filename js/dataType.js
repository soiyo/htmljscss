// 자료형

// 1. 문자열
let string = "Hello!"; 
string = string + " Welcome to "; // 문자열 연결 가능

console.log(string);

let name = "soiyo";
string = string + `${name}'s ` +"World!"; // 백틱과 ${}를 사용해 변수를 문자열에 넣을 수 있음

console.log(string);

// 2. 숫자형
/* 자바스크립트는 정수, 실수 구분없이 전부 하나의 숫자 자료형으로 취급 */
let num1 = 10;
let num2 = 0.1;

/* 다만, 실수 사용시 부동 소수점 방식으로 표현하면 계산 정확하지 않음 */
num1 = 0.1;
num2 = 0.2;
console.log (num1 + num2);


//3. 논리형
/* true, false */
let boolean1 = true;
let boolean2 = false;


// 4. undefined
/* 변수, 상수를 메모리 공간에 선언시 반드시 공간에 저장할 데이터 할당해야 함 */
/* 할당되지 않을 시 임시 데이터인 undefined 가 할당됨 */
let empty;
console.log(empty)

// 5. null
/* 변수, 상수 선언 후 의도적으로 비워 둘 때 할당 */
empty = null;
console.log(empty)



