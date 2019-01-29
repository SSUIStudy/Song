//https://github.com/Alecaddd/gulp-es6/blob/master/gulpfile.js

/*
"@babel/core": "^7.2.2", // 바벨 : 자바스크립트 하위버전 컴파일러, core - 핵심기능 포함
"@babel/preset-env": "^7.3.1", // 각 환경에 대한 바벨 사전 설정
"babelify": "^10.0.0", // 바벨 : 자바스크립트 하위버전 컴파일러
"browser-sync": "^2.26.3", // 
"browserify": "^16.2.3", //
"browserify-shim": "^3.8.14", //
"gulp": "github:gulpjs/gulp", //
"gulp-autoprefixer": "^6.0.0", // 자동 프리픽스
"gulp-concat": "^2.6.1", // 파일 연결
"gulp-if": "^2.0.2", // 조건에 따라 함수 실행
"gulp-notify": "^3.2.0", //
"gulp-options": "^1.1.1", //
"gulp-plumber": "^1.2.1", // pipe 메소드 대체, 오류시 중단 방지
"gulp-rename": "^1.4.0", // 파일 이름 변경
"gulp-sass": "^4.0.2", //
"gulp-sourcemaps": "^2.6.4", //
"gulp-strip-debug": "^3.0.0", //
"gulp-uglify": "^3.0.1", //
"gulp-uglifycss": "^1.1.0", //
"vinyl-buffer": "^1.0.1", //
"vinyl-source-stream": "^2.0.0" //
*/

// Load Gulp...of course
const { src, dest, task, watch, series, parallel } = require('gulp');

// CSS related plugins
var sass         = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );

// JS related plugins
var uglify       = require( 'gulp-uglify' );
var babelify     = require( 'babelify' );
var browserify   = require( 'browserify' );
var source       = require( 'vinyl-source-stream' );
var buffer       = require( 'vinyl-buffer' );
var stripDebug   = require( 'gulp-strip-debug' );

// Utility plugins
var rename       = require( 'gulp-rename' );
var sourcemaps   = require( 'gulp-sourcemaps' );
var notify       = require( 'gulp-notify' );
var plumber      = require( 'gulp-plumber' );
var options      = require( 'gulp-options' );
var gulpif       = require( 'gulp-if' );
var sassdoc      = require('sassdoc');

// Browers related plugins
var browserSync  = require( 'browser-sync' ).create();

// Project related variables
var styleSRC     = './src/scss/*.scss';
var styleURL     = './dist/css/';
var mapURL       = './';

var jsSRC        = './src/js/';
var jsFront      = 'main.js';
var jsFiles      = [jsFront];
var jsURL        = './dist/js/';

var imgSRC       = './src/images/**/*';
var imgURL       = './dist/images/';

var fontsSRC     = './src/fonts/**/*';
var fontsURL     = './dist/fonts/';

var htmlSRC     = './src/**/*.html';
var htmlURL     = './dist/';

var styleWatch   = './src/scss/**/*.scss';
var jsWatch      = './src/js/**/*.js';
var imgWatch     = './src/images/**/*.*';
var fontsWatch   = './src/fonts/**/*.*';
var htmlWatch    = './src/**/*.html';

// Tasks
function browser_sync() {
	browserSync.init({
		server: {
            baseDir: './dist/',
            directory : true
        },
        port : 8080
	});
}

function reload(done) {
	browserSync.reload();
	done();
}

var config = {
   'sassdoc': {
    verbose: true
  }
}

function css(done) {
	src( [ styleSRC ] )		
		.pipe( sassdoc(config.sassdoc) )
		.pipe( sourcemaps.init() )
		.pipe( sass({
			errLogToConsole: true,
			outputStyle: 'expanded'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( autoprefixer({ browsers: [ 'last 2 versions', '> 5%', 'Firefox ESR' ] }) )
        //.pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write( mapURL ) )
		.pipe( dest( styleURL ) )
		.pipe( browserSync.stream() );
	done();
};

function js(done) {
	jsFiles.map( function( entry ) {
		return browserify({
			entries: [jsSRC + entry]
		})
		.transform( babelify, { presets: [ '@babel/preset-env' ] } )
		.bundle()
		.pipe( source( entry ) )
		/*.pipe( rename( {
			extname: '.min.js'
        } ) )*/
		.pipe( buffer() )
		.pipe( gulpif( options.has( 'production' ), stripDebug() ) )
		.pipe( sourcemaps.init({ loadMaps: true }) )
		.pipe( uglify() )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( dest( jsURL ) )
		.pipe( browserSync.stream() );
	});
	done();
};

function triggerPlumber( src_file, dest_file ) {
	return src( src_file )
		.pipe( plumber() )
		.pipe( dest( dest_file ) );
}

function images() {
	return triggerPlumber( imgSRC, imgURL );
};

function fonts() {
	return triggerPlumber( fontsSRC, fontsURL );
};

function html() {
	return triggerPlumber( htmlSRC, htmlURL );
};

function watch_files() {
	watch(styleWatch, series(css, reload));
	watch(jsWatch, series(js, reload));
	watch(imgWatch, series(images, reload));
	watch(fontsWatch, series(fonts, reload));
	watch(htmlWatch, series(html, reload));
	/*src(jsURL + 'main.min.js')
		.pipe( notify({ message: 'Gulp is Watching, Happy Coding!' }) );*/
}

task("css", css);
task("js", js);
task("images", images);
task("fonts", fonts);
task("html", html);
task("default", parallel(css, js, images, fonts, html, browser_sync, watch_files));

//task("watch", parallel(browser_sync, watch_files));