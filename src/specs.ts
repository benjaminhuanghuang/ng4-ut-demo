import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone'; 

import './app/mask.pipe.spec'

declare var require: any;

function requireAll(requireContext){
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./', true, /\.spec\.ts$/))
