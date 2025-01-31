import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TaskController{

    constructor(private tasksService: TasksService){}

    @Get('/task')
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Post('/tasks')
    createTasks(){
      return 'creando tareas'
        // return this.tasksService.getTasks();
    }

    @Put('/tasks')
    updateTasks(){
      return 'actualizando tareas'
        // return this.tasksService.getTasks();
    }

    @Delete('/task')
    deleteTask(){
        return 'eliminando tarea'
    }

    @Patch('/task')
    patchTask(){
        return 'update time task'
    }
   
}