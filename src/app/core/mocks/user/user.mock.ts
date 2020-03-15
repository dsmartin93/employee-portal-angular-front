export default function accessControl(response: any, request: any): any {
  if (request.url.endsWith('get-user-info')) {
    response.status = 200;
    response.body = require('./get-user-info.json');
  }
  return response;


}
