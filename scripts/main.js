var detail_image_selector='[data-image-role="target"]';
var detail_title_selector='[data-image-role="title"]';
var thumbnail_link_selector='[data-image-role="trigger"]';
var firstThumbnail=document.querySelector(thumbnail_link_selector);
function setDetails(imageUrl, titleText)
{
"use strict";
var detailImage=document.querySelector(detail_image_selector);
detailImage.setAttribute("src", imageUrl);
var detailTitle=document.querySelector(detail_title_selector);
detailTitle.textContent=titleText;
}

function imageFromThumb(thumbnail)
{
return thumbnail.getAttribute("data-image-url");
}
function titleFromThumb(thumbnail)
{
"use strict";
return thumbnail.getAttribute("data-image-title");
}
function setDetailsFromThumbnail(thumbnail)
{
setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb)
{
"use strict";
thumb.addEventListener("click", function()
{
window.alert("You clicked!");
});
}
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(thumbnail_link_selector);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
initializeEvents();