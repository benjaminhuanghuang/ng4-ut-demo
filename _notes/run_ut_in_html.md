## Dependency
  "jasmine-core": "^2.5.2",
  
## Run UT in html page (for .js)
```html
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <title>Jasmine Tests</title>
    <link rel="stylesheet" href="../node_modules/jasmine-core/lib/jasmine-core/jasmine.css">
    <script src="../node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
    <script src="../node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
    <script src="../node_modules/jasmine-core/lib/jasmine-core/boot.js"></script>
    <script src="app/mask.pipe.js"></script>
    <script src="app/mask.pipe.spec.js"></script>
  </head>
  <body>
  </body>
</html>
```