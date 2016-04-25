(http://stackoverflow.com/questions/9106249/loop-through-children-of-current-node-in-tinymce)
Loop through children of current node in TinyMCE

Användbar kodsnutt:
var ed = tinyMCE.activeEditor;
var element = ed.dom.getParent(ed.selection.getNode(), 'table');

var child = element.firstChild;
while(child){
    if(child.nodeName.toLowerCase() == 'tr'){
        //do your stuff here
    }
    child = child.nextSibling;
}
