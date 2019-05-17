$('#js-shopping-list-form').on("submit", event => {
    event.preventDefault(); //prevents normal submit behavior.

    const newItemName = $('#shopping-list-entry').val(); //get the value from the form
    

    const newItem = '<li><span class="shopping-item">' 
    + newItemName + 
    '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>' + '  ' + '<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';

    $('.shopping-list').append(newItem);


});

$('.shopping-item-toggle').on("click", event =>{
    event.preventDefault();


    $(event.target).closest('div').siblings('span').toggleClass('shopping-item__checked');
    
});