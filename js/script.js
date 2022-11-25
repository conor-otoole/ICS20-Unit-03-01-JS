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
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
