document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("creaTask");
  let listaTask = document.getElementById("elencoTask");
  let taskArray = [];

  button.addEventListener("click", function () {
    let testoTask = document.getElementById("testoTask").value;
    if (testoTask.trim() !== "") {
      let nuovaTask = document.createElement("p");
      nuovaTask.textContent = testoTask;
      let i = document.createElement("i");
      i.classList.add("fa-solid", "fa-trash");
      nuovaTask.appendChild(i);
      listaTask.appendChild(nuovaTask);
      taskArray.push(nuovaTask);
      i.addEventListener("click", function () {
        let index = taskArray.indexOf(nuovaTask);
        if (index !== -1) {
          taskArray.splice(index, 1);
          nuovaTask.remove();
        }
      });
      document.getElementById("testoTask").value = "";
    } else {
      alert("Non hai inserito nessuna task");
    }
  });
  function updateTaskCount() {
    numeroTaskElement.textContent =
      "Numero totale di task: " + taskArray.length;
  }
});
