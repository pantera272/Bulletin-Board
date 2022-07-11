import axios from 'axios';

const createActionName = actionName => `app/annoucments/${actionName}`;

const ADD_ANNOUCMENTS = createActionName('ADD_ANNOUCMENTS');
export const addAnnoucment = payload => ({type: ADD_ANNOUCMENTS, payload});

const EDIT_ANNOUCMENT = createActionName('EDIT_ANNOUCMENT');
export const editAnnoucment = payload => ({type: EDIT_ANNOUCMENT, payload});

const FETCH_START = createActionName('FETCH_START');
export const fetchStarted = payload => ({ payload, type: FETCH_START });

const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });

const FETCH_ERROR = createActionName('FETCH_ERROR');
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

//selector
export const getAllAnnoucments = (state) => state.annoucments.data;
export const getAnnoucmentsById = ({ annoucments }, id) => annoucments.data.find(annoucment => annoucment._id === id);
export const getUserAnnoucments = ({ annoucments }, email) => annoucments.data.filter(annoucment => annoucment.email === email);

//thunk

export const fetchStart = () => {
  return (dispatch) => {
    dispatch(fetchStarted());

    axios
      .get('http://localhost:8000/api/annoucments')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const addAnnoucmentRequest = (annoucment) => async dispatch => {
  try {
    dispatch(fetchStarted());
    const res = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/annoucments',
      data: annoucment,
    });
    dispatch(addAnnoucment(res.data));
  } catch (err) {
    dispatch(fetchError(err));
  }
};

export const updateAnnoucmentRequest = (annoucment, id) => async dispatch => {
  try {
    dispatch(fetchStarted());
    const res = await axios({
      method: 'put',
      url: `http://localhost:8000/api/annoucments/${id}`,
      data: annoucment,
    });
    dispatch(editAnnoucment(res.data));
  } catch (err) {
    dispatch(fetchError(err));
  }
};

const annoucmentsReducer = (statePart = [], action) =>{
  switch (action.type){
    case ADD_ANNOUCMENTS:
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          success: true,
        },
        data: [...statePart.data, { ...action.payload}],
      };
    case EDIT_ANNOUCMENT:
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          success: true,
        },
        data: statePart.data.map(annoucment => annoucment._id === action.payload._id ? { ...annoucment, ...action.payload } : annoucment),
      };
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
          success: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          success: true,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
          success: false,
        },
      };
    }
    default:
      return statePart;
  }  
};

export default annoucmentsReducer;