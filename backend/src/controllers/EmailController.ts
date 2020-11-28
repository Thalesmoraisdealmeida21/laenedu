import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Email from '../models/Email';

export default {
  async index(request: Request, response: Response) {
    const emailRepository = getRepository(Email);

    const emails = await emailRepository.find();

    return response.json(emails);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    
    const emailRepository = getRepository(Email);

    const email = await emailRepository.findOneOrFail(id);

    return response.json(email);
  },

  async create(request: Request, response: Response) {
    const {
      id,
      name,
      email,
    } = request.body;
    
    const emailRepository = getRepository(Email);
    
    const emails = emailRepository.create({
      id,
      name,
      email,
    });
    
    await emailRepository.save(emails);
    
    return response.status(201).json(emails);
  }
};
