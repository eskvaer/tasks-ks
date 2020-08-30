import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Tasks} from '../to-do-list.model';
import {ToDoListService} from '../../services/to-do-list.service';

@Component({
  selector: 'task-list',
  styleUrls: ['./task-list.component.css'],
  templateUrl: './task-list.component.html',
})

export class TableSelectionExampleComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'date', 'isDone'];
  dataSource: any = new MatTableDataSource<Tasks>([]);
  selection: any = new SelectionModel<Tasks>(true, []);

  constructor(
    private router: Router,
    private taskService: ToDoListService
  ) {}

  ngOnInit(): any {
    this.taskService.getTasks()
      .then(data => {
        this.dataSource = new MatTableDataSource<Tasks>(data.data);
      });
  }

  onEdit(id): any {
    this.router.navigateByUrl(`/edit/${id}`);
  }
}
