import { Routes } from '@angular/router';
import { FormulariLogin } from './components/login-form/login-form';
import { UserList } from './components/user-list/user-list';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: FormulariLogin},
    {path: 'list', component: UserList},
];
