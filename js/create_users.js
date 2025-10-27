function openUserForm(name){
  document.getElementById('customer-types').style.display = 'none';
  document.getElementById('user-form-container').classList.remove('hidden');
}

function closeUserForm(){
  document.getElementById('customer-types').style.display = 'block';
  document.getElementById('user-form-container').classList.add('hidden');
}