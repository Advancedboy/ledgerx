import { Injectable } from '@nestjs/common';
import { CreateAcoountDto } from './dto/create-acoount.dto';
import { UpdateAcoountDto } from './dto/update-acoount.dto';

@Injectable()
export class AcoountsService {
  create(createAcoountDto: CreateAcoountDto) {
    return 'This action adds a new acoount';
  }

  findAll() {
    return `This action returns all acoounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acoount`;
  }

  update(id: number, updateAcoountDto: UpdateAcoountDto) {
    return `This action updates a #${id} acoount`;
  }

  remove(id: number) {
    return `This action removes a #${id} acoount`;
  }
}
