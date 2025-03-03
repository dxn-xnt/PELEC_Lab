$().ready(function () {

    /* Function Code */
    $("#computeTotal").click(function () {
        var tv = parseInt($("#tvSold").val());
        var vcr = parseInt($("#vcrSold").val());
        var remoteController = parseInt($("#remoteControllerSold").val());
        var cd = parseInt($("#cdSold").val());
        var tapeRecorder = parseInt($("#tapeRecorderSold").val());

        if (isNaN(tv) || isNaN(vcr) || isNaN(remoteController) || isNaN(cd) || isNaN(tapeRecorder)) alert('The system cannot process the data. Please check your data!');
        if (tv < 0 || tv > 10000 ||          
            vcr < 0 || vcr > 10000 ||        
            remoteController < 0 || remoteController > 10000 || 
            cd < 0 || cd > 10000 ||          
            tapeRecorder < 0 || tapeRecorder > 10000) alert('The system detected an exceeded quantity. Please change your data!');
        else{
            const salesTax = 8.25;
            const tvPrice = 400.0;
            const vcrPrice = 220.0;
            const remotePrice = 35.20;
            const cdPrice = 300.0;
            const recorderPrice = 150.0;

            let tvTotal = tvPrice * tv;
            let vcrTotal = vcrPrice * vcr;
            let remoteTotal = remotePrice * remoteController;
            let cdTotal = cdPrice * cd;
            let recorderTotal = recorderPrice * tapeRecorder;

            let subtotal = tvTotal + vcrTotal + remoteTotal + cdTotal + recorderTotal;
            let tax = (subtotal * salesTax) / 100;
            let total = subtotal - tax;
            
            /* Display */
            $("#result").html("  QTY \t\t DESCRIPTION \t\t UNIT PRICE \t\t TOTAL PRICE<br/>"+
                              "---------------------------------------------------------------------------------------------"+"<br/>  "+
                              tv + " \t\t TV \t\t\t "+tvPrice.toFixed(2)+" \t\t "+tvTotal.toFixed(2)+"<br/>  "+
                              vcr + " \t\t VCR \t\t\t "+vcrPrice.toFixed(2)+" \t\t "+vcrTotal.toFixed(2)+"<br/>  "+
                              remoteController + " \t\t REMOTE CNTRLR \t\t "+remotePrice.toFixed(2)+" \t\t\t "+remoteTotal.toFixed(2)+"<br/>  "+
                              cd + " \t\t CD PLAYER \t\t "+cdPrice.toFixed(2)+" \t\t "+cdTotal.toFixed(2)+"<br/>  "+
                              tapeRecorder + " \t\t TAPE RECORDER \t\t "+recorderPrice.toFixed(2)+" \t\t "+recorderTotal.toFixed(2)+"<br/><br/>"+
                              "  \t\t\t\t\t SUB. TOTAL \t\t <b>"+subtotal.toFixed(2)+"<br/></b>"+
                              "  \t\t\t\t\t TAX       \t\t <b>"+tax.toFixed(2)+"<br/></b>"+
                              "  \t\t\t\t\t TOTAL     \t\t <b>"+total.toFixed(2)+"<br/></b>"
                              
            );
        }
    });
});