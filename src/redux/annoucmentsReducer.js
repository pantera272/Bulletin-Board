import shortid from 'shortid';

const createActionName = actionName => `app/annoucments/${actionName}`;
const ADD_ANNOUCMENTS = createActionName('ADD_ANNOUCMENTS');
export const addAnnoucment = payload => ({type: ADD_ANNOUCMENTS, payload});

const EDIT_ANNOUCMENT = createActionName('EDIT_ANNOUCMENT');
export const editAnnoucment = payload => ({type: EDIT_ANNOUCMENT, payload});
//selector
export const getAllAnnoucments = (state) => state.annoucments;
export const getAnnoucmentsById = ({ annoucments }, id) => annoucments.find(annoucment => annoucment.id === id);
export const getUserAnnoucments = ({ annoucments }, email) => annoucments.filter(annoucment => annoucment.email === email);
//action

const annoucmentsReducer = (statePart = [], action) =>{
  switch (action.type){
    case ADD_ANNOUCMENTS:
      return [...statePart, {...action.payload, id: shortid() }];
    case EDIT_ANNOUCMENT:
      return statePart.map(annoucment => (annoucment.id === action.payload.id ? {...annoucment, ...action.payload} : annoucment));
    default:
      return statePart;
  }  
};

export default annoucmentsReducer;