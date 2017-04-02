Template.custom_post_actions.events({
  'click .toggle-actions-link': function(e){
    e.preventDefault();
    var $post = $(e.target).parents('.post');
    var h = $post.height();
    if ($post.hasClass('show-actions')) {
      $post.height('auto');
      $post.removeClass('show-actions');
    } else {
      $post.height(h+'px');
      $post.addClass('show-actions');
    }
  }
});
// Currently not in use but could work in the future, just put toggle-actions-link
// instead of discuss-link in file custom_post_actions to activate hidden
// page in posts
