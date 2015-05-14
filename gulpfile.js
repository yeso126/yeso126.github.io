var gulp =    require('gulp');
var stylus =  require('gulp-stylus');
var plumber = require('gulp-plumber');
var coffee =  require('gulp-coffee');
var jade =    require('gulp-jade');
var browserSync = require('browser-sync');


//Preprocessors

gulp.task('precss', function () {
  gulp.src('./stylus/estilos.styl')
  	.pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('jade', function(){
  gulp.src('./templates/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(''))
});
 
gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
  	.pipe(plumber())
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./public/'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./", 
            index: "index_en.html"
        }
    });
});

// Watch task

gulp.task('watch', function(){
	gulp.watch('./stylus/estilos.styl',['precss'])
	gulp.watch('./src/*.coffee',['coffee'])
  gulp.watch('./src/*.coffee'['jade'])
});

//Default task

gulp.task('default',['watch', 'precss','coffee','jade','browser-sync']);