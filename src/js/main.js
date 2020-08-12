

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    function tabs() {
        const header = document.querySelector('.block'),
            tab = document.querySelectorAll('.block__item'),
            content = document.querySelectorAll('.content__block');
    
        function hideTabContent() {
            content.forEach(item => {
                item.classList.remove('content__block_active');
            });
    
            tab.forEach(item => {
                item.classList.remove(('block__item_active'));
            });
        }
    
        function showTabContent(i = 0) {
            content[i].classList.add('content__block_active');
            tab[i].classList.add('block__item_active');
        }
    
        hideTabContent();
        showTabContent();
    
        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target &&
                (target.classList.contains('block__item')) ||
                    target.parentNode.classList.contains(('block__item'))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }

    function hamburger () {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        const menuItem = document.querySelectorAll('.menu__item')
    
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    }
    
   tabs() 
   hamburger()
});

