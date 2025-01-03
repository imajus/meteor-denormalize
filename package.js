Package.describe({
  name: 'herteby:denormalize',
  version: '0.7.0',
  // Brief, one-line summary of the package.
  summary: 'Simple denormalization for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/herteby/denormalize',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

const npmPackages = {
  'lodash': '4.17.21',
};


Package.onUse(function (api) {
  Npm.depends(npmPackages);

  api.versionsFrom(['2.3', '2.8.1', '2.12'])
  api.use([
    'ecmascript',
    'check',
    'mongo',
    'matb33:collection-hooks@1.3.2'
  ])

  api.mainModule('cache.js', 'server')
  api.addFiles('cacheCount.js', 'server')
  api.addFiles('cacheField.js', 'server')
})

Package.onTest(function (api) {
  Npm.depends({
    ...npmPackages,
    chai: "4.3.4"
  });

  api.use([
    'ecmascript',
    'herteby:denormalize',
    // 'mongo',
    // 'check',
    // 'matb33:collection-hooks@1.3.2'
  ])

  api.use(["meteortesting:mocha"]);

  api.addFiles('tests.js', 'server')
})
