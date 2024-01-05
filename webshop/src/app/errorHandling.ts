import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandling {
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
    */
    handleError<T>(module = 'module', operation = 'operation', result?: T) {
        return (error: any):Observable<T> => {
            console.error(error); // log to console instead
            
            // Let the app keep running by returning an empty result.
            return of(result as T);
        }
    }
}