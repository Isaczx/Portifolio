const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const submit = document.getElementById("liveAlertBtn");
const email = document.getElementById("recipient-name");
const mensagem = document.getElementById("message-text");
submit.disabled = true;
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert("Email enviado com Sucesso !", 'success')
    
  })
}

email.addEventListener('input', validarInput);
mensagem.addEventListener('input', validarInput);

submit.addEventListener("mouseover", function(){
  submit.style.backgroundColor = '#222831'
} )

submit.addEventListener("mouseout", function(){
  submit.style.backgroundColor = '#00ADB5'
} )

function validarInput(){
  if(email.value.trim() === "" || mensagem.value.trim() === "" ){
    submit.disabled = true;
    console.log(email.value.trim())
    submit.style.backgroundColor = 'gray';
  }else if(email.value.trim() != "" || mensagem.value.trim() != "" ){
    submit.disabled = false;
    console.log(email.value.trim())
    submit.style.backgroundColor = '#00ADB5';
    
    }
    
  }
    
