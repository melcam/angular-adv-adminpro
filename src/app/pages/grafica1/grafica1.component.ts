import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public title1: string = 'No title';
  public labels1: string[] = [
    'Ingreso',
    'Tienda',
    'Ventas',
  ];
  public labels2: string[] = [
    'Pedido',
    'Pagado',
    'Recibido',
  ];
  public data1 = [[50, 65, 10]];
  public data2 = [[300, 300, 300]];
  public data3 = [[250, 50, 200]];
}
