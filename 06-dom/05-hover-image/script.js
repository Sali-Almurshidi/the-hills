function test() {

    // your code here
    let newSource = document.getElementsByTagName('img').getAttribute('data-hover');
    let oldSource = document.getElementsByTagName('img').getAttribute('src');


    function newImg() {
        imageHere.setAttribute('src', 'newSource');
    }

    function oldImg() {
        imageHere.setAttribute('src', 'oldSource');
    }
}



