var gulp        = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: './build/asciidoc/html5'
    });

    gulp.watch('build/asciidoc/html5/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
