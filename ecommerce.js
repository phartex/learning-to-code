const portfolioitems = document.querySelectorAll(".portfolio-item-wrapper");
console.log(portfolioitems);

portfolioitems.forEach(singleitem =>{
        singleitem.addEventListener('mouseover', () =>{
            const passage = singleitem.childNodes[1].classList ;
            passage.add('img-darken');
        })

        singleitem.addEventListener('mouseout', () =>{
            const passage = singleitem.childNodes[1].classList ;
            passage.remove('img-darken');
        })
})