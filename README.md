# toc.js
A small jQuery script to automatically generate a Table of Contents for a webpage, based on its header tags.

### Usage
Simply include the script and the style in your header, and then set up your page so that everything is contained within a div id'ed "container," whose first child is an empty div id'ed "toc," and whose second child is a div id'ed "content," inside which is your actual content. Like so:

```html
<html>
  <head>
  ...
  <link rel="stylesheet" type="text/css" href="css/toc.min.css" />
  ...
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script type="text/javascript" src="js/toc.min.js"></script>
  ...
  </head>
  <body>
    <div id="container">
      <div id="toc"></div>
      <div id="content">
        ...
      </div>
    </div>
  </body>
</html>
```