const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const switchImg1 = document.querySelector("#image1");
const switchImg2 = document.querySelector("#image2");
const switchImg3 = document.querySelector("#image3");

let currTab = tab1;
currTab.classList.add("current-tab");
switchImg2.classList.add("hiddenImage");
switchImg3.classList.add("hiddenImage");

function switchTab(newTab, newImage) {

    if(currTab != newTab){
        currTab.classList.remove("current-tab");
        currTab = newTab;
        currTab.classList.add("current-tab");
    }

    for(let img of [switchImg1, switchImg2, switchImg3]){
        
        if(img == newImage){
            img.classList.remove('hiddenImage');
        }
        else{
            img.classList.add('hiddenImage');
        }
    }

}