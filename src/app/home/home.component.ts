import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';

  scrollTo(pos) {
    window.scroll({
      top: pos,
      left: 0,
      behavior: "smooth"
    });
  }
}
