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
        public static Dictionary<string, HubRoom> ChatRoom { get; }

        public class HubRoom
        {
            public string Name { get; set; }
            public string CreatorId { get; set; }
            public string Passkey { get; set; }
            public List<Message> Messages { get; } = new List<Message>();
            public List<User> Users { get; } = new List<User>();
        }
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

        public async Task CreateRoom(string roomName, string Passkey = null)
        {
            var roomInstance = new HubRoom
            {
                Name = roomName,
                CreatorId = Context.UserIdentifier
            };
            ChatRoom[roomName] = roomInstance;
            await JoinRoom(roomName);
        }

        //public async Task SendMessageToRoom(string user, string message, string room, bool join)
        //{
        //    if (join)
        //    {
        //        await JoinRoom(room).ConfigureAwait(false);
        //        await Clients.Group(room).SendAsync("ReceiveMessage", user, " joined to " + room).ConfigureAwait(true);

        //    }
        //    else
        //    {
        //        await Clients.Group(room).SendAsync("ReceiveMessage", user, message).ConfigureAwait(true);
        //    }
        //}

        public async Task JoinRoom(string roomName)
        {
            var user = new User { Id = Context.UserIdentifier, Username = Context.User.Identity.Name };
            ChatRoom[roomName].Users.Add(user);
            // Study the Client object: we can get the caller client through this (Caller),
            // address given clients for example based on ConnectionId or UserIdentifier, or
            // we can use the built-in Group mechanism to handle user groups.
            await Clients.Group(roomName)
            // The Client type is the type parameter given above, we can call these functions
            // on the client(s).
            .UserEntered(user);
            await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
            await Clients.Caller.SetUsers(ChatRoom[roomName].Users);
            await Clients.Caller.SetMessages(ChatRoom[roomName].Messages);
            await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
        }

        public async Task LeaveRoom(string roomName)
        {
            if (ChatRoom[roomName] != null)
            {
                var user = ChatRoom[roomName].Users.FirstOrDefault(u => u.Id == Context.UserIdentifier);
                if (user != null)
                    ChatRoom[roomName].Users.Remove(user);
                // TODO: later we have to handle the leaving clients is connection with own room handling
                await Clients.Group(roomName).UserLeft(Context.UserIdentifier);
            }
        }
    }

}
