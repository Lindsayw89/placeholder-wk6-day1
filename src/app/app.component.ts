import { Component, OnInit,ViewChild } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import {MatTableDataSource } from '@angular/material';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource;
  @ViewChild(MatSort , {static: true}) sort : MatSort; //
  constructor(private placeholderService : PlaceholderService){}
 

async ngOnInit() {
this.dataSource= await this.placeholderService.get();
this.dataSource.sort= this.sort;
}
applyFilter(filterValue: string){
  this.dataSource.filter=filterValue.trim().toLocaleLowerCase();


}
}



