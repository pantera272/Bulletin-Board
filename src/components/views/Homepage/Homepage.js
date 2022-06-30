import React from 'react';
import PropTypes from 'prop-types';
import ShowAllAnnoucments from '../../features/ShowAllAnnoucments/ShowAllAnnoucments';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/userReducer';
import PostAddCard from '../PostAddCard/PostAddCard';

const Homepage = () => {

  const user = useSelector(getUser);
 
  return(
    <div>
      {user.userRights === 'admin' ? <PostAddCard /> : ''}
      <ShowAllAnnoucments />
    </div>
    
  ); 

};

Homepage.propTypes = {
  children: PropTypes.node,

};

export default Homepage;
