var btnOpenPopup = document.getElementById('loginbutton'),
    overlay=document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    form=document.getElementById('loginform'),
    btnClosePopup = document.getElementById('btn-close-popup');


btnOpenPopup.addEventListener('click', function(){
    if(btnOpenPopup.innerText!='Login'){
    overlay.classList.add('active');
    popup.classList.add('active');
    }
});

btnClosePopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    form.reset();

});