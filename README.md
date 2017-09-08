# Safari Bookmarklet
The Safari Books [website](https://www.safaribooksonline.com) has
a queue of books that you have read/want to read.

This bookmarklet will load up all the books on the queue
page and then dump the book data into a JSON string.

The JSON object will contain the book title and the percentage
of the book that has been read by you.

## Usage
1. Go to your queue page on Safari Books and leave it open
2. Copy paste this javascript onto the url bar
3. Prepend **javascript:** to the javascript you just pasted
4. Press enter and let the bookmarklet do its magic
5. After it is done processing the JSON dump will be stored on the window in the globalmybookdata variable
