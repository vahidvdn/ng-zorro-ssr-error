import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	array = [ 1, 2, 3, 4 ];
  	effect = 'scrollx';
  	title = 'my-dream-app';
}
