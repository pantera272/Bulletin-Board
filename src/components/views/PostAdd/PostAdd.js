import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from '../FormContainer/FormContainer';
import { useDispatch } from 'react-redux';
import { addAnnoucment } from '../../../redux/annoucmentsReducer';
import { useNavigate } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const submitForm = annoucment => {
    dispatch(addAnnoucment(annoucment));
    navigate('/');
  };

  return (
    <div>
      <h2>PostAdd</h2>
      <FormContainer action={submitForm} type='ADD'/>
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
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
