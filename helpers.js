/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function fixEvent(e) {
	// ???????? ?????? ??????? ??? IE
	e = e || window.event;
	// ???????? pageX/pageY ??? IE
	if ( e.pageX == null && e.clientX != null ) {
		var html = document.documentElement;
		var body = document.body;
		e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
		e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
	}

	// ???????? which ??? IE
	if (!e.which && e.button) {
		e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) );
	}

	return e;
}

function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        return getOffsetRect(elem);
    } else {
        return getOffsetSum(elem);
    }
}

function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect();
 
    var body = document.body;
    var docElem = document.documentElement;
 
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
 
    return { top: Math.round(top), left: Math.round(left) };
}

function getOffsetSum(elem) {
    var top=0, left=0;
    while(elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent   ;     
    }
 
    return {top: top, left: left};
}



