import React, { useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './FormContainer.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { getUser } from '../../../redux/userReducer';
import PropTypes from 'prop-types';
import { getCurrentDate } from '../../../utils/getCurrentDate';

const FormContainer = ({ action, annoucment, type }) => {

  const [ title, setTitle ] = useState('');
  const [ text, setText ] = useState('');
  const [ status, setStatus ] = useState('Set value');
  const [ createdDate, setCreatedDate ] = useState('');

  const [ titleError, setTitleError] = useState(false);
  const [ textError, setTextError] = useState(false);
  const [ statusError, setStatusError] = useState(false);

  const user = useSelector(getUser);

  useEffect(() => {
    if (annoucment !== undefined){
      setTitle(annoucment.title);
      setText(annoucment.text);
      setStatus(annoucment.status);
      setCreatedDate(annoucment.publicationDate);
    }
    console.log(annoucment);
  },[]);

  const checkTitle = e => {
    const title = e.target.value;
    const length = title.length;
    if (length < 21){
      setTitleError(true);
    } else {
      setTitleError(false);
      setTitle(title);
    }    
  };
  
  const checkText = e => {
    const textarea = e.target.value;
    const length = textarea.length;
    if (length < 51){
      setTextError(true);
    } else {
      setTextError(false);
      setText(textarea);
    }
  };

  const checkStatus = e => {
    const status = e.target.value;
    if (status === 'Set status'){
      setStatusError(true);
    } else {
      setStatusError(false);
      setStatus(status);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (titleError === false && title !== '' && textError === false && text !== '' && statusError === false && status !== 'Set status'){
      
      let dateModyfication = '';
      let dateCreated = '';
      
      if (type === 'Edit'){
        dateCreated = createdDate;
        dateModyfication = getCurrentDate();
      } else {
        dateCreated = getCurrentDate();
      }
      
      const annoucment = {
        title: title,
        text: text,
        status: status,
        publicationDate: dateCreated,
        modyficationDate: dateModyfication,
        email: user.email,
      };
      
      action(annoucment);
    
    } else {
      console.log('error');
    }
  };

  return(
    <div className={styles.container}>
      
      <Form>
        
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control variant='danger' type="text" placeholder="Enter title" className={clsx(titleError && 'is-invalid')} onChange={e => checkTitle(e)} defaultValue={title} />
          {titleError === true ? <Alert variant='danger' className={styles.alert}>Min title lenght is 20 chars!</Alert>:''}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter annoucments</Form.Label>
          <Form.Control as="textarea" rows={3} className={clsx(textError && 'is-invalid')} onChange={e => checkText(e)} defaultValue={text} />
          {textError === true ? <Alert variant='danger' className={styles.alert}>Min annoucment lenght is 50 chars!</Alert>:''}
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Select className={clsx(statusError && 'is-invalid')} onChange={e => checkStatus(e)} defaultValue='status'>
            <option>Set status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="closed">Closed</option>
          </Form.Select>
          {statusError === true ? <Alert variant='danger' className={styles.alert}>Please select status!</Alert>:''}
        </Form.Group>

        <Button variant="primary" type="button" onClick={e => handleSubmit(e)}>
          {type}
        </Button>

      </Form>

    </div>
  );
};

FormContainer.propTypes = {
  action: PropTypes.func,
  annoucment: PropTypes.object,
  type: PropTypes.string,
};

export default FormContainer;