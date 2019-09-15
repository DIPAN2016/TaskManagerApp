import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from 'src/app/service/TaskManager.Service';
import { Itask } from 'src/app/taskmodel/Itask';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  errorMessage = '';
  prntTask: string;
  pageTitle: string = "Add Task";
  tasks: Itask;
  formUser = {};
  items = [];
  display = 'none';
  parentTaskdisplay = 'none';
  constructor(private taskmanagerService: TaskManagerService, private router: Router,
  ) {

  }

  ngOnInit() {

  }  
  selectedItem: any = { id: '', name: '', filterby: '' };
  onSelect(manager): void {
    console.log(manager);
    this.selectedItem = manager;
  }
  
  onCloseHandled() {
    this.display = 'none';
  }

  public onSubmit(frm, form) {
    console.log(form);

    this.tasks = {
      TaskId: null, ParentTask: form.parentTask, Task: form.taskDetail, Project: form.projectname,
      StartDate: form.startDate, EndDate: form.endDate, User: form.username, Status: null,
      Priority: form.priority
    };

    this.taskmanagerService.addTaskManagerDetails(this.tasks).subscribe(
      taskList => {
        alert("The Records has succussfully saved.")
        frm.reset();
      });
  }


  public onResetClick(frm, form) {
    frm.reset();
  }
}


