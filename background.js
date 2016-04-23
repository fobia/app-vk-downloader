$('body').on('mouseenter', 'div.audio', function() {
    var mp3name = $(this).find('.info .title_wrap b a').text() + ' - ' + $(this).find('.info .title_wrap .title').text();
    var mp3link = $(this).find('input[type="hidden"]').attr('value');
    mp3link = mp3linkCorrect(mp3link);
    var $a = $('<a class="download_link" href="' + mp3link + '" download="' + $.trim(mp3name) + '.mp3"></a>');
    if ($('div.download_wrapper').length === 0) {
        var $div = $('<div class="download_wrapper"></div>');
        $div.append($a);
        $(this).find('div.actions').append($div);
    }
    $('.download_wrapper').click(function(event) {
        ClBrd(mp3name);
        event.stopPropagation();
    });
    $('.download_link').css('background', 'url("' + chrome.extension.getURL("download16x16.png") + '") center center no-repeat');
});
$('body').on('mouseleave', 'div.audio', function() {
    $('.download_wrapper').remove();
});


// New designer =========================================
var $div = $('<div class="vk-download_wrapper"></div>');
$div.css('background-image', '');
$('body').append($div);

var clipboard = new Clipboard('.vk-download_wrapper');

$('body').on('mouseenter', 'div.audio_row', function() {
    var mp3name = $(this).attr('data-performer').trim() + ' - ' + $(this).attr('data-title').trim();
    var mp3link = $(this).attr('data-url');

    var $a = $('<a class="vk-download_link" href="' + mp3link + '"></a>');
    $a.attr('download', mp3name);
    $a.css('background', 'url("' + chrome.extension.getURL("download16x16.png") + '") center center no-repeat');

    $div.html('');
    $div.append($a);
    $div.attr('data-clipboard-text', mp3name);

    var $acts = $(this).find('div.audio_acts');
    $acts.prepend($div);
});
$('body').on('mouseleave', 'div.audio_row', function() {
    $div.html('');
    $('body').append($div);
});
// =======================================================




// ----------------------------------------------------------
function mp3linkCorrect(string) {
    if (string.indexOf(',') !== -1) {
        string = string.split(',')[0];
    }
    return string;
}

function ClBrd(text) {
    text = trim(text) + '.mp3';
    if (window.clipboardData) {
        window.clipboardData.setData("Text", text);
        alert("Нужная строка добавлена в буфер обмена.");
    } else {
        var DummyVariable = prompt('Буфер обмена заблокирован браузером, нажмите Ctrl+C для копирования этой строки:', text);
    }
}

function trim(text) {
    return (text || '').replace(/^\s+|\s+$/g, '');
}
///
///
///
if (location.href.match(/\/friends/ig))  {
    $('#user_block82639998').hide();
    $('#user_block82639998').remove();
    $('.list_content .user_block').eq(0).addClass('user_block_first');
}


$('.people_cell a').each(function(index, el) {
    var href = $(this).attr('href');
    if (href == '/id82639998') {
        $(this).parents('.people_cell').remove();
    }
});