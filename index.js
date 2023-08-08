const container = document.querySelector('.container')
const sect2 = document.querySelector('.sect2')
const sect3 = document.querySelector('.sect3')

const vo = document.querySelector('.vo')
const vo2 = document.querySelector('.vo2')
const vo3 = document.querySelector('.vo3')
const ba = document.querySelector('.ba')
const ba1 = document.querySelector('.ba1')
const ba2 = document.querySelector('.ba2')
const la = document.querySelector('.la')
const la1 = document.querySelector('.la1')
const la2 = document.querySelector('.la2')

const bt1 = document.querySelector('.bt1')
const bt2 = document.querySelector('.bt2')
const bt3 = document.querySelector('.bt3')
const bt4 = document.querySelector('.bt4')
const bt5 = document.querySelector('.bt5')

// partie transition des pages
window.onload = () => {
    // actualisation de la 1ère page
    document.querySelector('.container').style.display = "initial";
    
    
    //click sur vo2
    vo2.addEventListener("click", () => {
        sect2.style.display = "block";
        container.style.display = "none";
        
    })
    
    //click sur vo3
     
     vo3.addEventListener("click", () => {
         sect3.style.display = "block";
         container.style.display = "none";
     })
     
     //click sur bat1
     
     ba.addEventListener("click", () => {
         sect2.style.display = "none"
         container.style.display = "block"
     })
    
    //click sur la2
    
     ba2.addEventListener("click", () => {
        sect2.style.display = "none";
        sect3.style.display = "block";
    })
     
     //click sur la1
     
     
     la1.addEventListener("click", () => {
        sect3.style.display = "none";
        sect2.style.display = "block";
    })
     
     //click sur la 
     
     
     la.addEventListener("click", () => {
        sect3.style.display = "none";
        container.style.display = "block";
    })
     
}


// partie de defilement avec les bouttons

//dffilement vers p2

bt1.addEventListener("click", () => {
    container.style.display = "none";
    sect2.style.display = "block";
})

//deffilement vers p1

bt2.addEventListener("click", () => {
    sect2.style.display = "none";
    container.style.display = "block";
})

//deffilement vers p3

bt3.addEventListener("click", () => {
    sect2.style.display = "none";
    sect3.style.display = "block";
})
 
 //deffilement vers p2
 
bt4.addEventListener("click", () => {
    sect3.style.display = "none";
    sect2.style.display = "block";
})
 