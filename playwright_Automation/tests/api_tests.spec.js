import { test, expect } from '@playwright/test';

test('Api GET request', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');

  expect(response.status()).toBe(200);

  const text = await response.text();

  expect(text).toContain('Michael');

  console.log('Response: ', await response.json());
});

test('Api POST request', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'morpheus',
      job: 'leader',
    },
  });

  const text = await response.text();

  expect(text).toContain('createdAt');

  expect(text).toContain('morpheus');

  expect(response.status()).toBe(201);
});

test('Api PUT request', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Ankit',
      job: 'zion resident',
    },
  });

  const text = await response.text();

  expect(text).toContain('updatedAt');

  expect(text).toContain('Ankit');

  expect(response.status()).toBe(200);
});

test('Api DELETE request', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2');

  expect(response.status()).toBe(204);
});
