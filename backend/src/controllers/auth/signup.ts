import { custumDate, queryWrapper } from '../../lib';
import { RequestHandler } from 'express';

export const signup: RequestHandler = (req, res) => {
  const { joinName, joinType } = req.body;
  if (!joinName) {
    console.log(custumDate(), 'Error insert require empty');
    throw res.status(500).json({
      msg: 'Name is empty'
    });
  }
  if (!joinType) {
    console.log(custumDate(), 'Error insert require empty');
    throw res.status(500).json({
      msg: 'Type is empty'
    });
  }

  queryWrapper('insert into mac_member (name) value (?)', joinName)
    .then(queryRes => {
      console.log(custumDate(), 'Insert: ', queryRes);
      res.send({ msg: joinName + ' has inserted' });
    })
    .catch(err => {
      console.log(custumDate(), 'Error insert server: ', err);
      throw res.status(500).json({ msg: 'Server error' });
    });
};
