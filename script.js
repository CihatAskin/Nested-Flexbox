
function toggleOpen() {

    removeOpenedSibilings(this);
    this.classList.toggle('open');  
    document.body.classList.add('avoid-clicks');  
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {

        this.classList.toggle('open-active');
    }    
}

function removeOpenedSibilings(elem) {

    let sib = elem.parentElement.firstElementChild;

    do {
        if (sib != elem && sib.classList.contains('open')) {
            sib.classList.toggle('open');     
        }

        sib = sib.nextElementSibling;
    } while (sib);
}

function removeClickBarrier(){
    document.body.classList.remove('avoid-clicks');
}

const panels = document.querySelectorAll('.panel');
const container =document.querySelector('.panels');

panels.forEach((panel) =>{ 
    
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
    panel.firstElementChild.addEventListener('transitionend', removeClickBarrier);

});
