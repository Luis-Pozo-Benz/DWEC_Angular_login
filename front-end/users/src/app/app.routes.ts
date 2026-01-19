import { Routes } from '@angular/router';
import { FormulariLogin } from './components/login-form/login-form';

export const routes: Routes = [
    {path: '', redirectTo: 'formulari-login', pathMatch: 'full'},
    {path: 'formulari-login', component: FormulariLogin},
];
