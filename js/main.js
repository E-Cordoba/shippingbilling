'use strict';

var shippingaddress =  document.getElementById('shippingaddress').value;
 var shippingzip = document.getElementById('shippingzip').value;
 var shippingcity =  document.getElementById('shippingcity').value;
  var shippingstate = document.getElementById('shippingstate').value;

function billingAutofill(){
		if (document.getElementById('autofill').checked){

     document.getElementById('billingaddress').value = shippingaddress;
      document.getElementById('billingzip').value = shippingzip;
      document.getElementById('billingcity').value = shippingcity;
      document.getElementById('billingstate').value = shippingstate;

		}
		else{
      document.getElementById('billingaddress').value = "";
       document.getElementById('billingzip').value = "";
       document.getElementById('billingcity').value = "";
       document.getElementById('billingstate').value = "";
		}
}
