export class ServerModel {
  static counter = 0;
  id: number = ServerModel.counter++;
  name!: string;
  switchedOn: boolean = false;
}