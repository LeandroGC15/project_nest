import { Body, Controller, Delete, Get, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController{

    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(@Query() query:any){
        return this.tasksService.getTasks();
    }


    @Get('/:id')
    getAllTask(){
        return this.tasksService.getTask(2);
    }
 
 

    @Post('/tasks')
    createTasks(@Body() task:any){
      return this.tasksService.createTask(task);
        // return this.tasksService.getTasks();
    }

    @Put('/tasks')
    updateTasks(){
      return 'actualizando tareas'
        // return this.tasksService.getTasks();
    }

    @Delete('/tasks')
    deleteTask(){
        return 'eliminando tarea'
    }

    @Patch('/tasks')
    patchTask(){
        return 'update time task'
    }
   
}