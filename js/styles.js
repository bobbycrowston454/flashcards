$(document).ready(function() {
  $(".jscript").click(function() {
    $("#javascript").toggle();
    $("#javascriptdefinition").toggle();
  });
  $(".opera").click(function() {
    $("#operators").toggle();
    $("#operatordefinition").toggle();
  });
  $(".vari").click(function() {
    $("#variables").toggle();
    $("#variablesdefinition").toggle();
  });
});
