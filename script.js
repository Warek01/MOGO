! function facts() {  

   // let bodyRect = document.body.getBoundingClientRect(),
   //    elemRect = document.querySelector('.facts').getBoundingClientRect(),
   //    offset = elemRect.top - bodyRect.top;
   //    console.log(offset);

   window.addEventListener('scroll', count);

   function count() {
      let facts = document.querySelectorAll('.facts .fact p.h');

      if (document.documentElement.scrollTop >= 865 && document.documentElement.scrollTop <= 1560) {
         for (let fact of facts) {

            let limit = fact.textContent;
            let i = 0;

            fact.textContent = 0;

            setTimeout(() => {

               console.log(fact, limit)

               if (limit > 50) {
                  let interval = setInterval(() => {
                     fact.textContent = i;
                     i++;
                     if (i - 1 == limit) clearInterval(interval);
                  }, 18);
               } else if (limit == 42) {
                  let interval = setInterval(() => {
                     fact.textContent = i;
                     i++;
                     if (i - 1 == limit) clearInterval(interval);
                  }, 75);
               } else {
                  let interval = setInterval(() => {
                     fact.textContent = i;
                     i++;
                     if (i - 1 == limit) clearInterval(interval);
                  }, 100);
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

   let comments = $(".comment-section-wrapper ul.comments"), // comments slider
      offset = 0;

   $(".comment-section-wrapper img.arrow-right").click(function(e) {
      if (offset > -1140 * 4) {
         offset -= 1140;
         comments.css("left", offset);
      }
   });

   $(".comment-section-wrapper img.arrow-left").click(function(e) {
      if (offset < 0 && offset != 1140 * 4) {
         offset += 1140;
         comments.css("left", offset);
      }
   });

}();
