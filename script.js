// alert("hi")

const display = document.querySelector('.input')

const calculator = (number) =>{
  display.value+=number
}
const Result = () => {
  try{
    display.value = eval(display.value)
  }
  catch(err){
    alert("Enter a valid number")
  }
}
const Clear = () =>{
  display.value=""
}
const Delete = () =>{
  display.value = display.value.slice(0,-1)
}
const negative = () =>{
  display.value = display.value*-1
}
