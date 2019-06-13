

# jQuery -> Javascript



#### **참고**

querySelector  : 태그 객체 반환($, jQuery),  getElement~~와 다르게 거의 모든 선택자 사용 가능(아이디, 클래스 이름, 태그 이름, 하위태그 이름), 배열이 아닌, 맨 앞 객체 하나만 불러옴. (ie9~)

querySelectorAll : querySelector 와 비슷하나 객체 반환시 여러개의 태그를 배열로 반환. (ie9~)

replace : 특정 문자열을 찾아 다른 문자열로 변경

split : 문자열을 분할하여 배열에 담음

정규표현식 : 문자열에서 특정한 규칙을 가지는 문자열의 집합을 찾아내기 위한 검색 패턴

RegExp : 정규 표현식을 구현한 자스 표준 내장 객체

indexOf : String객체에서 주어진 값과 일치하는 첫번째 인덱스를 반환, 일치하는 값이 없을시 -1을 반환

addEventListner : 이벤트 등록할 때 사용



### **jQuery**

```sh

function gnb() {
    var bdy = ssq('body'),
        btnMenu = ssq('.btn__menu'),
        btnCloseMenu = ssq('.btn__close'),
        depth1 = ssq('.gnb .inner > ul > li:not(.no-depth) > a'),
        depth2 = ssq('.gnb .inner > ul > li > .depth2-box > ul > li > a'),
        btnBack = ssq('a.tit__depth');

    btnMenu.on('click', function(){
    	bdy.addClass('gnb--open');
    });

    btnCloseMenu.on('click', function(){
        depth2.parent('li').removeClass('depth3--open');
        depth1.parent('li').removeClass('depth2--open');
        bdy.removeClass('gnb--open');
    });
}

```



### **Javascript**

```sh

function gnb() {
    var bdy = document.querySelector('body'),
        btnMenu = document.querySelector('.btn__menu'),
        btnCloseMenu = document.querySelector('.btn__close'),
        depth1 = document.querySelectorAll('.gnb .inner > ul > li:not(.no-depth) > a'),
        depth2 = document.querySelectorAll('.gnb .inner > ul > li > .depth2-box > ul > li > a'),
        btnBack = document.querySelectorAll('a.tit__depth'),
        clsName, clsName2, clsName3,
        regExp = function(name) {
      		return new RegExp('(^| )'+ clsName +'( |$)');
        };


        btnMenu.addEventListener('click', function(){
            var arr;
            clsName = 'gnb--open';		

            //	bdy.classList.add(clsName); //ie10까지		

            //모든 브라우저
            arr = bdy.className.split(' ');

            if (arr.indexOf(clsName) == -1) {
            bdy.className += ' ' + clsName;
            }					

            //console.log(depth2.parentNode);
        });

        btnCloseMenu.addEventListener('click', function(){
            clsName = 'gnb--open';			
            clsName2 = 'depth2--open';			
            clsName3 = 'depth3--open';			
            //	bdy.classList.remove(clsName); //ie10까지

            //모든 브라우저
            bdy.className = bdy.className.replace(regExp(clsName), ''); 			
        });
	}

```



------



### **jQuery**

```sh

addClass()

jQuery('body').addClass('클래스명');



removeClass()

jQUery('body').removeClass('클래스명');


```

### **Javascript**

```sh

addClass()

document.querySelector('body').classList.add('클래스명'); //ie10까지

&&

//모든 브라우저 사용 가능
var arr;
arr = document.querySelector('body').className.split(' ');
if (arr.indexOf('클래스명') == -1) {
	document.querySelector('body').className += ' ' + '클래스명';
}	


removeClass()

document.querySelector('body').classList.remove('클래스명'); //ie10까지

&&


//모든 브라우저 사용 가능
var clsName = '클래스명',
	regExp = function(clsName) {
		return new RegExp('(^| )'+ clsName +'( |$)');
	};
	
document.querySelector('body').className = document.querySelector('body').className.replace(regExp(clsName), ''); 

```



**참고사이트**

<https://developer.mozilla.org/ko/docs/Web/API/Element/classList>

<http://div.or.kr/js-studying/document.querySelectorAll>

<http://tcpschool.com/javascript/js_regularExpression_concept>