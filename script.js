! function facts() {  

   // let bodyRect = document.body.getBoundingClientRect(),
   //    elemRect = document.querySelector('.facts').getBoundingClientRect(),
   //    offset = elemRect.top - bodyRect.top;
   //    console.log(offset);

   window.addEventListener('scroll', e => {})
   window.addEventListener('scroll', count);

   function count() {
      let facts = document.querySelectorAll('.facts .fact p.h');

      if (document.documentElement.scrollTop >= 865 && document.documentElement.scrollTop <= 1560) {
         for (let fact of facts) {

            let limit = fact.textContent;
            let i = 0;

            fact.textContent = 0;

            setTimeout(() => {

               if (limit > 50) {
                  // let interval = setTimeout(function interval() {
                  //    fact.textContent = ++i;
                  //    if (i !== limit)
                  //       setTimeout(interval, 35);
                  // }, 35);
               } else if (limit === 41) {
                  let interval = setInterval(() => {
                     fact.textContent = i;
                     i++;
                     if (i == limit) clearInterval(interval);
                  }, 100);
               } else {
                  let interval = setInterval(() => {
                     fact.textContent = i;
                     i++;
                     if (i == limit) clearInterval(interval);
                  }, 125);
               }
            }, 750);

         }

         window.removeEventListener('scroll', count);
      }
   }

}();

$(".about-job .header").click(function (e) {
   $(this).find(".arrow").css("transform", "rotate(0deg)"); // Rotate arrow of focused cell

   if ($(this).parent().css("height") === "60px") { // If focused cell is compressed
      $(".about-job .cell").get().forEach(elem => { // Iterate cells to compress/expand

         if ($(elem).css("height") === "240px") { // If cell is expanded
            $(elem).css("height", "60px")
               .find(".arrow").css("transform", "rotate(180deg)")
               .end()
               .find("header").css("border", "none");
         }
      });
   }

   $(this).css("border-bottom", "1px solid #e5e5e5")
      .parent().css("height", "240px");
});


! function slider() {

}();
