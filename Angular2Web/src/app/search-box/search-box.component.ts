import { Component, OnInit, Input } from '@angular/core';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

	color:string;

	@Input('placeholder')
	inputPlaceholder = 'Search';

  constructor() { }

  clearSearchbox(searchboxInput) {
  	searchboxInput.value = '';
  }

  onColorChange(searchboxInput) {
  	this.color = searchboxInput.value;
  }

  ngOnInit() {
  }

}
