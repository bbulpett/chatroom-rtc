defmodule Chatroom.RegistrationController do
	use Chatroom.Web, :controller
	alias Chatroom.User

	def new(conn, _params) do 
		changeset = User.changeset(%User{})
		render conn, changeset: changeset
	end
end