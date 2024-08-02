import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Manejar la respuesta del backend
        console.log('Inicio de sesión exitoso', response);
        this.router.navigate(['/home']); // Redirigir al usuario a la página de inicio
      },
      error => {
        // Manejar errores
        console.error('Error en el inicio de sesión', error);
      }
    );
  }

}
