import { HttpResponse } from '../protocols/http'
/*
é necessário dizer oque essa classe esta retornando, no caso ja tinha sido
criado uma interface HttpResponse para isto.
*/
export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}
