// const gulp = require('gulp');
// // const sass = require('gulp-sass');
// concat = require('gulp-concat');

// // the default task
// gulp.task('default', function() {
//     return gulp.src('./*.scss')
//        .pipe(concat('./src/scss/custom.scss'))
//        .pipe(gulp.dest('./compiled'));
// });

(function(r){
    const gulp = r('gulp'); 
    const combine = r('gulp-scss-combine');
    const concat = r('gulp-concat');

    gulp.task('combine-scss', ()=>gulp.src('./src/scss/custom.scss')  // define a source files
        .pipe(combine())   // combine them based on @import and save it to stream
        .pipe(concat('sinister.scss')) // concat the stream output in single file
        .pipe(gulp.dest('scss'))  // save file to destination.
    );
})(require);