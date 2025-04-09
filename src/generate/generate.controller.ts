import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenerateService } from './generate.service';

@Controller('generate')
export class GenerateController {
  constructor(private readonly appService: GenerateService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getTikz(@Body() dataDTO: { input: string }) {
    return this.appService.getTikz(dataDTO);
  }
}
