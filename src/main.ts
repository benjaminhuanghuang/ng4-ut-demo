import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone'; 

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
