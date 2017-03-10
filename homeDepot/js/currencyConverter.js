/*below function is used convert currency using JSON API*/
   function inputChange(json){
  
getJSONP('http://api.fixer.io/latest?callback=?', function(data){
   var json = data;
	
	var demo = function() {
	  rates = json.rates
  fx.rates = json.rates
 var amount = document.getElementById("InputAmount").value
  inpAmount = parseFloat(amount).toFixed(2)	
  document.getElementsByName('inputTextbox')[0].value = inpAmount;
  InputCurr = document.getElementById("inputSelect").value
  outputCurr = document.getElementById("outPutSelect").value
  if(amount === ""){ /* empty value check for input currency amount*/
    document.getElementsByName('outputAmount')[0].value = "0.00";
  } else{
  var rate = fx(amount).from(InputCurr).to(outputCurr)
  finalAmount = rate.toFixed(2)
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
    return true;
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


