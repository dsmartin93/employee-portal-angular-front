export default function profile(response: any, request: any): any {
  if (request.url.endsWith('get-profile-info')) {
    // TODO CHECK THIS ERROR
    response.status = 200;
    response.body = require('./get-profile-info.json');
  }
  return response;


}
