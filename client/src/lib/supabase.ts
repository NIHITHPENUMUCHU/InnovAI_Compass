// API client for backend communication
export const apiClient = {
  get: async (url: string) => {
    const response = await fetch(`/api${url}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
  },
  
  post: async (url: string, data: any) => {
    const response = await fetch(`/api${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
  },
  
  put: async (url: string, data: any) => {
    const response = await fetch(`/api${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
  },
  
  delete: async (url: string) => {
    const response = await fetch(`/api${url}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return response.status === 204 ? null : response.json();
  }
};