import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAnnoucments } from '../../../redux/annoucmentsReducer';
import { getUser } from '../../../redux/userReducer';
import CardView from '../../common/Card/CardView';

const ShowUserAnnoucments = () => {

  const user = useSelector(getUser);
  const userEmail = user.email;

  const annoucments = useSelector(state => getUserAnnoucments(state, userEmail));

  return (
    <CardView annoucments={annoucments} />  
  );
};

export default ShowUserAnnoucments;