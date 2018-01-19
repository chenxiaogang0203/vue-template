(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth || window.innerWidth;
        if (!clientWidth) return;
        clientWidth = clientWidth > 420 ? 420 : clientWidth;
        window.BaseFontSize = clientWidth / 360 * 15;
        docEl.style.fontSize = window.BaseFontSize + 'px';
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);