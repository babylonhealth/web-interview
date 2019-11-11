import { API_ENDPOINT } from 'config'

export const ModelService = {
  fetch(key: string): Promise<any> {
    return fetch(`${API_ENDPOINT}/${key}`)
      .then(res => res.json())
      .catch(() => {
        // TODO: Handle error here
      })
  },
}
