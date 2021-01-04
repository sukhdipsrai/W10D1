// Same as below
// function $l(arg){
// }
// window.$l = $l;

const DOMNodeCollection = require("./dom_node_collection");

window.DOMNodeCollection = DOMNodeCollection;

window.$l = function (arg){
    // move if instance of html inside if arg is string
    if(arg instanceof HTMLElement) {
        let NodeList = [arg]
        return new DOMNodeCollection(NodeList);
    } else if( typeof arg === 'string' ){
        // do something, expect CSS selector
        let NodeList = document.querySelectorAll(arg);
        NodeList = Array.from(NodeList);
        return new DOMNodeCollection(NodeList);
    }
}
