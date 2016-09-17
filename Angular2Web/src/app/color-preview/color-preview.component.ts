import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-preview',
  templateUrl: './color-preview.component.html',
  styleUrls: ['./color-preview.component.css']
})
export class ColorPreviewComponent implements OnInit {
	@Input()
	color = 'red';

  constructor() { }

  ngOnInit() {
  }

}
