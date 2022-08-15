    const $menu_view = document.getElementById('menu_view')
    const $menu_show = document.getElementById('menu_show');
    const $menu_hidden = document.getElementById('menu_hidden');
    const $menu = document.querySelector('.app');
    const header = document.querySelector('.header_site');

ToggleMenu();
function ToggleMenu(){

    $menu_view.addEventListener('click', ()=>{

        if($menu.classList.contains('show_menu')){

            header.style.backgroundColor = '#6d09af00';

            $menu_show.style.display = 'flex'
            $menu_hidden.style.display = 'none'

            $menu.classList.add('hidden_menu');
            $menu.classList.remove('show_menu');

            
            setInterval(() => {
                $menu.classList.remove('hidden_menu');
            }, 400);
        }else{

            header.style.backgroundColor = '#6d09af';

            $menu_show.style.display = 'none'
            $menu_hidden.style.display = 'flex'

            $menu.classList.add('show_menu');
            $menu.classList.remove('hidden_menu');
        }
        
    })
}
HiddenLinks();
function HiddenLinks(){
    const links = document.querySelectorAll('ul.app li a[href^="#"]');

    links.forEach(link =>{
        link.addEventListener('click', (el)=>{
            $menu_show.style.display = 'flex'
            $menu_hidden.style.display = 'none'

            $menu.classList.add('hidden_menu');
            $menu.classList.remove('show_menu');

            
            setInterval(() => {
                $menu.classList.remove('hidden_menu');
            }, 400);
        })
    })
}