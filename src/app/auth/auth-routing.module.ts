import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full',
            },
        ],
    },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
