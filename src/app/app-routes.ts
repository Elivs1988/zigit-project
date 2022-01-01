import { LoginComponent } from './views/login/login/login.component';
import { Route } from '@angular/router';
import { UserComponent } from './views/user/user.component';


export const AppRoutes: Route[] = [
    {
      path: '', component: LoginComponent
    },
    {
        path: 'info', component: UserComponent,
    }
]