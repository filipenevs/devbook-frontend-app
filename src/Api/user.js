/* EN: Base API URL to consume
 * PT-BR: URL base da API que irá ser consumida
 *
 *  > Api model: https://github.com/filipenevs/rest-api-backend
 */
export const PATH_API_URL = '127.0.0.1:3003/users';

export function USER_POST(body) {
  return {
    url: PATH_API_URL + '/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AUTH_POST(body) {
  return {
    url: PATH_API_URL + '/auth',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_DELETE(body, token) {
  return {
    url: PATH_API_URL + '/',
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_PUT(body, token) {
  return {
    url: PATH_API_URL + '/',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}
