import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

import "rxjs/add/operator/map";

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  info;
  title;

  constructor(private route:ActivatedRoute){
    this.info = route.params
      .map((p:any) => environment.content[p.id].body);

    this.title = route.params
      .map((p:any) => environment.content[p.id].title);

      window.scrollTo(0, 0);
  }
}
