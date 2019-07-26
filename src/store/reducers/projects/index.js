const PROJECTS_LIST = {
    data: ['Cimento Apodi', 'Lider HD', 'Eduardo Girão' ]
}

// reducers
function projects (state = PROJECTS_LIST, action){
    switch (action) {
        case 'ADD_IN_PROJECTS':
            return {...state, data: [...state.data, action.title]}
        default:
            return state;
    }
}


export default projects;