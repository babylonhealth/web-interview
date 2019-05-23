import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import 'isomorphic-fetch'

import {
  GET_AVAILABLE_SLOTS,
  GET_AVAILABLE_SLOTS_SUCCESS,
  getAvailableSlots,
} from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('reducer', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('Should dispatch GET_AVAILABLE_SLOTS_SUCCESS when fetching available slots has been done', () => {
    fetchMock.get('*', ['foo'])

    const expectedActions = [
      { type: GET_AVAILABLE_SLOTS },
      { type: GET_AVAILABLE_SLOTS_SUCCESS, data: ['foo'] },
    ]
    const store = mockStore({ locations: [] })

    return store.dispatch(getAvailableSlots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
