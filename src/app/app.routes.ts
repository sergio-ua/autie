import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: HomeComponent},
  {path: ':id', component: InfoComponent},
];

export default RouterModule.forRoot(routes);