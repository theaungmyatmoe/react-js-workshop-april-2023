import React, {useReducer} from 'react';

// {payload:'',type:''}
//  increment, decrement -> pre defined

const reducer = (prevState, action) => {
    switch (action.type) {
        case  'increment':
            // action.payload
            return {
                ...prevState,
                count: prevState.count + 1,
            }
        case  'decrement':
            return {
                ...prevState,
                count: prevState.count - 1,
            }

        default:
            throw  new Error('action did not exist for this type')
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0
    })


    function onIncreaseCount() {
        dispatch({
            type: 'increment',
        })
    }


    function onDecreaeCount() {
        dispatch({
            type: 'decrement'
        })
    }

    return (
        <div>
            <div>Count - {state.count}</div>
            <button onClick={onIncreaseCount}>Add</button>
            <button onClick={onDecreaeCount}>Remove</button>
        </div>
    );
};

export default Reducer;
