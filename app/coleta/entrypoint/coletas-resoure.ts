import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export interface ColetaResource {
    getAllColetas({ response }: HttpContextContract)
}