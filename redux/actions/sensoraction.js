import axios from 'axios';
import {returnErrors} from './erroraction';
import {tokenConfig} from './authaction';
import {
ADDSENSOR_SECCESS,
DISPLAYSENSORS_SECCESS,
DELETESENSOR_SECCESS,
SENSORSLOADING,
UPDATESENSORS_SECCESS
} from './types';

export const getSensors = ({user}) => (dispatch,getState) => {
    dispatch(setSensorsLoading());
    axios
      .get(`https://backend-pfe-mby.herokuapp.com/api/sensors/updatedsensor/${user}`,tokenConfig(getState))
      .then(res =>
        dispatch({
          type: DISPLAYSENSORS_SECCESS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  export const addSensor = ({sensor}) => (dispatch,getState) => {
    axios
      .post('https://backend-pfe-mby.herokuapp.com/api/sensors/newSensor',sensor, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: ADDSENSOR_SECCESS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  export const deleteSensor = ({title}) =>  (dispatch, getState) => {
    axios
      .delete(`https://backend-pfe-mby.herokuapp.com/api/sensors/delete/${title}`, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: DELETESENSOR_SECCESS,
          payload: sensor
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
export const setSensorsLoading = () => {
  return {
    type: SENSORSLOADING
  };
};
