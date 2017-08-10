/// <reference path="../../typings/index.d.ts" />

import registerAppDirective from './appViewDirective';
export const AppName: string = '<component-name>.home.view';

const App = angular.module(AppName, [ ]);

registerAppDirective(AppName);
