window.onscroll = () => {
	if (window.scrollY > 200) {
		document.getElementById('nav').style.background = '#0000007e';
		document.getElementById('nav').style.backdrop = '#0000007e';
		document.getElementById('nav').style.boxShadow ='1px 4px 13px 0px rgba(0,0,0,0.75)';
	} else {
        /*console.log('inf');*/
		document.getElementById('nav').style.background = 'transparent';
		document.getElementById('nav').style.boxShadow = 'inherit';
	}
  };
/*---------------modale navigation-----------------------------*/
var burger = document.getElementById('burger');
var closeNav = document.getElementById('closeNav');
var mobileNavArea = document.getElementById('mobileNavArea');

burger.addEventListener('click', function(){
    mobileNavArea.classList.remove('none');

    setTimeout(() => {
        mobileNavArea.classList.add('openNav');
    }, 200);
    
    this.classList.add('none');
    closeNav.classList.remove('none');
})

closeNav.addEventListener('click', function(){

    mobileNavArea.classList.remove('openNav');

    setTimeout(() => {
        mobileNavArea.classList.add('none');
    }, 200);
   
    this.classList.add('none');
    burger.classList.remove('none');
    
})

