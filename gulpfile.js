// Include gulp
var gulp = require('gulp'); 
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');

gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', './app/js/data.json',, './app/css/style.css', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('build/'));
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app/'
  });
});

function expressServer(port, env) {
  env = env || 'DEVELOPMENT'
  nodemon({
    script: 'server.js',
    ext: 'js json',
    verbose : true,
    ignore: ['ignored.js', './node_modules', './frontend'],
    env: {
      'NODE_ENV': env,
      'PORT': port
    }, 
    nodeArgs: [env == 'DEVELOPMENT' ? '--debug=9999' : '--debug=9898']
  });
};

gulp.task('serve:dev', function() {
  expressServer(8888);
});

// Default Task
gulp.task('default', ['connect']);
gulp.task('build', ['copy-html-files', 'usemin']);

// gulp.task('default', ['serve:dev']);