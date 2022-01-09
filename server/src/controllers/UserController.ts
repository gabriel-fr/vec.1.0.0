import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';

import { salt } from '../config/credentials';

import { User } from '../models/User';
import userView from '../views/user_view';

export default {
  async index(request: Request, response: Response) {
    try {
      const usersRepository = getRepository(User);

      const users = await usersRepository.find();
  
      if(users.length === 0){
        return response.status(204).json({ "Vazio": "Nenhum Usuário Cadastrado" });
      }else{
        return response.json(userView.renderMany(users));
      }
    }catch(err){
      return response.status(400).json({ "Erro": err });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { email } = request.params;
      const usersRepository = getRepository(User);
      const user = await usersRepository.findOne({
        where: {
          email: email
        }
      });

      if(user === undefined){
        return response.status(404).json({ "Erro": "Nenhuma Ordem Cadastrada com este email" });
      }else{
        return response.json(userView.render(user));
      }
    }catch(err){
      return response.status(400).json({ "Erro": err });
    }
  },

  async create(request: Request, response: Response) {
    try {
      var {
        password,
        email,
        profile
      } = request.body;

      if(password === '' || email === '' || profile === ''){
        return response.status(400).json({ "Erro" : "O parâmetro não pode ser vazio" });
      }else{
        const usersRepository = getRepository(User);

        const existUser = await usersRepository.findOne({
          where: {
            email: email
          }
        });

        if(existUser === undefined){

          // vambém Verificar se nao existe o mesmo nome.
          const saltEncrypted = await bcrypt.genSalt(salt);
          const hash = await bcrypt.hash(password, saltEncrypted);

          const data : any = {
            password: hash,
            email,
            profile
          };

          const schema = Yup.object().shape({
            password: Yup.string().required(),
            email: Yup.string().required(),
            profile: Yup.array(
              Yup.object().shape({
                name: Yup.string().required(),
                subtext: Yup.string().required(),
                image: Yup.string().required(),
                bibles: Yup.string().required()
              })
            )
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          const userRepository = usersRepository.create(data);
          await usersRepository.save(userRepository);

          return response.status(201).json(usersRepository);
        }else{
          return response.status(409).json({ "Erro": "Email já cadastrado" });
        }
      }
    }catch(err){
      return response.status(400).json({ "Erro": err });
    }
  },

  async delete(request: Request, response: Response) {
    try{
      var {
        email
      } = request.params;

      const usersRepository = getRepository(User);

      const existUser = await usersRepository.find({
        where: {
          email: email
        }
      });

      if(existUser.length <= 0){
        return response.status(404).json({ "Erro": "Nenhum cliente com este Email" });
      }else{
        await usersRepository.remove(existUser);
      }
    }catch(err){
      return response.status(400).json({ "Erro" : err });
    }
  },

  async edit(request: Request, response: Response) {
    try{
      const { email } = request.params;
      var {
        profile
      } = request.body;

      const usersRepository = getRepository(User);

      const existUser = await usersRepository.findOne({
        where: {
          email: email
        }
      });

      if(existUser === undefined){
        return response.status(404).json({ "Erro" : 'Nenhum Usuário com Este Email' });
      }else{
        existUser.profile = profile;
        await usersRepository.save(existUser);
        return response.status(200).json(existUser);
      }
    }catch(err){
      return response.status(400).json({ "Erro" : err });
    }
  }
}