function keyCodeGenerator(event) {
  var eventKey = event.key;
  var eventKeyCode = event.which;
  var eventCode = event.code;

  console.log("eventKey: " + eventKey);
  console.log("eventKeyCode: " + eventKeyCode);
  console.log("eventCode: " + eventCode);

  document.querySelector(".first-screen").style.display = "none";
  document.querySelector(".second-screen").style.display = "flex";

  document.querySelector(".event-key").value = eventKey;
  document.querySelector(".event-key-code").value = eventKeyCode;
  document.querySelector(".event-code").value = eventCode;
}






















