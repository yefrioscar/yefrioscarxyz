'use strict';

var name = document.getElementById('name');
var mail = document.getElementById('mail');
var textArea = document.getElementById('textarea');
var button = document.getElementById('button');
var form = document.getElementById('form_contact');

/*
function enviar() {
  if(mail.value == "") {
    var war = document.createElement('div');
    war.textContent = "Debes ingresar un email";
    war.id = "warNewElement";
    contact.insertBefore(war,form_contact);
  }
}*/

jQuery(function ($) {
  $('form').validatr();
});