import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-totalpromedio',
  templateUrl: './totalpromedio.component.html',
  styleUrls: ['./totalpromedio.component.css']
})

export class TotalpromedioComponent implements OnInit {
  promedio: number=6;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {    
    
    this.route.snapshot.paramMap.get('promedio');
  
}
}
