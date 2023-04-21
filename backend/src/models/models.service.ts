import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelsService {
  constructor(@InjectRepository(Model) private ModelRepository:Repository<Model>){

  }

  create(newM: CreateModelDto) {
    
    const newModel = this.ModelRepository.create(newM)
    return this.ModelRepository.save(newModel);
  }

  async findAll() {
    const allModels= await this.ModelRepository.find({relations:['Product']})
    return allModels;
  }

  findOne(id: number) {
    return `This action returns a #${id} model`;
  }

  update(id: number, updateModelDto: UpdateModelDto) {
    return `This action updates a #${id} model`;
  }

  remove(id: number) {
    return `This action removes a #${id} model`;
  }
}
