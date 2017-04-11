import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone'; 

//import './app/mask.pipe.spec.ts';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
// need "@types/webpack":"^2.2.14",
requireAll(require.context('./app', true, /\.spec\.ts$/));
