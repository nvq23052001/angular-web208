import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  user: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.onSubmit.emit(this.user);
    this.handleUser();
  }

  handleUser() {
    this.authService.signin(this.user).subscribe((user: any) => {
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        // redirect
        if (user.user.id === 1) {
          console.log(user.user.id);

          this.router.navigateByUrl('/admin/list');
        } else {
          console.log(user.user.id);
          this.router.navigateByUrl('/welcome');
        }
      }, 2000);
    });
  }
}
