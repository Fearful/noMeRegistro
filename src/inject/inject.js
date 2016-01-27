function clnSU(){
	var ln = document.getElementsByClassName('lnmodal').length >= 0 ? [].slice.call(document.getElementsByClassName('lnmodal')) : false;
	var registerAddressLn = 'registracion.lanacion.com.ar';
	if(ln){
		if(ln[0].innerHTML.indexOf(registerAddressLn) != -1){
			ln[0].remove();
		} else {
			ln.splice(0, 1);
		}
	}
}
clnSU();