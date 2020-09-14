const { src, dest, watch, series, parallel } = require("gulp"); 
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const cssuglify = require("gulp-uglifycss"); 
const imagemin = require("gulp-imagemin"); 
const browserSync = require("browser-sync").create();      

// Paths
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imagePath: "src/images/*"
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
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('pub/js'))
}

// Merge (concat), minify CSS-files, move                
function cssTask() {
    return src(files.cssPath)
        .pipe(concat('main.css'))
        .pipe(cssuglify())      
        .pipe(dest('pub/css'))
}

// Minify images and copy image-files to pub-catalog
function imageTask() {
    return src(files.imagePath)
        .pipe(imagemin())
        .pipe(dest('pub/images'))
};


// Watch 
function watchTask() {
    watch([files.htmlPath, files.jsPath, files.cssPath], 
        parallel(htmlTask, jsTask, cssTask)          
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
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imagePath], 
        parallel(htmlTask, jsTask, cssTask, imageTask)).on('change', browserSync.reload);
}

// Export (to reach from elsewhere)
exports.default = series(
    parallel(htmlTask, jsTask, cssTask, imageTask),          
    parallel(watchTask,syncTask)
);   