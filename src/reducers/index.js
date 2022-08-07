import { combineReducers } from 'redux';
import counter from './counter';

// export default combineReducers({
//     counter,
// })

const rootReducer = combineReducers({
    counter,
})

export default rootReducer;