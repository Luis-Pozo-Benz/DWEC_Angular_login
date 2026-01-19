import { Routes } from '@angular/router';
import { FormulariLogin } from './components/formulari-login/formulari-login';

export const routes: Routes = [
    {path: '', redirectTo: 'formulari-login', pathMatch: 'full'},
    {path: 'formulari-login', component: FormulariLogin},
];
