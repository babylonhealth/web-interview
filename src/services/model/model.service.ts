import 'whatwg-fetch'

import { API_ENDPOINT } from 'config'

import { ErrorService } from 'services/error/error.service'

export const ModelService = {
  get(key: string, param?: string): Promise<any> {
    return fetch(`${API_ENDPOINT}/${key}${param ? `/${param}` : ''}`)
      .then(res => res.json())
      .catch(e => {
        ErrorService.error(`GET ${key}`, e)
      })
  },

  post(key: string, request: any): Promise<any> {
    return fetch(`${API_ENDPOINT}/${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    }).catch(e => {
      ErrorService.error(`POST ${key}`, e)
    })
  },
}
