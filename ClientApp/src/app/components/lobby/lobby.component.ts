import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room, User, Message } from '../../models';
import * as signalR from '@aspnet/signalr';
import { HubBuilderService } from '../../services/hub-builder.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {
  activeTab: 'rooms' | 'peeps' = 'peeps';

  rooms: Room[];
  peeps: User[];

  newRoomName: string;
  newRoomIsPrivate: boolean = false;
  newRoomPasskey: string;

  lobbyMessages: Message[];
  lobbyLoading: boolean = false;

  chatMessage: string;

  connection: signalR.HubConnection;

  constructor(hubBuilder: HubBuilderService) {
    this.connection = hubBuilder.getConnection();
    this.connection.on("SetUsers", users => this.setUsers(users));
    this.connection.on("UserEntered", user => this.userEntered(user));
    this.connection.on("UserLeft", userId => this.userLeft(userId));
    this.connection.on("SetMessages", messages => this.setMessages(messages));
    this.connection.on("RecieveMessage", message => this.recieveMessage(message));
    this.connection.on("SendMessages", messages => this.sendMessage());

    this.peeps = [];
    this.lobbyMessages = [];
    this.connection.start().then(() => {
      this.connection.invoke("EnterLobby");
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // When the component is destroyed (e.g. in the case of navigation), close the connection.
    // Do not forget to unsubscribe the event handler, otherwise we will have memory leak!
    this.connection.off("SetUsers");
    this.connection.off("UserEntered");
    this.connection.off("UserLeft");
    this.connection.off("SetMessages");
    this.connection.off("RecieveMessage");
    this.connection.off("SendMessages");
    this.connection.stop(); // The stop() function is actually asynchronous, it returns a Promise.
  }

  recieveMessage(message: Message) {
    this.lobbyMessages.splice(0, 0, message);
  }

  userEntered(user: User) {
    this.peeps.push(user);
  }

  userLeft(userId: string) {
    this.peeps.forEach((user, index) => {
      if (user.id == userId) this.peeps.splice(index, 1);
    });
  }

  setUsers(users: User[]) {
    this.peeps = users;
  }

  setMessages(messages: Message[]) {
    this.lobbyMessages = messages;
  }

  sendMessage() {
    // We can send message to the server with the call of invoke function.
    this.connection.invoke("SendMessageToLobby", this.chatMessage);
    // Also, the request is a Promise, so event handlers could subscribe for it, which is fired when
    // the server confirmed the request (or an error was occured). The methods of the server can
    // return Task<T> instead of Task, in this case we get the answer object itself in the event ekkor
    // handler of the answer:
    // this.connection.invoke("SendMessageToLobby", this.chatMessage)
    // .then((t: T) => {
    // console.log(t);
    // })
    // .catch(console.error);
    this.chatMessage = "";
  }

  createRoom() {
    // TODO: szoba létrehozása szerveren, majd navigáció a szoba útvonalára, szükség esetén megadni a passkey-t
  }

  roomCreated(room: Room) {
    // TODO: szobalista frissítése
  }

  roomAbandoned(roomName: string) {
    // TODO: szobalista frissítése
  }

  enterRoom(room: Room) {
    // TODO: navigáció a szoba útvonlára, figyelve, hogy kell-e megadni passkey-t
  }
}
