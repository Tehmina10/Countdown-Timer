const edate = "19 March 2024 12:35:22 AM";
document.querySelector("#edate").innerText = edate;
const inputs = document.querySelectorAll("input");
function countdown() {
        const end = new Date(edate)
        const curr = new Date();
        let diff = (end - curr) / 1000; //sec= 1000;


        if (diff < 0) return;
        console.log(diff / 3600 / 24);
        // convert into a days
        inputs[0].value = (Math.floor(diff / 3600 / 24));
        // convert into a hours
        inputs[1].value = (Math.floor(diff / 3600) % 24);
        // convert into a minuter
        inputs[2].value = (Math.floor(diff / 60) % 60);
        // convert into a sec
        inputs[3].value = (Math.floor(diff % 60));


}
//setInterval((),1000)
setInterval(() => { countdown(); }, 1000)
countdown();
