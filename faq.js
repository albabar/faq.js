var faq = {
	init: function(selector) {
		var faqs = document.querySelectorAll(selector);
		this.faqs = faqs;
		for(var j = 0; j < faqs.length; j++) {
			var faq = faqs[j];
			faq.addEventListener('click', this.clickListener, false);
			this.collaspe(faq);
		}
	},

	clickListener: function(event) {
		faq.expand(this);
		event.preventDefault();
	},

	collaspe: function(item) {
		this.toggleClass(item, 'collasped')
	},

	collaspeAll: function() {
		var faqs = this.faqs;
		for(var j = 0; j < faqs.length; j++) {
			this.collaspe(faqs[j]);
		}
	},

	expand: function(item) {
		this.collaspeAll();
		this.toggleClass(item, 'expanded')
	},

	toggleClass: function(item, className) {
		var classNames = item.className;
		classNames = classNames.replace('collasped', '');
		classNames = classNames.replace('expanded', '');
		item.className = classNames + ' ' + className;
	}
};