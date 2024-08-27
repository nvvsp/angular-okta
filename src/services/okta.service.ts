import { Injectable } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget'

@Injectable({
  providedIn: 'root'
})
export class OktaService {
  signInWidget;
  constructor() {
    this.signInWidget = new OktaSignIn({
      baseUrl: 'https://trial-5002300.okta.com',
      clientId: '0oai6y5xesm5GVrqa697',
      redirectUri: 'http://localhost:8080/login/callback'
    })
   }

   getSignInWidget() {
    return this.signInWidget;
   }
}
