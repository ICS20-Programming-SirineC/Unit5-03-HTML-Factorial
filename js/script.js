// Copyright (c) 2023 Sirine Cherkaoui. All rights reserved.
//
// Created by: Sirine Cherkaoui
// Created on May 2023
// This file contains the JS functions for index.html

"use strict";

function CalcFactorial() {
  
  // Initializing counter and factorial variables to 1
  let counter = 1;
  let factorial = 1;
  
  // Getting user integer
  let userInt = parseInt(document.getElementById("user-integer").value);

  //If user leaves text-field blank, then display, "Please enter a response."
  if (isNaN(userInt)) {
    document.getElementById("results").innerHTML = "Please enter a response.";
    return;
  }

  //Else if the user enters a negative number, then display, "Please enter a positive integer."
  else if (userInt < 0) {
    document.getElementById("results").innerHTML = "Please enter a positive integer.";
    return;
  }

  //Else use a do-while loop to calculate the factorial
  else {
    do {
      factorial = factorial * counter;
      counter = counter + 1;
    } while (counter <= userInt);
  }

  //display factorial back to screen
  document.getElementById("results").innerHTML = "The factorial of !" + userInt + " = " + factorial + ".";
}
