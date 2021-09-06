export function postData<T>(data: T, route: string = '/api/contact') {
  return fetch(route, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
