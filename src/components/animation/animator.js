console.log("this is animation ");
const observer = new IntersectionObserver( ( entries)=>{
    entries.forEach( ( entry)=>{
        console.log(entry);
    })
})

const hiddenElements = document.querySelectorAll(".animator");
console.log(hiddenElements);
hiddenElements.forEach( ( Element)=>observer.observe(Element));

