## es5 code and ts code can not have same name
    When compiler find class MaskPipe in both js file and ts file, it stop working.
    So I change mask.pipe.js to mask.pipe.es5.js and change class name to MaskPipeES5

## main.ts need some file to run angular
    import 'core-js/es6/reflect';
    import 'core-js/es7/reflect';
    import 'zone.js/dist/zone'; 
    we can put them in vendor.ts separately.

## Executed 0 of 0 ERROR
    Add mime to karma.conf.js
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
  