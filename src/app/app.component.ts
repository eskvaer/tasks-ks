import {Component, OnInit} from '@angular/core';
import {ToDoListService} from '../../services/to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'to-do-list';

  constructor(
    private taskService: ToDoListService,
  ) {}

  ngOnInit(): any {
    this.taskService.addNumbers();
  }
}
