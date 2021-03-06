import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AdminModule } from '../src/appadmin/appadmin.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

  platformBrowserDynamic().bootstrapModule(AdminModule)
  .catch(err => console.log(err));

  
