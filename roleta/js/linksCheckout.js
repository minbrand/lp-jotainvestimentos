var xpromo = getQueryVariable("xpromo") || null;
var dtl = getQueryVariable("dtl") || null;
if(dtl !== null) var dtlVerify = dtl.indexOf('-');
if(dtlVerify >= 0) dtl = dtl.split('-')[1];
if(xpromo == null) xpromo = 'null';

$('.btnCk').each(function(){
  if(dtl !== null) $(this).attr('href', 'https://checkout.mycheckout.com.br/checkout/631b790017ccf6278ba20cd2/' + xpromo + '-' + dtl.toUpperCase());
  else $(this).attr('href', 'https://checkout.mycheckout.com.br/checkout/631b790017ccf6278ba20cd2/' + xpromo);
});

function getQueryVariable(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
