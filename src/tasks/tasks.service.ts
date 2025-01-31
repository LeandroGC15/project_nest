import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

 @Get()
 getTasks(){
    return 'This action returns all tasks';
 }
}
