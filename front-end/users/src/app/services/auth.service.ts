// import { Injectable } from '@angular/core';
// import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, User } from '../models';
// import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {

//   private apiUrl = 'http://localhost:3000/api/auth';
//   private currentUserSubject = new BehaviorSubject<User | null>(null);
//   private tokenKey = 'auth_token';
//   private userKey = '';

//   currentUser$ = this.currentUserSubject.asObservable();

//   constructor(private http: HttpClient) {
//     this.loadUserFromStorage();
//   }

//   private loadUserFromStorage(): void {
//     const token = localStorage.getItem(this.tokenKey);
//     const user = localStorage.getItem('current_user');
//     if (token && user) {
//       this.currentUserSubject.next(JSON.parse(user));
//     }
//   }

//   register(data: RegisterRequest): Observable<RegisterResponse> {
//     return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, data)
//       .pipe(
//         tap(response =>  this.handleAuthSuccess(response)),
//         catchError(this.handleError)
//       );
//   }

//   login(data: LoginRequest): Observable<LoginResponse> {
//     return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data)
//       .pipe(
//         tap(response => this.handleAuthSuccess(response)),
//         catchError(this.handleError)
//       );    
//   }

//   logout(): void {
//     localStorage.removeItem(this.tokenKey);
//     localStorage.removeItem('current_user');
//     this.currentUserSubject.next(null);
//   }

//   getToken(): string | null {
//     return localStorage.getItem(this.tokenKey);
//   }

//   isAuthenticated(): boolean {
//     return !!this.getToken();
//   }

//   getCurrentUser(): User | null {
//     return this.currentUserSubject.value;
//   }

//   getProfile(): Observable<User> {
//     return this.http.get<User>(`${this.apiUrl}/profile`)
//       .pipe(catchError(this.handleError));
//   }

//   private handleAuthSuccess(response: LoginResponse): void {
//     // Añadir token
//     localStorage.setItem(this.tokenKey, response.token);

//     // Creamos el usuario
//     const user: User = {
//       username: response.username,
//       email: response.email,
//       role: response.role,
//       token: response.token,
//     };

//     // Guardamos los datos
//     localStorage.setItem(this.userKey, JSON.stringify(user));
//     this.currentUserSubject.next(user);
//   }

//   private handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Error desconegut';
//     if (error.error && error.error.error) {
//       errorMessage = error.error.error;
//     } else if (error.status === 0) {
//       errorMessage = 'No es pot connectar amb el servidor';
//     }
//     return throwError(() => new Error(errorMessage));
//   }
// }