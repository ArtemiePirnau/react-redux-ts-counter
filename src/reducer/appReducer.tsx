interface IState {
   count: number;
}

interface IActionIncrement {
   type: 'INCREMENT';
}

interface IActionDecrement {
   type: 'DECREMENT';
}

type Action = IActionIncrement | IActionDecrement;

const initialState = {
   count: 0,
};

const counterReducer = (state: IState = initialState, action: Action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            ...state,
            count: state.count + 1,
         };
      case 'DECREMENT':
         return {
            ...state,
            count: state.count - 1,
         };
      default:
         return state;
   }
};
export default counterReducer;
