import { Coletas } from 'domain/coleta/model';
import { ColetasDataProvider } from './../../../domain/coleta/dataprovider/ColetasDataProvider';
export class ColetasProvider implements ColetasDataProvider {
    
    
    getAllColetas(): Coletas[] {
        return [
             new Coletas(BigInt(1), "teste 1"),
             new Coletas(BigInt(2), "teste 2"),
             new Coletas(BigInt(3), "teste 3")
          ]
    }

}