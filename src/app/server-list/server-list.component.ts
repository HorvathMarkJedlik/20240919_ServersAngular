import { Component } from '@angular/core';
import { ServerItemComponent } from "../server-item/server-item.component";

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [ServerItemComponent],
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css'
})
export class ServerListComponent {

}
