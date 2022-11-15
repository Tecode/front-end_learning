import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users', {
        // 带参数
        params: new HttpParams({ fromObject: { name: 'haoxuan', id: 3 } }),
        headers: new HttpHeaders({"token": "OPvf89"})
      })
      .subscribe({ next: (data) => console.log('HttpClient:', data) });
  }
}
