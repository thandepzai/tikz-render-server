import tex2svg from 'node-tikzjax';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateService {
  getHello(): string {
    return 'Hello World! 123123 123 1231234 hehe';
  }

  async getTikz(data: { input: string }): Promise<{ svg: string }> {
    const { input } = data;
    try {
      const svg = await tex2svg(input, { showConsole: true });
      return { svg };
    } catch (error) {
      throw new Error('Error generating TikZ: ' + error);
    }
  }
}
