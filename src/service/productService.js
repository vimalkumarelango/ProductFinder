import api from ".";
import ENDPOINT from "../constant/endpointConstant";
import actionTypes from "../constant/types";

const getProducts = (dispatch) => {
  dispatch({ type: actionTypes.LOADING, payload: true });
  api
    .get(ENDPOINT.PRODUCT)
    .then((response) => {
      dispatch({ type: actionTypes.DATA, payload: response.data?.products });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actionTypes.ERROR, payload: true });
    })
    .finally(() => {
      dispatch({ type: actionTypes.LOADING, payload: false });
    });
};

const getIndividualProduct = (id, dispatch) => {
  dispatch({ type: actionTypes.LOADING, payload: true });
  api
    .get(`${ENDPOINT.PRODUCT}/${id}`)
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

export { getProducts, getIndividualProduct };
