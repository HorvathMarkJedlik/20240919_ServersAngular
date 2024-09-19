import { Component } from '@angular/core';
import { ServerItemComponent } from "../server-item/server-item.component";
import { ServerModel } from "../server.model";

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [ServerItemComponent],
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css'
})
export class ServerListComponent {
  serverList: ServerModel[] = [];

  constructor() {
    let server = new ServerModel();
    server.id = '001';
    server.name = 'Server 001';
    server.switchedOn = Math.random() > 0.5 ? true : false;

    this.serverList.push(server);
  }
}
