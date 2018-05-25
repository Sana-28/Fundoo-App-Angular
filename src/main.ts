import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppuserModule } from './appuser/appuser.module';
import { AdminModule } from './appadmin/appadmin.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppuserModule)
  .catch(err => console.log(err));


