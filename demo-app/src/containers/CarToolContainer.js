import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import {
  createAppendCarAction, createCancelCarAction, createDeleteCarAction,
  createEditCarAction, createReplaceCarAction,
} from '../car-tool.actions';
import { CarTool } from '../components';


export const CarToolContainer = connect(
  ({ cars, editCarId }) => ({ cars, editCarId }),
  dispatch => bindActionCreators({
    onAddCar: createAppendCarAction,
    onSaveCar: createReplaceCarAction,
    onDeleteCar: createDeleteCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch),
)(CarTool);

