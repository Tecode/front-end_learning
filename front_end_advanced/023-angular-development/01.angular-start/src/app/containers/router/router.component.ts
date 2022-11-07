import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss'],
})
export class RouterComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query) => {
      console.log('ActivatedRoute Query:', query.get('name'));
    });

    
    this.route.paramMap.subscribe((param) => {
      console.log('ActivatedRoute Path', param.get('name'));
    });
  }
}
