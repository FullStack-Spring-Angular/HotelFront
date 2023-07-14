import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  username?: string;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
    private toastService: ToastrService
  ) {}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userService.logout().subscribe(
      (response: any)=>{
        console.log(response);
        const { message, statusCode} = response;
        this.toastService.success("Correctamente", message);
        this.userAuthService.clear();
        this.router.navigate(['/home']);
      }
    );
  }

  public getUsername(){
    return this.userAuthService.getUsername();
  }
}
