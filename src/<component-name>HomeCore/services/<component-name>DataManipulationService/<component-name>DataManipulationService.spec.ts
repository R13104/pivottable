import { AppName } from '../../main';
import { IfcDataManipulationService } from './<component-name>IfcDataManipulationService';
import { DataManipulationService } from './<component-name>DataManipulationService';

    
describe ('testing data manipulation service',() =>{
    
    beforeEach(
        angular.mock.module(AppName)
    );

    let dataManipulationService : IfcDataManipulationService;

    beforeEach( () => {
       dataManipulationService = new DataManipulationService();
   });


    describe('constructor', () => {
        it('should instantiate', () => {
            expect(dataManipulationService).toBeDefined();
        })
    });


});
