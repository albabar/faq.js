#Enhanced FAQ made with pure javascript.

Just made this while practicing JS. It may not be perfect. And also don't talk with me about IE support.

My design sucks, so if you're interested to contribute a default design, send me a pull request.


##How to
Using it very simple.
Just include the JS file (faq.js) into the footer (before closing body tag) of your website. Also load the css file whereever you like. And initialize the library:
```
<script src="faq.js"></script>
<script>
	faq.init('.faq li');
</script>
```

Now create faq list in `ul.faq>li*5>h2+p` format and you're done. The script will take care of the rest.

Checkout the included index.html file for example.


###Contact
You can contact with me via my website: http://www.babar.im.
You can visit my blog as well: http://www.babar.im/blog/


###License
Maybe MIT maybe nothing. It's just a practice project, use it however you like.


###Disclaimer
The package is provided AS IS without any WARRENTY. Using this library may break your website, burn down your house or even send your letter for your gf to your wife. So use at your own risk.