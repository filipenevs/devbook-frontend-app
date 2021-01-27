/* EN: Base API URL to consume
 * PT-BR: URL base da API que irá ser consumida
 *
 *  > Api model: https://github.com/filipenevs/rest-api-backend
 */
export const PATH_API_URL = '127.0.0.1:3003/publis';

export function PUBLI_GET() {
  return {
    url: PATH_API_URL + '/',
    options: {
      method: 'GET',
    },
  };
}

export function TAGS_GET() {
  return {
    url: PATH_API_URL + '/',
    options: {
      method: 'GET',
    },
  };
}

export function PUBLI_POST(body, token) {
  return {
    url: PATH_API_URL + '/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function PUBLI_DELETE(token) {
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

export function PUBLI_PUT(body, token) {
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
