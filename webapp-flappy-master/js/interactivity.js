jQuery("#credits").on("click", function() {
  var message = "Game created by Joe!";
  jQuery("#credits").append(
        "<p>" + message + "</p>"
    );
});


<div>
<button type="button" class="btn btn-default" id="scoresbtn">Scores</button>
<button type="button" class="btn btn-default" id="creditsbtn">Credits</button>
<button type="button" class="btn btn-default" id="helpbtn">Help</button>
</div>

<div>
  <div id="content">
  </div>
</div>


  jQuery("#scoresbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
        "<ul>" +
            "<li>" + "Player1" + "</li>" +
            "<li>" + "Player2" + "</li>" +
            "<li>" + "Player3" + "</li>" +
        "</ul>"
);
});
jQuery("#creditsbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append(
        "<div>" + "Game created by Bob!" + "</div>"
    );
});

jQuery("#helpbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append(
        "<ul>"
            + "<li>" + "Press SPACE to flap your wings" + "</li>"
            + "<li>" + "Avoid the incoming pipes" + "</li>"
        + "</ul>"
