import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthSerivce {
  constructor(private readonly httpClient: HttpClient) {
  }

  login(data: any) {
    return this.httpClient.post('http://51.250.28.250:8080/login', data)
  }
}
