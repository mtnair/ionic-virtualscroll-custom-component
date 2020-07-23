import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-custom-virtual-scroll-item',
  templateUrl: './custom-virtual-scroll-item.component.html',
  styleUrls: ['./custom-virtual-scroll-item.component.scss'],
})
export class CustomVirtualScrollItemComponent implements OnInit, AfterViewInit {

  @Input()
  item: string

  constructor() { }

  ngOnInit() {
    console.log('Creating custom virtual scroll item with content:', this.item)
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewChecked():', this.item)
  }
}
