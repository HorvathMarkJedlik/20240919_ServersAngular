import { Component, Input} from '@angular/core';
import { ServerModel } from '../server.model';

@Component({
  selector: 'app-server-item',
  standalone: true,
  imports: [],
  templateUrl: './server-item.component.html',
  styleUrl: './server-item.component.css',
})
export class ServerItemComponent {
  @Input() model!: ServerModel;

  onSwitchClick()
  {
    this.model.switchedOn = !this.model.switchedOn;
  }
}

