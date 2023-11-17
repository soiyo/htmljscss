// 반복문

// 1. while문
// 1~5까지 출력하는 코드를 작성해보자
let num = 1;
while(num <= 5){ //while 조건문에 num이 5이하일 때까지만 실행된다고 반복문 만들어줌
    console.log(num);
    num++; //1씩 증가되며 5가 되는 시점에 while문 끝
}

/*
// 2. 무한 반복문
let num_2 = 1;
while (num_2 <=5){
    console.log(num_2); 
    //num_2를 증가시키는 코드가 없다면 num_2는 계속 1로 유지되어 반복문이 무한 반복 될 것임
}
*/

// 3. do while 문
// 무조건 한 번은 실행하는 반복문 (원래는 조건문이 false면 실행을 한번도 안하는데 do while에서는 do 다음 블록문을 반복 실행)
do {
    console.log("무조건");
    console.log(" 한 번은 실행");
} while (false){
    console.log("조건문 false시 실행");
}

// 4. for 문
// for 문은 초깃값 > 조건식 > 블록문 > 증감식 > 조건식 순서로 실행됨. 이때 초깃값은 최초 1회만 실행됨.
// 초기값은 let i = 0 이다.
// 조건식은 i < 5 이다.
// 블록문은 {} 안에 있는 내용이다.
for (let i = 0; i < 5; i++){
    console.log(i); //0 1 2 3 4
}

// 5. for 문과 배열
// for 문으로 배열 요소에 접근해 값을 출력할 수 있다.
let arr = ['banana', 'apple', 'orange'];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// 6. for ... in
// for문 소괄호 안에 in 키워드 두고 (키 in 탐색의 대상이 되는 배열이나 객체 리터럴) 형식으로 작성

// 객체 리터럴을 반복할 경우
let obj = {name : "철수", age : "20"};
for (let key in obj){
    console.log(key + " : " + obj[key]);
}

// 배열을 반복할 경우
let arr_2 = ["orange", "banana", "apple"];
for (let index in arr){
    console.log(index + " : " + arr_2[index]);
}

console.log("다음은 break 문을 사용한 결과이다.")
// 7. break문
// break가 있다면 무조건 반복문을 탈출한다.
for (let i = 0; i < 10; i++){
    console.log(i);
    if (i === 5) break;
}

console.log("다음은 continue 문을 사용한 결과이다.")
// 8. continue 문
// 반복문을 건너뛰고 실행하라는 명령
for (let i =0; i < 10; i++){
    if(i%2 === 0) continue; // 홀수만 출력된다.
    console.log(i);
}


