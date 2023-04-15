# ReactLesson

### 1강

npx create-react-app 프로젝트명: 리액트 프로젝트 생성  
보통 Create React App을 사용해서 프로젝트 생성함  
App.js가 메인이 되는 페이지  
미리보기띄우기는 모두 들어있는 파일 ex) blog에서 npm start  
이걸 쓰려면 npm(Node Package Module, 라이브러리 있는 플랫폼)필요함(nodejs에 있음)

### 2강

node_modules: 프로젝트에 필요한 모든 라이브러리 보관함  
public 폴더: 이미지파일 같은 static파일 모아 놓는 곳  
src: 코드짜는 곳 소스 코드 보관함  
html없이 js에 적어도 되는 이유 -> js에다가 html쉽게 적을 수 있게 해주는 JXS  
pakage.json: 프로젝트에 대한 여러 정보 저장하는 파일 자동생성 안건드려도 됨

### 3강

import ‘경로’로 App.js에 css 파일 추가  
class 대신에 className

데이터 바인딩:

```javascript
let post = ‘스트링’;
<p>{post}</p>
```

id, className다 가능
스타일 입력

```javascript
style = {{스타일명: ‘값’}}
```

### 4강

function App()의 리턴값에는 병렬로 태그 2개이상 불가
변수는 var, let const

state변수:  
일반변수는 바뀌어도 라벨의 값이 변하지 않는데,  
satate변수가 바뀌면 그 변수를 쓰던 html자체가 자동으로 전부 재렌더링 됨  
자주 변경될 것 같은 html부분 state로 생성

useState():  
React 컴포넌트에서 상태(state)를 관리하기 위해 사용

```javascript
let [a, b] = useState();
```

-> a 는 값 자체, b는 상태를 갱신하는 setter 함수  
a에 그냥 대입연산은 안됨, setter함수 사용

### 5강

```javascript
<span onClick={함수이름}>버튼</span>
// 클로저 사용
<span onClick={()=>{b(3)}}>버튼</span>

```

클로저 사용도 가능

### 6강

[let, var의 차이](https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/)

usestate의 setter 함수는 포인터 값 다를 때만 state변수 갱신  
setter 함수로 arr값 넣으려면 아래와 같이 해야 함

```javascript
let copy = [...arr];
// 대괄호를 벗긴 후 다시 입혀서 배열 생성
setterFunc(copy);
```

### 7강

컴포넌트:  
swiftUI의 뷰와 비슷  
여러 요소를 축약해서 표시가능  
반복적인 html 축약, 큰 페이지, 자주 변경되는 요소등에 사용

```javascript
<Compo />;
function Modal() {
  return <></>;
}
```

### 8강

state 변수 에 따라 컴포넌트 visible 결정하기  
{}안에서는 if, for 사용 불가

```javascript
let [showModal, setShowModal] = useState(false)
...
{showModal == true ? <Modal /> : null}
```

### 9강

arr.map():  
배열의 내장 함수  
arr 자료 개수만큼 코드 실행  
클로저 파라미터  
a: arr안에 있는 요소, i: 0..<n int(생략가능)  
return값은 arr에 저장됨

```javascript
[1, 2, 3].map((a, i) => {
  return a * 3;
  console.log(i);
});
// [3, 6, 9]
// log: 0, 1, 2
```

### 10강

[props:](https://www.snugarchive.com/blog/react-components-and-props/)  
상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달해주는 객체

```javascript
<Modal titleText={'title'} />
...
function Modal(props){
  return(
    <div>
      <h4>{props.titleText}</h4>
    </div>
  )
}
```

swiftUI에서 view 구조체에 parameter 전해주는 것과 같음
