import { Component, ViewChild } from '@angular/core';
import { PoPageSlideComponent } from '@po-ui/ng-components';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../interfaces/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild('newTransactionModal', {static: true}) poModalNew: PoPageSlideComponent

  constructor(private transactionService: TransactionService){

  }
  createNewTransaction(e: Transaction){
    this.poModalNew.close()  
    this.transactionService.addTransaction(e)    
  }
}
