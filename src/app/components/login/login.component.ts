import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDTO } from 'src/app/dtos/User';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        const { roles: [{ name }]} = response.usuarios;
        const role = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        
        this.userAuthService.setUser(response.usuarios);
        this.userAuthService.setRoles(role);
        this.userAuthService.setToken(response.accessToken);
        console.log(role);
        
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/reserva']);

        }
      },
      (error) => {
        const { status} = error;
        console.log(status);
        if (status == 401) {
          this.toastrService.error("INCORRECTOS", "Usuario o contraseña", { timeOut:2000})
        }
        
        console.log(error);
      }
    );
  }
}
