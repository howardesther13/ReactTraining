export const APPEND_CAR_ACTION = '[CarTool] Append Car';
export const REPLACE_CAR_ACTION = '[CarTool] Replace Car';
export const DELETE_CAR_ACTION = '[CarTool] Delete Car';
export const EDIT_CAR_ACTION = '[CarTool] Edit Car';
export const CANCEL_CAR_ACTION = '[CarTool] Cancel Car';

export const createAppendCarAction = car => ({ type: APPEND_CAR_ACTION, payload: { car }});
export const createReplaceCarAction = car => ({ type: REPLACE_CAR_ACTION, payload: { car }});
export const createDeleteCarAction = carId => ({ type: DELETE_CAR_ACTION, payload: { carId }});
export const createEditCarAction = carId => ({ type: EDIT_CAR_ACTION, payload: { carId }});
export const createCancelCarAction = () => ({ type: CANCEL_CAR_ACTION });