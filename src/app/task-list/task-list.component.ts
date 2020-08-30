import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Tasks} from '../to-do-list.model';
import {ToDoListService} from '../../services/to-do-list.service';

/**
 * @title Table with selection
 */
@Component({
  selector: 'to-do-list.component',
  styleUrls: ['./task-list.component.css'],
  templateUrl: './task-list.component.html',
})

export class TableSelectionExampleComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'date', 'isDone'];
  dataSource = new MatTableDataSource<Tasks>([]);
  selection = new SelectionModel<Tasks>(true, []);

  ngOnInit(): any {
    this.taskService.getTasks()
      .then(data => {
        this.dataSource = new MatTableDataSource<Tasks>(data.data);
      });
  }

  constructor(
    private router: Router,
    private taskService: ToDoListService
  ) {
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  onEdit(id): any {
    this.router.navigateByUrl(`/edit/${id}`);
  }
}
