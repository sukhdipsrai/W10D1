// Same as below
// function $l(arg){
// }
// window.$l = $l;

window.$l = function (arg){
    if( typeof arg === 'string'){
        // do something, expect CSS selector
        let domArr = Document.querySelectorAll(arg);
        domArr = Array.from(domArr);
    }
}