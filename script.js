var index = 0;

// function changecolor(){
//     var color = ["red", "green", "blue","yellow", "purple"];
//     document.getElementsByTagName('body')[0].style.backgroundColor = color[index++];

//     if(index > color.length - 1){
//         index = 0;
//     }
// }
function changecolor(){
    var color = ["red", "green", "blue","yellow", "purple"];
    document.getElementsByClassName('container')[0].style.backgroundColor = color[index++];

    if(index > color.length - 1){
        index = 0;
    }
}

//document.getElementsByClassName('container') is a method call that retrieves a collection of all the elements with the tag name 'body' in the current HTML document. This method returns an array-like collection, also known as a NodeList, containing all the matching elements.The [0] is used to access the first element in the NodeList. In JavaScript, array-like collections are zero-indexed, meaning that the first element has an index of 0, the second element has an index of 1, and so on.