import { HttpHeaders } from '@angular/common/http';

export default function accessControl(response: any, request: any): any {
  if (request.url.endsWith('login')) {
    // TODO CHECK THIS ERROR
    let headers = new HttpHeaders();

    headers = headers.append('Access-Control-Allow-Credentials', 'true');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-prototype-version, x-requested-with');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    headers = headers.append('Access-Control-Allow-Origin', 'https://localhost:4200');
    headers = headers.append('Access-Control-Expose-Headers', 'WWW-Authenticate, Authorization,x-prototype-version, x-requested-with');
    headers = headers.append('Access-Control-Allow-Credentials', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkNmQ3MWQwLT' +
      'RhNWUtNGY2Ny1hOWYzLWRjMDUyYThiNjdmMSIsImlhdCI6MTU4MzcxMjQ4OCwiZXhwIjoxNTgzNzk4ODg4fQ.Z1YDATKQ3OX39u6qDzwRG1kuvLBynYqF4K3HZ-pbIaA');

    response.headers = headers;
    response.status = 200;
    response.body = require('./login.json');
  }

  if (request.url.endsWith('register')) {
    response.status = 200;
    response.body = require('./register.json');
  }

  return response;


}
