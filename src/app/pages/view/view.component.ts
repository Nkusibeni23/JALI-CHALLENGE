import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  loans = [
    {
      id: 1,
      name: 'Benny Chrispin',
      amount: 1000,
      status: 'Approved',
      date: '2023-01-01',
      interest: '5%',
    },
    {
      id: 2,
      name: 'Chrispin Benny',
      amount: 2000,
      status: 'Declined',
      date: '2023-02-01',
      interest: '6%',
    },
    {
      id: 3,
      name: 'JALI GROUP',
      amount: 1500,
      status: 'Approved',
      date: '2023-03-01',
      interest: '4.5%',
    },
  ];
}
