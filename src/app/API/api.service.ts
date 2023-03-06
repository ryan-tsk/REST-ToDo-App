import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Task} from '../Task/task.type'
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const headers = {"content-type": "application/json"}

@Injectable({
  providedIn: 'root'
})
export class taskAPI{
  URL = "http://localhost:3000/tasks";

  constructor(private http: HttpClient){
    this.getAllTask()
  }

  getAllTask(): Observable<Task[]>{
    return this.http
    .get<Task[]>(`${this.URL}`)
    .pipe(catchError((error) => {return this.handleError<Task[]>(error, "getAllTask")}))
  }

  addTask(task: Task): Observable<Task>{
    return this.http
    .post<Task>(`${this.URL}`, task, {headers: headers})
    .pipe(catchError((error) => {return this.handleError<Task>(error, "addTask")}))
  }

  editTask(task: Task): Observable<Task>{
    return this.http
    .patch<Task>(`${this.URL}/${task.id}`, task)
    .pipe(catchError((error) => {return this.handleError<Task>(error, "editTask")}))
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http
    .delete<Task>(`${this.URL}/${task.id}`)
    .pipe(catchError((error) => {return this.handleError<Task>(error, "deleteTask")}))
  }

  private handleError<T>(error: any, service: string, output?:T){
    console.error(`${service} failed : ${error.message}`)
    return of(output as T)
  }
}