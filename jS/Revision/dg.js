// Javascript to display the current time using Date() Object.,


let ampm = document.getElementById('ampm');

function digital_Clock() {

        let d = new Date();

        let hrs = zeros(d.getHours());
        let mts = zeros(d.getMinutes());
        let secs = zeros(d.getSeconds());


                if ( hrs > 12) {
                    hrs = hrs -12;
                    ampm.innerHTML="PM"
                }
                        

            document.getElementById('hrs').innerHTML = hrs;
            document.getElementById('mts').innerHTML = mts;
            document.getElementById('secs').innerHTML = secs;

}

        function zeros(num) {
            return num < 10 ? "0" + num : num
        }


        digital_Clock();
        setInterval(digital_Clock,1000);