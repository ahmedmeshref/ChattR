using ChattR.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChattR.Hubs
{
    [Authorize]
    public class ChattRHub : Hub<IChattRClient>
    {
        public const string LobbyRoomName = "ChattRLobby";
        public static HubRoom Lobby { get; } = new HubRoom
        {
            Name = LobbyRoomName
        };
        public class HubRoom
        {
            public string Name { get; set; }
            public string CreatorId { get; set; }
            public string Passkey { get; set; }
            public List<Message> Messages { get; } = new List<Message>();
            public List<User> Users { get; } = new List<User>();
        }
        // TODO: it is worth to handle the room handling with the help of the built-in Group mechanism
        // but it can be used only to send answers to the clients. It is automatically ‘created’ based
        // on Group ID, when a user enters and ‘deleted’ when the last user exits as well.
        // Therefore, it is needed to store the rooms in an own data structure as well to notice the
        // data of users and previous messages. The ChattRHub is not singleton, a new ChattRHub object
        // is instantiated for each request. The simplest solution is to store here the data in a static
        // object, but this would not be optimal in a production environment. Instead of this,
        // we would have to handle data in a singleton service. In this laboratory, the static solution
        // is enough, but see clearly the "static smell" phenomenon; it is worth to share state
        // explicit, so with dependency injection, not with ‘invisible’ static dependencies.
        public async Task EnterLobby()
        {
            var user = new User { Id = Context.UserIdentifier, Username = Context.User.Identity.Name };
            Lobby.Users.Add(user);
            // Study the Client object: we can get the caller client through this (Caller),
            // address given clients for example based on ConnectionId or UserIdentifier, or
            // we can use the built-in Group mechanism to handle user groups.
            await Clients.Group(LobbyRoomName)
            // The Client type is the type parameter given above, we can call these functions
            // on the client(s).
            .UserEntered(user);
            await Groups.AddToGroupAsync(Context.ConnectionId, LobbyRoomName);
            await Clients.Caller.SetUsers(Lobby.Users);
            await Clients.Caller.SetMessages(Lobby.Messages);
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {
            var user = Lobby.Users.FirstOrDefault(u => u.Id == Context.UserIdentifier);
            if (user != null)
                Lobby.Users.Remove(user);
            // TODO: later we have to handle the leaving clients is connection with own room handling
            Clients.Group(LobbyRoomName).UserLeft(Context.UserIdentifier);
            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessageToLobby(string message)
        {
            var messageInstance = new Message
            {
                SenderId = Context.UserIdentifier,
                SenderName = Context.User.Identity.Name,
                Text = message,
                PostedDate = DateTimeOffset.Now
            };
            Lobby.Messages.Add(messageInstance);
            await Clients.Group(LobbyRoomName).RecieveMessage(messageInstance);
        }
    }

}
