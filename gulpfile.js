const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var cssnano = require("cssnano");
//const autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function () {
	return gulp
		.src("./src/*.css")

		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write("maps/"))

		.pipe(gulp.dest("./dest"));
});

// gulp.task("rename", ["styles"], function () {
// 	return gulp
// 		.src("dest/example.css")
// 		.pipe(postcss([cssnano()]))
// 		.pipe(rename("example.min.css"))
// 		.pipe(gulp.dest("dest/"));
// });

// gulp.task("default", ["styles", "rename"]);

// gulp.task("autoprefixer", () => {
// 	// const autoprefixer = require("autoprefixer");
// 	const sourcemaps = require("gulp-sourcemaps");
// 	const postcss = require("gulp-postcss");

// 	return (
// 		gulp
// 			.src("./src/*.css")
// 			// .pipe(sourcemaps.init())
// 			// .pipe(postcss([autoprefixer()]))
// 			.pipe(
// 				autoprefixer({
// 					cascade: false,
// 				})
// 			)
// 			// .pipe(sourcemaps.write("."))
// 			.pipe(gulp.dest("./dest"))
// 	);
// });
