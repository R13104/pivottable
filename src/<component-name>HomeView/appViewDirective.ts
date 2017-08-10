import Sample from './sampleDirective/sample.directive';

export default function registerAppDirective(AppName: string): void {

    'use strict';

    angular
        .module(AppName)
        .directive('sample', Sample.Factory())        
}