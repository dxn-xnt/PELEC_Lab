$().ready(function(){
    $("#compute").click(function(){
        var vehicle = $("#vehicle").val();
        var enterHr = parseInt($("#enterHour").val());
        var enterMin = parseInt($("#enterMin").val());
        var exitHr = parseInt($("#exitHour").val());
        var exitMin = parseInt($("#exitMin").val());

        if(!vehicle || isNaN(enterHr) || isNaN(enterMin) || isNaN(exitHr) || isNaN(exitMin)) alert("Invalid data entry");
        else{
            let parkTime = calculateParkTime(enterHr, enterMin, exitHr, exitMin);
            let rates = checkVehicle(vehicle);
            if (!rates || !parkTime) return; 

            let { parkHr, parkMin } = parkTime;
            let { firstRate, secondRate, hr } = rates;
            let roundedHr = (parkMin > 0) ? parkHr + 1 : parkHr;

            let charge = (roundedHr <= hr)? firstRate * roundedHr : (firstRate * hr) + (secondRate * (roundedHr - hr));
            let enter = (enterHr===12)? 12: (enterHr%12);
            let exit = (exitHr===12)? 12: (exitHr%12);

            $("#result").html("\t\tPARKING LOT CHARGE SYSTEM"+"<br><br>"+
	
                        "Type of vehicle		    : "+ vehicle +"<br>"+
                        "TIME-IN			    : "+ enter +" : "+ enterMin +"<br>"+
                        "TIME-OUT		    : "+ exit +" : "+ exitMin +"<br><br>"+

                        "PARKING TIME		    : "+ parkHr +" : "+ parkMin +"<br>"+
                        "ROUNDED TOTAL		    : "+ roundedHr +"<br><br>"+

                        "TOTAL CHARGES		   : P <b>"+ charge +"<b/><br>"
            );
        
        }
    })
    function calculateParkTime(enterHr, enterMin, exitHr, exitMin) {
        if (enterHr < 4 || enterHr === 24 || exitHr < 4 || exitHr === 24 || exitHr < enterHr) {alert("The car has been towed away."); return null}        
        let parkHr = exitHr - enterHr;
        let parkMin = exitMin - enterMin;
        if (parkMin < 0) {
            parkMin += 60;
            parkHr -= 1;
        }    
        return { parkHr, parkMin };
    }
    
    function checkVehicle(vehicle) {
        let firstRate = 0.0;
        let secondRate = 0.0;
        let hr = 0;
    
        if (vehicle === "car") {
            firstRate = 0.0;
            secondRate = 10.0;
            hr = 3;
        } else if (vehicle === "bus") {
            firstRate = 30.0;
            secondRate = 15.25;
            hr = 2;
        } else if (vehicle === "truck") {
            firstRate = 60.0;
            secondRate = 30.15;
            hr = 1;
        } else {
            alert("Vehicle type undefined.");
            return null; 
        }
        return { firstRate, secondRate, hr };
    }
})