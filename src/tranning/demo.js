import {createStore} from "redux";
import {status, sort} from './action/index'
import myReducer from './reducers/index'

const store = createStore(myReducer); 
console.log('Default: ',store.getState());
//Thực hiện công việc thay đôit status
// var action = {type: "TOGGLE_STATUS"};
store.dispatch(status());
console.log('TOGGLE_STATUS: ',store.getState());
//Thực hiện công việc sắp xếp tên từ z->a
// var sortAction = {
//     type: "SORT",
//     sort: {
//         by: 'name',
//         value: -1 
//     }
// }
store.dispatch(sort({
    by: 'name',
    value: -1
}))
console.log('SORT: ',store.getState());