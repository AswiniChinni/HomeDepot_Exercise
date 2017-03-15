var currCode = {
	currCode_CAD : "CAD",
	currCode_USD : "USD"
};

/*below function is used convert currency using JSON API*/
   function inputChange(json){
  
getJSONP('http://api.fixer.io/latest?callback=?', function(data){
   var json = data;
	var demo = function() {
	  rates = json.rates
	var amount = document.getElementById("InputAmount").value
   document.getElementsByName('inputTextbox')[0].value = amount;
  InputCurr = document.getElementById("inputSelect").value
  if(InputCurr == currCode.currCode_CAD){
	  InputCurr = rates.CAD
	  
  } else if(InputCurr == currCode.currCode_USD){
	  InputCurr = rates.USD
	  
  } else
  {
	   InputCurr = 1
	  
  }
  
  outputCurr = document.getElementById("outPutSelect").value
  
  if(outputCurr == currCode.currCode_CAD){
	  outputCurr = rates.CAD
	  
  } else if(outputCurr == currCode.currCode_USD){
	  outputCurr = rates.USD
	  
  } else
  {
	   outputCurr = 1
	  
  }
  if(amount === ""){ /* empty value check for input currency amount*/
    document.getElementsByName('outputAmount')[0].value = "0.00";
  } else{
   
    finalAmount = amount / (InputCurr * (1 / outputCurr));
               
  finalAmount = finalAmount.toFixed(2)
  document.getElementsByName('outputAmount')[0].value = finalAmount;
  }
}
demo();

}); 
   }
   
   /*below function is used to prevent alphabets, special characters in input amount field*/
    function validateFloatKeyPress(el, evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split('.');
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if(number.length>1 && charCode == 46){
         return false;
    }
    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    if( caratPos > dotPos && dotPos>-1 && (number[1].length > 1)){
        return false;
    }
   // return true;
			inputChange();
}

function getSelectionStart(o) {
	if (o.createTextRange) {
		var r = document.selection.createRange().duplicate()
		r.moveEnd('character', o.value.length)
		if (r.text == '') return o.value.length
		return o.value.lastIndexOf(r.text)
	} else return o.selectionStart
}
  /*below fucntion is used to make jsonp request */
   function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}


