import { Component } from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [ViewComponent, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {}
