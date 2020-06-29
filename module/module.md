# 모듈 스크립트

**모듈이란?**

개발하는 애플리케이션의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 하는 시점이 옵니다. 이때 분리된 파일 각각을    '**모듈(module)**'이라고 부르는데, 모듈은 대개 클래스 하나 혹은 복수의 함수로 구성된 라이브러리 하나로    구성됩니다.

  ES6 이전에는 브라우저에서 사용 가능한 표준 모듈 시스템 없었음.
  node js의 CommonJS, AMD 외 모듈 시스템 사용.
  
  ES6 나오면서 표준 모듈 시스템 도입.
  `import`, `export` 추가

**export** (모듈 내보내기)

지시자를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근할 수 있습니다.
변수나 함수, 클래스를 선언할 때 맨 앞에  `export`를 붙이면 내보내기가 가능.

```javascript
// 배열 내보내기
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 상수 내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 클래스 내보내기
export class User {
  constructor(name) {
    this.name = name;
  }
}
```


**import** (모듈 가져오기)

지시자를 사용하면 외부 모듈의 기능을 가져올 수 있습니다.
모듈에 대한 목록을 만들어 `import {...}` 작성.
```javascript
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```
가져올 것이 많으면 `import * as <obj>` 처럼 객체 형태로 원하는 것들을 가지고 올 수 있음.
```javascript
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

한꺼번에 가져오는 방식을 사용 할 경우 코드는 짧아지기는 하나, 사용시 대상을 명시 하고 가져오는 것이 좋음.

**as**

as를 사용하면 이름을 바꿔서 모듈을 가져오거나 내보낼 수 있다.
```javascript
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
```
```javascript
export {sayHi as hi, sayBye as bye};
```
```javascript
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!
```
**default**

`default` 키워드는 기본 내보내기를 참조하는 용도로 종종 사용됩니다.
사용시 중괄호를 쓰지 않고 변수명 자유롭게 사용 가능.

```javascript
export default class User { // export 옆에 'default'를 추가해보았습니다.
  constructor(name) {
    this.name = name;
  }
}
```
```javascript
import User from './user.js'; // {User}가 아닌 User로 클래스를 가져왔습니다.

new User('John');
```



  -------------------

출처
 - https://ko.javascript.info/modules
 - https://velog.io/@doondoony/JavaScript-Module-System
 - https://snowdeer.github.io/javascript/2020/01/09/html5-how-to-use-module/
