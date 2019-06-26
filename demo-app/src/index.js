
const ADD_ACTION = 'ADD_ACTION';
const SUBTRACT_ACTION = 'SUBTRACT_ACTION';

const createAddAction = (value) => ({ type: ADD_ACTION, payload: { value }});
const createSubtractAction = (value) => ({ type: SUBTRACT_ACTION, payload: { value }});

const calcReducer = (state = 0, action) => {

  console.log('state:', state, 'action: ', action);

  switch (action.type) {
    case ADD_ACTION:
      return state + action.payload.value;
    case SUBTRACT_ACTION:
      return state - action.payload.value;
    default:
      return state;
  }

};

const createStore = (reducerFn) => {

  let currentState = undefined;
  const subscribersFn = [];

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducerFn(currentState, action);
      subscribersFn.forEach(cb => cb());
    },
    subscribe: (cb) => {
      subscribersFn.push(cb);
    },
  };

};

const calcStore = createStore(calcReducer);

const bindActionCreators = (actionMap, dispatchFn) => {
  return Object.keys(actionMap).reduce( (boundActionMap, actionKey) => {
    boundActionMap[actionKey] = (...params) => dispatchFn(actionMap[actionKey](...params));
    return boundActionMap;
  }  , {});
};

const { add, subtract } = bindActionCreators({
  add: createAddAction,
  subtract: createSubtractAction,
}, calcStore.dispatch);


calcStore.subscribe(() => {
  console.log(calcStore.getState());

  ReactDOM.render(
    <CalcTool {/* pass some props */} />,
    document.querySelector('#root'),
  );
});


add(0);
