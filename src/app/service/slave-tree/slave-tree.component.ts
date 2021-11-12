import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-slave-tree',
  templateUrl: './slave-tree.component.html',
  styleUrls: ['./slave-tree.component.sass']
})
export class SlaveTreeComponent {

  public get count() {
    return this.countService.count;
  }
  
  constructor(private countService: CountService) { }

}
