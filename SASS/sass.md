SASS - MIXIN

1. 센터정렬
- margin: 0 auto

```sh
@mixin push--auto {
    margin: { 
        left: auto;
        right: auto;
    }
}

예)
div.pushauto {
	@include push--auto;
}

결과)
div.pushauto { margin-left: auto; margin-right: auto; }
```

2. 가상선택자
- :before, :after 사용시 필요한 코드

```sh
@mixin pseudo($display: block, $pos: absolute, $content: ''){
    content: $content;
    display: $display;
    position: $pos;
}

예)
div::after {
    @include pseudo;
    top: -1rem; left: -1rem;
    width: 1rem; height: 1rem;
}

결과)
div.pseudo::after { content: ""; display: block; position: absolute; top: -1rem; left: -1rem; width: 1rem; height: 1rem; }
```

3. 비율
- 비율 유지할 때 사용

```sh
@mixin responsive-ratio($x,$y, $pseudo: false) {
    $padding: unquote( ( $y / $x ) * 100 + '%' );
    @if $pseudo {
        &:before {
            @include pseudo($pos: relative);
            width: 100%;
            padding-top: $padding;
        }
    } @else {
        padding-top: $padding;
    }
}

예)
div.ratio {
    @include responsive-ratio(16,9); 
    @include responsive-ratio(16,9, true); 
}

결과)
div.ratio { padding-top: 56.25%; }
div.ratio:before { content: ""; display: block; position: relative; width: 100%; padding-top: 56.25%; }
```

4. 폰트 스타일

```sh
@mixin font-source-sans($size: false, $colour: false, $weight: false,  $lh: false) {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    @if $size { font-size: $size; }
    @if $colour { color: $colour; }
    @if $weight { font-weight: $weight; }
    @if $lh { line-height: $lh; }
}

예)
p.fontstylesans {
    @include font-source-sans(10px, rgb(51,51,51), false, 20px);
}

결과)
p.fontstylesans { font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 10px; color: #333333; line-height: 20px;}
```

5. 미디어쿼리

```sh
@mixin breakpoint($point) {
  @if $point == large {
    @media screen and (min-width: 1900px) {
			@content;
		}
  }
  @else if $point == medium {
    @media screen and (min-width: 1200px) {
			@content;
		}
  }
  @else if $point == small {
    @media screen and (min-width: 767px) {
			@content; 
		}
  }
}

예)
div.mq {
	color: rgb(111,111,111);

	@include breakpoint(medium) {
		color: rgb(222,222,222);
	}
}

결과)
div.mq { color: #6f6f6f; }
@media screen and (min-width: 1200px) { 
	div.mq { color: #dedede; }
}

```

6. 벤더프리픽스

```sh
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }

  #{$property}: $value;
}

예)
div.prefix {
  @include prefix(transform, rotate(90deg), ('webkit', 'ms'));
}

결과)
div.prefix { -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); }
```

7. Z-INDEX
- z-index 동일하게 적용시 사용 

```sh
@function z($name) {
    @if index($z-indexes, $name) {
        @return (length($z-indexes) - index($z-indexes, $name)) + 1;
    } @else {
        @warn 'There is no item "#{$name}" in this list; choose one of: #{$z-indexes}';
        @return null;
    }
}
$z-indexes: (
    "header",
    "contents",
    "footer",
    "popup"
);

예)
.site-header {
    z-index: z('header');
}
.site-header2 {
    z-index: z('contents');
}
.site-header3 {
    z-index: z('footer');
}
.site-header4 {
    z-index: z('popup');
}

결과)
.site-header { z-index: 4; }
.site-header2 { z-index: 3; }
.site-header3 { z-index: 2; }
.site-header4 { z-index: 1; }
```

8.

```sh

예)

결과)

```
















```sh

예)

결과)

```

### 참고사이트
- 10 SASS (SCSS) mixins you should be using in your projects (https://engageinteractive.co.uk/blog/top-10-scss-mixins)
