# Drupal8-search_dropdown
The dynamic Drupal 8 Search Dropdown we use on Denverlibrary,org

The module modifies the existing search box in Drupal 8. The search_dropdown.module file looks for the name of the form that Drupal's defualt search lives in. You'll want to make sure that the form that contains your search box is called search-block-form. If not, change line 12 of search_dropdown_module to whatever your form ID is. 

Lines 16-23 of search_dropdown_module set default values for the dropdown depending on what page the user is on. So if they are on a site search page, the default search should be "Site." All other pages on our site should default to "Catalog" searches.  Right now I'm using a simple IF statement since there are only two states, but at one point in the past we had several (approx. 12) options when we had many default pages for all of our research pages. Back then I used a switch statement to deal with all of the possible default pages. You may notice that this is not happening on our site right now - that is the issue I've been trying to chase down. This used to work fine and still works fine on all of our development environments, but no longer works on production. I've worked with another developer and we see nothing in code that we'd expect to cause this issue. It will probably work fine for you as it seems environmental, but if you find anything please let me know. I'd love to solve this problem. 

I use Drupal's Form API to build a search box. This gets created in lines 29 - 46 of search_dropdown.module. You can modify that file and change lines 39 - 46 to capture whatever you want in your search dropdown. 
'#options' => [
  'Catalog' => t('Catalog'),
  'Digital Collections' => t('Digital Collections'),
  'Events' => t('Events'),
  'This Site' => t('This Site'),
  'History Site' => t('History Site'),
  'Kids Site' => t('Kids Site'),
  'Teen Site' => t('Teen Site'),
],
If you have more items you'd just add additional lines before the closing bracket formatted identically to the ones above: 'Additional item' => t('Additional item'), or you can remove items if you have fewer items you want to search than we do. Note that the first value on each line in search_dropdown.module must match the an item in the switch statement on lines 45 - 61 of search_dropdown.js or the dropdown won't work. 

ex. When building the dropdown options in search_dropdown.module 'Machine Name' => t('User Sees This'), 

must equal in search_dropdown.js

case 'Machine Name':
                    window.location = 'https://whereverWeWantToSendThem.com?keyword=' + url;

So search_dropdown.module builds the dropdown box, search_dropdown.js sends them to the different search pages when the user clicks the "Search" button or presses enter. 


All you should need to do is put this module in your sites/[Your site]/modules/custom directory. Modify the lines listed above to fit the needs of your site and enable the module. The dropdown should work just like ours.
