const submitBtn = document.querySelector('.btn-input');

const account = {
  email: "",
  country: "",
  zipcode: "",
  password: "",
  passwordC: "",

  setAccount: function(email, country, zipcode, password, passwordC) {
    this.email = email;
    this.country = country;
    this.zipcode = zipcode;
    this.password = password;
    this.passwordC = passwordC;

    return;
  },


};


function checkValidation(accountName) {
  const email = accountName.email;
  const country = accountName.country;
  const zipcode = accountName.zipcode;
  const password = accountName.password;
  const passwordC = accountName.passwordC;
  const emailField = document.querySelector('#email-input');
  const countryField = document.querySelector('#country-input');
  const zipcodeField = document.querySelector('#zip-input');
  const passwordField = document.querySelector('#pw-input');
  const passwordCField = document.querySelector('#pwc-input');

  if(emailField.validity.valueMissing || emailField.validity.typeMismatch) {
    console.log("email not valid");
    return;
  } else if(countryField.validity.valueMissing) {
    console.log("country not valid");
    return;
  } else if(zipcodeField.validity.valueMissing || zipcodeField.validity.patternMismatch) {
    console.log("zipcode not valid");
    return;
  } else if(passwordField.validity.valueMissing || passwordField.validity.patternMismatch) {
    console.log("password not valid");
    return;
  } else if(passwordField.value != passwordCField.value) {
    console.log("passwordC not valid");
    return;
  } else {
    alert("Success!");
  }
}

submitBtn.addEventListener("click", function(e) {
  const emailField = document.querySelector('#email-input');
  const countryField = document.querySelector('#country-input');
  const zipcodeField = document.querySelector('#zip-input');
  const passwordField = document.querySelector('#pw-input');
  const passwordCField = document.querySelector('#pwc-input');

  e.preventDefault();

  account.setAccount(emailField.value, countryField.value, zipcodeField.value, passwordField.value, passwordCField.value);
  checkValidation(account);
});