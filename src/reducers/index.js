import {combineReducers} from 'redux';
function reducerlogin(state={},action){
    switch(action.type){
        case 'LoginSuccess':
          return {logininfo:action.payload};
        default:
          return state;
    }
}
//echarts状态1
function reducer_echarts(state = {}, action) {
    switch (action.type) {
        case 'EchartsIndexName':
            // console.log("EchartsIndexName_reducers");
            // console.log(action.payload);
            return {
                EchartsIndexName: action.payload
            };
        default:
            return state;
    }
}
export default combineReducers({
    reducerlogin,
    reducer_echarts,
})