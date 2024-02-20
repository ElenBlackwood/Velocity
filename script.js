//TABS
const tabsBtns = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__item');

// func hide tabs and remove active class

function hideTabs() {
    tabsItems.forEach(item => {
        item.classList.add('hide');
    });
    tabsBtns.forEach(item => {
        item.classList.remove('active')
    })
};

//show the number of the tab

function showTab(index) {
    tabsItems[index].classList.remove('hide');
    tabsBtns[index].classList.add('active');
}

hideTabs();
showTab(0);

 tabsBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hideTabs();
        showTab(index);
    })
})

//ANCHORS

const anchors = document.querySelectorAll('.header__nav a');

anchors.forEach(anc => {
    anc.addEventListener('click', function(e) {
        e.preventDefault();

        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 75, 
            behavior: 'smooth'
        });

    })
})