!function(n){n.mmenu.wrappers.turbolinks=function(){var t,o;n(document).on("turbolinks:before-visit",function(){o=n("html"),t=o.attr("class"),t=n.grep(t.split(/\s+/),function(n){return!/mm-/.test(n)}).join(" ")}).on("turbolinks:load",function(){void 0!==o&&(o.attr("class",t),n.mmenu.glbl=!1)})}}(jQuery);