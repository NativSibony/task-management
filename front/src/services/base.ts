import axios from 'axios';

// Currently hardcoded for the assignment
const baseUrl = 'http://localhost:3001';

export default class BaseAPI {
  #client; // private client instance

  constructor(endpointName: string | undefined) {
    this.#client = axios.create({
      baseURL: `${baseUrl}/${endpointName}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async get(path = '', options = {}) {
    const { data } = await this.#client.get(path, options);
    return data || null;
  }

  async post(path = '', body = {}, options = {}) {
    const { data } = await this.#client.post(path, body, options);
    return data || null;
  }

  async put(path = '', body = {}, options = {}) {
    const { data } = await this.#client.put(path, body, options);
    return data || null;
  }

  async delete(path = '', options = {}) {
    const { data } = await this.#client.delete(path, options);
    return data || null;
  }
}
