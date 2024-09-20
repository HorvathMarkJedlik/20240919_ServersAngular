import { Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() serverDelete = new EventEmitter();

  onSwitchClick()
  {
    this.model.switchedOn = !this.model.switchedOn;
  }

  onDeleteClick(){
    this.serverDelete.emit(this.model.id);
  }
}

