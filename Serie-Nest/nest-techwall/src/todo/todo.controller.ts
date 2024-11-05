import { Body, Controller, Get, Post, Req, Res, Param, NotFoundException, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { ToDo } from './entity/Todo.entity';

@Controller('todo')
export class TodoController {

    private todos: ToDo[] = [];

    @Get('gettodo/:id/:autre')
    getTodoById(
        @Param() param,
        @Param('id') id
    ) {
        console.log("Get todo by " + param.id + " avec autre " + param.autre);
        const todo = this.todos.find(todo => todo.id == id)
        if (todo)
            return todo;
        throw new NotFoundException("Todo not found");
    }

    @Get("alltodo")
    getAllTodos(
        @Query() query
    ) {
        console.log("Query", query);
        return this.todos;
    }

    @Post("addtodo")
    addTodo(
        @Body() body: ToDo
    ) {
        if (body.id === undefined) {
            body.id = this.todos[this.todos.length - 1].id + 1;
        } else {
            body.id = 1
        }
        this.todos.push(body);
        return this.todos;
    }

    @Post("updatetodo/:id")
    updateTodo(
        @Param('id') id,
        @Body() body: Partial<ToDo>
    ){
        console.log("id", id);
        console.log("body", id);
        const index = this.todos.findIndex(todo => todo.id == id);
        if (index === -1) {
            throw new NotFoundException("Todo not found");
        }
        this.todos[index] = {
            ...this.todos[index],
            ...body
        }
        return this.todos[index];
    }

    @Post("deletetodo/:id")
    deleteTodo(
        @Param('id') id
    ) {
        const index = this.todos.findIndex(todo => todo.id == id);
        if (index === -1) {
            throw new NotFoundException("Todo not found");
        }
        // this.todos = this.todos.filter(todo => todo.id != id);
        this.todos.splice(index, 1);
        return {
            message: "Delete todo",
            todos: id
        };
    }

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
