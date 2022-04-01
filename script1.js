const quotes=["Good software, like wine, takes time 🍷 - Joel Spolsky", "1 bug fixed, 5 new ones 🪲 - anon", "Pull Request sent ✨ - anon", "Open the source 🔧 - anon", "Emulating CPU operations 🖥️ - anon ", "7 and counting 👩‍💻 - anon", "client-server relationship 🗄️"]

function setup()
{
    let qnum = Math.floor(Math.random() * 6) + 0;
    document.getElementById("quote").innerHTML = quotes[qnum];

}



