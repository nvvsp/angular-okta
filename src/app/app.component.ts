import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OktaService } from '../services/okta.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-okta';
  loginWidget;
  loggedInUser: any;

  constructor(private okta: OktaService) {
    this.loginWidget = okta.getSignInWidget();
  }

  ngOnInit(): void {
    this.loginWidget.renderEl({el: '#okta-login-container'}, (response) => {
      if (response.status === 'SUCCESS') {
        console.log('login success', response);
        this.loggedInUser = response?.tokens?.idToken?.claims?.given_name;
      }
    }, (err) => {
      console.log('error ', err);
    });
  }
}
