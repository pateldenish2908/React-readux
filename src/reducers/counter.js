const initialState = {
    count: 0,
};
  
const counter = (state = initialState, action = 0) => {  
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.payload
            };
            
        case 'DECREMENT':
            return {
                count: state.count - action.payload
            };

        default:
            return state;
    }
};

export default counter;