const express = require('express');
const router = express.Router();

const Annoucment = require('../models/annoucment.model');

router.get('/annoucments', async (req, res) => {
  try {
    const result = await Annoucment
      .find({status : 'published'});
    if(!result) res.status(404).json({ annoucment: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/annoucments/:id', async (req, res) => {
  try {
    const result = await Annoucment
      .findById(req.params.id);
    if(!result) res.status(404).json({ annoucment: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/annoucments', async (req,res) => {
  try {
    const { title, text, publicationDate, email, status } = req.body;

    if(title && text && publicationDate && email && status) {

      const clearTitle = title.replace(/(<([^>]+)>)/gi, '');
      const clearText = text.replace(/(<([^>]+)>)/gi, '');

      const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if (!email.match(mailFormat)){
        throw new Error('Invalid e-mail address');
      }
      
      const newAnnoucment = new Annoucment({
        title: clearTitle,
        text: clearText,
        email: email,
        publicationDate : publicationDate,
        modyficationDate: '',
        status: status,
      });

      await newAnnoucment.save();
      res.json(newAnnoucment);

    } else {
      throw new Error('Some fields is empty');
    }

  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.put('/annoucments/:id', async (req, res) => {
  try {
    const { title, text, publicationDate, modyficationDate, email, status } = req.body;

    const annoucmentId = await Annoucment.findById(req.params.id);

    if(annoucmentId) {
      if(title && text && publicationDate && modyficationDate && email && status) {

        const clearTitle = title.replace(/(<([^>]+)>)/gi, '');
        const clearText = text.replace(/(<([^>]+)>)/gi, '');

        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
        if (!email.match(mailFormat)){
          throw new Error('Invalid e-mail address');
        }

        await Annoucment.updateOne({ _id: req.params.id }, { 
          $set: { 
            title: clearTitle,
            text: clearText,
            publicationDate: publicationDate,
            modyficationDate: modyficationDate,
            email: email,
            status: status,
          },
        });

        const result = await Annoucment.findById(req.params.id);

        res.json(result);
      } else {
        throw new Error ('Some fields are empty');
      }
    } else {
      throw new Error('Annoucment not found');
    }

  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
