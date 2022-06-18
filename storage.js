class Storage {

    static adddiaryToStorage(newdiary){
        let diary = this.getdiaryFromStorage();
    
        diary.push(newdiary);
        localStorage.setItem("diary",JSON.stringify(diary));

    }
    static getdiaryFromStorage(){
        let diary;
    
        if (localStorage.getItem("diary") === null) {
            diary = [];
        }
        else {
            diary = JSON.parse(localStorage.getItem("diary"));
    
        }
    
        return diary;
    }
    static deletediaryFromStorage(diaryTitle){
        let diary = this.getdiaryFromStorage();
        // splice
        diary.forEach(function(diary,index){
            if(diary.title === diaryTitle) {
                diary.splice(index,1);
            }
        });
    
        localStorage.setItem("diary",JSON.stringify(diary));
    
    
    
    
    }
    static clearAlldiaryFromStorage(){
    
        localStorage.removeItem("diary");
        
    }

}
