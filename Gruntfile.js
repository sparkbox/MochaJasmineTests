module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      grunt: {
        files: ["Gruntfile.js", "package.json"],
        tasks: "default"
      },
      javascript: {
        files: ["src/client/**/*.js", "src/server/*.js", "specs/**/*Spec.js"],
        tasks: "test"
      }
    },
    jasmine: {
      src: "src/client/js/*.js",
      options: {
        specs: "specs/client/*Spec.js"
      }
    },
    mochacli: {
      options: {
        reporter: "nyan",
        ui: "tdd"
      },
      all: ["specs/server/*Spec.js"]
    },
    jshint: {
      all: [
        "Gruntfile.js",
        "src/**/*.js",
        "spec/**/*.js"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-mocha-cli");
  grunt.registerTask("test", ["jshint", "mochacli", "jasmine"]);
  grunt.registerTask("default", ["test"]);
};

