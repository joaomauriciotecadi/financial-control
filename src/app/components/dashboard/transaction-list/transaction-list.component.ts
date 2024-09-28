import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../interfaces/transaction';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent implements OnInit {
  items: Array<Transaction> = []

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.transaction$.subscribe({
      next: (data) => {
        this.items = data
      }
    })

    this.transactionService.loadTransactions()
  }

  formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };
  
}


