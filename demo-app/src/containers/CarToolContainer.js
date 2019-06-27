import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import {
  createAppendCarAction, createCancelCarAction, createDeleteCarAction,
  createEditCarAction, createReplaceCarAction, refreshCars,
} from '../car-tool.actions';
import { CarTool } from '../components';


export const CarToolContainer = connect(
  ({ cars, editCarId }) => ({ cars, editCarId }),
  dispatch => bindActionCreators({
    onRefreshCars: refreshCars,
    onAddCar: createAppendCarAction,
    onSaveCar: createReplaceCarAction,
    onDeleteCar: createDeleteCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch),
)(CarTool);

