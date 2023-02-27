var ssp = document.get('ssp')
var sspa = document.querySelector('sspa')

function goTo(toa){
    let b = toa;
    let body = document.body;
    let height=0;
    do{
        height += b.offsetTop;
        b=b.offsetParent;
    }while(b !== body)

    window.scrollTo({
        top: height, behavior: 'smooth'
    })
}

ssp.addEventListener('click', function(){
to (sspa)
});