import { Component } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private placeholderService : PlaceholderService){}
  
  title = 'PlaceHolder';
}
