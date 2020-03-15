export default function accessControl(response: any, request: any): any {
  if (request.url.endsWith('get-user-info')) {
    response.status = 200;
    response.body = require('./get-user-info/get-user-info.json');
  }

  if (request.url.endsWith('get-user-info/1d6d71d0-4a5e-4f67-a9f3-dc052a8b67f1')) {
    response.status = 200;
    response.body = require('./get-user-info/1d6d71d0-4a5e-4f67-a9f3-dc052a8b67f1.json');
  }
  return response;


}
