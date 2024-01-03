import { Observable, of } from "rxjs";
import { MessageService } from "./services/message.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandling {
    constructor(private logService:MessageService) {}
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
    */
    handleError<T>(module = 'module', operation = 'operation', result?: T) {
        return (error: any):Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.logService.log(module,operation,` failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        }
    }
}