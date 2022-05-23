import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Input() count: number = 0;

  buttons: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.count !== 0) this.setPaginator();
  }

  getLastPage = () => Math.ceil(this.count / 10);

  getPageArray(arr: number[] = [this.currentPage]): number[] {
    if (arr.length !== 5) {
      const first = arr[0];
      const last = arr[arr.length - 1];
      if (first - 1 >= 1) arr.unshift(first - 1);
      if (last + 1 <= this.getLastPage()) arr.push(last + 1);

      return this.getPageArray(arr);
    }
    return arr;
  }

  setPaginator(): void {
    this.buttons = this.getPageArray();
  }
}
