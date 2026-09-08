import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    const dto = plainToClass(req.dto, req.body);
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    next();
  }
}