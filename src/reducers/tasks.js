import * as types from './../constants/ActionType'

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : []


var s4 = () => {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
var findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}
var myReducer = (state = initialState, action) =>{
    var id = '';
    var index = -1;
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name : action.task.name,
                status : action.task.status === 'true' ? true : false 
            }
            if(!task.id){
                task.id = randomID();
                state.push(task);
            }else{
                var index = findIndex(state, task.id);
                state[index] = task;
            }
            
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            var id = action.id;
            var index = findIndex(state,id);
            console.log(index);
            // tasks[index].status = !tasks[index].status;
            // this.setState({
            //     tasks : tasks
            // });
            // state[index].status = !state[index].status; 
            // var cloneTask = {...state[index]};
            // cloneTask.status = !cloneTask.status;
            // state.splice(index,1);
            // state.push(cloneTask);
            // state[index] = cloneTask;
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
        case types.DELETE_ITEM:
            console.log(action);
            // var { tasks } = this.state;
            var id = action.id;
            var index = findIndex(state,id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            // this.onExitForm();
            return [...state]
        default: return state;
    }
};

export default myReducer;