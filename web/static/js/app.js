// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"

let localStream, peerConnection;
let localVideo = document.getElementById("localVideo");
let remoteVideo = document.getElementById("remoteVideo");
let connectButton = document.getElementById("connect");
let callButton = document.getElementById("call");
let hangupButton = document.getElementById("hangup");

hangupButton.disabled = true;
callButton.disabled = true;
connectButton.onclick = connect;
callButton.onclick = call;
hangupButton.onclick = hangup;

// Capture local video stream then call gotStream
function connect() {
  console.log("Requesting local stream");
  navigator.getUserMedia({audio: true, video: true}, gotStream, error => {
    console.log("getUserMedia error: ", error);
  })
}

// Set local stream and call setupPeerConnection
function gotStream(stream) {
  console..log("Received local stream");
  localVideo.src = URL.createObjectURL(stream);
  localStream = stream;
  setupPeerConnection();
}

function setupPeerConnection() {
  connectButton.disabled = true;
  callButton.disabled= false;
  hangupButton.disabled = false;
  console.log("Waiting for call");

  let servers = {
    "iceServers": [{
      "url": "" // TODO - Add url for server to handle incoming connections
    }]
  }
}
