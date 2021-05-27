import Route from '@ioc:Adonis/Core/Route';

Route.get('/', () => {
  return 'Hello Coletas';
})

Route.get('/all','ColetasController.getAllColetas');

