// 변수

// document.write("외부 스크립트 방법")

// console.log("print와 같은 역할");

// 1. var
// var 키워드로 선언한 변수명은 중복 선언 가능
var num = 10 + 20;
var num =50;

/* var 동작 설명 
메모리에 num이라는 변수 공간을 생성
10+20 표현식의 평가 결과 할당
num 공간 재생성 -> 기존 할당된 데이터 사라지고 50 할당
덮어쓰기 var 방식은 매우 위험하므로 let 키워드로 사용하기 */

// 2. var와 let
/* var는 호이스팅이 일어나고, let은 호이스팅이 일어나지 않는다. */
console.log(host_var);
var host_var = 10; // undefined
// 변수가 이미 선언된 상태고 출력할 값이 없다 (호이스팅됨 : 선언이 최상위로 올라옴)

/*
console.log(host_let);
let host_let =20; 
// 할당은 원래 자리에 있음. 호이스팅되지 않음(변수가 정의되지 않음)
*/

// 3. let
let num_2 = 10;
num_2 = 30; // 재할당 가능
console.log(num_2);

// 4. const
/*
const num_3 = 10;
num_3 = 30; // 재할당 불가
console.log(num_3); 
*/

// 5. 객체
// 기본 자료형을 제외한 자바스크립트 대부분의 데이터와 자료구조는 객체임
// 객체에서 파생되는 자료형 종류 : 배열, 객체 리터럴, 함수

// 1) 배열
// 여러개의 데이터를 정의할 수 있다.
let studentScore = [80, 70, 90, 60]; //국어, 영어, 수학, 과학

console.log(studentScore[0]);

// 2) 객체 리터럴
// 객체를 정의하는 가장 간단한 방법 {키 : 값}
let studentScore_l = {
    koreanScore : 80,
    mathScore : 90,
    englishScore : 100,
};
// 인덱스접근 방법
console.log(studentScore_l.englishScore);
console.log(studentScore_l["englishScore"]);



