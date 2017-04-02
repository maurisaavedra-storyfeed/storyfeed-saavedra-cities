Picker.route('/feed.xml', function(params, req, res, next) {
  if (typeof params.query.view === "undefined") {
    params.query.view = 'new';
  }
  res.end(servePostRSS(params.query, 'feed.xml'));
});

Picker.route('/rss/posts/new.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new'}, '/rss/posts/new.xml'));
});

Picker.route('/rss/posts/top.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'top'}, '/rss/posts/top.xml'));
});

Picker.route('/rss/posts/best.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'best'}, '/rss/posts/best.xml'));
});

Picker.route('/rss/category/new/:slug/feed.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new', cat: params.slug}, '/rss/category/new/:slug/feed.xml'));
});

Picker.route('/rss/category/top/:slug/feed.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'top', cat: params.slug}, '/rss/category/top/:slug/feed.xml'));
});

Picker.route('/rss/category/best/:slug/feed.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'best', cat: params.slug}, '/rss/category/best/:slug/feed.xml'));
});

Picker.route('/rss/comments.xml', function(params, req, res, next) {
  res.end(serveCommentRSS({}, '/rss/comments.xml'));
});
