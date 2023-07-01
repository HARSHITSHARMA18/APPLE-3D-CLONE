import gsap from 'gsap';

export const scrollAnimation=(position,target,isMobile ,onUpdate)=>{
    const tl=gsap.timeline();

    //Position Animation
    tl.to(position,{
        //x,y and z positions from the Webgi model initially
        x: !isMobile?-3.38: -7.0,
        y:  !isMobile?-10.74: -12.2,
        z:  !isMobile?-5.93:-6.0,
    scrollTrigger : {
        trigger: '.sound-section',  //the encountering of sound section will trigger the animation
        start:"top bottom",     //Start when the top of section touches the bottom of viewport
        end:"top top",         //End when the top of section reaches the top of viewport
        scrub: 2 , //To make the transition between start and end animation 
        immediateRender:false   //to trigger the animation only when stated , as heavy animation   
    },
    onUpdate
    })
    .to(target,{
        //x,y and z positions from the Webgi model at final position
        x: !isMobile?1.52: 0.7,
        y: !isMobile?0.77: 1.9,
        z: !isMobile?-1.08: 0.7,
    scrollTrigger : {
        trigger: '.sound-section',  //the encountering of sound section will trigger the animation
        start:"top bottom",     //Start when the top of section touches the bottom of viewport
        end:"top top",         //End when the top of section reaches the top of viewport
        scrub: 2 , //To make the transition between start and end animation 
        immediateRender:false   //to trigger the animation only when stated , as heavy animation   
    }
    })
    
    //To avoid hinderence between two divs and seamless transition : Putting the initial opacity of hero section as 0
    .to('.jumbotron-section',{
     opacity:0,
    scrollTrigger : {
        trigger: '.sound-section',  
        start:"top bottom",     
        end:"top top",        
        scrub: 2 , 
        immediateRender:false   
    }
    })
    
    //Fade in the sound section from the initiall 0 opacity
    .to('.sound-section-content',{
        opacity:1,
       scrollTrigger : {
           trigger: '.sound-section',  
           start:"top bottom",     
           end:"top top",        
           scrub: 2 , 
           immediateRender:false   
       }
       })

       //Animation from Sound section To Footer Section
       .to(position,{
        //x,y and z positions from the Webgi model initially
        x:  !isMobile?1.56:9.36,
        y:  !isMobile?5.0:10.36,
        z:  !isMobile?0.01:0.09,
    scrollTrigger : {
        trigger: '.display-section',  //the encountering of display section will trigger the animation
        start:"top bottom",     //Start when the top of section touches the bottom of viewport
        end:"top top",         //End when the top of section reaches the top of viewport
        scrub: 2 , //To make the transition between start and end animation 
        immediateRender:false   //to trigger the animation only when stated , as heavy animation   
    },
    onUpdate
    })
    .to(target,{
        //x,y and z positions from the Webgi model at final position
        x: !isMobile?-0.55:-1.62,
        y: !isMobile? 0.32:0.02,
        z: !isMobile? 0.0:-0.06,
    scrollTrigger : {
        trigger: '.display-section',  //the encountering of display section will trigger the animation
        start:"top bottom",     //Start when the top of section touches the bottom of viewport
        end:"top top",         //End when the top of section reaches the top of viewport
        scrub: 2 , //To make the transition between start and end animation 
        immediateRender:false   //to trigger the animation only when stated , as heavy animation   
    }
    })


    //To fade in the siplay section
    to('.display-section',{
        opacity:1,
       scrollTrigger : {
           trigger: '.display-section',  
           start:"top bottom",     
           end:"top top",        
           scrub: 2 , 
           immediateRender:false   
       }
       })
}

