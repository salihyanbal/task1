import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columnNames: string[] = [];
  @Input() data: any[] = [];
  @Input() paginationCount: number;
  @Output() deleteButtonFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateButtonFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowClickFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() paginationFunction: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  deleteButtonEvent(item: any) {
    this.deleteButtonFunction.emit(item);
  }

  updateButtonEvent(item: any) {
    this.updateButtonFunction.emit(item);
  }

  rowClickEvent(item: any) {
    if (this.rowClickFunction) {
      this.rowClickFunction.emit(item);
    }
  }

  paginationEvent(pageEvent: PageEvent) {
    if (this.paginationFunction) {
      this.paginationFunction.emit(pageEvent);
    }
  }
}
