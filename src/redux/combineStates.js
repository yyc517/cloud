export default ({ initialState, getNewState }) => (state = initialState, action) => ({
  ...state,
  ...(getNewState(state, action) || {}),
})
