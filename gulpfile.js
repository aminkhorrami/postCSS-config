// SASS will, by default, produce code in unminified format; the addition of
// {outputStyle: 'compressed'} in the task will automatically compress the
// output code.

const { src, dest, series, watch } = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const stylelint = require("stylelint");
const reporter = require("postcss-reporter");
const sass = require("gulp-sass")(require("sass"));

const stylelintRules = {
	rules: {
		"color-no-invalid-hex": true,
		"declaration-colon-space-before": [2, "never"],
		indentation: [2, 2],
		"number-leading-zero": [2, "always"],
	},
};

const postCSSPlugins = [
	stylelint(stylelintRules),
	autoprefixer(),
	reporter({
		clearMessages: true,
	}),
];

function SASS(callback) {
	return (
		src("./src/*.scss")
			// SASS
			.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
			.pipe(postcss(postCSSPlugins))
			.pipe(sourcemaps.init())
			.pipe(
				rename({
					extname: ".min.css",
				})
			)

			.pipe(sourcemaps.write("maps/"))
			.pipe(dest("./src/ToCSS"))
	);
	callback();
}

exports.default = function () {
	// Or a composed task
	watch("src/*.scss", series(SASS));
};
