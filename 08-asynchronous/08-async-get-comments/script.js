

document.getElementById("run").addEventListener("click", async function () {
    const posts = await window.lib.getPosts();
    forEachElements(posts);
});

function forEachElements(data) {
    data.forEach(async function (element) {
        const comments = await window.lib.getComments();

            add(comments);

            function add (addComment) {
                let comments = addComment[element.id];
                if (comments !== undefined) {
                    element.comment = comments;
                }
                console.log(element);
            }
    });
}





