// 1. 문서 객체 모델 이해
// 웹 브라우저는 HTML 문서의 구성요소를 모두 객체로 이해함

// 2. 노드 선택하기
// 2.1 속성으로 노드 선택하기
// 문서 객체 모델은 노드와 노드가 연결된 트리 구조
// 따라서, document 객체는 트리를 탐색하면서 원하는 노드를 선택할 수 있는 속성을 제공함
// 노드 탐색 유형은 모든 노드 탐색, 요소 노드 탐색으로 구분지을 수 있음

// document 객체로 접근 가능한 html 노드로 이동
document.firstChild
// 첫 번째 자식 요소 노드로 이동
document.firstElementChild

// 2.2 메서드로 노드 선택하기
// jsEvent.html 참조

// 3. 노드 조작하기
/*
textContent 요소 노드의 모든 텍스트에 접근
innerText 요소 노드의 텍스트 중 웹 브라우저에 표시되는 텍스트에만 접근 
innerHTML 요소 노드의 텍스트 중 HTML 태그를 포함한 텍스트에만 접근
*/

// 지정해야 하는 스타일이 명확하면 class 속성을 추가하고 클래스 선택자로 지정하는 편이 훨씬 깔끔함
/*
<노드>.classList.add("class 속성값") // 추가 
<노드>.classList.remove("class 속성값") // 삭제 
<노드>.classList.toggle("class 속성값") // 추가와 삭제 반복
*/

// 메서드로 속성 조작하기
/*
<노드>.getAttribute("속성명") // 속성값을 가져온다. 
<노드>.setAttribute("속성명", "속성값") // 속성값을 설정한다. 
<노드>.removeAttribute("속성명") // 속성을 삭제한다.
*/

// 6. 이벤트 다루기
// onclick, onfocus, onsubmit이 자주 쓰임
// 6.2 이벤트 등록하기
// 이벤트 등록 : 이벤트 발생시 어떤 작업할지 자바스크립트 코드로 작성하는 것
// 이벤트 등록 방법 : 인랴인, 프로퍼티 리스너, 이벤트 등록 메서드