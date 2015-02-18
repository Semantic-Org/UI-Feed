var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-feed',
  summary : 'Semantic UI - Feed (official): Single component release of feed',
  version : '1.9.1',
  git     : 'git://github.com/Semantic-Org/UI-Feed.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
