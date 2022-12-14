class SparrestApi {

    baseUrl = 'http://localhost:8000'
    endpoints = {
      login: '/auth/login',
      signup: '/auth/register',
      ads: '/api/ads',
    }
    constructor() {}
  
    async get(endpoint) {
      const response = await fetch(`${this.baseUrl}${endpoint}`)
      
      if (!response.ok) {
        throw new Error('No results')
      }
  
      const data = await response.json()
  
      return data;
    }
  
    async post(endpoint, body) {
      const token = localStorage.getItem('token')
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      if(!response.ok) {
          throw new Error('Bad request')
      }
  
      const data = await response.json()
  
      return data;
    }
  
    async delete(endpoint) {
      const token = localStorage.getItem('token')
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
  
      const data = await response.json()
  
      return data;
    }
  }
  
  export const sparrestApi = new SparrestApi()