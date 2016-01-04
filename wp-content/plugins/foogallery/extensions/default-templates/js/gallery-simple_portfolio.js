/**!
 * Brickfolio - A jQuery plugin for equally spaced grid layouts
 * @version 0.0.4
 * @link https://github.com/fooplugins/brickfolio
 * @copyright Steven Usher & Brad Vincent 2014
 * @license Released under the GPL license.
 * You are free to use Brickfolio in personal projects as long as this copyright header is left intact.
 */
(function(i){function t(e,o){if(!(this instanceof t))return new t(e,o);var s=this,n={};return s.defaults={animation:"",filter:"",itemSelector:".bf-item",imageSelector:"img:first",gutter:40,responseTime:100,hideErrors:!1,loadTime:0,classes:{container:"brickfolio",loaded:"bf-loaded",animated:"bf-animated",item:"bf-item",error:"bf-error",filtered:"bf-filtered"}},s.$el=i(e),s.options=i.extend(!0,s.defaults,o),s.reinit=function(t){i(window).off("resize.brickfolio",n.onWindowResize),s.$el.removeClass([s.options.animation,s.options.classes.animated,s.options.classes.loaded].join(" ")).find(s.options.itemSelector).removeClass([s.options.classes.loaded,s.options.classes.error,s.options.classes.filtered].join(" ")).css("visibility","hidden"),s.options=i.extend(!0,s.options,t),n.init()},s.filter=function(i){s.options.filter=i,s.layout()},s.layout=function(){var i=s.$el.find(s.options.itemSelector);i=n.filter(i),n.layout(i),i.css("visibility","")},n.loader=null,n.layout_timer=null,n.resize_timer=null,n.isIE=null,n.init=function(){"static"==s.$el.css("position")&&s.$el.css("position","relative"),s.$el.addClass(s.options.classes.container).css("overflow","hidden");var t=s.options.animation.replace(/\s*mixed-delay\s*/g," ").replace(/^\s+|\s+$/g,"");n.supportsAnimation()&&"string"==typeof t&&t.length>0&&s.$el.addClass(s.options.classes.animated).addClass(s.options.animation);var e=s.$el.find(s.options.itemSelector).addClass(s.options.classes.item).css({position:"absolute",display:"inline-block",margin:0,visibility:"hidden"});return e.length>0&&n.wait(e).always(function(){e=n.filter(e),n.layout(e),e.css("visibility",""),i(window).on("resize.brickfolio",n.onWindowResize),s.$el.addClass(s.options.classes.loaded)}),s},n.onWindowResize=function(){null!=n.resize_timer&&clearTimeout(n.resize_timer),n.resize_timer=setTimeout(function(){n.resize_timer=null,s.layout()},s.options.responseTime)},n.damnYouIE=function(i){null==n.isIE&&(n.isIE=window.navigator.userAgent.indexOf("MSIE ")>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)),1==n.isIE&&i.attr("src",i.attr("src"))},n.supportsAnimation=function(){var i,t=document.body||document.documentElement,e=t.style,o="animation";if("string"==typeof e[o])return!0;i=["Moz","Webkit","Khtml","O","ms"],o=o.charAt(0).toUpperCase()+o.substr(1);for(var s=0;i.length>s;s++)if("string"==typeof e[i[s]+o])return!0;return!1},n.filter=function(i){return i.removeClass(s.options.classes.filtered).css({visibility:"",opacity:"",animation:"","-webkit-animation":""}),s.options.hideErrors&&i.filter("."+s.options.classes.error).addClass(s.options.classes.filtered).css({visibility:"hidden",opacity:0,animation:"none","-webkit-animation":"none"}),"string"==typeof s.options.filter&&s.options.filter.length>0&&i.not(s.options.filter).addClass(s.options.classes.filtered).css({visibility:"hidden",opacity:0,animation:"none","-webkit-animation":"none"}),i.not("."+s.options.classes.filtered)},n.wait=function(t){var e=[];return t.each(function(){var t=i(this),o=t.find(s.options.imageSelector),r=new i.Deferred(function(i){setTimeout(function(){if(0==o.length)i.resolve();else if(1==o.get(0).complete){var e=o.get(0);"naturalHeight"in e&&"naturalWidth"in e&&0==e.naturalHeight&&0==e.naturalWidth?t.addClass(s.options.classes.error):t.addClass(s.options.classes.loaded),i.resolve()}else o.on({"load.brickfolio":function(){o.off(".brickfolio"),t.addClass(s.options.classes.loaded),i.resolve()},"error.brickfolio":function(){o.off(".brickfolio"),t.addClass(s.options.classes.error),i.resolve()}}),n.damnYouIE(o)},s.options.loadTime)});e.push(r)}),i.when.apply(i,e)},n.layout=function(t){var e=t.first(":not(."+s.options.classes.error+")").outerWidth(),o=s.$el.width(),r=parseInt(s.$el.css("paddingLeft")),l=parseInt(s.$el.css("paddingTop")),a={height:0,outer:0},c=[],f=s.options.gutter,d=l,u=Math.floor(o/e);u=Math.floor((o-(u-1)*s.options.gutter)/e),u=0>=u?1:u,s.options.hideErrors&&(t=t.not("."+s.options.classes.error)),t.each(function(t){var l=i(this),h=n.getHeights(l);0==t%u?(c.length>0&&(f=n.update(c,a.height,e,o,u,f,d,r),d+=a.outer+s.options.gutter),c.length=0,a=h,c.push(l)):(a=h.height>a.height?h:a,c.push(l))}),n.update(c,a.height,e,o,u,f,d,r),d+=a.outer-l,s.$el.height(d),n.layout_timer&&clearTimeout(n.layout_timer),n.layout_timer=setTimeout(function(){n.layout_timer=null,o!=s.$el.width()&&n.layout(t)},600)},n.update=function(i,t,e,o,s,r,l,a){if(0==i.length)return r;var c=s>i.length||2>=i.length,f=o-i.length*e;if(1==i.length)n.setHeights(i[0],t),a+=f/2,i[0].css({top:l,left:a});else{r=c?r:Math.floor(f/(i.length-1)),a+=c?Math.floor((f-(i.length-1)*r)/2):0;for(var d=0;i.length>d;d++)n.setHeights(i[d],t),i[d].css({top:l,left:a+e*d+r*d})}return r},n.setHeights=function(i,t){void 0==i.data("brickfolio_height")&&i.data("brickfolio_height",{height:i.height(),outer:i.outerHeight()}),i.height(t)},n.getHeights=function(i){return void 0==i.data("brickfolio_height")?{height:i.height(),outer:i.outerHeight()}:i.data("brickfolio_height")},n.init()}i.fn.brickfolio=function(e){if("string"==typeof e){var o=Array.prototype.slice.call(arguments),s=o.shift(),n=function(t){return i.isFunction(t[s])?t[s]:i.noop};return this.each(function(){this.__brickfolio__ instanceof t&&n(this.__brickfolio__).apply(this.__brickfolio__,o)})}return this.each(function(){this.__brickfolio__ instanceof t?this.__brickfolio__.reinit(e):this.__brickfolio__=new t(this,e)})}})(jQuery);

/**
 * Small ready function to circumvent external errors blocking jQuery's ready.
 * @param {Function} func - The function to call when the document is ready.
 * @see http://www.dustindiaz.com/smallest-domready-ever
 */
function FooGallery_Simple_Portfolio_Ready(func) {
	/in/.test(document.readyState) ? setTimeout('FooGallery_Simple_Portfolio_Ready(' + func + ')', 9) : func()
}

FooGallery_Simple_Portfolio_Ready(function () {
	jQuery('.foogallery-simple_portfolio').each(function() {
		var gutterValue = jQuery(this).data('brickfolio-gutter');
		if (isNaN(gutterValue)) gutterValue = 40;
		jQuery(this).brickfolio( { imageSelector : "img.bf-img:first", gutter : gutterValue} );
	});
});