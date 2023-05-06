
// Cart adding the quantity by using this funtion . This function is calling in shippingCart.ts 
//this file is imported in shippingcart.ts
//This function is increment and decrement the quantity of items 
    $(document).on('click', '.number-spinner button', function () {    
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;
        
        if (btn.attr('data-dir') == 'up') {
            newVal = parseInt(oldValue) + 1;
           
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
        });


