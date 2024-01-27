import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Token} from "../../token";

@Injectable({
  providedIn: 'root'
})
export class AuthSerivce {
  
  constructor(private http: HttpClient) {

  }

  login(username:string, password:string ) {
    return this.http.post<Token>('http://51.250.28.250:8080/login', {email: username, password})
      .subscribe(res => this.setSession);
  }

  private setSession(authResult: { access_token: string; }) {
    localStorage.setItem('token', authResult.access_token);
  }

  logout() {
    localStorage.removeItem("token");
  }

  public isLoggedIn() {
    return true;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}