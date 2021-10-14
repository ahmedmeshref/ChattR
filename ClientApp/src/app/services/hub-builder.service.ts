import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'; // We store all symbols (classes, constants, etc)
// exported from the package in the signalR object.
@Injectable({
  providedIn: 'root'
})
export class HubBuilderService {
  getConnection() {
    return new signalR.HubConnectionBuilder()
      .withUrl("/chattrhub")
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }
}
