const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src("./source/styles/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("./build/styles"));
}

function minificaImages(){
    return gulp.src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function minificaScrips(){
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./build/scripts"))
}

exports.sass = compilaSass;
exports.images = minificaImages;
exports.javascript = minificaScrips;