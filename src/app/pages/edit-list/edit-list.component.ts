import { TaskService } from './../../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router,private taskService:TaskService) { }

  listId:string;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params.listId;
        console.log(params.listId);
      }
    )
  }

  updateList(title: string) {
    this.taskService.updateList(this.listId, title).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  
  }

}
