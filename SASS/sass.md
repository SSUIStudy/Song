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

MIXIN 



1. 리스트

```sh

예)
@mixin listThumb($thumb-num, $docWt, $imgWt, $thumb-mgr, $thumb-mgb) {
	& > li {
		width: $imgWt / $docWt * 100%;
		margin: 0 $thumb-mgr / $docWt * 100% $thumb-mgb / $docWt * 100% 0; 
	}

	& > li:nth-child(#{$thumb-num}n) {
		margin-right: 0;
	}
};

.thumb__list {
	@include listThumb(2, 1000px, 480px, 20px, 20px);
}


결과)
.thumb__list > li {
  width: 48%;
  margin: 0 2% 2% 0;
}
.thumb__list > li:nth-child(2n) {
  margin-right: 0;
}

```



2. 이미지

```sh

예)
@mixin icoShare($ico-name) {
	.#{$ico-name}__share {
		background-image: url(/images/common/ico_#{$ico-name}.png);
	}
};

@include icoShare(naver);
@include icoShare(facebook);

결과)
.naver__share {
  background-image: url(/images/common/ico_naver.png);
}
.facebook__share {
  background-image: url(/images/common/ico_facebook.png);
}

```



3. 포지션 센터

```sh

예)
@mixin center($pos) {
	position: absolute;

	@if $pos == 'vt' {
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	@else if $pos == 'ht' {
		left: 50%;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
	}
	@else if $pos == 'both' {
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
}

div.box1 {
	@include center(vt);
}
div.box2 {
	@include center(ht);
}
div.box3 {
	@include center(both);
}

결과)
div.box1 {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

div.box2 {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

div.box3 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

```

4. 크롭 이미지

```sh

예)
@mixin cropImg($crop, $wt, $ht) {
	width: $wt;
	height: $ht;
	position: relative;
	overflow: hidden;

	& > img {
		@if $crop == 'ht' {
			width: auto;
			height: 100%;
		}
		
		@else if $crop == 'vt' {
			width: 100%;
			height: auto;
		}

		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
}

div.crobbox {
	@include cropImg(ht, 100px, 100px);
}

div.crobbox2 {
	@include cropImg(vt, 200px, 300px);
}

결과)
div.crobbox {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
}
div.crobbox > img {
  width: auto;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

div.crobbox2 {
  width: 200px;
  height: 300px;
  position: relative;
  overflow: hidden;
}
div.crobbox2 > img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

```

5. 보더 스타일

```sh

예)
@mixin brdStyle($linePos, $wt, $color) {
	$brd: $wt solid #{$color};
	
	@if $linePos == 'top' {
		border-#{$linePos}: $brd;
	}
	@else if $linePos == 'bottom' {
		border-#{$linePos}: $brd;
	}
	@else if $linePos == 'left' {
		border-#{$linePos}: $brd;
	}
	@else if $linePos == 'right' {
		border-#{$linePos}: $brd;
	}
	@else if $linePos == 'all' {
		border: $brd;
	}
}

div.brdbox {@include brdStyle(top, 1px, rgb(115,115,155));}
div.brdbox2 {@include brdStyle(bottom, 1px, rgb(115,115,155));}
div.brdbox3 {@include brdStyle(left, 1px, rgb(115,115,155));}
div.brdbox4 {@include brdStyle(right, 1px, rgb(115,115,155));}
div.brdbox5 {@include brdStyle(all, 1px, rgb(115,115,155));}

결과)
div.brdbox {
  border-top: 1px solid #73739b;
}

div.brdbox2 {
  border-bottom: 1px solid #73739b;
}

div.brdbox3 {
  border-left: 1px solid #73739b;
}

div.brdbox4 {
  border-right: 1px solid #73739b;
}

div.brdbox5 {
  border: 1px solid #73739b;
}

```







*참고사이트*

https://mytory.net/2016/12/23/when-to-use-extend-when-to-use-a-mixin.html

https://medium.com/@justinbrazeau/10-useful-sass-mixins-for-automation-833cdee9d69b