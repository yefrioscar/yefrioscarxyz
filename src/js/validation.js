const name = document.getElementById('name');
const mail = document.getElementById('mail');
const textArea = document.getElementById('textarea');
const button = document.getElementById('button');
const form = document.getElementById('form_contact');


function enviar() {
  if(mail.value == "") {
    var war = document.createElement('div');
    war.textContent = "Debes ingresar un email";
    war.id = "warNewElement";
    contact.insertBefore(war,form_contact);
  }
}
