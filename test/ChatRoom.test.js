const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  let chatroom = null;

  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  describe('add method', () => {
    it('takes a socket, assigns random username, and stores by user name', () => {
      const client = {};
      chatroom.add(client);
      expect(client.username).toEqual(expect.any(String));
      expect(client.username).toBeDefined();
      expect(client).toEqual({ username: client.username });
    });
  });

  describe('getClient method', () => {
    it('returned object is the same', () => {
      const client = {};
      chatroom.add(client);
      const foundUser = chatroom.getClient(client.username);
      expect(foundUser.username).toEqual(client.username);
    });
  });

  describe('rename method', () => {
    it('renames a user', () => {
      const client = {};
      chatroom.add(client);
      expect(chatroom.rename(client.username, 'test')).toBeTruthy();
      expect(client.username === 'test').toEqual(true);
      expect(client.username === {}).toEqual(false);
      expect(client.username).toEqual('test');
      expect(chatroom.getClient(client)).toBeFalsy();
    });
  });

  describe('all method', () => {
    it('returns an array of all clients', () => {
      const client1 = {};
      const client2 = {};
      chatroom.add(client1);
      chatroom.add(client2);
      expect(chatroom.all()).toEqual([client1, client2]);
    });
  });

});
