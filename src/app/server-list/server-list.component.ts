import { Component } from '@angular/core';
import { ServerItemComponent } from "../server-item/server-item.component";
import { ServerModel } from "../server.model";

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [ServerItemComponent],
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css',
})
export class ServerListComponent {

  serverList: ServerModel[] = [];
  newServerName: String | undefined;

  constructor() {
    // for (let index = 0; index < 1; index++) {
    //   let server = new ServerModel();
    //   server.id = index;
    //   server.name = 'Server 001';
    //   server.switchedOn = Math.random() > 0.5 ? true : false;
    //   this.serverList.push(server);
    // }
  }

  onAddServer() {
    if (typeof this.newServerName != undefined) {
      let server = new ServerModel();
      server.name = this.newServerName as string;
      // server.id = Math.random() * 1000000;
      server.switchedOn = Math.random() > 0.5 ? true : false;
      this.serverList.push(server);
    }
  }

  onNameInput(event: any) {
    this.newServerName = event.target.value;
  }

  deleteServer(id: number){
    this.serverList = this.serverList.filter((server) => server.id != id);
  }

  onServerDelete(id: number){
    this.deleteServer(id);
  }


}
