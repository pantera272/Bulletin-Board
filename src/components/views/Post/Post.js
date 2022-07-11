import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAnnoucmentsById } from '../../../redux/annoucmentsReducer';
import { getUser } from '../../../redux/userReducer';
import { Card } from 'react-bootstrap';

import styles from './Post.module.scss';
import Button from '../../common/Button/Button';
import { NotFound } from '../NotFound/NotFound';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = () => {

  const { id } = useParams();
  const annoucment = useSelector(state => getAnnoucmentsById(state, id));

  const { userRights } = useSelector(getUser);

  if (annoucment === undefined){
    return(
      <NotFound />
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>Post</h2> 
        <Card>
          <Card.Header>Title: {annoucment.title}</Card.Header>
          <Card.Body>
            <Card.Title>Annousment</Card.Title>
            <Card.Text>
              {annoucment.text}
            </Card.Text>
            <Card.Title>Publication date: {annoucment.publicationDate}</Card.Title>
            <Card.Title>Modyfication date: {annoucment.modyficationDate}</Card.Title>
            <Card.Title>Email: {annoucment.email}</Card.Title>
            <Card.Title>Status: {annoucment.status}</Card.Title>
          </Card.Body>
          
          {(userRights === 'admin' || userRights === 'user')?
            <Card.Footer className='text-center'>
              <a href={'/postedit/' + annoucment._id}><Button variant='dark'>Edit</Button></a>
            </Card.Footer>:''
          }
            
        </Card>
      </div>
    );
  }

  
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
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
