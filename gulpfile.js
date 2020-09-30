const { src, dest, watch, series, parallel } = require("gulp"); 
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
// const cssuglify = require("gulp-uglifycss"); 
const babel = require("gulp-babel"); 
const imagemin = require("gulp-imagemin"); 
const browserSync = require("browser-sync").create();    
const sass = require('gulp-sass'); 
sass.compiler = require('node-sass'); 
const sourcemaps = require('gulp-sourcemaps');

// Paths
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",  // Not in use now but keep here
    jsPath: "src/**/*.js",
    imagePath: "src/images/*",
    sassPath: "src/**/*.scss"
}

//Tasks

// Copy HTML-files to pub-catalog
function htmlTask() {
    return src(files.htmlPath)
        .pipe(dest('pub'))
}

// Merge (concat), minify JS-files, move
function jsTask() {
    return src(files.jsPath)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(dest('pub/js'))
        .pipe(browserSync.stream()); 
} 

// Sass-task including sourcemaps
function sassTask() {
    return src(files.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed'}).on("error", sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest("pub/css"))
        .pipe(browserSync.stream());          
}


// Merge (concat), minify CSS-files, move. Use if you don´t use SASS!!!!!   
/*            
function cssTask() {
    return src(files.cssPath)
        .pipe(concat('main.css'))
        .pipe(cssuglify())      
        .pipe(dest('pub/css'))
} */ 

// Minify images and copy image-files to pub-catalog
function imageTask() {
    return src(files.imagePath)
        .pipe(imagemin())
        .pipe(dest('pub/images'))
};


// Watch 
function watchTask() {
    watch([files.htmlPath, files.jsPath, files.sassPath /*, files.cssPath */], 
        parallel(htmlTask, jsTask, sassTask, /* cssTask */)          
        );
}

// Browser Sync
function syncTask() {
    browserSync.init({
        injectChanges: false,
        server: {
            baseDir: "./pub"
        },
        port: 3000
    });
    watch([files.htmlPath, files.jsPath, files.sassPath /*, files.cssPath, */ ], 
        parallel(htmlTask, jsTask, sassTask /*, cssTask*/)).on('change', browserSync.reload);
}

// Export (to reach from elsewhere)
exports.default = series(
    parallel(htmlTask, jsTask, sassTask /*, cssTask */ ),          
    parallel(watchTask,syncTask)
);   

// Export imagetask - not as default (takes to long to have it as default)
exports.imgexpo = imageTask; 