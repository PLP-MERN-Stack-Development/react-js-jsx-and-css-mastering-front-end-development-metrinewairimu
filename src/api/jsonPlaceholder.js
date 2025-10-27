const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const usersAPI = {
  getUsers: async () => {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  getUser: async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  }
};

export const postsAPI = {
  getPosts: async (page = 1, limit = 10) => {
    const response = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  }
};