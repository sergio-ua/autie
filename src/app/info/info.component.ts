import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import "rxjs/add/operator/map";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/switchMap";
import { Observable } from 'rxjs';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  id;
  item: Observable<any>;
  info$;

  constructor(private route:ActivatedRoute, private db: AngularFireDatabase){
    this.id = route.params.map((p:any) => p.id);
    this.info$ = route.params
      .map((p:any) => p.id)
      .switchMap(id => db.object(id).valueChanges())
      .startWith('Loading...');
    this.item = db.object('symptoms').valueChanges();
  }
}
