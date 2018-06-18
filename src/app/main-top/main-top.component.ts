import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.css']
})
export class MainTopComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
moveto(){
  this.router.navigate(['list'])
}
movetofav(){
  this.router.navigate(['favorite'])
}

}
