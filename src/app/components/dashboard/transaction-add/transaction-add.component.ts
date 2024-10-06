import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PoDynamicFormComponent, PoDynamicFormField, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrl: './transaction-add.component.scss'
})
export class TransactionAddComponent implements OnInit{
  @ViewChild('dynamicForm', {static: true}) poDynamic : PoDynamicFormComponent 
  @Output() createNewTransaction: EventEmitter<any> = new EventEmitter()
  fields: Array<PoDynamicFormField> = []
  options: Array<PoSelectOption> = [
    {label: 'Gasto', value: 'expense'},
    {label: 'Receita', value: 'income'},
  ]

  ngOnInit(): void {
    this.fields = [
      { gridColumns: 12, property: 'description', label: 'Descrição', required: true, showRequired: true },
      { gridColumns: 12,property: 'amount', label: 'Valor', required: true, showRequired: true, type: 'currency'},
      { gridColumns: 6,property: 'type', label: 'Tipo', required: true, showRequired: true, options: this.options },
      { gridColumns: 6,property: 'category', label: 'Categoria', required: true, showRequired: true}
    ]
  }

  create(){    
    this.createNewTransaction.emit(this.poDynamic.form.value)
  }

  handleDisabled(): boolean{
    return this.poDynamic.form.invalid
  }


}
