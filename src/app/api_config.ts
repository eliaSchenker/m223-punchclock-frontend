import { HttpHeaders } from "@angular/common/http";

//Various configuration variables for the API integration
export const API_URL:string = "http://localhost:8080/";
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
