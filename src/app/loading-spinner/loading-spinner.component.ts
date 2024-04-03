import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.isLoading = true;
    this.http.get('https://httpbin.org/get').subscribe((data) => {
      // Process your data here
      this.isLoading = false;
    }, (error) => {
      // Handle error
      this.isLoading = false;
    });
  }
}
