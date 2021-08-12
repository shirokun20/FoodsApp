import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  foodsRequest: ['data'],
  foodsSuccess: ['data'],
  foodsFailure: ['error'],
})

export const FoodsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  list: { data: null, fetching: false, error: null }
})

/* ------------- Selectors ------------- */

export const FoodsSelectors = {
  getData: state => state.foods.list
}

/* ------------- Reducers ------------- */

// request the data from an api
export const foodsRequest = (state, { data }) =>
  state.merge({ ...state, list: { ...state.list, fetching: true, error: null } })

// successful api lookup
export const foodsSuccess = (state, { data }) =>
  state.merge({ ...state, list: { ...state.list, data, fetching: false, error: null } })

// Something went wrong somewhere.
export const foodsFailure = (state, { error }) =>
  state.merge({ ...state, list: { ...state.list, fetching: false, error } })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FOODS_REQUEST]: foodsRequest,
  [Types.FOODS_SUCCESS]: foodsSuccess,
  [Types.FOODS_FAILURE]: foodsFailure,
})
