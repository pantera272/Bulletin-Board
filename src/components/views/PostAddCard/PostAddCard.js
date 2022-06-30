import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import styles from './PostAddCard.module.scss';

const PostAddCard = () => (
  <div className={styles.container}>
    <Card className='text-center' border='primary'>
      <Card.Header>Add annoucment</Card.Header>
      <Card.Body>
        <Card.Text>
          Start add your annoucment!
        </Card.Text>
        <a href='/postadd'><Button variant='white'>Add annoucment</Button></a>
      </Card.Body>
    </Card>
  </div>
);

export default PostAddCard;