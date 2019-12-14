let ratio = .1;
var options = {
  root: null, //élement qui sert de zone d'affichage, permet de détecter si l'élément est visible.
  rootMargin: '0px',//marge sur les zone d'affichage, si ca depasse cette marge l'élément est visible
  threshold: ratio//permet d'indiquer a partir de quel moment le système d'intersection va être détecter. ex: 1.0 entièrté de l'élément doit être visible dans l'écran pour que l'intersection observer fonctionne

  //.1 = 10% pour déclencher l'intersection observer
}

const handleIntersect = (entries, observer)=> {
  entries.forEach( entry => {
   // console.log(entry.intersectionRatio);
   /* if(entry.intersectionRatio > ratio){
      console.log('visible');
    }else{
      console.log('invisble');
      
    }*/

    if(entry.intersectionRatio > ratio){
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target)
    }else{
      console.log('invisble');
      observer();
      entry.target.classList.remove('reveal-visible');
    }

  })
}

var observer = new IntersectionObserver(handleIntersect, options);
//paramètre 1 : function qui sera éxécuter lorsque l'élément est visible ou pas

//paramètre 2 : object qui contient les options
document.querySelectorAll('.reveal').forEach((r)=> {
  observer.observe(r);
})
