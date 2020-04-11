export default function profile(response: any, request: any): any {
  if (request.url.endsWith('get-profile-info')) {
    // TODO CHECK THIS ERROR
    response.status = 200;
    response.body = require('./get-profile-info/get-profile-info.json');
  }

  if (request.url.endsWith('get-profile-info/1d6d71d0-4a5e-4f67-a9f3-dc052a8b67f1')) {
    response.status = 200;
    response.body = require('./get-profile-info/1d6d71d0-4a5e-4f67-a9f3-dc052a8b67f1.json');
  }
  return response;


}
