// gulpfile.js
var gulp = require('gulp')
var sass = require('gulp-sass')

var sassOption = {
  outputStyle : "compact",
}

// 일반 컴파일
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')  // 입력 경로
    .pipe(sass(sassOption).on('error', sass.logError))
    .pipe(gulp.dest('./css'));  // 출력 경로
});

// 런타임 중 파일 감시
gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', gulp.series('sass')); // 입력 경로와 파일 변경 감지 시 실행할 Actions(Task Name)
});
