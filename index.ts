/*
 * This is a program that calculates the total cook time based on
 * the lunch item and number of lunch items
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-02-22
 */

import { createPrompt } from 'bun-promptx'
// constants & variables
const subCookTime = 60
const pizzaCookTime = 45
const soupCookTime = 105
let cookTimeMinutes
let cookTimeSeconds
let totalCookTime
let lunchAmount
let lunchAmountInt

// input
const lunchType = createPrompt("Are you heating sub, pizza, or soup?(lowercase): ")
const lunchTypeString = lunchType.value

// process
switch (lunchTypeString) {
case `sub`:
  lunchAmount = createPrompt("How many are you heating?(Max 3): ")
  lunchAmountInt = parseInt(lunchAmount.value || "-1")
  // error check
  if (isNaN(lunchAmountInt) == true || lunchAmountInt < 0 || lunchAmountInt > 3) {
    console.log("Invalid input.")
  } else {
    // process & output
    totalCookTime = (subCookTime / 2) + ((subCookTime / 2) * lunchAmountInt)
    cookTimeSeconds = totalCookTime % 60
    cookTimeMinutes = Math.floor(totalCookTime / 60)
    console.log(`Total cook time:\n${cookTimeMinutes} minutes, ${cookTimeSeconds} seconds.`)
  }
  break
case `pizza`:
  lunchAmount = createPrompt("How many are you heating?(Max 3): ")
  lunchAmountInt = parseInt(lunchAmount.value || "-1")
  // error check
  if (isNaN(lunchAmountInt) == true || lunchAmountInt < 0 || lunchAmountInt > 3) {
    console.log("Invalid input.")
  } else {
    // process & output
    totalCookTime = (pizzaCookTime / 2) + ((pizzaCookTime / 2) * lunchAmountInt)
    cookTimeSeconds = totalCookTime % 60
    cookTimeMinutes = Math.floor(totalCookTime / 60)
    console.log(`Total cook time:\n${cookTimeMinutes} minutes, ${cookTimeSeconds} seconds.`)
  }
  break
case `soup`:
  lunchAmount = createPrompt("How many are you heating?(Max 3): ")
  lunchAmountInt = parseInt(lunchAmount.value || "-1")
  // error check
  if (isNaN(lunchAmountInt) == true || lunchAmountInt < 0 || lunchAmountInt > 3) {
    console.log("Invalid input.")
  } else {
    // process & output
    totalCookTime = (soupCookTime / 2) + ((soupCookTime / 2) * lunchAmountInt)
    cookTimeSeconds = totalCookTime % 60
    cookTimeMinutes = Math.floor(totalCookTime / 60)
    console.log(`Total cook time:\n${cookTimeMinutes} minutes, ${cookTimeSeconds} seconds.`)
  }
  break
default:
  console.log("Invalid")
  break
}

console.log("\nDone.")
