import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import less from 'gulp-less';

var config  = {
    logicDir: './logics',
    bowerDir: './bower_components',
    nodeDir: './node_modules',
    es6Dir: './public/es6',
    scriptsDir: './public/scripts',
    scssDir: './public/scss',
    stylesDir: './pubic/stylesheets',
    imgDir: './public/images'
};
var fontSource = [

];
var jsSource = [

];
var headJsSource = [
    bowerDir + '/modernizr/modernizr.js',
];
var cssSource = {
};

var vendorStyleSource = [

];
// Start server
gulp.task('start-server', () => {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['./node_modules/**']
    })
    .on('restart', () => {
        console.log('Restarting...');
    });
});

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

// gulp.task('less', () => {
//     return gulp.src('app/public/less/*.less')
//     .pipe(less({
//         compress: true          // Minify CSS output
//     }))
//     // .pipe(autoprefixer({browsers: ['last 1 version']}))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('app/public/styles'));
// });
//
// gulp.task('less:watch', () => {
//     gulp.watch('app/public/less/**/*.less', ['less']);
// });

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
    return gulp.src(config.es6Dir + '/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scriptsDir));
});

// compile babel files on change
gulp.task('babel:watch', () => {
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
    return gulp.src(config.path.js)
});

gulp.task('dev', ['vendorStyles', 'vendorScripts', 'headScripts', 'sass', 'sass:watch', 'babel', 'babel:watch'], () => {
    // gulp.start();
});

gulp.task('build', ['vendorStyles', 'vendorScripts', 'headScripts', 'sass', 'babel'], () => {

});

gulp.task('default', [], () => {
    gulp.start('start-server');
});
