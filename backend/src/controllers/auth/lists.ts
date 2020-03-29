import { RequestHandler } from 'express';

export const lists: RequestHandler = (req, res) => {
  const name = req.params.name;
  const excel = req.params.excel;
  res.json({
    name: name,
    excel: excel
  });
};
