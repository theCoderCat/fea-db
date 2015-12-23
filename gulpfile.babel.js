import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import notify from 'gulp-notify';
import eslint from 'gulp-eslint';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

var onError = (err) => {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var config  = {
    logicDir: './logics',
    bowerDir: './bower_components',
    nodeDir: './node_modules',
    es6Dir: './public/es6',
    reactDir: './public/es6/components',
    scriptsDir: './public/scripts',
    scssDir: './public/scss',
    stylesDir: './public/stylesheets',
    imgDir: './public/images'
};
var fontSource = [

];
var jsSource = [
    // config.nodeDir + '/react/dist/react.min.js',
    // config.nodeDir + '/flux/dist/Flux.min.js',
    config.nodeDir + '/mui/dist/js/mui.min.js'
];
var reactSource = [
    config.reactDir + '/**/*.jsx',
];
var headJsSource = [
    // config.bowerDir + '/modernizr/modernizr.js',
];
var cssSource = [];

var vendorStyleSource = [

];

gulp.task('vendorStyles', () => {
    gulp.src(vendorStyleSource)
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest('app/public/styles/vendors/'));
});


// compile SASS
gulp.task('sass', () => {
    return gulp.src(config.scssDir + '/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 1 version']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.stylesDir));
});

// compile all style sheets on change
gulp.task('sass:watch', () => {
    gulp.watch(config.scssDir + '/**/*.scss', ['styles']);
});

// lint js and jsx
gulp.task('eslint', () => {
    gulp.src(config.es6Dir.concat(config.reactDir))
    .pipe(eslint({config: '.eslintrc'}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('react', () => {
    gulp.src(reactSource)
    .pipe(babel({'presets': ['react', 'es2015']}))
    .pipe(gulp.dest(config.scriptsDir));
});

// compile all style sheets on change
gulp.task('react:watch', () => {
    gulp.watch(reactSource, ['eslint', 'react']);
});

// concat and uglify all vendor scripts
gulp.task('vendorScripts', () => {
    gulp.src(jsSource)
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.scriptsDir));
});
// concat and uglify scripts with be added to head
gulp.task('headScripts', function() {
    gulp.src(headJsSource)
    .pipe(concat('head.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.scriptsDir));
});
// compile babel
gulp.task('babel', () => {
    browserify(config.es6Dir + '/app.js')
    .transform(babelify, {presets: ['react', 'es2015']})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scriptsDir));
    // .pipe(sourcemaps.init())
    // .pipe(concat('app.js'))
    // .pipe(sourcemaps.write('.'))
    // .pipe(gulp.dest(config.scriptsDir));
});

// compile babel files on change
gulp.task('babel:watch', ['eslint'], () => {
    gulp.watch(config.es6Dir + '/**/*.js', ['babel']);
});

// copy fonts to app/public/fonts
gulp.task('fonts', () => {
    return gulp.src(fontSource)
    .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('server:watch', () => {
    gulp.watch(config.logicDir + '/**/*.js', ['start-server']);
});

gulp.task('lint', () => {
    return gulp.src(config.path.js);
});

gulp.task('dev', ['vendorStyles', 'vendorScripts', 'headScripts', 'sass', 'sass:watch', 'eslint', 'babel', 'babel:watch'], () => {
    // gulp.start();
});

gulp.task('build', ['vendorStyles', 'vendorScripts', 'headScripts','eslint', 'react',  'sass', 'babel'], () => {

});

gulp.task('default', [], () => {
    gulp.start('dev');
});
