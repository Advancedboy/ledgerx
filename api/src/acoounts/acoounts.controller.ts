import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcoountsService } from './acoounts.service';
import { CreateAcoountDto } from './dto/create-acoount.dto';
import { UpdateAcoountDto } from './dto/update-acoount.dto';

@Controller('acoounts')
export class AcoountsController {
  constructor(private readonly acoountsService: AcoountsService) {}

  @Post()
  create(@Body() createAcoountDto: CreateAcoountDto) {
    return this.acoountsService.create(createAcoountDto);
  }

  @Get()
  findAll() {
    return this.acoountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acoountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcoountDto: UpdateAcoountDto) {
    return this.acoountsService.update(+id, updateAcoountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acoountsService.remove(+id);
  }
}
