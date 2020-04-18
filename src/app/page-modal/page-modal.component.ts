import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";

@Component({
    selector: 'app-page-modal',
    templateUrl: './page-modal.component.html',
    styleUrls: ['./page-modal.component.scss']
})
export class PageModalComponent implements OnInit {

    constructor(private resolve: ComponentFactoryResolver) {
    }

    @ViewChild(RefDirective, {static: false}) refDir: RefDirective

    ngOnInit() {
    }



    showModal() {
        this.refDir.containerRef.clear()
        const component = this.resolve.resolveComponentFactory(ModalComponent)
      const componentModal=  this.refDir.containerRef.createComponent(component);
      componentModal.instance.tittle='Hello'
      componentModal.instance.modal.subscribe(()=> {
        this.refDir.containerRef.clear()
      })

    }
}
