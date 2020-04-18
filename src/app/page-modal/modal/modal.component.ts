import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Output() modal = new EventEmitter()
  @Input()  tittle: any;

  constructor() { }

  ngOnInit() {
  }

}
