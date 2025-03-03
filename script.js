const gameboard = document.getElementById("gameboard");
const restart = document.getElementById("restart");
const result = document.getElementById("result");

const imgarray = [
    {
        name:"Tiger",
        img:"asset/tigerimg.webp"
    },
    {
        name:"Eagle",
        img:"asset/eagleimg.jpg"
    },
    {
        name:"Lion",
        img:"asset/lionimg.webp"
    },
    {
        name:"Dog",
        img:"asset/dogimg.jpg"
    },
    {
        name:"Butterfly",
        img:"asset/butterflyimg.jpg"
    },
    {
        name:"Horse",
        img:"asset/horseimg.jpg"
    },
    {
        name:"Leaf",
        img:"asset/leafimg.jpg"
    },
    {
        name:"Bird",
        img:"asset/birdimg.webp"
    },
    {
        name:"Bat and Ball",
        img:"asset/batandballimg.jpeg"
    },
    {
        name:"Tiger",
        img:"asset/tigerimg.webp"
    },
    {
        name:"Eagle",
        img:"asset/eagleimg.jpg"
    },
    {
        name:"Lion",
        img:"asset/lionimg.webp"
    },
    {
        name:"Dog",
        img:"asset/dogimg.jpg"
    },
    {
        name:"Butterfly",
        img:"asset/butterflyimg.jpg"
    },
    {
        name:"Horse",
        img:"asset/horseimg.jpg"
    },
    {
        name:"Leaf",
        img:"asset/leafimg.jpg"
    },
    {
        name:"Bird",
        img:"asset/birdimg.webp"
    },
    {
        name:"Bat and Ball",
        img:"asset/batandballimg.jpeg"
    },
    
    
]

//To shuffle the  Card Randomly
imgarray.sort(()=>0.5 - Math.random());

//Initial background Image of Card
function cardimg(){
    for(let i=0;i<imgarray.length;i++)
    {
       const img = document.createElement("img")
       img.setAttribute("src","asset/bg-img.webp")
       img.setAttribute("id",i)
       img.addEventListener("click",flipcard)
       gameboard.append(img);
    }
}
cardimg();

//This is For Card Flipping
cardname = [];
cardnum = [];
function flipcard(){
    const cardid = this.getAttribute("id")
    this.setAttribute("src",imgarray[cardid].img);
    cardname.push(imgarray[cardid].name);
    cardnum.push(cardid);
    if(cardname.length === 2)
    {
        setTimeout(checkmatch,1000);
    }
}

//This is For Chech the match of the Card
cardwon = [];
function checkmatch(){
    const cardimg = document.querySelectorAll("img");
    if(cardname[0] === cardname[1] )
    {
        cardwon.push(cardname);
         result.innerHTML =cardwon.length;
         cardimg[cardnum[0]].removeEventListener("click",flipcard);
         cardimg[cardnum[1]].removeEventListener("click",flipcard);

    }
    else{
         cardimg[cardnum[0]].setAttribute("src","asset/bg-img.webp");
         cardimg[cardnum[1]].setAttribute("src","asset/bg-img.webp")
    }
    cardname = [];
    cardnum = [];

    if(cardwon.length === imgarray.length/2)
    {
        result.innerHTML = "CONGRATS🎉💥YOU SUCCESSFULLY COMPLETED  THE GAME"
    }
   
}

//END