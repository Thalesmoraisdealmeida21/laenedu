import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Bootcamps from '../models/Bootcamps';

export default {
  async index(request: Request, response: Response) {
    const bootcampsRepository = getRepository(Bootcamps);

    const bootcamps = await bootcampsRepository.find();

    return response.json(bootcamps);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    
    const bootcampsRepository = getRepository(Bootcamps);

    const bootcamp = await bootcampsRepository.findOneOrFail(id);

    return response.json(bootcamp);
  },

  async create(request: Request, response: Response) {
    const {
      id,
      bootcamp_name,
      description,
    } = request.body;
    
    const bootcampsRepository = getRepository(Bootcamps);
    
    const bootcamps = bootcampsRepository.create({
      id,
      bootcamp_name,
      description,
    });
    
    await bootcampsRepository.save(bootcamps);
    
    return response.status(201).json(bootcamps);
  }
};
