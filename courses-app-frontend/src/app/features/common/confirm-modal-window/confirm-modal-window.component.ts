import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-confirm-modal-window',
  templateUrl: './confirm-modal-window.component.html',
  styleUrls: ['./confirm-modal-window.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmModalWindowComponent implements OnInit, OnDestroy {

  private element: HTMLElement;

  title: string = 'Test title';
  message: string = 'Test message';
  okButtonText: string = 'Confirm';
  cancelButtonText: string = 'Cancel';
  modalResult: boolean = false;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
   }

  ngOnInit(): void {
    
  }

  addModal(): void {
    document.body.appendChild(this.element);
  }

  ngOnDestroy(): void {
    this.element.remove();
  }


  public open(): void {
    this.element.style.display = "block";
    document.body.classList.add('confirm-modal-open');
  }

  public close(): void {
    this.element.style.display = "none";
    document.body.classList.remove('confirm-modal-open');
  } 

}
