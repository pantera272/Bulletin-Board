import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../FormContainer/FormContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnnoucmentsById } from '../../../redux/annoucmentsReducer';
import { editAnnoucment } from '../../../redux/annoucmentsReducer';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = () => {
  const  { id } = useParams();
  const annoucment = useSelector(state => getAnnoucmentsById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editForm = annoucment => {
    dispatch(editAnnoucment({...annoucment, id}));
    navigate('/');
  };
  
  return (
    <div>
      <h2>PostEdit</h2>
      <FormContainer action={editForm} annoucment={annoucment} type='Edit'/>
    </div>
  );
};
    
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};
