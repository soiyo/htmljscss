// 함수
// 1. 함수란, 어떤 목적을 가지고 작성한 코드를 모아둔 블록문

// 3단 구구단을 실행하는 반복문
for (let i = 1; i <= 9; i++){
    console.log(`3 * ${i} = ${3*i}`);
}
let dan_num_1 = 9;
let dan_num_2 = 8;

gugudan(dan_num_1);
gugudan(dan_num_2);
// gugudan(dan)에서 dan은 인수이다. 

// 구구단 여러단을 출력하고 싶어요
function gugudan(dan){
    for (let i = 1; i <= 9; i++){
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
    console.log("\n")    
}

// 2. 함수를 정의하는 방법
// function 식별자(){}

// 2.2 함수 표현식으로 함수 정의
// 함수는 객체에서 파생된 자료형이다. 자바스크립트에서 자료형은 변수에 할당 가능하다.
// 함수를 변수에 할당한 정의 방법을 함수 표현식이라고 한다.

// 함수에 식별자가 있으면 네이밍 함수, 없으면 익명 함수이다.
// const 변수명 = function () {}; // 익명 함수
// const 변수명 = function 식별자() {}; //  네이밍 함수

// 2.3 화살표 함수로 함수 정의
// 익명 함수로만 정의 가능 -> 함수 호출하려면 변수에 함수 할당해야 함(함수 표현식 사용)
// () => {}


let dan = 1;
const gugudan_arrow = () => {
    for (let i = 1; i <= 9; i++){
        console.log(`${dan} * ${i} = ${dan*i}`);
        // 함수 내에서 dan은 매개변수이다.
        // 매개변수는 개수 제한이 없어 여러개를 생성할 수 있지만 지저분해 보일 수 있으므로 최소한으로 정의한다.
    }
}

gugudan_arrow();

// 3. 함수 기능 확장하기
// 3.3 return 문
// 함수 호출시, 데이터 전달에 매개변수 정의가 필요하듯이 함수 외부로 데이터 반환시 return문 사용
function sum(num1, num2){
    let result = num1 + num2;
    console.log("\n"+ "inner: " + result + "\n");
}
sum(1, 2);

function sum_2(num1, num2){
    let result = num1 + num2;
    return result;
}
const result = sum_2(3, 4);
console.log("inner: " + result + "\n");

function sum_3(num1, num2){
    let result = num1 + num2;
    // return result;
}
const result_2 = sum_3(4, 5);
console.log("inner: " + result_2 + "\n"); // return 문 써주지 않으면 반환값 없으므로 undefined

// 4. 함수의 특징 이해
// 4.1. 스코프
// 함수 내부 변수를 외부에서 참조할 수 없는 이유가 무엇일까?

// 스코프 : 변수, 함수같이 참조 대상 식별자를 찾아내기 위한 규칙
// 자바스크립트에서 스코프는 함수 스코프 방식, 블록 스코프 방식에 따라 전역 스코프, 지역 스코프 참조 범위가 달라짐.

// 함수 스코프
// 함수에서 정의한 블록문만 스코프의 유효범위로 인정
// 함수 내부는 지역 스코프, 함수 외부는 전역 스코프 영역이 됨
let a = 10; // 전역 스코프
function sum_4(){
    console.log(`함수 내부 : ${a}`); 
    // 전역 스코프는 스코프와 상관없이 모두 참조 가능
}
sum_4();
console.log(`함수 외부: ${a}`);

function sum_5(){
    let b = 11; // 함수 내부에 b 선언
    console.log("\n"+`함수 내부 : ${b}`+"\n");
}
sum_5();
// console.log(`함수 외부 : ${b}`); //함수 내부에 선언한 b를 참조시 에러발생

// 블록 스코프
// {}로 구성된 블록문 기준으로 스코프의 유효범위 나눔
// let, const 키워드로 선언한 변수에 한해서만 적용됨

let c = 10;
{
    let d =20;
    console.log(`코드 블록 내부 c : ${c}`);
    console.log(`코드 블록 내부 d : ${d}`);
}
console.log(`코드 블록 외부 c : ${c}`);
// console.log(`코드 블록 외부 d : ${d}`); // 내부 스코프는 블록문 내부에서만 참조가능

// 그러나, var의 경우는?
// let, const에서만 블록스코프를 지원하므로 var 키워드로 작성시 참조 오류가 발생하지 않는다.
// var 키워드는 함수 스코프 방식으로만 스코프를 나누기 때문에 변수 e, f 모두 전역 스코프에서 선언한것과 동일함

var e= 10;
{
    var f =20;
    console.log(`코드 블록 내부 e: ${e}`);
    console.log(`코드 블록 내부 f : ${f}`);
}
console.log(`코드 블록 외부 e: ${e}`);
console.log(`코드 블록 외부 f : ${f}`); // 내부 스코프는 블록문 내부에서만 참조가능

// 참조 우선순위
// let, const 키워드는 같은 식별자의 중복 선언 불가능 -> 정확히는 같은 스코프 영역에서 중복 선언 불가능함.
let g = 10;
const h = 20;
function sum_6(){
    let g = 50;
    const h =60;
    console.log(`함수 내부 g : ${g}`);
    console.log(`함수 내부 h : ${h}`);
}
sum_6();
console.log(`함수 외부 g : ${g}`);
console.log(`함수 외부 h : ${h}`);
// 즉, 같은 식별자를 가진다면 let, const는 같은 지역 스코프의 식별자를 우선으로 참조함
// 같은 지역스코프에서 참조할 식별자를 찾지 못하면 전역 스코프를 다음으로 찾게 됨.


// 4.2 함수 호이스팅
// 호이스팅 : 코드를 선언과 할당으로 분리해 선언부를 자신의 스코프 최상위로 끌어올리는 것
console.log(num3);
var num3 = 10;

var num4;
console.log(num4);
num4 =10;

// 호이스팅은 var 키워드로 선언한 변수에만 적용됨 (let, const 키워드로 선언한 변수에는 적용되지 않음.)
// 함수는 호이스팅 됨

// 함수 선언식일 때 호이스팅 가능
// 호이스팅은 선언부를 스코프 최상위로 올리기 때문에 오류 나지 않음
printHello();
function printHello(){
    console.log("Hello!");
}

// 함수 표현식일 때 호이스팅 불가
// printBye는 함수가 아니라는 (변수인) 오류 발생
/*
printBye();
*/
console.log(`호이스팅 되는 var 키워드 : ${printBye}`);
var printBye = function printBye(){
    console.log("Bye");
}

// console.log(printBye);
printBye();

// printGood();
// 함수 표현식은 호이스팅 불가
var printGood = () => {
    console.log("Good");
}

printGood();

// 5. 즉시 실행 함수
// 함수를 정의하면서 동시에 실행하는 함수
// 전역 스코프에 선언한 함수는 프로그램 종료되기까지 사라지지 않음 (일반적으로 전역 스코프에 함수 선언)
// (function(){})();

// const 키워드에 할당도니 함수는 재할당 불가능함.
// 어차피 한 번만 사용하는 함수여서 init 식별자 더이상 사용할 수 없음 = 전역 스코프가 오염되었다.
const init = function(){
    console.log("init");
}();

// 오염 해결 -> 즉시 실행함수로 함수 정의하면 전역 스코프 오염 방지 가능
(function init_2(){
    console.log("init2")
})();
// 즉시 실행함수는 한 번 실행되고 나면 메모리에 데이터가 남아있지 않아 init_2 식별자는 한 번도 사용되지 않은 것처럼 인식됨

let i = 1;
let j = 2;
(function sum(a,b){
    console.log(a+b);
})(i, j);





