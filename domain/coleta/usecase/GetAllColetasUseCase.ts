import { Coletas } from 'domain/coleta/model';
export interface GetAllColetasUseCase {
    execute(): Promise<Array<Coletas>>
}