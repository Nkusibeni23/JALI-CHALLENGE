import { Component } from '@angular/core';
import { LoanComponent } from '../../components/loan/loan.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [LoanComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showApplyLoan = true;
  loanHistory = [
    { id: 1, amount: 1000, status: 'Pending' },
    { id: 2, amount: 2000, status: 'Approved' },
    { id: 3, amount: 1500, status: 'Rejected' },
  ];

  toggleView(view: string): void {
    this.showApplyLoan = view === 'apply';
  }
}
