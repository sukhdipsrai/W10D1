class DOMNodeCollection {
    constructor(NodeList) {
        this.NodeList = NodeList;
    }

    html(string){
        if(string === "undefined") {
            return this.NodeList[0].innerHTML;
        }
        else{
            this.NodeList.forEach(ele => ele.innerHTML = string);
        }
    }

    empty(){
        this.html("");
    }

    append(arg){
        let domNode;
        if( arg instanceof DOMNodeCollection){
            domNode = arg;
        }
        else if (arg instanceof HTMLElement){
            domNode = new DOMNodeCollection([arg])
        }
        else if(typeof arg === 'string'){
            // let NodeList = document.querySelectorAll(arg);
            // make a node list with blank HTMLElements
            let NodeList = document.createElement(arg).innerHTML = "Hello World";
            NodeList = Array.from(NodeList);
            domNode = new DOMNodeCollection(NodeList);
        }
        debugger;
        this.NodeList.forEach( function(inner){
                domNode.NodeList.forEach(  function(outer){
                    inner.innerHTML += outer.outerHTML;
                });
        });

    }
}




module.exports = DOMNodeCollection;