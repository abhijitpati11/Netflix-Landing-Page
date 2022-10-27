const itemDiv = document.getElementsByClassName('item');
const openIcon = document.getElementsByClassName('iconOpen');
const closeIcon = document.getElementsByClassName('iconClose');

for(let i=0; i<itemDiv.length; i++) {
    closeIcon[i].style.display = 'none';

    itemDiv[i].addEventListener('click', (e) => {
        
        const res = itemDiv[i].classList.toggle('active');

        if(res) {
            closeIcon[i].style.display = "block";
            openIcon[i].style.display = "none";
        }else {
            closeIcon[i].style.display = "none";
            openIcon[i].style.display = "block";
        }
    })
}