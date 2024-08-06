import api from ".";
import ENDPOINT from "../constant/endpointConstant";
import actionTypes from "../constant/types";

const getImages = (dispatch) => {
  dispatch({ type: actionTypes.LOADING, payload: true });
  api
    .get(ENDPOINT.PHOTOS)
    .then((response) => {
      dispatch({ type: actionTypes.DATA, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.ERROR, payload: true });
    })
    .finally(() => {
      dispatch({ type: actionTypes.LOADING, payload: false });
    });
};

const getIndividualImage = (id, dispatch) => {
  dispatch({ type: actionTypes.LOADING, payload: true });
  api
    .get(`${ENDPOINT.PHOTOS}/${id}`)
    .then((response) => {
      dispatch({ type: actionTypes.DATA, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.ERROR, payload: true });
    })
    .finally(() => {
      dispatch({ type: actionTypes.LOADING, payload: false });
    });
};

export { getImages, getIndividualImage };
