import { Routes } from '@angular/router';
import { FormulariLogin } from './components/login-form/login-form';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: FormulariLogin},
];
