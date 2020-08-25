"use strict";
!function facts() {

   window.addEventListener("scroll", count);

   function count() {
      let facts = document.querySelectorAll(".facts .fact p.h");

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
                     if (i - 1 === limit) clearInterval(interval);
                  }, 18);
               } else if (limit === 42) {
                  let interval = setInterval(() => {
                     fact.textContent = i;
                     i++;
                     if (i - 1 === limit) clearInterval(interval);
                  }, 75);
               } else {
                  let interval = setInterval(() => {
                     fact.textContent = i;
                     i++;
                     if (i - 1 === limit) clearInterval(interval);
                  }, 100);
               }
            }, 750);

         }

         window.removeEventListener("scroll", count);
      }
   }

}();


// Dropdown Info (3 cells)
let isDropdownBlocked = false;
!function dropDown() {

   $(".about-job .header").click(function (e) {
      if (isDropdownBlocked === false) {

         isDropdownBlocked = true;

         $(this).find(".arrow").css("transform", "rotate(0deg)"); // Rotate arrow of focused cell

         if ($(this).parent().css("height") === "60px") { // If focused cell is compressed
            $(".about-job .cell").get().forEach(elem => { // Iterate cells to compress/expand

               if (parseInt($(elem).css("height")) > 60) { // If cell is expanded
                  $(elem).css("height", "60px")
                     .find(".arrow").css("transform", "rotate(180deg)")
                     .end()
                     .find("header").css("border", "none");
               }
            });
         }

         $(this).css("border-bottom", "1px solid #e5e5e5")
            .parent().css("height", "240px");

         setTimeout(() => {
            isDropdownBlocked = false; // Unlock dropdown
         }, 200);
      }
   });
}();


!function slider() {

   let comments = $(".comment-section-wrapper ul.comments"), // comments slider
      offset = -1140;

   $(".comment-section-wrapper img.arrow-right").click(function (e) {
      if (offset > -1140 * 4) {

         offset -= 1140;
         comments.css("left", offset);
         
      } else if (offset === -1140 * 4) {

         offset = 0;
         comments.css("left", offset);
         
      }
   });

   $(".comment-section-wrapper img.arrow-left").click(function (e) {
      if (offset < 0 && offset < 1140 * 4) {

         offset += 1140;
         comments.css("left", offset);
         console.log(offset);

      } else if (offset >= 0) {

         offset = -1140 * 3;
         comments.css("left", offset);

      }
   });

}();
