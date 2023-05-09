import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  idadeUsuario = 44;
  userData = {
    email: "joaquim@email.com",
    role: "Lawyer"
  }

  title = 'curso-angular';
}
