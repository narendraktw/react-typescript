import { useReducer } from "react";

type CounterState = {
	count: number;
};

//Start Discriminated unions in typescript and is the recommended approach
type ResetAction = {
	type: "reset";
};
type UpdateAction = {
	type: "increment" | "decrement";
	payload: number;
};
//End

type CounterAction = ResetAction | UpdateAction;
const initialState = { count: 0 };
function reducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case "increment":
			return { count: state.count + action.payload };
		case "decrement":
			return { count: state.count - action.payload };
		case "reset":
			return initialState;
		default:
			return state;
	}
}
const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: "increment", payload: 10 })}>
				Increment 10
			</button>
			<button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
				Decrement 10
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</>
	);
};

export default Counter;
