import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { BehaviorSubject, Observable } from 'rxjs';

const transactions: Transaction[] = [
  {
    id: 1,
    amount: 150.75,
    date: new Date('2024-09-01'),
    description: 'Compra de supermercado',
    category: 'Alimentação',
    type: 'expense',
    paymentMethod: 'Cartão de Débito',
    account: 'Conta Corrente',
    status: 'confirmed'
  },
  {
    id: 2,
    amount: 2000.00,
    date: new Date('2024-09-03'),
    description: 'Salário',
    category: 'Receitas',
    type: 'income',
    paymentMethod: 'Transferência Bancária',
    account: 'Conta Corrente',
    status: 'confirmed'
  },
  {
    id: 3,
    amount: 50.00,
    date: new Date('2024-09-05'),
    description: 'Almoço com colegas',
    category: 'Lazer',
    type: 'expense',
    paymentMethod: 'Dinheiro',
    account: 'Dinheiro em espécie',
    status: 'pending'
  },
  {
    id: 4,
    amount: 300.00,
    date: new Date('2024-09-07'),
    description: 'Compra de livros',
    category: 'Educação',
    type: 'expense',
    paymentMethod: 'Cartão de Crédito',
    account: 'Conta Poupança',
    status: 'confirmed'
  },
  {
    id: 5,
    amount: 120.00,
    date: new Date('2024-09-10'),
    description: 'Manutenção de carro',
    category: 'Transporte',
    type: 'expense',
    paymentMethod: 'Cartão de Débito',
    account: 'Conta Corrente',
    status: 'confirmed'
  },
  {
    id: 6,
    amount: 80.00,
    date: new Date('2024-09-15'),
    description: 'Café com amigos',
    category: 'Lazer',
    type: 'expense',
    paymentMethod: 'Cartão de Crédito',
    account: 'Conta Corrente',
    status: 'pending'
  },
  {
    id: 7,
    amount: 500.00,
    date: new Date('2024-09-20'),
    description: 'Venda de produtos',
    category: 'Receitas',
    type: 'income',
    paymentMethod: 'Pix',
    account: 'Conta Corrente',
    status: 'confirmed'
  }
];

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionSubject: BehaviorSubject<Array<Transaction>> = new BehaviorSubject<Array<Transaction>>([])

  transaction$: Observable<Array<Transaction>> = this.transactionSubject.asObservable()

  constructor() { }

  loadTransactions(): void {
    this.transactionSubject.next(transactions)
  }


}



