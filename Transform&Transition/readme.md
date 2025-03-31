hover  focus active after before 

hover: button par mouse ka aana that is hover 
button : hover{
    background-color : red;
}

focus means active element hai agar usmein se cursor remove kiya toh color haat jayegaa 
let say 
button : focus {
    color : red ; 
}
cursor agar button mein hai taab tak text color red remove karne k bad color change 

if u want something before the element ya content ke pehle kuch chaiye  u can use ::before

li :: before{
    content :"";  // its important to write in every before element 
}


Transisition : ek state se dusre state mein janaa that is transisition
button{
    bg : red;
    transition: kisee change karna hai ;
    transisition : all linear 1s
                 : all ease-in      // slow start lekin fast khatam 
                 : all ease-out     //fast chalue slow khatam
                 : all cubicbenzier(0.19,1) 1s
}

// translate means move kara in x-axis & in Y-axis
transform: translate(x,y)
         :rotate(30deg)  rotate
         :scale(0.8) means chota bada karna element ko 

button:hover{
    transform:scale(0.5)
}



translate3d(1,2,3)moves element in 3d space   aage aur peeche move karta hai 
to use Translate3d u need to use perspective jis par bhe hone wala hai uske parent par laga doo perspective



****animations****
to create animation create variable @keyframe variable name uske baad jaha use karna hai 
animation: demo 1s cubic-bezier(0.19, 1, 0.22, 1) 1s  both;

@keyframes variablename{
    from{}
    to{}
}


or

@keyframes demo{
    0%{

    }
    50%{

    }
    100%{

    }
}