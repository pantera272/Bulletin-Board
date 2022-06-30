import React from 'react';
import { useSelector } from 'react-redux';
import { getAllAnnoucments } from '../../../redux/annoucmentsReducer';
import CardView from '../../common/Card/CardView';

const ShowAllAnnoucments = () => {

  const annoucments = useSelector(getAllAnnoucments);
  
  return (
    <CardView annoucments={annoucments} />
  );
};

export default ShowAllAnnoucments;