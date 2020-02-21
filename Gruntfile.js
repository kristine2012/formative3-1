module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {

      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },
    watch: {
      all: {
        files: ['sass/style.scss', 'css/style.css', 'js/script.js'],
        tasks: ['sass','csslint','jshint']
      }
    },
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
      style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss'    // 'destination': 'source'

      }
      }
    },
    csslint: {
      // strict: {
      //   options: {
      //     import: 2
      //   },
      //   src: ['css/*.css','!*.min.css']//do not include min files
      // },
      lax: {
        options: {
          import: false,
          'order-alphabetical' :false
        },
        src: ['css/*.css','!*.min.css']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    },
    imagemin: {
       static: {
        options: {
               optimizationLevel: 3,
               svgoPlugins: [{removeViewBox: false}],
               // use: [mozjpeg()] // Example plugin usage
           },
           files: {
               'dist/img.png': 'src/img.png',
               'dist/img.jpg': 'src/img.jpg',
               'dist/img.gif': 'src/img.gif'
           }
       },
       dynamic: {
           files: [{
               expand: true,
               cwd: 'src/',
               src: ['**/*.{png,jpg,gif}'],
               dest: 'dist/'
           }]
       }
   },
   htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/contact.html': 'src/contact.html'
      }
    },
    dev: {                                       // Another target
      files: {
        'dist/index.html': 'src/index.html',
        'dist/contact.html': 'src/contact.html'
      }
    }
  },
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');



  // Default task(s).
    grunt.registerTask('test', ['htmlmin','sass','csslint','jshint']);
    grunt.registerTask('ugly', ['uglify']);
    grunt.registerTask('default', ['watch']); //run this using grunt test

};
