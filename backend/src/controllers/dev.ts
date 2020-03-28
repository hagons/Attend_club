import { RequestHandler } from 'express';

export const dev: RequestHandler = (req, res) => {
  res.json({ dev: 1 });
};
