import { Component } from '@angular/core';
import { ReniecService } from '../../services/reniec.service';

@Component({
  selector: 'app-reniec',
  templateUrl: './reniec.component.html',
  styles: [],
})
export class ReniecComponent  {
  constructor( private reniecService: ReniecService) {
    this.reniecService.getDni().subscribe(res=>console.log(res))
  }

}
