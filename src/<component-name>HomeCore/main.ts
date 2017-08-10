/// <reference path="../../typings/index.d.ts" />
import registerAppService from './services/registerAppServices';
export const AppName: string = '<component-name>.home.core';

angular.module(AppName, []);

registerAppService(AppName);
