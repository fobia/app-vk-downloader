$('body').on('mouseenter', 'div.audio',  function() {
	var mp3name = $(this).find('.info .title_wrap b a').text() + ' - ' + $(this).find('.info .title_wrap .title').text();
	var mp3link = $(this).find('input[type="hidden"]').attr('value');
	mp3link = mp3linkCorrect(mp3link);
	if ($('div.download_wrapper').length === 0) {
		$(this).find('div.actions').append('<div class="download_wrapper"><a class="download_link" href="' + mp3link + '" download="' + $.trim(mp3name) + '.mp3"></a></div>');
	}
  $('.download_wrapper').click( function(event) {
    event.stopPropagation();
  });
	$('.download_link').css('background', 'url("' + chrome.extension.getURL("download16x16.png") + '") center center no-repeat');
	/*var request;
	request = $.ajax({
		type: "HEAD",
		url: mp3link,
		success: function () {
		  console.log("Size is " + request.getResponseHeader("Content-Length"));
		}
	  });*/
	
});

$('body').on('mouseleave', 'div.audio',  function() {
	$('.download_wrapper').remove();
});

function mp3linkCorrect(string) {
	if (string.indexOf(',') !== -1) {
		string = string.split(',')[0];
	}
	return string;
}