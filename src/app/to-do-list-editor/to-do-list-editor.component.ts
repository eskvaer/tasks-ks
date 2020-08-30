import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToDoListService} from '../../services/to-do-list.service';

@Component({
  selector: 'to-do-list-editor',
  templateUrl: './to-do-list-editor.component.html',
  styleUrls: ['./to-do-list-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {
  taskId = null;
  form = this.fb.group({
    number: [null],
    name: ['', Validators.required],
    date: [''],
    description: [''],
    isDone: [false],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private taskService: ToDoListService,
    private router: Router
  ) {
  }

  ngOnInit(): any {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (!taskId) {
      return;
    }
    this.taskId = taskId;
    this.updateForm();
  }


  updateForm(): any {
    this.taskService.getTask(this.taskId)
      .then(data => {
        const task = data.data;
        this.form = new FormGroup({
          number: new FormControl(task.number),
          name: new FormControl(task.name, Validators.required),
          description: new FormControl(task.description),
          date: new FormControl(task.date),
          isDone: new FormControl(task.isDone),
        });
      });
  }

  async onSubmit(): Promise<any> {
    if (this.taskId) {
      await this.taskService.updateTask(this.taskId, this.form.value);
    } else {
      await this.taskService.createTask(this.form.value);
    }
    await this.router.navigateByUrl('/');
  }
}
