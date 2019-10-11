export default (state = [], action) => {
    switch(action.type) {
        case 'user_id':
            return  action.payload;
            default :
            return state;
    }
}