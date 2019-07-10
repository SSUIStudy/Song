### POLYFILL - CLASS(ADD, REMOVE, TOGGLE, CONTAINS, REPLACE)

생성자 함수 : new키워드로 객체를 생성할 수 있는 함수, 생성자 함수의 이름은 대문자로 시작
프로토타입 : 
프로토타입을 사용하지 않고 객체 내에 메서드를 생성하게 된다면, 객체를 생성할 때 똑같은 메서드를 계속해서 생성하는 비효율성이 발생함, 
자바스크립트의 프로토타입 공간은 생성자 함수로 생성된 객체가 공통으로 가지는 공간,
프로토타입 공간에 객체가 가진 메서드를 옮기면 객체 생성시 마다 메서드를 계속해서 생성하는 비효율을 제거할 수 있음
https://github.com/leeho203/practice/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC

-polyfill
https://developer.mozilla.org/ko/docs/Web/API/Element/classList

```sh
// helpers
var regExp = function(name) {
	return new RegExp('(^| )'+ name +'( |$)');
};
var forEach = function(list, fn, scope) {
	for (var i = 0; i < list.length; i++) {
		fn.call(scope, list[i]);
	}
};

// class list object with basic methods
function ClassList(element) {
	this.element = element;
}

ClassList.prototype = {
	add: function() {
		forEach(arguments, function(name) {
			if (!this.contains(name)) {
				this.element.className += this.element.className.length > 0 ? ' ' + name : name;
			}
		}, this);						
	},
	remove: function() {
		forEach(arguments, function(name) {
			this.element.className =
				this.element.className.replace(regExp(name), '');
		}, this);
	},
	toggle: function(name) {
		return this.contains(name) 
			? (this.remove(name), false) : (this.add(name), true);
	},
	contains: function(name) {
		return regExp(name).test(this.element.className);
	},
	// bonus..
	replace: function(oldName, newName) {
		this.remove(oldName), this.add(newName);
	}
};

// IE8/9, Safari
if (!('classList' in Element.prototype)) {
	Object.defineProperty(Element.prototype, 'classList', {
		get: function() {
			return new ClassList(this);
		}
	});
}

// replace() support for others
if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
	DOMTokenList.prototype.replace = ClassList.prototype.replace;
}
```



작동방법


-add
```sh
//1개 일때
var elAdd = document.querySelector('.add'),
    addClsList = new ClassList(elAdd);

    addClsList.add('_add');

//여러개 일때	
var elAddM = document.querySelectorAll('.addm');

for(var a = 0; a < elAddM.length; a++){
    var addClsListM = new ClassList(elAddM[a]);

    addClsListM.add('_addM');							
}		
				
```

-remove
```sh
//1개 일때
var elRemove = document.querySelector('.remove'),
    removeClsList = new ClassList(elRemove);

    removeClsList.remove('_remove');

//여러개 일때
var elRemoveM = document.querySelectorAll('.removem');
				
for(var r = 0; r < elRemoveM.length; r++){
	var removeClsListM = new ClassList(elRemoveM[r]);

	removeClsListM.remove('_removeM');
}
```

-toggle

```sh
//1개 일때
var elToggle = document.querySelector('.toggle'),
	toggleClsList = new ClassList(elToggle);

elToggle.addEventListener('click', function(){
	toggleClsList.toggle('_toggle');					
});

//여러개 일때
var elToggleM = document.querySelectorAll('.togglem'),					
    clickToggle = function(idx){
        var toggleClsListM = new ClassList(elToggleM[idx]);

        elToggleM[idx].addEventListener('click', function(){						
        	toggleClsListM.toggle('_toggleM');							
        });				
    };	

for(var t = 0; t < elToggleM.length; t++){
	clickToggle(t);								
}
```

-contain
```sh
//1개 일때
var elContain = document.querySelector('.contain'),
	containClsList = new ClassList(elContain);				

if(containClsList.contains('_contain') == true){
	console.log('true');
}else{
	console.log('false');
}

//여러개 일때
var elContainM = document.querySelectorAll('.containm');

for(var c = 0; c < elContainM.length; c++){
    var containClsListM = new ClassList(elContainM[c]);				

    if(containClsListM.contains('_containM') == true){
    	console.log('true');
    }else{
   		console.log('false');
    }
}
```

-replace
```sh
//1개 일때
var elReplace = document.querySelector('.replace'),
	replaceClsList = new ClassList(elReplace);

replaceClsList.replace('_replaceOld', '_replaceNew');

//여러개 일때
var elReplaceM = document.querySelectorAll('.replacem');

for(var rp = 0; rp < elReplaceM.length; rp++){
	replaceClsListM = new ClassList(elReplaceM[rp]);

	replaceClsListM.replace('_replaceOldM', '_replaceNewM');
}
```

