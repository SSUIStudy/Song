### **SASS - EXTEND, MIXIN, FUNCTION**

EXTEND :  사용시 올바른 특성 및 연관성을 형성을 중심으로

@extend 잘못된 사용 사례

```sh

예)
%fc__gold {color: gold;}

...

.header {
	@extend %fc__gold;
	font-size: 10px;
}

...

.gnb {
	@extend %fc__gold;
	font-size: 16px;
}

...

.footer {
	@extend %fc__gold;
	font-size: 12px;
}

결과)
.header, gnb, .footer {color: gold;}

...

.header {font-size: 10px;}

... 

.gnb {font-size: 16px;}

...

.footer {font-size: 12px;}


```

![extend01](https://user-images.githubusercontent.com/43169339/51810277-406ba980-22ea-11e9-9553-cfe0be9d694f.PNG)



@extend 올바른 사용 사례
```sh

예)
%btn-style {
	display: block;
	background: red;
}
.btn-reset {
	@extend %btn-style;
	width: 50%;
}
.btn-delete {
	@extend %btn-style;
	width: 30%;
}
.btn-buy {
	@extend %btn-style;
	width: 80%;
}

결과)
.btn-reset, .btn-delete, .btn-buy {
  display: block;
  background: red;
}

.btn-reset {
  width: 50%;
}

.btn-delete {
  width: 30%;
}

.btn-buy {
  width: 80%;
}

```

![extend02](https://user-images.githubusercontent.com/43169339/51810576-08656600-22ec-11e9-8636-9b17686d919a.PNG)


*참고사이트*

https://mytory.net/2016/12/23/when-to-use-extend-when-to-use-a-mixin.html