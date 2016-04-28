chrome.storage.sync.get("disable", function (obj) {
  var disable = obj.disable;
  var element = document.createElement('div');
  var title = "<h1 class='s-h1'>Good Old PH 👴</h1>";

  if (disable) {
    var input = "<div><label class='good_old_ph_label' for='good_old_ph_input'><input name='user[send_mention_push]' type='hidden' value='0'><input type='checkbox' checked='true' id='good_old_ph_input'>Disable</label></div>";
  } else {
    document.documentElement.className += " good-old-ph-mode";
    var input = "<div><label class='good_old_ph_label' for='good_old_ph_input'><input name='user[send_mention_push]' type='hidden' value='0'><input type='checkbox' id='good_old_ph_input'>Disable</label></div>";
  }

  element.innerHTML = title + input;
  document.getElementsByClassName("my-settings--form")[0].appendChild(element);
  document.getElementsByClassName("good_old_ph_label")[0].addEventListener("click", function() {
    chrome.storage.sync.set({'disable': !disable}, function() {
     // Notify that we saved.
     disable = !disable;
    });
  });
});

