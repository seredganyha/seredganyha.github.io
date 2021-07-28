let text = "Ураааааа.Я смог раскрутить этот 'спираль-круго-текст' спустя 15 часов.Что я только не пробывал))))Закрутить всегда легче.Кстати,никто не хочет побегать?"
let scrolls = 0


let arrayText = text.split('')
let wrapper = document.querySelector('.wrapper')
console.log(arrayText)

arrayText.forEach((element, index, array) => {
    let div = createDiv()
    let span = createSpan()


    div.style.zIndex = `${array.length - index}`

    div.style.transform = `rotate(${index * 6}deg)`;
    
    span.innerHTML = element
    span.style.top = `-${150 - (0.25 * index)}px`


    div.appendChild(span)
    wrapper.appendChild(div)

});

let divs = document.querySelectorAll('.container')
    divs = Array.from(divs)

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
        valueTransform = elem.style.transform.split('rotate(').join('').split('deg)')
        if(+valueTransform[0]===0){
            elem.style.left = `-${(+elem.style.left.slice(1, -2)) + 15/3}px`
        }        


        if(+valueTransform[0]>6){
            elem.style.transform = `rotate(${valueTransform[0] - 1.6}deg)`
        }
        else{
            elem.style.transform = `rotate(0deg)`
        }
        
    })







}


window.addEventListener('scroll',()=>{
   
    toScrollDowns()
})



