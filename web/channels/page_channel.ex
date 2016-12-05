defmodule Chatroom.PageChannel do
	use Phoenix.Channel

	# Allow all conncections to join the channel
	def join("lobby", _auth_msg, socket) do
		{:ok, socket}
	end

	# Every time new message is received, broadcast it to all other open sockets.

	def handle_in("message", %{"body" => body}, socket) do
    broadcast! socket, "message", %{body: body}
    {:noreply, socket}
  end
end