$().ready(function () {

    /* Function Code */
    $("#computeTotal").click(function () {
        var price = parseInt($("#price").val());
        var amount = parseInt($("#amount").val());

        if (isNaN(price) || isNaN(amount)) alert('The system cannot process the data. Please check your data!');
        if (price < 0 || price > 10000 ||          
            amount < 0 || amount > 10000) alert('The system detected an exceeded quantity. Please change your data!');
        else{
            let fixedPrice = price / 100;
            let fixedAmount = amount / 100;
            let change = fixedAmount - fixedPrice;
            let origChange = change;

            if (change < 0) alert('Tenderded amount is lesser than the price');
            else{

                let twenty = Math.floor(change / 20);
                change %= 20;
                let ten = Math.floor(change / 10);
                change %= 10;
                let five = Math.floor(change / 5);
                change %= 5;
                let one = Math.floor(change / 1);
                change %= 1;
                let twentyFiveCent = Math.floor(change / 0.25);
                change %= 0.25;
                let tenCent = Math.floor(change / 0.10);
                change %= 0.10;
                let fiveCent = Math.floor(change / 0.05);
                change %= 0.05;
                let oneCent = Math.floor(change / 0.01);
                change %= 0.01;

                /* Display */
                $("#result").html("Price of an item: "+fixedPrice.toFixed(2)+"<br/>"+
                                  "Tendered Amount: "+fixedAmount.toFixed(2)+"<br/><br/>"+
                                  "Change: "+origChange.toFixed(2)+"<br/><br/>"+
                                  "Coin Denomination:<br/><br/>"+
                                  "20 peso: \t"+twenty+"<br/>"+
                                  "10 peso: \t"+ten+"<br/>"+
                                  " 5 peso: \t"+five+"<br/>"+
                                  " 1 peso: \t"+one+"<br/>"+
                                  ".25 peso: \t"+twentyFiveCent+"<br/>"+
                                  ".10 peso: \t"+tenCent+"<br/>"+
                                  ".05 peso: \t"+fiveCent+"<br/>"
                );
            }
        }
    });
});

