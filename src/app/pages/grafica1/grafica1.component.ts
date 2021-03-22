import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public title1: string = 'No title';
  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Delivery Sales',
  ];
  public labels2: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public data1 = [[50, 65, 10]];
  public data2 = [[300, 300, 300]];
}
