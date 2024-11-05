import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('todo')
export class TodoController {
    @Get("all")
    getTodos(
        @Req() request: Request,
        @Res() response: Response
    ) {
        console.log("Req", request);
        console.log("Res", response);
        response.status(200);
        response.json({
            message: "Get all todos"
        })
    }

    @Get("")
    getOneTodo() {
        return "One"
    }
}
