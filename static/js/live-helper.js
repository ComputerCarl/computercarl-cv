var LHCChatOptions = {};
LHCChatOptions.opt = { widget_height: 340, widget_width: 300, popup_height: 520, popup_width: 500, domain: 'computercarl.com' };
(function () {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://') + 1)) : '';
    var location = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
    po.src = 'https://chat.computercarl.com/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/1?r=' + referrer + '&l=' + location;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();