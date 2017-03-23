# Scan And Match
Great for manually finding a particular barcode out of a large group.

Using the text area on the left, place each item you are looking for on a new line. 
In the example below I am looking for 4 different tracking numbers.

```text
9400100000012345678900
1Z12345E0123456789
420314019205500000000000000000
```

Next place your cursor in the text box on the right and using your barcode scanner 
begin to systematically scan your packages. When a scanned barcode is found in
the box on the left the screen will turn green and you will be given an audio
feedback to confirm the match. If you are looking for multiple matches you can
acknowledge the match and continue, all of your scanned values will be logged
and matches will be highlighted.

Because this tool was built for finding particular tracking numbers quickly only 
the end values must match so that you can "seek" just your printed tracking numbers
because some barcodes, like the USPS contain additional data.

For example, you can "seek" 9400100000012345678900 however if you scan 
420314019400100000012345678900 a match will be found.

![App Example](https://raw.githubusercontent.com/MikeGarde/scan-and-match/master/img/example.png)