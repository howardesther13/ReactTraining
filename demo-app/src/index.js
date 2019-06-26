import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useNumber } from './hooks/useNumber';

const ADD_ACTION = 'ADD_ACTION';
const SUBTRACT_ACTION = 'SUBTRACT_ACTION';
const MULTIPLY_ACTION = 'MULTIPLY_ACTION';
const DIVIDE_ACTION = 'DIVIDE_ACTION';

const createAddAction = (value) => ({ type: ADD_ACTION, payload: { value }});
const createSubtractAction = (value) => ({ type: SUBTRACT_ACTION, payload: { value }});
const createMultiplyAction = (value) => ({ type: MULTIPLY_ACTION, payload: { value }});
const createDivideAction = (value) => ({ type: DIVIDE_ACTION, payload: { value }});

const calcReducer = (state = 0, action) => {

  console.log('state:', state, 'action: ', action);

  switch (action.type) {
    case ADD_ACTION:
      return state + action.payload.value;
    case SUBTRACT_ACTION:
      return state - action.payload.value;
    case MULTIPLY_ACTION:
        return state * action.payload.value;
    case DIVIDE_ACTION:
        return state / action.payload.value;
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



const CalcTool = ({
  result,
  onAdd: add, onSubtract: subtract,
  onMultiply: multiply, onDivide: divide,
}) => {

  const [ num, change ] = useNumber(0);

  useEffect(() => {
    const numInputElement = document.querySelector('input');
    console.log('attr value', numInputElement.getAttribute('value'));
    console.log('obj value', numInputElement.value);
  });

  return <form>
    <div>
      Result: <span data-test={result}>{result}</span>
    </div>
    <div>
      <input type="number" value={num} onChange={change} />
    </div>
    <div>
      <button type="button" onClick={() => add(num)}>+</button>
      <button type="button" onClick={() => subtract(num)}>-</button>
      <button type="button" onClick={() => multiply(num)}>*</button>
      <button type="button" onClick={() => divide(num)}>/</button>
    </div>
  </form>

};

const boundActions = bindActionCreators({
  onAdd: createAddAction,
  onSubtract: createSubtractAction,
  onMultiply: createMultiplyAction,
  onDivide: createDivideAction,
}, calcStore.dispatch);


calcStore.subscribe(() => {
  console.log(calcStore.getState());

  ReactDOM.render(
    <CalcTool result={calcStore.getState()} {...boundActions} />,
    document.querySelector('#root'),
  );
});


boundActions.onAdd(0);
