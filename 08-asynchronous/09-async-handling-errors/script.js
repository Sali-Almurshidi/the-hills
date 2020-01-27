document.getElementById("run").addEventListener("click", async function () {
   const persons = await window.lib.getPersons();
    console.log(persons);
});