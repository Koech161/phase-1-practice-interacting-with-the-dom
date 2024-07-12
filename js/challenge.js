document.addEventListener('DOMContentLoaded',(e)=>{
    const counter =document.getElementById('counter')
    const minusBtn=document.getElementById('minus')
    const plusBtn=document.getElementById('plus')
    const heartBtn=document.getElementById('heart')
    const pauseBtn=document.getElementById('pause')
    const likesContainer=document.querySelector('.likes')
    const listContainer=document.getElementById('list')
    const form=document.getElementById('comment-form')
    const input=document.getElementById('comment-input')
    const submitBtn=document.getElementById('submit')
    let intervalID=startCount(1000)
    let storeCount=0
    
function startCount(interval){
return setInterval(function(){
storeCount++
counter.textContent=storeCount
 }, interval)
}
minusBtn.addEventListener('click', (e)=>{
    storeCount--
})
plusBtn.addEventListener('click', (e)=>{
    storeCount++
})
heartBtn.addEventListener('click', (e)=>{
    const li = document.createElement('li')
    li.innerHTML= `${storeCount} has been like ${[]} time(s)`
    likesContainer.appendChild(li)
})
pauseBtn.addEventListener('click',(e)=>{
    if(pauseBtn.innerText==='pause'){
        pauseBtn.innerText='resume'
        clearInterval(intervalID)
        minusBtn.disabled=true
        plusBtn.disabled=true
        heartBtn.disabled=true
    }else if(pauseBtn.innerText==='resume'){
        minusBtn.disabled=false
        plusBtn.disabled=false
        heartBtn.disabled=false
    }
})
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const p= document.createElement('p')
    p.innerHTML=input.value
    listContainer.appendChild(p)
})
})