$('#js-shopping-list-form').on("submit", event => {
    event.preventDefault(); //prevents normal submit behavior.

    const newItem = this.find(
        'input[name="shopping-list-entry"]').val(); //get the value from the form

    $('.shopping-list').append(

    <li>
        <span class="shopping-item">$(newItem)</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    )

};