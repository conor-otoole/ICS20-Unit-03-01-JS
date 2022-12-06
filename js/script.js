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
  navigator.serviceWorker.register("/ICS20-Unit-03-01-JS/sw.js", {
    scope: "/ICS20-Unit-03-01-JS/",
  })
}

/**
 * This function calculates the area and the perimeter of rectangle.
 */
function calculate() {
  // input
  const height = parseInt(document.getElementById("height").value)
  const baseb = parseInt(document.getElementById("bbase").value)
  const basea = parseInt(document.getElementById("abase").value)

  // process
  const area = [(basea + baseb) / 2] * height

  // output
  document.getElementById("area").innerHTML = "Area is:" + area + "cm²"
}
