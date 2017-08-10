import { IfcDataManipulationService } from '../../<component-name>HomeCore/services/<component-name>DataManipulationService/<component-name>IfcDataManipulationService';


export class SampleController{

    private dataManipulationService: IfcDataManipulationService;
    private data: string;

    constructor(dataManipulationService: IfcDataManipulationService){
        this.dataManipulationService = dataManipulationService;
    }

}

SampleController.$inject = ['componentNameDataManipulationService'];