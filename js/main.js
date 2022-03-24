

function billingAutofill(){
		if (document.getElementById('same').checked){
     var shippingName =  document.getElementById('shippingName').value;
      var shippingZip = document.getElementById('shippingZip').value;

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
