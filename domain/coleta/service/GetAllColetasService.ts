import { Coletas } from '../model';
import { ColetasDataProvider } from './../dataprovider/ColetasDataProvider';
import { GetAllColetasUseCase } from './../usecase/GetAllColetasUseCase';


export class GetAllColetasService implements GetAllColetasUseCase {

    private dataProvider: ColetasDataProvider;

    constructor (
        dataProvider: ColetasDataProvider
    ) {
        this.dataProvider = dataProvider;
    }
    
    async execute(): Promise<Coletas[]> {
       return  this.dataProvider.getAllColetas();
    }
}