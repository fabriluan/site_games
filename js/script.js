ActivateHeader();
function ActivateHeader(){
    const header = document.querySelector('.header_site')

    // alert(window.screen.availWidth);
    // alert(window.screen.availHeight);
    // alert(document.documentElement.clientHeight);

    window.addEventListener('scroll', ()=>{

        let Tambanner = document.querySelector('.banner').clientHeight;
        let Tamheader = header.clientHeight;

        if(scrollY > (Tambanner - Tamheader)){
            header.style.backgroundColor = '#6d09af';
        }else{
            header.style.backgroundColor = '#6d09af00';
        }
    })
}
ActivateScroll();
function ActivateScroll(){
    const links = document.querySelectorAll('.navbar ul li a[href^="#"]');

    function GetDistanceTop(el){
        const id = el.getAttribute('href');
        return document.querySelector(id).offsetTop
    }

    function ScrollSection(event){
        event.preventDefault();
        const DistanceTop = GetDistanceTop(event.target) - document.querySelector('.header_site').clientHeight;
        smoothScrollTo(0, DistanceTop, 900);
    }

    links.forEach(link => {
        link.addEventListener('click', ScrollSection);
    });

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== "undefined" ? duration : 400;
      
        const easeInOutQuart = (time, from, distance, duration) => {
          if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
          return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
            clearInterval(timer);
          }
          window.scroll(newX, newY);
        }, 1000 / 60);
      }
}
SendInput();
function SendInput(){

  let $submit = document.querySelector('button[name=submit]');

  $submit.addEventListener('click', (e)=>{
    
    let $name = document.querySelector('input[name=name]');
    let $email = document.querySelector('input[name=email]');
    let $message = document.querySelector('textarea[name=message]');
    let $checkbox = document.querySelector('input[name=checkbox]');

    function VerifForm(){

      function VerifInput(input){
        input.value = 'Está vazio';
        input.classList.add('input_empty')

        input.addEventListener('click', ()=>{
            input.value = '';
            input.classList.remove('input_empty');
        })
      }

      function SendInput(){

        const $info = document.getElementById('input_info');
        $info.style.display = 'inline-block';

        setInterval(() => {
          $info.style.display = 'none';

          $name.value = '';
          $email.value = '';
          $message.value = '';
        }, 2000);

      }

      if($name.value == ''){
        VerifInput($name);
      }else if($email.value == ''){
        VerifInput($email);
      }else if($message.value == ''){
        VerifInput($message);
      }else{
        SendInput();
      }
    }

    VerifForm();
    e.preventDefault();
  })

}