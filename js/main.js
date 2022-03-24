

function billingAutofill(){
		if (document.getElementById('autofill').checked){
     var address =  document.getElementById('name').value;
      var zip = document.getElementById('zip').value;
      var city =  document.getElementById('city').value;
       var state = document.getElementById('state').value;

     document.getElementById('billingaddress').value = address;
      document.getElementById('billingzip').value = zip;
      document.getElementById('billingcity').value = city;
      document.getElementById('billingstate').value = state;

		}
		else{
      document.getElementById('billingaddress').value = "";
       document.getElementById('billingzip').value = "";
       document.getElementById('billingcity').value = "";
       document.getElementById('billingstate').value = "";
		}
}
