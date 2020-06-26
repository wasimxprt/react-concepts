const BUY_CAKE = "BUY_CAKE";

//Initial state
const initialState = {
    numberOfCakes:10
}

//action creator
const buyCake = () => {
    return {
        type:BUY_CAKE,
        info:"Test info"
    }
}

//Reducer

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return{
                ...state,
                numberOfCakes:state.numberOfCakes -1
            }
            break;
    
        default:
            return state;
            break;
    }

}