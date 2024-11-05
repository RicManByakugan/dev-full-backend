import { Injectable, NotFoundException } from '@nestjs/common';
import { ToDo } from './entity/Todo.entity';
import { AddTodoDTO } from './dto/add-todo.dto';

@Injectable()
export class TodoService {
    private todos: ToDo[] = [];

    findAll(): ToDo[] {
        return this.todos;
    }

    findById(id: number): ToDo {
        const todo = this.todos.find(todo => todo.id == id)
        if (todo)
            return todo;
        throw new NotFoundException("Todo not found");
    }

    delete(id: number) {
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

    update(id: number, todoDto: Partial<ToDo>): ToDo {
        const index = this.todos.findIndex(todo => todo.id == id);
        if (index === -1) {
            throw new NotFoundException("Todo not found");
        }
        this.todos[index] = {
            ...this.todos[index],
            ...todoDto
        }
        return this.todos[index];
    }

    create(todoDto: AddTodoDTO) {
        const todo = new ToDo()
        const {name, email} = todoDto;
        todo.name = name
        todo.email = email
        todo.created = new Date();
        if(this.todos.length){
            todo.id = this.todos[this.todos.length - 1].id + 1;
        }else{
            todo.id = 1;
        }
        this.todos.push(todo);
        return todo;
    }
}
