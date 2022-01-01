import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginCredentials } from '../../../interfaces/login-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitting: boolean = false;
  cardStyles: any = {
    width: '18rem',
  };
  cardClasses: string[] = [
    'p-4',
  ];
  @ViewChild('form')
  form!: NgForm;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitting = true;
    this.loginService.login(this.form.value).subscribe(res => {
      console.log(res)
      this.isSubmitting = false;
    })
  }
}
