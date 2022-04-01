const quotes=["Good software, like wine, takes time - Joel SPolsky", "Another day goes by 🎵 - anon", "Let's go do something today - anon"]

function setup()
{
    let qnum = Math.floor(Math.random() * 2) + 0;
    document.getElementById("quote").innerHTML = quotes[qnum];

}



