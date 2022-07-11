import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CardView = ({ annoucments }) => {
  return (
    <div>
      {annoucments.map(annoucment => 
        <Card key={annoucment._id} className='mt-5' border='secondary'>
          <Card.Header>{annoucment.title}</Card.Header>
          <Card.Body>
            <Card.Text>
              {annoucment.text}
            </Card.Text>
            <a href={'/post/' + annoucment._id}><Button variant="dark">Show more</Button></a>
          </Card.Body>
          <Card.Footer className="text-muted">
            {annoucment.modyficationDate === '' ? <p>Created date: {annoucment.publicationDate}</p> : <p>Modyfication date: {annoucment.modyficationDate}</p>}
          </Card.Footer>
        </Card>
      )}
    </div>
  );
};

CardView.propTypes = {
  annoucments: PropTypes.array,
};

export default CardView;
