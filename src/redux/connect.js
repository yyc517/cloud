import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import user from './user/Action'
import findMusic from './findMusic/Action'

const actions = {
    user,
    findMusic
}

const reduceObjects = objArr => objArr.reduce((a, b) => ({
  ...a,
  ...b,
}), {})

export default (...keys) => {
  if (process.env.NODE_ENV === 'development' && (!keys.length)) {
    throw new Error('connect requires keys!')
  }
  if (keys.length === 1) {
    const key = keys[0]
    return connect(
      state => state[key],
      dispatch => bindActionCreators(actions[key], dispatch),
    )
  }
  return connect(
    state => reduceObjects(keys.map(key => state[key])),
    dispatch => reduceObjects(keys.map(key => bindActionCreators(actions[key], dispatch))),
  )
}
