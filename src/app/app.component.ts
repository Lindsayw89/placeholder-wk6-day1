import { Component } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import {MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private placeholderService : PlaceholderService){}
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource;

async ngOnInit() {
this.dataSource= await this.placeholderService.get();
}


}



