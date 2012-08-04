var tryMe = {};

tryMe.init = function() {
    var $body = $('body');
    var $container = $('#leaderBoard');
    var count = $container.attr('dataCount');

    for (var i = 0; i < count; i++) {
        var markup = '<div class="item"> '+ (i + 1) +'. Eleman  </div>';
        $body.append(markup);
    }
};