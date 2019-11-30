const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

function style() {
    return gulp.src("css/**/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("./css"))

}
function watch() {
    gulp.watch("css/**/*.scss", style);
}
exports.style = style;
exports.watch = watch;

