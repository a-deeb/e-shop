const INITIAL_STATE = 
{
    currenrUser: null
}


const userReducer = (state = INITIAL_STATE, action) => 
{

switch(action.type) {

case 'SET_CURRENT_USER':   
return {
...state,
currenrUser: action.payload

} 

default:
    return state;

}

}

export default userReducer;