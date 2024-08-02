import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  repassword: string = '';
  role: String ='user';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    if (this.password !== this.repassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.http.post('http://localhost:3000/usuario/', user).subscribe(
      response => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error en el registro', error);
      }
    );
  }
}
