let minions = document.querySelectorAll('img');

let circle = document.querySelector('.circle');

tl =  gsap.timeline();
tl.to(circle, {
    rotate: 0,
    duration: 1
})
tl.to('.item9 img', {
    scale: 2,
})


let deg = -160;
minions.forEach((e,i)=>{
    e.setAttribute('rotate',deg);
    deg+= 20;
})

minions.forEach((e,i)=>{
    e.addEventListener('click',(event)=>{
        let rotate = event.target.getAttribute('rotate');
        // console.log(rotate);
        gsap.to(circle,{
            rotate: -rotate,
            // duration: 1,
            // ease: 'power2.out'
        })
        gsap.to(minions,{
            scale: 1
        })
        gsap.to(event.target,{
            scale:2
        })
        

    })
})