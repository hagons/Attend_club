import { Router as router } from 'express';
import v1 from './v1';

const route = router();

route.use('/v1', v1);
route.all('*', (req, res) => {
  res.status(400).send('Not found');
});

export default route;
