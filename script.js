const toastBox = document.getElementById("toastbox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Sucessfully Submitted!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error occured, Please Fix';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, Check again';

function showToast(msg){

   let toastElement = document.createElement("div");
   toastElement.classList.add("toast");
   toastElement.innerHTML = msg;
   toastBox.appendChild(toastElement);

   if (msg.includes('Error')){
    toastElement.classList.add("error");
   }

   if (msg.includes('Invalid')){
    toastElement.classList.add("invalid");
   }

   setTimeout(() => {
    toastElement.remove();
   },5000)
}