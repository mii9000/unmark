# unmark
Extract plain old text from markdown

#Installation
`bower install unmark`

#Usage
As simple as following:

```html
<html>
<head>
	 <script type="text/javascript" src="bower_components/unmark/unmark.js"></script>
	<title></title>
</head>
<body>
  <script type="text/javascript">
  	console.log( unmark('My name is _Ibrahim_. I like to **code**.') );
  </script>
</body>
</html>
```

#Dev
`npm install`

#Test
`npm test` | `mocha`
