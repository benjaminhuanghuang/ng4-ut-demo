import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone'; 

import './app/mask.pipe.spec'

// import './app/mask.pipe.spec.ts'  // we don't want to modify specs.ts when add new test file

// using the "require.context"
function requireAll(requireContext){
  return requireContext.keys().map(requireContext);
}

declare var require: any;
// passing directory, use sub-directories, regular expression
// return all files match regx
// the "requireAll" function iterates through each one of them and imports it using that "requireContext"
requireAll(require.context('./app', true, /\.spec\.ts$/))
