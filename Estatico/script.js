const addFile=document.querySelector('#add-file'),
    form=document.querySelector('.form');

    form.style='display:none !important;';
    
/*
Evento de exibição em clique
*/
addFile.addEventListener('click',function(e){
        form.style='display:block !important;';
        let srcImage=document.querySelector('.photos').children[0].src;        
        this.style=`background: url(${srcImage});`;
        this.innerHTML='';
        document.querySelector('.selector').style=`background: url(${srcImage});`;
        document.querySelector('.selector').innerHTML='';
        /*this.parentElement.parentElement.innerHTML=this.parentElement.parentElement.innerHTML+`
        <div class="owl-item active" style="width: 310px;">
            <div id="add-file">
                <img src="../images/adicionar.png" alt="#" class="plus img-responsive" />
            </div>
        </div>`;*/
    }
)

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
    loop:true,
    margin:10,
     nav    : true,
     smartSpeed :900,
     navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
    
  });
 