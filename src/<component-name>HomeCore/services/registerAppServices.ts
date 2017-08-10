/// <reference path="../../../typings/index.d.ts"/>

import {DataManipulationService} from './<component-name>DataManipulationService/<component-name>DataManipulationService';
export default function registerService(AppName: string): void {

    angular
        .module(AppName)
        .service('componentNameDataManipulationService', DataManipulationService)
}