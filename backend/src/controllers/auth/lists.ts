import { RequestHandler } from 'express';
import urlencode from 'urlencode';

export const lists: RequestHandler = (req, res) => {
  const name = urlencode.decode(req.params.name);
  const excel = urlencode.decode(req.params.excel);
  res.json({
    name: name,
    excel: excel
  });
};
