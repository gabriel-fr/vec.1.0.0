import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import { Content } from '../models/Content';
import contentView from '../views/content_view';

export default {
  async index(request: Request, response: Response) {
    try {
      const contentRepository = getRepository(Content);

      const content = await contentRepository.findOne();

      if(content === undefined){
        return response.status(404).json({ "Vazio": "Nenhum Conteúdo" });
      }else{
        return response.json(contentView.render(content));
      }
    }catch(err){
      return response.status(400).json({ "Erro": err });
    }
  },

  async create(request: Request, response: Response) {
    try {
      var {
        emphasis,
        footer,
        globals
      } = request.body;

      const contentsRepository = getRepository(Content);
      
      const data : any = {
        emphasis,
        footer,
        globals
      };

      const schema = Yup.object().shape({
        emphasis: Yup.string().required(),
        footer: Yup.object().shape({
          text: Yup.string().required(),
          link1: Yup.string().required(),
          link2: Yup.string().required(),
          link3: Yup.string().required(),
          link4: Yup.string().required()
        }),
        globals: Yup.array(
          Yup.object().shape({
            title: Yup.string().required(),
            subtitle: Yup.string().required(),
            img1: Yup.string().required(),
            title2: Yup.string().required(),
            subtitle2: Yup.string().required(),
            img2: Yup.string().required(),
            datetime: Yup.date().default(() => new Date()),
            signature: Yup.string().required()
          })
        )
      });

      await schema.validate(data, {
        abortEarly: false
      })

      const contentRepository = contentsRepository.create(data);

      await contentsRepository.save(contentRepository);

      return response.status(201).json(contentRepository);

    }catch(err){
      return response.status(400).json({ "Erro": err });
    }
  }
}