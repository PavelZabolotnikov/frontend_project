import Admin from './types/Admin';
// import AuthAdmin from './types/AuthAdmin';

export async function admin(): Promise<{ isLoggedIn: true; admin: Admin }> {
  return (await fetch('/api/auth/admin')).json();
}

export async function auth(admin1: Admin): Promise<Admin> {
  const result = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(admin1),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result.status >= 400) {
    const { error } = await result.json();
    throw new Error(error);
  }
  return result.json();
}

export async function logout(): Promise<void> {
  await fetch('/api/auth/logout', { method: 'delete' });
}
