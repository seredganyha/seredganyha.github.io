let text = "Солнце, не надо злиться из-за всякой ерунды,люблю тебя.Твой алкаш"
let scrolls = 0
const TOP_MIN =150
const STEP_TOP = 0.4


let arrayText = text.split('')
let wrapper = document.querySelector('.wrapper')
console.log(arrayText)

arrayText.forEach((element, index, array) => {
    let div = createDiv()
    let span = createSpan()


    div.style.zIndex = `${array.length - index}`

    div.style.transform = `rotate(${index * 5}deg)`;
    
    span.innerHTML = element
    span.style.top = `-${TOP_MIN - (STEP_TOP * index)}px`


    div.appendChild(span)
    wrapper.appendChild(div)

});

let divs = document.querySelectorAll('.container')
    divs = Array.from(divs)
let spans = Array.from(document.querySelectorAll('.inner'))

function createDiv() {
    let div = document.createElement('div')
    div.className = 'container'
    div.style.display = 'block'
    div.style.left = '0px'
    return div
}


function createSpan() {
    let span = document.createElement('span')
    span.className = 'inner'
    return span
}


function toScrollDowns() {
    

    divs.forEach((elem, i) => {
       let valueTransform = elem.style.transform.split('rotate(').join('').split('deg)')
       let valueTop = +spans[i].style.top.slice(1,-2);
       let valueLeft = +elem.style.left.slice(1, -2)
        if(+valueTransform[0]===0){
           
            elem.style.left = `-${valueLeft + 44/3}px`
            
        }  
        
       
        if(+valueTransform[0]>6){
            elem.style.transform = `rotate(${valueTransform[0] - 5}deg)`
        }
        else{
            elem.style.transform = `rotate(0deg)`
        }

        if(+valueTop<TOP_MIN){

            if(+valueTop<TOP_MIN && (+valueTop>TOP_MIN-STEP_TOP)){
                console.log(`valueTop = ${+valueTop}`)
                spans[i].style.top = `-${valueTop+TOP_MIN-valueTop}px`
            }
            else{
                spans[i].style.top = `-${valueTop+STEP_TOP}px`
            }
            
        }


        
    })







}




window.addEventListener('scroll',()=>{
   
    toScrollDowns()
})



