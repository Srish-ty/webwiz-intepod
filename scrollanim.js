const obs = new IntersectionObserver ((e)=>{
    e.forEach((e)=>{
        console.log(e);

        if (e.isIntersecting){
            e.target.classList.add('show');
        }
        else{
            //e.target.classList.remove('show');
        }
    });
});


const hidels = document.getElementsByClassName('hidden');

hidels.forEach((el)=> obs.observe(el));