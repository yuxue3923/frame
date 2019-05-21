import {combineReducers} from 'redux';
function reducerlogin(state={},action){
    switch(action.type){
        case 'LoginSuccess':
          return {logininfo:action.payload};
        default:
          return state;
    }
}
export default combineReducers({
    reducerlogin,
})