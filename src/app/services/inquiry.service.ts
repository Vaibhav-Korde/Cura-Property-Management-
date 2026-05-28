// src/app/services/inquiry.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Inquiry, InquiryResponse } from '../models/inquiry.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InquiryService {
  private readonly apiUrl = `${environment.apiBaseUrl}/api/inquiries`;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  submitInquiry(inquiry: Inquiry): Observable<InquiryResponse> {
    return this.http
      .post<InquiryResponse>(this.apiUrl, inquiry, { headers: this.headers })
      .pipe(retry(1), catchError(this.handleError));
  }

  getAllInquiries(): Observable<Inquiry[]> {
    return this.http
      .get<Inquiry[]>(this.apiUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  getInquiryById(id: number): Observable<Inquiry> {
    return this.http
      .get<Inquiry>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.status) {
      errorMessage = error.error?.message || `Error ${error.status}: ${error.statusText}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
