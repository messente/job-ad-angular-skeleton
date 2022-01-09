import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'job-ad-angular-skeleton';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('AppComponent.ngOnInit()');
    this.http.get('/api/users').subscribe(r => console.log(r));
  }
}
