import { Controller, Get, Render } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    @Render('index')
    root () {
        return { message: 'Hello world!' };
    }
}
