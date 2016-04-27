javascript:
var text2 = "hej";
var child1level=document.getSelection().anchorNode.parentNode.parentNode;
window.getSelection().getRangeAt(0).startContainer.parentNode.style.backgroundColor="red";

text2 = text2 + child1level.nodeName;
var child2level = child1level.firstChild;
var counter = 100;

while(child1level){

while(child2level){
	
    text2=text2+" "+child2level.nodeValue;
    text2=text2+" "+child2level.nodeName;


    

    child2level = child2level.nextSibling;
    counter++;
    text2 = text2 + " " + counter.toString();
}

child1level=child1level.nextSibling;

}
alert(text2);

//var s=document.getSelection().anchorNode.parentNode;
