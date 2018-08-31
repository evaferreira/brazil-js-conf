// General JS for the talk that doesn't fit in separate files

document.addEventListener('DOMContentLoaded', function() {
	const textareas = document.querySelectorAll('.shape-snippet');

	for (const textarea of textareas) {
		textarea.setAttribute('wrap', 'off');

		new CSSSnippet(textarea);
		new Incrementable(textarea);
	}
});
