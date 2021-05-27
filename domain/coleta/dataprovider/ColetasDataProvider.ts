import { Coletas } from 'domain/coleta/model';

export interface ColetasDataProvider {
    getAllColetas(): Array<Coletas>;
}