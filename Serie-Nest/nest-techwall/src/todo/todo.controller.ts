import { Body, Controller, Get, Post, Req, Res, Param, NotFoundException, Query, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ToDo } from './entity/Todo.entity';
import { AddTodoDTO } from './dto/add-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {}

    @Get('gettodo/:id/:autre')
    getTodoById(
        @Param() param,
        @Param('id') id
    ) {
        console.log("Get todo by " + param.id + " avec autre " + param.autre);
        return this.todoService.findById(id);
    }

    @Get("alltodo")
    getAllTodos(
        @Query() query
    ) {
        console.log("Query", query);
        return this.todoService.findAll();
    }

    @Post("addtodo")
    addTodo(
        @Body() body: AddTodoDTO
    ) {
        const todo = this.todoService.create(body);
        return todo;
    }

    @Post("updatetodo/:id")
    updateTodo(
        @Param('id') id,
        @Body() body: Partial<ToDo>
    ){
        console.log("id", id);
        console.log("body", id);
        return this.todoService.update(id, body);
    }

    @Post("deletetodo/:id")
    deleteTodo(
        @Param('id', new ParseIntPipe({
            errorHttpStatusCode: HttpStatus.NOT_FOUND,
            
        })) id
        // @Param('id', ParseIntPipe) id
    ) {
        console.log(typeof id);
        return this.todoService.delete(id);
        // return this.todoService.delete(+id);
    }

    // END CRUD

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

    @Post("add")
    addTodoTest(
        @Body() body: ToDo,
        @Body("id") id
    ) {
        console.log("Body", body);
        console.log("Id", id);
        return "Add"
    }


}
