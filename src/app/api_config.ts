import { HttpHeaders } from "@angular/common/http";

//Various configuration variables for the API integration
export const API_URL:string = "http://localhost:8080/"; //API URL
//Http Headers used in the requests
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

//SaveType used in the dialogs
export const enum SaveType {
  Add = "Add",
  Edit = "Edit",
}
