$(function(){
	$(".title").typed({
		strings: ["...", "> Hi, I'm Rishabh!"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
        startDelay: 150,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
        contentType: 'html',
        loop: false,
	});
});

$(function(){
	$(".subtitle").typed({
		strings: ["...", "MS in CS @ UCSD"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
        startDelay: 3500,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
        contentType: 'html',
        loop: false,
	});
});
