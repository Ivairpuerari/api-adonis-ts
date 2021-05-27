import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { GetAllColetasUseCase } from './../../../domain/coleta/usecase/GetAllColetasUseCase';
import { ColetaResource } from './coletas-resoure';


export class ColetasController implements ColetaResource {
    
    private useCase: GetAllColetasUseCase; 
   
    constructor(useCase: GetAllColetasUseCase) {
       this.useCase = useCase;
    }
 
    async getAllColetas({ response }: HttpContextContract) {
        
        const responseUseCase = await this.useCase.execute();
        
        response.send(responseUseCase);
    }
    
}