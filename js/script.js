// Copyright (c) 2022 Conor All rights reserved
//
// Created by: conor-otoole
// Created on: nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("ICS20-Unit-03-01-JSS", {
    scope: "/ICS20-Unit-03-01-JSS/",
  })
}

/**
 * This function calculates the area and the perimeter of rectangle.
 */
function calculate() {
  // input
  const height = parseInt(document.getElementById("sample3").value);
  const baseb = parseInt(document.getElementById("sample2").value);
  const basea = parseInt(document.getElementById("sample1").value);

  // process
  const area = [(basea + baseb) / 2] * height;

  // output
  document.getElementById("area").innerHTML = "Area is:" + area + "cm²";
}
