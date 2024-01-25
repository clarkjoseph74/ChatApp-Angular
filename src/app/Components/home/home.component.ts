import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  registeMode: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  registerToggle() {
    this.registeMode = !this.registeMode;
  }

  cancelRegister(event: boolean) {
    this.registeMode = event;
  }
}
