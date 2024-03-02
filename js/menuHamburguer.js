const menu = document.getElementById("menu");
const nav = document.querySelector("header");
const lista = document.getElementById("MenuMobile")

menu.addEventListener("click", () =>{
    if(lista.classList.contains("close")){
        lista.style.display = "flex";
        lista.classList.remove("close")
        lista.classList.add ("open");

    }else if(lista.classList.contains("open")){
        lista.style.display = "none";
        lista.classList.remove ("open");
        lista.classList.add("close")

       
    }
   
})

