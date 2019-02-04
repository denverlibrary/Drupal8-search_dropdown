(function ($, drupalSettings) {

	/**
   * Set correct action target for each search
   */
  Drupal.behaviors.exposedfilter_buttons = {
    attach: function(context, settings) {


        //Execute when user clicks "Submit" button.
        $('#search-block-form button').click(function(e) {

            //Get the value of the "Search Options" drop down
            var selectedSearch = $('#search-options').val();

            if (selectedSearch != "This Site")
            {
                e.preventDefault();
                searchUserChoice($('#search-block-form input').val(), selectedSearch);  //Call this function to send the search terms to whatever search the user selected.
            }
        });

        //Execute when user clicks "Enter" while in the "By Address" text field.
        $('#edit-keys').keypress(function(e)
        {
            if (event.which === 13)
            {
                //Get the value of the "Search Options" drop down
                var selectedSearch = $('#search-options').val();

                if (selectedSearch != "This Site")
                {
                    e.preventDefault();
                    searchUserChoice($('#search-block-form input').val(), selectedSearch);  //Call this function to send the search terms to whatever search the user selected.
                }
            }
        });

        function searchUserChoice(searchTerm, selectedSearch)
        {
            var url = encodeURIComponent(searchTerm);

            // TODO***Should items that redirect have a target=_blank appended to them?

            switch (selectedSearch)
            {
                case 'Catalog':
                    window.location = 'https://catalog.fakeLibrary.org/view.aspx?keyword=' + url;
                    break;
                case 'Digital Collections':
                    window.location = 'http://fakeSite.fakeLibrary.org/results.php?' + url;
                    break;
                case 'History Site':
                    window.location = 'https://history.fakeLibrary.org/search/site/' + url;
                    break;
                case 'Kids Site':
                    window.location = 'https://kids.fakeLibrary.org/search/site/' + url;
                    break;
                case 'Teen Site':
                    window.location = 'https://teens.fakeLibrary.org/search/site/' + url;
            }

        }
    }
  };
})(jQuery);
