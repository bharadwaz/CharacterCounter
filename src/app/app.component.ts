import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count = 0;
  txtValue = "";


  updateCount(){
    this.count = this.txtValue.length;
  }

  clearTA(){
    this.txtValue = "";
  }
}
