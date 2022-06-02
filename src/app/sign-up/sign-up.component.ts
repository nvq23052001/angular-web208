import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
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
    this.authService.signup(this.user).subscribe((user: any) => {
      setTimeout(() => {
        // redirect
        this.router.navigateByUrl('/signin');
      }, 2000);
    });
  }
}
