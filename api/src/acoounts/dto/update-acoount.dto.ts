import { PartialType } from '@nestjs/mapped-types';
import { CreateAcoountDto } from './create-acoount.dto';

export class UpdateAcoountDto extends PartialType(CreateAcoountDto) {}
