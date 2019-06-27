
export const REFRESH_CARS_REQUEST_ACTION = '[CarTool] Refresh Cars Request Action';
export const REFRESH_CARS_DONE_ACTION = '[CarTool] Refresh Cars Done Action';
export const APPEND_CAR_ACTION = '[CarTool] Append Car';
export const REPLACE_CAR_ACTION = '[CarTool] Replace Car';
export const DELETE_CAR_ACTION = '[CarTool] Delete Car';
export const EDIT_CAR_ACTION = '[CarTool] Edit Car';
export const CANCEL_CAR_ACTION = '[CarTool] Cancel Car';


export const createRefreshCarsRequestAction = () => ({ type: REFRESH_CARS_REQUEST_ACTION });
export const createRefreshCarsDoneAction = (cars) => ({ type: REFRESH_CARS_DONE_ACTION, payload: { cars } });
export const createAppendCarAction = car => ({ type: APPEND_CAR_ACTION, payload: { car }});
export const createReplaceCarAction = car => ({ type: REPLACE_CAR_ACTION, payload: { car }});
export const createDeleteCarAction = carId => ({ type: DELETE_CAR_ACTION, payload: { carId }});
export const createEditCarAction = carId => ({ type: EDIT_CAR_ACTION, payload: { carId }});
export const createCancelCarAction = () => ({ type: CANCEL_CAR_ACTION });

// thunk creator
export const refreshCars = () => {

  // thunk (invoked by thunk middleware)
  return dispatch => {

    // dispatching of the first action (first task)
    dispatch(createRefreshCarsRequestAction());
    return fetch('http://localhost:3050/cars')
      .then(res => res.json())
      .then(cars => {
        // dispatching of the second action (second task)
        dispatch(createRefreshCarsDoneAction(cars))
      });

  };

};