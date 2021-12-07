import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // register the animation
  animations: [fadeAnimation]
})
export class AppComponent {
// create a variable name called faCoffee and assign the icon that we imported to the variable so can use it in the app.component.html.

  faCoffee = faCoffee;
  faArrowUp = faArrowUp;
  title = 'newsweb';
}
