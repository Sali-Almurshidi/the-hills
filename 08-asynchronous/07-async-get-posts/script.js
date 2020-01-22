
document.getElementById("run").addEventListener("click", async function () {

    const res = await window.lib.getPosts();
    console.log(res);

});

/*
(async () => {
    const res = await fetch(`https://api.github.com/users/jameshibbard`);
    const json = await res.json();
    console.log(json.public_repos);
    console.log("Hello!");
})();*/
