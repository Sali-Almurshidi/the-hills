
//let dataArray;
document.getElementById("run").addEventListener("click", function () {
    window.lib.getPosts(function (error, data) {
       // dataArray = data;
        forEachElements(data);
    });
});

function forEachElements(data) {
    //console.log(data);
    data.forEach(function (element, index) {
        //console.log(element);
        window.lib.getComments(null ,function (error, articles) {
            //console.log(articles);
            // back 5 elementsundefinedundefined
            if(articles[element.id] !== undefined){
               // articles.articles[element.id] =
                console.log(articles[element.id]);
            }

           // console.log(element.id);
            //console.log(element.title);
            //console.log(element);
        });
    });
}
/*

let posts, comment;

document.getElementById("run").addEventListener("click", function () {

    window.lib.getPosts(function (error, articles) {

        posts = articles;

        posts.forEach(function (post) {

            window.lib.getComments(null, function (error, getComments) {

                comment = getComments[post.id];

                if (comment !== undefined) {

                    post.comment = comment;

                }

                console.log(post);

            });
        });
    });
});*/
