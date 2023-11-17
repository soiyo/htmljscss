// 조건문
// 1. if, else, else if 문
// 조건식이 참이면 코드를 실행한다.
let num = 10;
if (num % 2 === 0){
    console.log("짝수");
}

// 조건식이 거짓이면 else 코드를 실행한다.
let num_2 = 5;
if (num_2 % 2 === 0 ){
    console.log("짝수");
} else {
    console.log("홀수");
}

// else if로 일일이 조건을 달아준다.
let num_3 = 0;
if (num_3 > 0){
    console.log("양수");
} else if (num_3 < 0){
    console.log("음수");
} else {
    console.log("0");
}

// 2. swtich 문
// else if문이 길어지면 가독성을 위해 switch문을 사용해준다.
// switch문은 case에 따라 값이 맞다면 블록문을 실행한다.

let food = "banana";

switch (food){
    case "melon":
        console.log("melon");
        break; 
    case "banana":
        console.log("banana");
        break; 
    case "apple":
        console.log("apple");
        break; 
    default:
        console.log("no fruits.");
        break; 
}

// 3. if문과 조건식
// 90점 이상일 때 출력
let score = 90;
if (score >= 90){
    console.log("A+ 학점");
}

// &&(AND 연산자)를 사용해보자
if (score >= 90 && score <=100){
    console.log("A+ 학점");
}


// 4. if 문 vs switch 문
// if문은 조건에 식을, switch문은 조건에 값을 사용한다.
// switch문은 조건으로 값을 받기 때문에 값이 범위일 때는 모든 값을 일일이 case문으로 정의해주어야 한다.
// 따라서, 범위를 이용한 조건을 작성할 땐 if문이 적합하다.

