defmodule Chatroom.LobbyChannel do
	use Phoenix.LobbyChannel

	# Allow all conncections to join the channel
	def join("lobby", _payload, socket) do
		{:ok, socket}
	end

	# Every time new message is received, broadcast it to all other open sockets.

	def handle_in("new_message", payload, socket) do
		broadcast! socket, "new_message", payload
		{:noreply, socket}
	end	
end