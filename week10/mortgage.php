<?php
    /* ********************************************************************************
        JAVASCRIPT CODE COPIED HERE TO USE AS GUIDE
    
    var apr     = (parseFloat(document.getElementById("apr").value) / 100) / 12; //c
    var term    = parseInt(document.getElementById("term").value) * 12; //n
    var amount  = parseFloat(document.getElementById("amount").value); //L
    var payment; //P 

    if(validation(apr,term,amount)){
        //Formula -> P = L[c(1 + c)^n]/[(1 + c)^n - 1]
        payment = amount * ((apr * Math.pow((1 + apr),term)) / (Math.pow((1 + apr),term) - 1));

        payment = payment.toFixed(2);
        document.getElementById("payment").value = payment;
    }
    * ********************************************************/ //END JavaScript Code

    $apr     = ($_GET['apr'] / 100) / 12; //c
    $term    = $_GET['term'] * 12; //n
    $amount  = $_GET['amount']; //L

    //Formula -> P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    $payment = $amount * (($apr * pow((1 + $apr),$term)) / (pow((1 + $apr),$term) - 1));
    
    if ($apr == 0) $apr = "";
    if ($term == 0) $term = "";
    if ($amount == 0) $amount = "";


    include 'mortgage.html';

?>