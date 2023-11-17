//객체

// 1. 객체란
// 키 : 값 으로 구성된 속성의 집합. {}로 생성 가능(리터럴 방식)
// 보통은 빈 객체가 아니고 속성을 지정한 상태로 생성함.

// 객체는 모든 자료형의 데이터를 값으로 가진다. (배열, 숫자, 논리 데이터, 다른 객체, 함수 ...)
const person_1 = {
    name : ["Hong", "Gildong"],
    age : 20,
    isAdult : true,
};

const person_2 = {
    name : {
        firstName : "Gildong",
        lastName : "Hong",
    },
    age : 20,
    isAdult : true,
    printHello : function(){
        return "hello";
    },
    likes : ["apple", "samsung"],
};

// 2.1 객체 속성에 접근하기
// 배열을 인덱스로 접근하듯이, 객체를 대괄호 연산자와 마침표 연산자로 접근가능하다.

// 대괄호 연산자로 접근
const person_3 = {
    name : "Hong Gildong",
    age : 20,
}
console.log(person_3["name"]); // 대괄호 안에 키를 ""로 감싸 넣는다.
console.log(person_3["age"]);

console.log(person_2["name"]); // 키가 name인 속성에 접근하는데, 이 속성의 값은 객체 리터럴임.
//따라서 다시 대괄호 연산자를 연속적으로 사용해 객체 안의 속성에 접근
console.log(person_2["name"]["lastName"]); //속성값이 배열, 함수일때도 동일하게 적용됨


console.log("마침표 연산자로 접근시")
// 마침표 연산자로 접근
console.log(person_2.name.firstName);
console.log(person_2.likes[0]);
console.log(person_2.printHello());

// 2.2 객체 속성값 변경
person_1.isAdult = false;
console.log(person_1.isAdult);

// 2.3 객체 속성 동적으로 추가하기
// 이미 존재하는 객체에 속성을 추가 (속성에 값을 할당해 접근)
// 해당 속성이 없다면 키:값으로 구성된 새로운 속성 객체에 추가함
const person_4 = {};
console.log(person_4);
person_4.name = "Hong Gildong";
console.log(person_4); 

// 2.4 객체 속성 동적으로 삭제하기
const person_5 = {
    name : "Hong Gildong",
};
delete person_5.name;
console.log(person_5);

// 3. 표준 내장 객체 사용하기

// 3.1 문자열을 다루는 string 객체
const pw = "124";
if (pw.length < 4){ //length 속성은 문자열의 길이를 알아낸다.
    console.log("비밀번호는 최소 4자리 이상 입력해주세요");
}

const email = "test!naver.com";
if (email.includes("@") === false){ //includes()메서드는 특정 문자열을 포함하고 있는지 알려준다.
    console.log("올바른 이메일 형식이 아닙니다.");
}

// 3.2 배열을 다루기 array 객체
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++){ //length속성으로 배열의 요소 개수 (길이)를 구할 수 있다.
    console.log(arr[i]); //배열의 길이만큼 반복문 돌리는 코드
}

// 배열에 데이터 추가하거나 제거
arr.push(50); // 배열의 맨 뒤에 50 추가
console.log(arr);
arr.pop(); // 배열의 맨 뒤 요소 제거
console.log(arr);
arr.unshift(0); // 배열의 맨 앞에 0 추가
console.log(arr);
arr.shift(); // 배열의 맨 앞 요소 제거
console.log(arr);

// 3.3 날짜와 시간을 다루는 Date 객체
// Date 객체에는 날짜 및 시간과 관련있는 메서드가 정의되어 있다.
// Date 객체 메서드만 활용해도 자바스크립트로 날짜, 시간 처리 작업이 매우 간단해진다.

// 인스턴스 생성하여 현재 날짜와 시간 정보기반으로 날짜와 시간 데이터 생성
const date = new Date();
console.log(date);

// 날짜 간격 계산
// getTime() 메서드 활용시 밀리초단위로 시간 변환 가능
const date1 = new Date("2022-12-23");
const date2 = new Date("2022-12-25");
console.log(date1, date2);
const dateDiff = date2.getTime() - date1.getTime();
console.log(dateDiff);
const interval = dateDiff / (24 * 60 * 60 * 1000);
console.log(`두 날짜 사이의 차이는 ${interval}일 입니다.`);

// 3.4 수학 연산을 다루는 Math 객체
// floor : 주어진 숫자와 같거나 작은 정수 중 가장 큰 수 반환 (내림)
// ceil : 주어진 숫자와 같거나 큰 정수 중 가장 작은 수 반환 (올림)
// round : 주어진 숫자를 반올림한 수와 가장 가까운 정수 반환 (반올림)
const floatNum = 10.52;
console.log(Math.floor(floatNum));
console.log(Math.ceil(floatNum));
console.log(Math.round(floatNum));

// 4. 브라우저 객체 모델 사용하기
// 자바스크립트 언어 사양에 포함되진 않지만 웹 브라우저에서 제공하는 객체

// 4.1 window 객체 속성과 메서드
/* 콘솔창에 입력해봐도 잘 나오는 것 확인 가능
window.
● 웹 브라우저의 너비: innerWidth 
● 웹 브라우저의 높이: innerWeight
● 웹 브라우저 창의 너비: outerWidth
● 웹 브라우저 창의 높이: outerHeight
● 웹 브라우저 창 위쪽 면과 모니터 사이의 간격: screenTop/window.screenX
● 웹 브라우저 창 왼쪽 면과 모니터 사이의 간격: screenLeft/screenX
● 웹 브라우저 창의 스크롤 가로 위치: scrollX
● 웹 브라우저 창의 스크롤 세로 위치: scrollY
*/

// 4.3 웹 브라우저에서 새 창 제어하기
// window.open() 의 open() 메서드는 웹 브라우저에서 새로운 창을 여는데 사용함
// ../jsIntro.html 파일 참조

// 4.4 웹 브라우저의 스크롤 이용하기
// window.scrollTo() 메서드는 웹 브라우저의 스크롤 위치를 특정 좌표로 이동하게 함
// window.scrollBy() 메서드는 웹 브라우저의 스크롤 위치를 현재 위치에서 상대적인 위치로 이동하게 함
// 두 메서드는 기본적으로 매개변수에 x, y 좌표를 전달받아 사용

// window.scrollTo(x좌표, y좌표);
// window.scrollBy(x좌표, y좌표);

