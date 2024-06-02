import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name to styleUrls
})
export class AppComponent {
  constructor(){}
  selectedComponent: string = 'none'
  title = 'UpdateCerifcate';
}
