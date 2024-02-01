const { series, parallel, src, dest, watch } = require('gulp');
const browserSync  = require('browser-sync');

const srcDir = "src";
const nodeDir = "node_modules";
const buildDir = "build";


const test = () => {
  return src(`${srcDir}/js/**.js`, { sourcemaps: true })
  .pipe(dest(buildDir, { sourcemaps: true }));
};

const bla = () => {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
}

exports.default = parallel(test, bla);