import { Component } from '@angular/core';
import { Item } from './models/item.model';
import { PaymentService } from 'src/app/services/payment.service';

declare const walletPay: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalValue: number;
  selectedItem: Item;
  items: Item[];
  // Variável para simular o que deve ser enviado no Payload
  itemPayload: any;

  constructor(private paymentService: PaymentService) {
    this.items = [
      { title: 'televisão 48', description: 'TV LG 48 Poledas 4K', quantity: 1, currency_id: 'BRL', unit_price: 1800 },
      { title: 'Home Theater', description: 'Home Theater Samsung 1000w', quantity: 1, currency_id: 'BRL', unit_price: 1500 },
      { title: 'Microondas', description: 'Microondas 30L Eletrolux', quantity: 1, currency_id: 'BRL', unit_price: 600 },
      { title: 'MacBook Pro 2019', description: 'MacBook Pro I7 16GB SSD 500GB', quantity: 1, currency_id: 'BRL', unit_price: 9000 }
    ];
    this.selectedItem = this.items[0];
    this.totalValue = this.selectedItem.unit_price;
    this.itemPayload = { items: [this.selectedItem] };
  }

  // Exibe na tabela o item selecionado no comboBox
  chosenItem(event: string): void {
    this.selectedItem = JSON.parse(event);
    this.totalValue = this.selectedItem.unit_price;
    this.itemPayload = { items: [this.selectedItem] };
  }

  // Calcula o valor unitário multiplicado pela quantidade de items informados
  calculateValue(valor: number) {
    this.totalValue = valor * this.selectedItem.unit_price;
    this.selectedItem.quantity = valor * 1;
  }

  // Chama o botão Wallet do MP, passando como parâmetro o preferenceId gerado
  setPayment() {
    this.paymentService.setPayment(this.itemPayload).subscribe((val) => {
      walletPay(val.id);
    }, () => {});
  }

}
