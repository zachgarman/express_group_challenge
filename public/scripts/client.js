$(function () {
  //append dom with initial get call for bios and likes
  getBios();
  getLikes();

  $('.profile').on('click', 'button', function () {
    var $name = $(this).attr('class');
    var formData = {'name': $name};

    $.ajax({
      type: 'POST',
      url: '/likes/' + $name,
      data: formData,
      success: getLikes
    });
  });
});

//get bios, pics, names and run once on page load
function getBios () {
  console.log("it worked!");
  $.ajax({
    type: 'GET',
    url: '/bios',

    success: function(people) {
      people.forEach(function(person) {
        var $profile = $('<div></div>');
        //person.id = first name
        var $id = person.id;
        var $button = '<button class="' + $id + '">Like</button>';
        $profile.append('<img src="assets/images/' + person.pic + '" />');
        $profile.append('<h3>' + person.name + '</h3>');
        $profile.append('<p>' + person.bio + '</p>');
        $profile.append($button);
        //$profile.append('<p>Total Likes: <span id="likes' + $id + '">0</span> </p>');
        $('#' + $id).append($profile);
      });
    }
  });
}
//get total likes and append DOM, run on click to likes;
function getLikes() {
  $.ajax({
    type: 'GET',
    url: '/likes',

    success: function (peopleLikes) {

      for (var key in peopleLikes) {
        console.log('key: ', key);
        console.log('peopleLikes.key: ', peopleLikes[key]);
        // $('#' + key).children().children('h4').remove();
        // $('#' + key).children().append('<h4>Total Likes: ' + peopleLikes.key + '</h4>')
      }
    }
  });
}
