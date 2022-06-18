class UI {

    static adddiaryToUI(newdiary){
        /*
         <!-- <tr>
         <td><img src="" class="img-fluid img-thumbnail"></td>
         <td></td>
         <td></td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr> -->*/
     
       const diaryList = document.getElementById("diary");
     
       diaryList.innerHTML += `
       
             <tr>
                 <td><img src="${newdiary.url}" class="img-fluid img-thumbnail"></td>
                 <td>${newdiary.title}</td>
                 <td>${newdiary.director}</td>
                 <td><a href="#" id = "delete-diary" class = "btn btn-danger">Anıyı Sil</a></td>
             </tr>
       `;
     
     
     }
     static clearInputs(element1,element2,element3){
         element1.value = "";
         element2.value = "";
         element3.value = "";
     
     }
    static displayMessages(message,type){
         const cardBody = document.querySelector(".card-body");
         // Alert divini oluşturma
     
         const div = document.createElement("div");
     
     
         div.className = `alert alert-${type}`;
         div.textContent = message;
     
         cardBody.appendChild(div);
     
     
         setTimeout(function(){
             div.remove();
     
         },1000);
     
     
     
     }
     static loadAlldiary(diary){
     
         const diaryList = document.getElementById("diary");
     
         diary.forEach(function(diary){
            diaryList.innerHTML += `<tr>
             <td><img src="${diary.url}" class="img-fluid img-thumbnail"></td>
             <td>${diary.title}</td>
             <td>${diary.director}</td>
             <td><a href="#" id = "delete-diary" class = "btn btn-danger">Anıyı Sil</a></td>
         </tr>`;
         });
     
     }
     static deletediaryFromUI(element) {
     
         element.parentElement.parentElement.remove();
     }
     static clearAlldiaryFromUI(){
     
         const diaryList = document.getElementById("diary");
     
         // filmList.innerHTML = "";
     
         while(diaryList.firstElementChild !== null) { // Child Olduğu Sürece
             diaryList.firstElementChild.remove();
         }
     }
    
}
