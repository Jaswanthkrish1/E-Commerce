
//This function is used to see the products in grid and list formate.
//this CartQuality.js file will be contain the funtinality of grid and list formate of products 
// Need to import the this file in product-list.ts file.
// below functinality will get into action
        
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
}); 