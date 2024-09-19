import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerListComponent } from "./server-list/server-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '20240919_Servers';
}
