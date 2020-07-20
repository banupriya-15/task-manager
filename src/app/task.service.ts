import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  WebReqService: any;
 
  constructor(private webReqService : WebRequestService) { }


  getLists()
  {
    return this.webReqService.get('lists');
  }
  
  createList(title : string){
    return this.webReqService.post('lists',{title});
  }
  
  
  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  updateTask(listId: string, taskId: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  getTasks(listId: string)
  {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title : string, listId:string){
    return this.webReqService.post(`lists/${listId}/tasks`,{title});
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }


  complete(task : Task)
  {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
         completed:!task.completed
    })
  }

}

