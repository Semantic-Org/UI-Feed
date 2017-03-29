
Package.describe({
  name    : 'semantic:ui-feed',
  summary : 'Semantic UI - Feed: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Feed.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'feed.css'
  ], 'client');
});
