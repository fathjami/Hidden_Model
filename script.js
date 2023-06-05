let openBtn = document.getElementById("modal-button");
let modalContainer = document.getElementById("hidden-modal");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function (){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener("click", function (){
    modalContainer.style.display = 'none';
});

