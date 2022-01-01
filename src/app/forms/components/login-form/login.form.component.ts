import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginCredentials } from '../../../interfaces/login-credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.component.html',
  styleUrls: ['./login.form.component.css']
})
export class LoginFormComponent implements OnInit {
  isSubmitting: boolean = false;
  cardStyles: any = {
    width: '18rem',
  };
  cardClasses: string[] = [
    'p-4',
  ];
  @ViewChild('form')
  form!: NgForm;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitting = true;
    this.loginService.login(this.form.value).subscribe(res => {
      if(res && res[0] && res[0].token) {
        this.router.navigate(['/info']);
      }
      this.isSubmitting = false;
    })
  }
}
