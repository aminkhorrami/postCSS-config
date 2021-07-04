// old approach

const { src, dest, series } = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

// const gulp = require("gulp");
// const autoprefixer = require("autoprefixer");

// gulp.task("styles", function () {
// 	return gulp
// 		.src("./src/*.css")
// 		.pipe(postcss([autoprefixer()]))
// 		.pipe(sourcemaps.init())
// 		.pipe(sourcemaps.write("maps/"))
// 		.pipe(gulp.dest("./dest"));
// });
// gulp.task("rename", gulp.series("styles"), function () {
// 	return gulp
// 		.src("dest/example.css")
// 		.pipe(postcss([cssnano()]))
// 		.pipe(rename("example.min.css"))
// 		.pipe(gulp.dest("dest/"));
// });
// gulp.task("default", gulp.series("rename"));

// new approach

// the plugins we need! :D

const postCSSPlugins = [autoprefixer(), cssnano()];

function cssMinifySourceMapPlusAutoprefixer(callback) {
	return src("./src/*.css")
		.pipe(dest("./dist/css"))
		.pipe(sourcemaps.init())
		.pipe(postcss(postCSSPlugins))
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(sourcemaps.write("maps/"))
		.pipe(dest("./dist/css"));
	callback();
}
function maps(callback) {
	return src("./src/*.css")
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write("maps/"))
		.pipe(dest("./dist/css"));
	callback();
}

exports.cssMinifySourceMapPlusAutoprefixer = cssMinifySourceMapPlusAutoprefixer;
exports.default = series(cssMinifySourceMapPlusAutoprefixer);
