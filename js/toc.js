function make_slug(text) {
  return text.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '-');
}

function toc_init() {
  jQuery("#toc").append('<p>Contents</p>');
  jQuery("h2, h3, h4").each(function(i) {
    var current = jQuery(this);
    var slug = make_slug(current.text());
    current.attr("id", slug);
    jQuery("#toc").append("<a id='link" + i + "' href='#" + slug + "' class='" + current.prop("tagName") + "'>" + current.html() + "</a>");
  });
}

jQuery(document).ready(toc_init);