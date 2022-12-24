/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var dragMaster = (function() {

    var dragObject;
    var mouseDownAt;

	var currentDropTarget;

	
	function mouseDown(e) {
		e = fixEvent(e);
		if (e.which!=1) return;

 		mouseDownAt = { x: e.pageX, y: e.pageY, element: this };

		addDocumentEventHandlers();
               
		return false;
	}


	function mouseMove(e){
		e = fixEvent(e)

		// (1)
		if (mouseDownAt) {
			if (Math.abs(mouseDownAt.x-e.pageX)<5 && Math.abs(mouseDownAt.y-e.pageY)<5) {
				return false;
			}
			// ������ �������
			var elem  = mouseDownAt.element;
                       
			// ������� ������ ��� ��������
			dragObject = elem.dragObject;
			
			// ���������, � ����� ������������� ��������� ������� �������
			var mouseOffset = getMouseOffset(elem, mouseDownAt.x, mouseDownAt.y);
			mouseDownAt = null; // ����������� �������� ������ �� �����, ����� ��� ��������
			
			dragObject.onDragStart(mouseOffset);// ������
			
		};

		// (2)
		dragObject.onDragMove(e.pageX, e.pageY);
		
		// (3)
		var newTarget = getCurrentTarget(e);
		
		// (4)
		if (currentDropTarget != newTarget) {
			if (currentDropTarget) {
				currentDropTarget.onLeave();
			}
			if (newTarget) {
				newTarget.onEnter();
			}
			currentDropTarget = newTarget;

		}
                
		
		// (5)
		return false;
    }
	
	
    function mouseUp(){
               
		if (!dragObject) { // (1)
			mouseDownAt = null;
		} else {
			// (2)
			if (currentDropTarget) {
                              
                                   currentDropTarget.accept(dragObject);
                                    dragObject.onDragSuccess(currentDropTarget);
                                
                               				
			} else {
				dragObject.onDragFail();
			}

			dragObject = null;
		}

		// (3)
		removeDocumentEventHandlers();
    }


	function getMouseOffset(target, x, y) {
		var docPos	= getOffset(target);
		return {x:x - docPos.left, y:y - docPos.top};
	}

	
	function getCurrentTarget(e) {
		// �������� ������, �������� ������� ��� ��� - � ��� �� �������� �����
		
		if (navigator.userAgent.match('MSIE') || navigator.userAgent.match('Gecko')) {
			var x=e.clientX, y=e.clientY;
		} else {
			var x=e.pageX, y=e.pageY;
		}
		// ����� �� ���� ������� ������� - ����������� ������ ����� �� hide �� show
		dragObject.hide();
		var elem = document.elementFromPoint(x,y);
		dragObject.show();
		
		// ����� ����� ��������� dropTarget
		while (elem) {
			// ������� ����� ������� dragObject 
			if (elem.dropTarget && elem.dropTarget.canAccept(dragObject)) {
                                
				return elem.dropTarget;
			}
			elem = elem.parentNode;
		}
		
		// dropTarget �� �����
		return null;
	}


	function addDocumentEventHandlers() {
		document.onmousemove = mouseMove;
		document.onmouseup = mouseUp;
		document.ondragstart = document.body.onselectstart = function() {return false;};
	}
	function removeDocumentEventHandlers() {
		document.onmousemove = document.onmouseup = document.ondragstart = document.body.onselectstart = null;
	}


    return {

		makeDraggable: function(element){
			element.onmousedown = mouseDown;
		}
    };
}());

