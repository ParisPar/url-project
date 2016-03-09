var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.sass('app.scss')
      .sass('auth.scss', './public/css/auth.css')
      .version(['css/app.css', 'css/auth.css'])

      .scripts([
        'libs/remodal.js'
      ], './public/js/libs.js')

      .styles([
        'libs/remodal.css',
        'libs/remodal-default-theme.css'
      ], './public/css/libs.css')

      .browserSync({
        proxy: 'url-project.app',
        browser: 'google-chrome',
        open: false
      });

});
