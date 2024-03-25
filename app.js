let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score_para=document.querySelector("#user-score");
const comp_score_para=document.querySelector("#comp-score");


const generate_computer_choice=()=>{
    const options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}


const drawgame=()=>{
   // console.log("game was drawn");
    msg.innerText="Game was Drawn";
    msg.style.backgroundColor="#081b31";
}

const showwinner=(user_win ,user_choice ,comp_choice)=>{
    if(user_win==true)
    {
        user_score++;
       // console.log("you win");
        msg.innerText=`You win! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        comp_score++;
       // console.log("comp win");
        msg.innerText=`You Lost!${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor="red";
    }
    user_score_para.innerText=`${user_score}`;
    comp_score_para.innerText=`${comp_score}`;
}



const playgame=(user_choice)=>{
    //Generate computer choice for battle
    const comp_choice=generate_computer_choice();
    
    if(user_choice===comp_choice)
    {
        drawgame();
    }
    else
    {
       let user_win=true;
       if(user_choice==="rock")
       {
          if(comp_choice==="paper")
          {
            user_win=false;
          }
          else if(comp_choice==="scissors")
          {
            user_win=true;
          }
       }
       else if(user_choice==="paper")
       {
        if(comp_choice==="rock")
        {
            user_win=true;
        }
        else if(comp_choice==="scissors")
        {
            user_win=false;
        }
       }
       else if(user_choice==="scissors")
       {
          if(comp_choice==="rock")
          {
            user_win=false;
          }
          else if(comp_choice==="paper")
          {
            user_win=true;
          }
       }
       showwinner(user_win ,user_choice ,comp_choice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        playgame(user_choice);
    })
})