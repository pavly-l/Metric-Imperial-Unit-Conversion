/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input=document.getElementById("input")
const btnclick=document.getElementById("Convert_btn")
const len=document.getElementById("length_conversion") 
const vol=document.getElementById("volume_conversion") 
const mass=document.getElementById("mass_conversion")
btnclick.addEventListener("click",function(){
    inputValue = input.value;
    len.textContent= Length(inputValue)
    vol.textContent= Volume(inputValue)
    mass.textContent= Mass(inputValue)  
    
})
function multiply(inputValue,y){
    return (inputValue*y).toFixed(3)
}
function division(inputValue,y){
    return (inputValue/y).toFixed(3)
}
function Length(inputValue){
    const metersToFeet = multiply(inputValue,3.281)
    const feetToMeters = division(inputValue,3.281)
    return `
   ${inputValue} meters = ${metersToFeet} feet | 
   ${inputValue} feet = ${feetToMeters} meters
  `
}
function Volume(inputValue){
    const literstogallons = multiply(inputValue,0.264)
    const gallonstoliters = division(inputValue,0.264)
    return `
   ${inputValue} liters = ${literstogallons} gallons | 
   ${inputValue} gallons = ${gallonstoliters} liters
  `
}
function Mass(inputValue){
    const kilosTopounds = multiply(inputValue,2.204)
    const poundsTokilos = division(inputValue,2.204)
    return `
   ${inputValue} kilos = ${kilosTopounds} pounds | 
   ${inputValue} pounds = ${poundsTokilos} kilos
  `
}
