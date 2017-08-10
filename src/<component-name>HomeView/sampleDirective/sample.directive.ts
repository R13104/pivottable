import {SampleController} from './sample.controller';


export class Sample {

    private link: (scope: angular.IScope, element: Element, attrs: angular.IAttributes) => void;
    private scope = {
        data: '@',
    };
    private bindToController = {
        data: '@',
    };
    private controllerAs = 'vm';
    private controller = SampleController;
    private template = require('./sample.html');

    public static Factory(): any {
        let directive = () => {
            return new Sample();
        };
        directive.$inject = [];
        return directive;
    }

    constructor() {
        Sample.prototype.link = (scope: angular.IScope, element: Element, attrs: angular.IAttributes) => {};
    }
}

export default Sample;