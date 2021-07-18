
 function showForm() {
   let buttonForOnlineConsultation = document.querySelector('.onlineConsultation');
   let form = document.querySelector('.form_container');
buttonForOnlineConsultation.addEventListener('click', function () {
  form.style.display = 'flex';
});
 }
showForm();


let form = document.querySelector('.form');
  let submitEmail = document.querySelector('#submitEmail');
submitEmail.addEventListener('click', formSend);

  async function formSend(event) {
      event.preventDefault();
       let formData = new FormData(form);
      let response = await fetch('emailHandler.php', {
                 method: 'POST',
                 body: formData
               });
  }





// function sendForm() {
//   document.addEventListener('DOMCntentLoaded', function () {
//     const form = document.querySelector('.formForOnlineConsultation');
//     form.addEventListener('submit', formSend);
//
//     async function formSend(event) {
//       event.preventDefault();
//
//       let error = formValidate(form);
//
//       let formData = new FormData(form);
//
//        if (error === 0){
//          let response = await fetch('sendmail.php', {
//            method: 'POST',
//            body: formData
//          });
//        }else{
//          alert('Заполните обязательные поля');
//        }
//     }
//
//     function formValidate(form) {
//       let error = 0;
//       let formReq = document.querySelectorAll('._req');
//
//       for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formRemoveError(input);
//
//       if (input.classList.contains('_email')){
//         if (emailTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       }else {
//         if(input.value = ''){
//           formAddError(input);
//           error++;
//         }
//       }
//       }
//     }
//     function formAddError(input){
//       input.parentElement.classList.add('_error');
//       input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//       input.parentElement.classList.remove('.error');
//       input.classList.remove('_error');
//     }
//     //Функция теста _email
//     function emailTest(input) {
//       return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
//   });
// }
// sendForm();
