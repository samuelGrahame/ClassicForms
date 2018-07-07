var guidArray = {};

function createGUID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
const assemblyName = 'ClassicFormsBlazor';
const namespace = 'Retyped';
const typeName = 'dom';

function CallEvent(uid, ev) {
    var methodName = 'InvokeEvent';

    const methodTypeInfo = Blazor.platform.findMethod(
        assemblyName,
        namespace,
        typeName,
        methodName
    );

    var eventuid = createGUID();
    guidArray[eventuid] = ev;

    Blazor.platform.callMethod(methodTypeInfo, null, [Blazor.platform.toDotNetString(uid), Blazor.platform.toDotNetString(eventuid)]);

    delete guidArray[eventuid];
}

function CallMouseEvent(uid, ev) {
    var methodName = 'InvokeMouseEvent';

    const methodTypeInfo2 = Blazor.platform.findMethod(
        assemblyName,
        namespace,
        typeName,
        methodName
    );
    var uuiToDelete = null;
    if (ev.currentTarget.gui == null) {
        var uui = createGUID();
        guidArray[uui] = ev.currentTarget;
        ev.currentTarget.gui = uui;

        uuiToDelete = uui;
    }

    var eventuid = createGUID();
    guidArray[eventuid] = ev;

    var data = ev.x + '\n' + ev.y + '\n' + ev.clientX + '\n' + ev.clientY + '\n' + ev.layerX + '\n' + ev.layerY + '\n' + ev.currentTarget.gui + '\n' + ev.button + '\n' + eventuid;

    try {
        Blazor.platform.callMethod(methodTypeInfo2, null, [Blazor.platform.toDotNetString(uid), Blazor.platform.toDotNetString(data)]);
    } catch (e) {
        console.log(e);
    }

    delete guidArray[eventuid];
    if (uuiToDelete != null) {
        delete guidArray[uuiToDelete];
    }
}

var documentGUI = createGUID();
guidArray[documentGUI] = document;
document.gui = bodyGUI;

var bodyGUI = createGUID();
guidArray[bodyGUI] = document.body;
document.body.gui = bodyGUI;

var windowGUI = createGUID();
guidArray[windowGUI] = window;
window.gui = windowGUI;

var windowNavgatorGUI = createGUID();
guidArray[windowNavgatorGUI] = window.navigator;

Blazor.registerFunction('createElement', (tagName) => {
    var uui = createGUID();
    guidArray[uui] = document.createElement(tagName);
    guidArray[uui].gui = uui;
    return uui;
});

Blazor.registerFunction('createDocumentFragment', () => {
    var uui = createGUID();
    guidArray[uui] = document.createDocumentFragment();
    guidArray[uui].gui = uui;
    return uui;
});

Blazor.registerFunction('document', () => {
    return documentGUI;
});
Blazor.registerFunction('body', () => {
    return bodyGUI;
});
Blazor.registerFunction('window', () => {
    return windowGUI;
});
Blazor.registerFunction('navigator', () => {
    return windowNavgatorGUI;
});

Blazor.registerFunction('onmousedown', (instance, value) => {
    return guidArray[instance].onmousedown = (ev) => {
        CallMouseEvent(value, ev);
    };
});
Blazor.registerFunction('onchange', (instance, value) => {
    return guidArray[instance].onchange = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('onresize', (instance, value) => {
    return guidArray[instance].onresize = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('onpaste', (instance, value) => {
    return guidArray[instance].onpaste = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('onmouseenter', (instance, value) => {
    return guidArray[instance].onmouseenter = (ev) => {
        CallMouseEvent(value, ev);
    };
});
Blazor.registerFunction('onmouseleave', (instance, value) => {
    return guidArray[instance].onmouseleave = (ev) => {
        CallMouseEvent(value, ev);
    };
});
Blazor.registerFunction('onkeydown', (instance, value) => {
    return guidArray[instance].onkeydown = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('onkeyup', (instance, value) => {
    return guidArray[instance].onkeyup = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('onblur', (instance, value) => {
    return guidArray[instance].onblur = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('onclick', (instance, value) => {
    return guidArray[instance].onclick = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('ondblclick', (instance, value) => {
    return guidArray[instance].ondblclick = (ev) => {
        CallEvent(value, ev);
    };
});
Blazor.registerFunction('onmousemove', (instance, value) => {
    guidArray[instance].addEventListener('mousemove', (ev) => {
        CallMouseEvent(value, ev);
    });
});
Blazor.registerFunction('onmouseup', (instance, value) => {
    guidArray[instance].addEventListener('mouseup', (ev) => {
        CallMouseEvent(value, ev);
    });
});
Blazor.registerFunction('stopPropagation', (instance) => {
    guidArray[instance].stopPropagation();
});
Blazor.registerFunction('getAttribute', (instance, name) => {
    return guidArray[instance].getAttribute(name);
});

Blazor.registerFunction('document_activeElement_get', () => {
    if (document.activeElement == null) {
        return '';
    } else {
        if (document.activeElement.gui == null) {
            var uui = createGUID();
            guidArray[uui] = document.activeElement;
            document.activeElement.gui = uui;
            return uui;
        } else {
            return document.activeElement.gui;
        }
    }
});

Blazor.registerFunction('element_childnode', (instance, index) => {
    var ini = guidArray[instance].childNodes[index];
    if (ini.gui == null) {
        var uui = createGUID();
        guidArray[uui] = ini;
        ini.gui = uui;
        return uui;
    } else {
        return ini.gui;
    }
});

Blazor.registerFunction('element_parentElement_get', (instance) => {
    var ini = guidArray[instance].parentElement;
    if (ini == null)
        return "";

    if (ini.gui == null) {
        var uui = createGUID();
        guidArray[uui] = ini;
        ini.gui = uui;
        return uui;
    } else {
        return ini.gui;
    }
});

Blazor.registerFunction('element_parentElement_set', (instance, other) => {
    guidArray[instance].parentElement = guidArray[other];
});

Blazor.registerFunction('document_activeElement_set', (uui) => {
    if (uui == "")
        document.activeElement = null;
    else {
        document.activeElement = guidArray[uui];
    }
});

Blazor.registerFunction('setAttribute', (instance, name, value) => {
    guidArray[instance].setAttribute(name, value);
});

Blazor.registerFunction('removeAttribute', (instance, name, value) => {
    guidArray[instance].removeAttribute(name);
});

Blazor.registerFunction('appendChild', (instance, child) => {
    guidArray[instance].appendChild(guidArray[child]);
});
Blazor.registerFunction('removeChild', (instance, child) => {
    guidArray[instance].removeChild(guidArray[child]);
});
Blazor.registerFunction('insertBefore', (instance, child, child2) => {
    guidArray[instance].insertBefore(guidArray[child], guidArray[child2]);
});
Blazor.registerFunction('classList_contains', (instance, value) => {
    return guidArray[instance].classList.contains(value);
});

Blazor.registerFunction('classList_remove', (instance, value) => {
    return guidArray[instance].classList.remove(value);
});

Blazor.registerFunction('classList_add', (instance, value) => {
    return guidArray[instance].classList.add(value);
});

Blazor.registerFunction('innerHTML_get', (instance) => {
    return guidArray[instance].innerHTML;
});

Blazor.registerFunction('element_get', (instance, method) => {
    return guidArray[instance][method];
});

Blazor.registerFunction('element_set', (instance, method, value) => {
    guidArray[instance][method] = value;
});

Blazor.registerFunction('element_style_get', (instance, method) => {
    return (guidArray[instance].style)[method];
});

Blazor.registerFunction('element_style_set', (instance, method, value) => {
    (guidArray[instance].style)[method] = value;
});

Blazor.registerFunction('element_call', (instance, method) => {
    guidArray[instance][method]();
});

Blazor.registerFunction('element_call_ret', (instance, method) => {
    return guidArray[instance][method]();
});

Blazor.registerFunction('getBoundingClientRect', (instance) => {
    var rect = guidArray[instance].getBoundingClientRect();

    return rect.left + ',' + rect.top + ',' + rect.right + ',' + rect.bottom + ',' +
        rect.x + ',' + rect.y + ',' + rect.width + ',' + rect.height;
});

Blazor.registerFunction('getOffsetPoint', (instance, IsFF) => {
    var top = 0;
    var left = 0;
    var element = guidArray[instance];

    do {
        var dym = element;
        if (IsFF) {
            var rec = element.getBoundingClientRect();
            top += rec.top;
            left += rec.left;

            element = element.parentElement;
        }
        else {
            top += dym.offsetTop;
            left += dym.offsetLeft;
            element = dym.offsetParent;
        }


    } while (element != null);

    return left + ',' + top;
});

Blazor.registerFunction('innerHTML_set', (instance, innerHTML) => {
    guidArray[instance].innerHTML = innerHTML;
});