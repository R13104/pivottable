export const AppName: string = 'ComponentName';

import {AppName as HomeCore} from './<component-name>HomeCore/main';
import {AppName as HomeView} from './<component-name>HomeView/main';

angular
    .module( AppName, [HomeCore,HomeView]);
