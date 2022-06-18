const form = document.getElementById("diary-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-diary");


// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",adddiary);
    document.addEventListener("DOMContentLoaded",function(){
        let diary = Storage.getdiaryFromStorage();
        UI.loadAlldiary(diary);

    });

    cardbody.addEventListener("click",deletediary);
    clear.addEventListener("click",clearAlldiary);

}
function adddiary(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        // Hata 
        UI.displayMessages("Tüm alanları doldurun...","danger");

    }
    else {
        
        const newdiary = new diary(title,director,url);

        UI.adddiaryToUI(newdiary); 
        Storage.adddiaryToStorage(newdiary);

        UI.displayMessages("Anı başarıyla eklendi...","success");


    }


    UI.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deletediary(e){

    if (e.target.id === "delete-diary") {
        UI.deletediaryFromUI(e.target);
        Storage.deletediaryFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme işlemi başarılı...","success");

    }

}
function clearAlldiary(){

    if (confirm("Emin misiniz ?")) {
        UI.clearAlldiaryFromUI();
        Storage.clearAlldiaryFromStorage();

    }
   

}