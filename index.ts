/*
 * This is a program that calculates the total cook time based on
 * the lunch item and number of lunch items
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-02-22
 */

import { createPrompt } from 'bun-promptx'
// constants
const subCookTime = 60
const pizzaCookTime = 45
const soupCookTime = 105

// input
const lunchType = createPrompt("Are you heating sub, pizza, or soup?(lowercase): ")
const lunchTypeString = lunchType.value

// process
switch (lunchTypeString) {
  case `sub`:
    const lunchAmount = createPrompt("How many are you heating?(Max 3): ")
    const lunchAmountInt = parseInt(lunchAmount.value || "-1")
    // error check
    if (isNaN(lunchAmountInt) == true || lunchAmountInt < 0) {
      console.log("Invalid input.")
    } else {
      // process & output
      const totalCookTime = (subCookTime / 2) + ((subCookTime / 2) * lunchAmountInt)
      const cookTimeSeconds = totalCookTime % 60
      const cookTimeMinutes = Math.floor(totalCookTime / 60)
      console.log(`Total cook time:\n${cookTimeMinutes} minutes, ${cookTimeSeconds} seconds.`)
    }
    break
  case `pizza`:
    const lunchAmount = createPrompt("How many are you heating?(Max 3): ")
    const lunchAmountInt = parseInt(lunchAmount.value || "-1")
    // error check
    if (isNaN(lunchAmountInt) == true || lunchAmountInt < 0) {
      console.log("Invalid input.")
    } else {
      // process & output
      const totalCookTime = (subCookTime / 2) + ((pizzaCookTime / 2) * lunchAmountInt)
      const cookTimeSeconds = totalCookTime % 60
      const cookTimeMinutes = Math.floor(totalCookTime / 60)
      console.log(`Total cook time:\n${cookTimeMinutes} minutes, ${cookTimeSeconds} seconds.`)
    }
    break
  case `soup`:
    const lunchAmount = createPrompt("How many are you heating?(Max 3): ")
    const lunchAmountInt = parseInt(lunchAmount.value || "-1")
    // error check
    if (isNaN(lunchAmountInt) == true || lunchAmountInt < 0) {
      console.log("Invalid input.")
    } else {
      // process & output
      const totalCookTime = (subCookTime / 2) + ((soupCookTime / 2) * lunchAmountInt)
      const cookTimeSeconds = totalCookTime % 60
      const cookTimeMinutes = Math.floor(totalCookTime / 60)
      console.log(`Total cook time:\n${cookTimeMinutes} minutes, ${cookTimeSeconds} seconds.`)
    }
    break
  default:
    console.log("Invalid")
    break
}

console.log("\nDone.")
