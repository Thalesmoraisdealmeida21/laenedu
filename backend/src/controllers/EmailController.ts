import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Email from '../models/Email';
import EmailViews from '../views/email _views';

export default {
  async index(request: Request, response: Response) {
    const emailRepository = getRepository(Email);

    const emails = await emailRepository.find();

    return response.json(EmailViews.renderMany(emails));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    
    const emailRepository = getRepository(Email);

    const email = await emailRepository.findOneOrFail(id);

    return response.json(EmailViews.render(email));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      email,
    } = request.body;
    
    const emailRepository = getRepository(Email);
    
    const data = {
      name,
      email,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const emails = emailRepository.create(data);
    
    await emailRepository.save(emails);
    
    return response.status(201).json(emails);
  }
};
