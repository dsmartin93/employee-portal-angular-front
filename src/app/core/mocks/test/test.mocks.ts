export default function test(response: any, request: any): any {
  if (request.url.endsWith('TEST_SERVICE')) {
    // TODO CHECK THIS ERROR
    response.status = 200;
    response.body = require('./TEST_SERVICE.json');
  }
  return response;


}
