/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */

"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),
function(a,b,c) {
    function d(c) {
        var d=b.console;
        f[c]||(f[c]=!0, a.migrateWarnings.push(c), d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c), a.migrateTrace&&d.trace&&d.trace()))
    }
    function e(b,c,e,f) {
        if(Object.defineProperty)try {
            return void Object.defineProperty(b, c, {
                configurable: !0, enumerable: !0, get: function() {
                    return d(f), e
                }
                ,
                set:function(a) {
                    d(f), e=a
                }
            }
            )
        }
        catch(g) {}a._definePropertyBroken=!0,
        b[c]=e
    }
    a.migrateVersion="1.4.1";
    var f= {};
    a.migrateWarnings=[],
    b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),
    a.migrateTrace===c&&(a.migrateTrace=!0),
    a.migrateReset=function() {
        f= {}, a.migrateWarnings.length=0
    }
    ,
    "BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");
    var g=a("<input/>",
    {
        size: 1
    }
    ).attr("size")&&a.attrFn,
    h=a.attr,
    i=a.attrHooks.value&&a.attrHooks.value.get||function() {
        return null
    }
    ,
    j=a.attrHooks.value&&a.attrHooks.value.set||function() {
        return c
    }
    ,
    k=/^(?:input|button)$/i,
    l=/^[238]$/,
    m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    n=/^(?:checked|selected)$/i;
    e(a,
    "attrFn",
    g|| {},
    "jQuery.attrFn is deprecated"),
    a.attr=function(b,e,f,i) {
        var j=e.toLowerCase(), o=b&&b.nodeType;
        return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"), b&&!l.test(o)&&(g?e in g: a.isFunction(a.fn[e])))?a(b)[e](f): ("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]= {
            get: function(b, d) {
                var e, f=a.prop(b, d);
                return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase(): c
            }
            ,
            set:function(b,c,d) {
                var e;
                return c===!1?a.removeAttr(b, d): (e=a.propFix[d]||d, e in b&&(b[e]=!0), b.setAttribute(d, d.toLowerCase())), d
            }
        }
        ,
        n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),
        h.call(a,
        b,
        e,
        f))
    }
    ,
    a.attrHooks.value= {
        get: function(a, b) {
            var c=(a.nodeName||"").toLowerCase();
            return"button"===c?i.apply(this, arguments): ("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"), b in a?a.value: null)
        }
        ,
        set:function(a,b) {
            var c=(a.nodeName||"").toLowerCase();
            return"button"===c?j.apply(this, arguments): ("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value=b))
        }
    }
    ;
    var o,
    p,
    q=a.fn.init,
    r=a.find,
    s=a.parseJSON,
    t=/^\s*</,
    u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
    v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
    w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init=function(b,e,f) {
        var g, h;
        return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"), g[3]&&d("$(html) HTML text after last tag is ignored"), "#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e&&e.context&&e.context.nodeType&&(e=e.context), a.parseHTML)?q.call(this, a.parseHTML(g[2], e&&e.ownerDocument||e||document, !0), e, f): (h=q.apply(this, arguments), b&&b.selector!==c?(h.selector=b.selector, h.context=b.context): (h.selector="string"==typeof b?b: "", b&&(h.context=b.nodeType?b: e||document)), h)
    }
    ,
    a.fn.init.prototype=a.fn,
    a.find=function(a) {
        var b=Array.prototype.slice.call(arguments);
        if("string"==typeof a&&u.test(a))try {
            document.querySelector(a)
        }
        catch(c) {
            a=a.replace(v, function(a, b, c, d) {
                return"["+b+c+'"'+d+'"]'
            }
            );
            try {
                document.querySelector(a), d("Attribute selector with '#' must be quoted: "+b[0]), b[0]=a
            }
            catch(e) {
                d("Attribute selector with '#' was not fixed: "+b[0])
            }
        }
        return r.apply(this,b)
    }
    ;
    var x;
    for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);
    a.parseJSON=function(a) {
        return a?s.apply(this, arguments): (d("jQuery.parseJSON requires a valid JSON string"), null)
    }
    ,
    a.uaMatch=function(a) {
        a=a.toLowerCase();
        var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?: .*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?: .*? rv: ([\w.]+)|)/.exec(a)||[];
        return {
            browser: b[1]||"", version: b[2]||"0"
        }
    }
    ,
    a.browser||(o=a.uaMatch(navigator.userAgent),
    p= {},
    o.browser&&(p[o.browser]=!0,
    p.version=o.version),
    p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),
    a.browser=p),
    e(a,
    "browser",
    a.browser,
    "jQuery.browser is deprecated"),
    a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,
    e(a,
    "boxModel",
    a.boxModel,
    "jQuery.boxModel is deprecated"),
    e(a.support,
    "boxModel",
    a.support.boxModel,
    "jQuery.support.boxModel is deprecated"),
    a.sub=function() {
        function b(a, c) {
            return new b.fn.init(a, c)
        }
        a.extend(!0,b,this),
        b.superclass=this,
        b.fn=b.prototype=this(),
        b.fn.constructor=b,
        b.sub=this.sub,
        b.fn.init=function(d,
        e) {
            var f=a.fn.init.call(this, d, e, c);
            return f instanceof b?f: b(f)
        }
        ,
        b.fn.init.prototype=b.fn;
        var c=b(document);
        return d("jQuery.sub() is deprecated"),
        b
    }
    ,
    a.fn.size=function() {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    }
    ;
    var y=!1;
    a.swap&&a.each(["height",
    "width",
    "reliableMarginRight"],
    function(b,
    c) {
        var d=a.cssHooks[c]&&a.cssHooks[c].get;
        d&&(a.cssHooks[c].get=function() {
            var a;
            return y=!0, a=d.apply(this, arguments), y=!1, a
        }
        )
    }
    ),
    a.swap=function(a,
    b,
    c,
    e) {
        var f, g, h= {};
        y||d("jQuery.swap() is undocumented and deprecated");
        for(g in b)h[g]=a.style[g], a.style[g]=b[g];
        f=c.apply(a, e||[]);
        for(g in b)a.style[g]=h[g];
        return f
    }
    ,
    a.ajaxSetup( {
        converters: {
            "text json": a.parseJSON
        }
    }
    );
    var z=a.fn.data;
    a.fn.data=function(b) {
        var e, f, g=this[0];
        return!g||"events"!==b||1!==arguments.length||(e=a.data(g, b), f=a._data(g, b), e!==c&&e!==f||f===c)?z.apply(this, arguments): (d("Use of jQuery.fn.data('events') is deprecated"), f)
    }
    ;
    var A=/\/(java|ecma)script/i;
    a.clean||(a.clean=function(b,
    c,
    e,
    f) {
        c=c||document, c=!c.nodeType&&c[0]||c, c=c.ownerDocument||c, d("jQuery.clean() is deprecated");
        var g, h, i, j, k=[];
        if(a.merge(k, a.buildFragment(b, c).childNodes), e)for(i=function(a) {
            return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a): a): e.appendChild(a): void 0
        }
        ,
        g=0;
        null!=(h=k[g]);
        g++)a.nodeName(h,
        "script")&&i(h)||(e.appendChild(h),
        "undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],
        h.getElementsByTagName("script")),
        i),
        k.splice.apply(k,
        [g+1,
        0].concat(j)),
        g+=j.length));
        return k
    }
    );
    var B=a.event.add,
    C=a.event.remove,
    D=a.event.trigger,
    E=a.fn.toggle,
    F=a.fn.live,
    G=a.fn.die,
    H=a.fn.load,
    I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
    J=new RegExp("\\b(?:"+I+")\\b"),
    K=/(?:^|\s)hover(\.\S+|)\b/,
    L=function(b) {
        return"string"!=typeof b||a.event.special.hover?b: (K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b&&b.replace(K, "mouseenter$1 mouseleave$1"))
    }
    ;
    a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange",
    "attrName",
    "relatedNode",
    "srcElement"),
    a.event.dispatch&&e(a.event,
    "handle",
    a.event.dispatch,
    "jQuery.event.handle is undocumented and deprecated"),
    a.event.add=function(a,
    b,
    c,
    e,
    f) {
        a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b), B.call(this, a, L(b||""), c, e, f)
    }
    ,
    a.event.remove=function(a,
    b,
    c,
    d,
    e) {
        C.call(this, a, L(b)||"", c, d, e)
    }
    ,
    a.each(["load",
    "unload",
    "error"],
    function(b,
    c) {
        a.fn[c]=function() {
            var a=Array.prototype.slice.call(arguments, 0);
            return"load"===c&&"string"==typeof a[0]?H.apply(this, a): (d("jQuery.fn."+c+"() is deprecated"), a.splice(0, 0, c), arguments.length?this.bind.apply(this, a): (this.triggerHandler.apply(this, a), this))
        }
    }
    ),
    a.fn.toggle=function(b,
    c) {
        if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e=arguments, f=b.guid||a.guid++, g=0, h=function(c) {
            var d=(a._data(this, "lastToggle"+b.guid)||0)%g;
            return a._data(this, "lastToggle"+b.guid, d+1), c.preventDefault(), e[d].apply(this, arguments)||!1
        }
        ;
        for(h.guid=f;
        g<e.length;
        )e[g++].guid=f;
        return this.click(h)
    }
    ,
    a.fn.live=function(b,
    c,
    e) {
        return d("jQuery.fn.live() is deprecated"), F?F.apply(this, arguments): (a(this.context).on(b, this.selector, c, e), this)
    }
    ,
    a.fn.die=function(b,
    c) {
        return d("jQuery.fn.die() is deprecated"), G?G.apply(this, arguments): (a(this.context).off(b, this.selector||"**", c), this)
    }
    ,
    a.event.trigger=function(a,
    b,
    c,
    e) {
        return c||J.test(a)||d("Global events are undocumented and deprecated"), D.call(this, a, b, c||document, e)
    }
    ,
    a.each(I.split("|"),
    function(b,
    c) {
        a.event.special[c]= {
            setup: function() {
                var b=this;
                return b!==document&&(a.event.add(document, c+"."+a.guid, function() {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }
                ),
                a._data(this,
                c,
                a.guid++)),
                !1
            }
            ,
            teardown:function() {
                return this!==document&&a.event.remove(document, c+"."+a._data(this, c)), !1
            }
        }
    }
    ),
    a.event.special.ready= {
        setup: function() {
            this===document&&d("'ready' event is deprecated")
        }
    }
    ;
    var M=a.fn.andSelf||a.fn.addBack,
    N=a.fn.find;
    if(a.fn.andSelf=function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
    }
    ,
    a.fn.find=function(a) {
        var b=N.apply(this, arguments);
        return b.context=this.context, b.selector=this.selector?this.selector+" "+a: a, b
    }
    ,
    a.Callbacks) {
        var O=a.Deferred, P=[["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred=function(b) {
            var c=O(), e=c.promise();
            return c.pipe=e.pipe=function() {
                var b=arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                    a.each(P, function(f, g) {
                        var h=a.isFunction(b[f])&&b[f];
                        c[g[1]](function() {
                            var b=h&&h.apply(this, arguments);
                            b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify): d[g[0]+"With"](this===e?d.promise(): this, h?[b]: arguments)
                        }
                        )
                    }
                    ),
                    b=null
                }
                ).promise()
            }
            ,
            c.isResolved=function() {
                return d("deferred.isResolved is deprecated"), "resolved"===c.state()
            }
            ,
            c.isRejected=function() {
                return d("deferred.isRejected is deprecated"), "rejected"===c.state()
            }
            ,
            b&&b.call(c,
            c),
            c
        }
    }
}
(jQuery,
window);
jQuery(document).ready(function(a) {
    function e(e, i) {
        a(".lwa-loading").remove(), i=a(i), e.result===!0?i.attr("class", "lwa-status lwa-status-confirm").html(e.message): e.result===!1?(i.attr("class", "lwa-status lwa-status-invalid").html(e.error), i.find("a").click(function(e) {
            var i=a(this).parents(".lwa").find("form.lwa-remember");
            i.length>0&&(e.preventDefault(), i.show("slow"))
        }
        )):i.attr("class",
        "lwa-status lwa-status-invalid").html("An error has occured. Please try again.")
    }
    a("#LoginWithAjax").length>0&&(a("#LoginWithAjax").addClass("lwa"),
    a("#LoginWithAjax_Status").addClass("lwa-status"),
    a("#LoginWithAjax_Register").addClass("lwa-register"),
    a("#LoginWithAjax_Remember").addClass("lwa-remember"),
    a("#LoginWithAjax_Links_Remember").addClass("lwa-links-remember"),
    a("#LoginWithAjax_Links_Remember_Cancel").addClass("lwa-links-remember-cancel"),
    a("#LoginWithAjax_Form").addClass("lwa-form")),
    a("form.lwa-form, form.lwa-remember, div.lwa-register form").submit(function(i) {
        i.preventDefault();
        var n=a(this), t=n.find(".lwa-status");
        0==t.length&&(t=a('<span class="lwa-status"></span>'), n.prepend(t));
        var l=n.find(".lwa-ajax");
        0==l.length&&(l=a('<input class="lwa-ajax" name="lwa" type="hidden" value="1" />'), n.prepend(l)), a('<div class="lwa-loading"></div>').prependTo(n);
        var s=n.attr("action");
        "undefined"!=typeof LWA&&(s=LWA.ajaxurl), a.ajax( {
            type: "POST", url: s, data: n.serialize(), success: function(i) {
                e(i, t), a(document).trigger("lwa_"+i.action, [i, n])
            }
            ,
            error:function() {
                e( {}, t)
            }
            ,
            dataType:"jsonp"
        }
        )
    }
    ),
    a(document).on("lwa_login",
    function(e,
    i,
    n) {
        i.result===!0&&(null!=i.widget?a.get(i.widget, function(e) {
            var i=a(e);
            n.parent(".lwa").replaceWith(i);
            var t=i.find(".").show(), l=i.parent().find(".lwa-title");
            l.replaceWith(t)
        }
        ):null==i.redirect?window.location.reload():window.location=i.redirect)
    }
    ),
    a(".lwa-modal").each(function(e,
    i) {
        var n=a(i);
        n.parents(".lwa").data("modal", n), a("body").append(a('<div class="lwa"></div>').append(n))
    }
    ),
    a(document).on("click",
    ".lwa-links-modal",
    function(e) {
        var i=a(this).parents(".lwa").data("modal");
        "undefined"!=typeof i&&i.length>0&&(e.preventDefault(), i.reveal( {
            modalbgclass: "lwa-modal-bg", dismissmodalclass: "lwa-modal-close"
        }
        ))
    }
    ),
    a(".lwa-links-register-inline").click(function(e) {
        var i=a(this).parents(".lwa").find(".lwa-register");
        i.length>0&&(e.preventDefault(), i.show("slow"), a(this).parents(".lwa").find(".lwa-remember").hide("slow"))
    }
    ),
    a(".lwa-links-register-inline-cancel").click(function(e) {
        e.preventDefault(), a(this).parents(".lwa-register").hide("slow")
    }
    ),
    a(document).on("click",
    ".lwa-links-remember",
    function(e) {
        var i=a(this).parents(".lwa").find(".lwa-remember");
        i.length>0&&(e.preventDefault(), i.show("slow"), a(this).parents(".lwa").find(".lwa-register").hide("slow"))
    }
    ),
    a(document).on("click",
    ".lwa-links-remember-cancel",
    function(e) {
        e.preventDefault(), a(this).parents(".lwa-remember").hide("slow")
    }
    )
}
),
function(a) {
    a("a[data-reveal-id]").on("click", function(e) {
        e.preventDefault();
        var i=a(this).attr("data-reveal-id");
        a("#"+i).reveal(a(this).data())
    }
    ),
    a.fn.reveal=function(e) {
        var i= {
            animation: "fadeAndPop", animationspeed: 300, closeonbackgroundclick: !0, dismissmodalclass: "close-reveal-modal", modalbgclass: "reveal-modal-bg"
        }
        ,
        e=a.extend( {},
        i,
        e);
        return this.each(function() {
            function i() {
                o=!1
            }
            function n() {
                o=!0
            }
            var t=a(this),
            l=parseInt(t.css("top")),
            s=t.height()+l,
            o=!1,
            d=a("."+e.modalbgclass);
            0==d.length&&(d=a('<div class="'+e.modalbgclass+'" />').insertAfter(t)),
            0==t.find("."+e.dismissmodalclass).length&&t.append('<a class="'+e.dismissmodalclass+'">&#215;</a>'),
            t.bind("reveal:open",
            function() {
                d.unbind("click.modalEvent"), a("."+e.dismissmodalclass).unbind("click.modalEvent"), o||(n(), "fadeAndPop"==e.animation&&(t.css( {
                    top: a(document).scrollTop()-s, opacity: 0, visibility: "visible", display: "block"
                }
                ),
                d.fadeIn(e.animationspeed/2),
                t.delay(e.animationspeed/2).animate( {
                    top: a(document).scrollTop()+l+"px", opacity: 1
                }
                ,
                e.animationspeed,
                i())),
                "fade"==e.animation&&(t.css( {
                    opacity: 0, visibility: "visible", top: a(document).scrollTop()+l, display: "block"
                }
                ),
                d.fadeIn(e.animationspeed/2),
                t.delay(e.animationspeed/2).animate( {
                    opacity: 1
                }
                ,
                e.animationspeed,
                i())),
                "none"==e.animation&&(t.css( {
                    visibility: "visible", top: a(document).scrollTop()+l, display: "block"
                }
                ),
                d.css( {
                    display: "block"
                }
                ),
                i())),
                t.unbind("reveal:open")
            }
            ),
            t.bind("reveal:close",
            function() {
                o||(n(), "fadeAndPop"==e.animation&&(d.delay(e.animationspeed).fadeOut(e.animationspeed), t.animate( {
                    top: a(document).scrollTop()-s+"px", opacity: 0
                }
                ,
                e.animationspeed/2,
                function() {
                    t.css( {
                        top: l, opacity: 1, visibility: "hidden"
                    }
                    ),
                    i()
                }
                )),
                "fade"==e.animation&&(d.delay(e.animationspeed).fadeOut(e.animationspeed),
                t.animate( {
                    opacity: 0
                }
                ,
                e.animationspeed,
                function() {
                    t.css( {
                        opacity: 1, visibility: "hidden", top: l
                    }
                    ),
                    i()
                }
                )),
                "none"==e.animation&&(t.css( {
                    visibility: "hidden", top: l
                }
                ),
                d.css( {
                    display: "none"
                }
                ))),
                t.unbind("reveal:close")
            }
            ),
            t.trigger("reveal:open");
            a("."+e.dismissmodalclass).bind("click.modalEvent",
            function() {
                t.trigger("reveal:close")
            }
            );
            e.closeonbackgroundclick&&(d.css( {
                cursor: "pointer"
            }
            ),
            d.bind("click.modalEvent",
            function() {
                t.trigger("reveal:close")
            }
            )),
            a("body").keyup(function(a) {
                27===a.which&&t.trigger("reveal:close")
            }
            )
        }
        )
    }
}
(jQuery);
jQuery(window).bind('djaxLoad',
function(e,
params) {
    maha_shortcode_tabs();
    maha_shortcode_toggle();
}
);
jQuery(document).ready(function() {
    maha_shortcode_tabs();
    maha_shortcode_toggle();
}
);
function maha_shortcode_tabs() {
    jQuery('.i-tabs > ul > li > a').click(function(e) {
        e.preventDefault();
        var current=jQuery(this);
        current.closest('.i-tabs').find(' > .tab-content > div:not(.nav-tab)').removeClass('active');
        jQuery(current.attr('href')).addClass('active');
        current.closest('.i-tabs').find(' > ul > li').removeClass('active');
        current.parent().addClass('active');
    }
    );
}
function maha_shortcode_toggle() {
    jQuery('.i-toggle:first-child').toggleClass('active');
    jQuery('.i-toggle:first-child .toggle-content').slideToggle('fast').toggleClass('active');
    jQuery('.i-toggle.active').find('.toggle-nav i').removeClass('icon-plus-squared').addClass('icon-minus-squared');
    jQuery('.i-toggle > .toggle-nav').click(function(e) {
        e.preventDefault();
        if(jQuery(this).parents('.i-toggles').hasClass('accordion')) {
            jQuery('.i-toggle').find('.toggle-content').slideUp(350).removeClass('active');
            jQuery('.i-toggle').removeClass('active');
            jQuery('.i-toggle').find('.toggle-nav i').removeClass('icon-minus-squared').addClass('icon-plus-squared');
        }
        if(jQuery(this).parent().find('.toggle-nav i').hasClass('icon-plus-squared')) {
            jQuery(this).parent().find('.toggle-nav i').removeClass('icon-plus-squared').addClass('icon-minus-squared');
        }
        else {
            jQuery(this).parent().find('.toggle-nav i').removeClass('icon-minus-squared').addClass('icon-plus-squared');
        }
        jQuery(this).parent().find('.toggle-content').slideToggle(350).toggleClass('active');
        jQuery(this).parent().toggleClass('active');
    }
    );
}
;
jQuery(document).ready(function() {
    if(typeof(edButtons)!=='undefined') {
        edButtons[110]=new QTags.TagButton('code', 'code', '`', '`', 'c');
        QTags._buttonsInit();
    }
    jQuery('#bbp_topic_title').bind('keydown.editor-focus',
    function(e) {
        if(e.which!==9) return;
        if(!e.ctrlKey&&!e.altKey&&!e.shiftKey) {
            if(typeof(tinymce)!=='undefined') {
                if(!tinymce.activeEditor.isHidden()) {
                    var editor=tinymce.activeEditor.editorContainer;
                    jQuery('#'+editor+' td.mceToolbar > a').focus();
                }
                else {
                    jQuery('textarea.bbp-the-content').focus();
                }
            }
            else {
                jQuery('textarea.bbp-the-content').focus();
            }
            e.preventDefault();
        }
    }
    );
    jQuery('#bbp_topic_tags').bind('keydown.editor-focus',
    function(e) {
        if(e.which!==9) return;
        if(e.shiftKey&&!e.ctrlKey&&!e.altKey) {
            if(typeof(tinymce)!=='undefined') {
                if(!tinymce.activeEditor.isHidden()) {
                    var editor=tinymce.activeEditor.editorContainer;
                    jQuery('#'+editor+' td.mceToolbar > a').focus();
                }
                else {
                    jQuery('textarea.bbp-the-content').focus();
                }
            }
            else {
                jQuery('textarea.bbp-the-content').focus();
            }
            e.preventDefault();
        }
    }
    );
}
);
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */

!function(e) {
    "use strict";
    "function"==typeof define&&define.amd?define(["jquery"], e): e("undefined"!=typeof jQuery?jQuery: window.Zepto)
}
(function(e) {
    "use strict";
    function t(t) {
        var r=t.data;
        t.isDefaultPrevented()||(t.preventDefault(), e(t.target).ajaxSubmit(r))
    }
    function r(t) {
        var r=t.target, a=e(r);
        if(!a.is("[type=submit],[type=image]")) {
            var n=a.closest("[type=submit]");
            if(0===n.length)return;
            r=n[0]
        }
        var i=this;
        if(i.clk=r,
        "image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,
        i.clk_y=t.offsetY;
        else if("function"==typeof e.fn.offset) {
            var o=a.offset();
            i.clk_x=t.pageX-o.left, i.clk_y=t.pageY-o.top
        }
        else i.clk_x=t.pageX-r.offsetLeft,
        i.clk_y=t.pageY-r.offsetTop;
        setTimeout(function() {
            i.clk=i.clk_x=i.clk_y=null
        }
        ,
        100)
    }
    function a() {
        if(e.fn.ajaxSubmit.debug) {
            var t="[jquery.form] "+Array.prototype.join.call(arguments, "");
            window.console&&window.console.log?window.console.log(t): window.opera&&window.opera.postError&&window.opera.postError(t)
        }
    }
    var n= {};
    n.fileapi=void 0!==e("<input type='file'/>").get(0).files,
    n.formdata=void 0!==window.FormData;
    var i=!!e.fn.prop;
    e.fn.attr2=function() {
        if(!i)return this.attr.apply(this, arguments);
        var e=this.prop.apply(this, arguments);
        return e&&e.jquery||"string"==typeof e?e: this.attr.apply(this, arguments)
    }
    ,
    e.fn.ajaxSubmit=function(t) {
        function r(r) {
            var a, n, i=e.param(r, t.traditional).split("&"), o=i.length, s=[];
            for(a=0;
            o>a;
            a++)i[a]=i[a].replace(/\+/g, " "), n=i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }
        function o(a) {
            for(var n=new FormData, i=0;
            i<a.length;
            i++)n.append(a[i].name, a[i].value);
            if(t.extraData) {
                var o=r(t.extraData);
                for(i=0;
                i<o.length;
                i++)o[i]&&n.append(o[i][0], o[i][1])
            }
            t.data=null;
            var s=e.extend(!0,
            {},
            e.ajaxSettings,
            t,
            {
                contentType: !1, processData: !1, cache: !1, type: u||"POST"
            }
            );
            t.uploadProgress&&(s.xhr=function() {
                var r=e.ajaxSettings.xhr();
                return r.upload&&r.upload.addEventListener("progress", function(e) {
                    var r=0, a=e.loaded||e.position, n=e.total;
                    e.lengthComputable&&(r=Math.ceil(a/n*100)), t.uploadProgress(e, a, n, r)
                }
                ,
                !1),
                r
            }
            ),
            s.data=null;
            var c=s.beforeSend;
            return s.beforeSend=function(e,
            r) {
                r.data=t.formData?t.formData: n, c&&c.call(this, e, r)
            }
            ,
            e.ajax(s)
        }
        function s(r) {
            function n(e) {
                var t=null;
                try {
                    e.contentWindow&&(t=e.contentWindow.document)
                }
                catch(r) {
                    a("cannot get iframe.contentWindow document: "+r)
                }
                if(t)return t;
                try {
                    t=e.contentDocument?e.contentDocument: e.document
                }
                catch(r) {
                    a("cannot get iframe.contentDocument: "+r), t=e.document
                }
                return t
            }
            function o() {
                function t() {
                    try {
                        var e=n(g).readyState;
                        a("state = "+e), e&&"uninitialized"==e.toLowerCase()&&setTimeout(t, 50)
                    }
                    catch(r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j&&clearTimeout(j), j=void 0
                    }
                }
                var r=f.attr2("target"),
                i=f.attr2("action"),
                o="multipart/form-data",
                c=f.attr("enctype")||f.attr("encoding")||o;
                w.setAttribute("target",
                p),
                (!u||/post/i.test(u))&&w.setAttribute("method",
                "POST"),
                i!=m.url&&w.setAttribute("action",
                m.url),
                m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr( {
                    encoding: "multipart/form-data", enctype: "multipart/form-data"
                }
                ),
                m.timeout&&(j=setTimeout(function() {
                    T=!0, s(D)
                }
                ,
                m.timeout));
                var l=[];
                try {
                    if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]: e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget||v.appendTo("body"), g.attachEvent?g.attachEvent("onload", s): g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    }
                    catch(h) {
                        var x=document.createElement("form").submit;
                        x.apply(w)
                    }
                }
                finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r?w.setAttribute("target", r): f.removeAttr("target"), e(l).remove()
                }
            }
            function s(t) {
                if(!x.aborted&&!F) {
                    if(M=n(g), M||(a("cannot access response document"), t=k), t===D&&x)return x.abort("timeout"), void S.reject(x, "timeout");
                    if(t==k&&x)return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if(M&&M.location.href!=m.iframeSrc||T) {
                        g.detachEvent?g.detachEvent("onload", s): g.removeEventListener("load", s, !1);
                        var r, i="success";
                        try {
                            if(T)throw"timeout";
                            var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);
                            if(a("isXml="+o), !o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u=M.body?M.body: M.documentElement;
                            x.responseText=u?u.innerHTML: null, x.responseXML=M.XMLDocument?M.XMLDocument: M, o&&(m.dataType="xml"), x.getResponseHeader=function(e) {
                                var t= {
                                    "content-type": m.dataType
                                }
                                ;
                                return t[e.toLowerCase()]
                            }
                            ,
                            u&&(x.status=Number(u.getAttribute("status"))||x.status,
                            x.statusText=u.getAttribute("statusText")||x.statusText);
                            var c=(m.dataType||"").toLowerCase(),
                            l=/(json|script|text)/.test(c);
                            if(l||m.textarea) {
                                var f=M.getElementsByTagName("textarea")[0];
                                if(f)x.responseText=f.value, x.status=Number(f.getAttribute("status"))||x.status, x.statusText=f.getAttribute("statusText")||x.statusText;
                                else if(l) {
                                    var p=M.getElementsByTagName("pre")[0], h=M.getElementsByTagName("body")[0];
                                    p?x.responseText=p.textContent?p.textContent: p.innerText: h&&(x.responseText=h.textContent?h.textContent: h.innerText)
                                }
                            }
                            else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));
                            try {
                                E=_(x, c, m)
                            }
                            catch(y) {
                                i="parsererror", x.error=r=y||i
                            }
                        }
                        catch(y) {
                            a("error caught: ", y), i="error", x.error=r=y||i
                        }
                        x.aborted&&(a("upload aborted"),
                        i=null),
                        x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),
                        "success"===i?(m.success&&m.success.call(m.context,
                        E,
                        "success",
                        x),
                        S.resolve(x.responseText,
                        "success",
                        x),
                        d&&e.event.trigger("ajaxSuccess",
                        [x,
                        m])):i&&(void 0===r&&(r=x.statusText),
                        m.error&&m.error.call(m.context,
                        x,
                        i,
                        r),
                        S.reject(x,
                        "error",
                        r),
                        d&&e.event.trigger("ajaxError",
                        [x,
                        m,
                        r])),
                        d&&e.event.trigger("ajaxComplete",
                        [x,
                        m]),
                        d&&!--e.active&&e.event.trigger("ajaxStop"),
                        m.complete&&m.complete.call(m.context,
                        x,
                        i),
                        F=!0,
                        m.timeout&&clearTimeout(j),
                        setTimeout(function() {
                            m.iframeTarget?v.attr("src", m.iframeSrc): v.remove(), x.responseXML=null
                        }
                        ,
                        100)
                    }
                }
            }
            var c,
            l,
            m,
            d,
            p,
            v,
            g,
            x,
            y,
            b,
            T,
            j,
            w=f[0],
            S=e.Deferred();
            if(S.abort=function(e) {
                x.abort(e)
            }
            ,
            r)for(l=0;
            l<h.length;
            l++)c=e(h[l]),
            i?c.prop("disabled",
            !1):c.removeAttr("disabled");
            if(m=e.extend(!0,
            {},
            e.ajaxSettings,
            t),
            m.context=m.context||m,
            p="jqFormIO"+(new Date).getTime(),
            m.iframeTarget?(v=e(m.iframeTarget),
            b=v.attr2("name"),
            b?p=b:v.attr2("name",
            p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),
            v.css( {
                position: "absolute", top: "-1000px", left: "-1000px"
            }
            )),
            g=v[0],
            x= {
                aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {}, getResponseHeader: function() {}, setRequestHeader: function() {}, abort: function(t) {
                    var r="timeout"===t?"timeout": "aborted";
                    a("aborting upload... "+r), this.aborted=1;
                    try {
                        g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")
                    }
                    catch(n) {}v.attr("src",
                    m.iframeSrc),
                    x.error=r,
                    m.error&&m.error.call(m.context,
                    x,
                    r,
                    t),
                    d&&e.event.trigger("ajaxError",
                    [x,
                    m,
                    r]),
                    m.complete&&m.complete.call(m.context,
                    x,
                    r)
                }
            }
            ,
            d=m.global,
            d&&0===e.active++&&e.event.trigger("ajaxStart"),
            d&&e.event.trigger("ajaxSend",
            [x,
            m]),
            m.beforeSend&&m.beforeSend.call(m.context,
            x,
            m)===!1)return m.global&&e.active--,
            S.reject(),
            S;
            if(x.aborted)return S.reject(),
            S;
            y=w.clk,
            y&&(b=y.name,
            b&&!y.disabled&&(m.extraData=m.extraData|| {},
            m.extraData[b]=y.value,
            "image"==y.type&&(m.extraData[b+".x"]=w.clk_x,
            m.extraData[b+".y"]=w.clk_y)));
            var D=1,
            k=2,
            A=e("meta[name=csrf-token]").attr("content"),
            L=e("meta[name=csrf-param]").attr("content");
            L&&A&&(m.extraData=m.extraData|| {},
            m.extraData[L]=A),
            m.forceSync?o():setTimeout(o,
            10);
            var E,
            M,
            F,
            O=50,
            X=e.parseXML||function(e,
            t) {
                return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"), t.async="false", t.loadXML(e)): t=(new DOMParser).parseFromString(e, "text/xml"), t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t: null
            }
            ,
            C=e.parseJSON||function(e) {
                return window.eval("("+e+")")
            }
            ,
            _=function(t,
            r,
            a) {
                var n=t.getResponseHeader("content-type")||"", i="xml"===r||!r&&n.indexOf("xml")>=0, o=i?t.responseXML: t.responseText;
                return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"), a&&a.dataFilter&&(o=a.dataFilter(o, r)), "string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o): ("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)), o
            }
            ;
            return S
        }
        if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),
        this;
        var u,
        c,
        l,
        f=this;
        "function"==typeof t?t= {
            success: t
        }
        :void 0===t&&(t= {}),
        u=t.type||this.attr2("method"),
        c=t.url||this.attr2("action"),
        l="string"==typeof c?e.trim(c):"",
        l=l||window.location.href||"",
        l&&(l=(l.match(/^([^#]+)/)||[])[1]),
        t=e.extend(!0,
        {
            url: l, success: e.ajaxSettings.success, type: u||e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href||"")?"javascript:false": "about:blank"
        }
        ,
        t);
        var m= {};
        if(this.trigger("form-pre-serialize",
        [this,
        t,
        m]),
        m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
        this;
        if(t.beforeSerialize&&t.beforeSerialize(this,
        t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),
        this;
        var d=t.traditional;
        void 0===d&&(d=e.ajaxSettings.traditional);
        var p,
        h=[],
        v=this.formToArray(t.semantic,
        h);
        if(t.data&&(t.extraData=t.data,
        p=e.param(t.data,
        d)),
        t.beforeSubmit&&t.beforeSubmit(v,
        this,
        t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),
        this;
        if(this.trigger("form-submit-validate",
        [v,
        this,
        t,
        m]),
        m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
        this;
        var g=e.param(v,
        d);
        p&&(g=g?g+"&"+p:p),
        "GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,
        t.data=null):t.data=g;
        var x=[];
        if(t.resetForm&&x.push(function() {
            f.resetForm()
        }
        ),
        t.clearForm&&x.push(function() {
            f.clearForm(t.includeHidden)
        }
        ),
        !t.dataType&&t.target) {
            var y=t.success||function() {};
            x.push(function(r) {
                var a=t.replaceTarget?"replaceWith": "html";
                e(t.target)[a](r).each(y, arguments)
            }
            )
        }
        else t.success&&x.push(t.success);
        if(t.success=function(e,
        r,
        a) {
            for(var n=t.context||this, i=0, o=x.length;
            o>i;
            i++)x[i].apply(n, [e, r, a||f, f])
        }
        ,
        t.error) {
            var b=t.error;
            t.error=function(e, r, a) {
                var n=t.context||this;
                b.apply(n, [e, r, a, f])
            }
        }
        if(t.complete) {
            var T=t.complete;
            t.complete=function(e, r) {
                var a=t.context||this;
                T.apply(a, [e, r, f])
            }
        }
        var j=e("input[type=file]:enabled",
        this).filter(function() {
            return""!==e(this).val()
        }
        ),
        w=j.length>0,
        S="multipart/form-data",
        D=f.attr("enctype")==S||f.attr("encoding")==S,
        k=n.fileapi&&n.formdata;
        a("fileAPI :"+k);
        var A,
        L=(w||D)&&!k;
        t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,
        function() {
            A=s(v)
        }
        ):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),
        f.removeData("jqxhr").data("jqxhr",
        A);
        for(var E=0;
        E<h.length;
        E++)h[E]=null;
        return this.trigger("form-submit-notify",
        [this,
        t]),
        this
    }
    ,
    e.fn.ajaxForm=function(n) {
        if(n=n|| {}, n.delegation=n.delegation&&e.isFunction(e.fn.on), !n.delegation&&0===this.length) {
            var i= {
                s: this.selector, c: this.context
            }
            ;
            return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),
            e(function() {
                e(i.s, i.c).ajaxForm(n)
            }
            ),
            this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),
            this)
        }
        return n.delegation?(e(document).off("submit.form-plugin",
        this.selector,
        t).off("click.form-plugin",
        this.selector,
        r).on("submit.form-plugin",
        this.selector,
        n,
        t).on("click.form-plugin",
        this.selector,
        n,
        r),
        this):this.ajaxFormUnbind().bind("submit.form-plugin",
        n,
        t).bind("click.form-plugin",
        n,
        r)
    }
    ,
    e.fn.ajaxFormUnbind=function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ,
    e.fn.formToArray=function(t,
    r) {
        var a=[];
        if(0===this.length)return a;
        var i, o=this[0], s=this.attr("id"), u=t?o.getElementsByTagName("*"): o.elements;
        if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()), s&&(i=e(':input[form="'+s+'"]').get(), i.length&&(u=(u||[]).concat(i))), !u||!u.length)return a;
        var c, l, f, m, d, p, h;
        for(c=0, p=u.length;
        p>c;
        c++)if(d=u[c], f=d.name, f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push( {
            name: f, value: e(d).val(), type: d.type
        }
        ),
        a.push( {
            name: f+".x", value: o.clk_x
        }
        ,
        {
            name: f+".y", value: o.clk_y
        }
        ));
        else if(m=e.fieldValue(d,
        !0),
        m&&m.constructor==Array)for(r&&r.push(d),
        l=0,
        h=m.length;
        h>l;
        l++)a.push( {
            name: f, value: m[l]
        }
        );
        else if(n.fileapi&&"file"==d.type) {
            r&&r.push(d);
            var v=d.files;
            if(v.length)for(l=0;
            l<v.length;
            l++)a.push( {
                name: f, value: v[l], type: d.type
            }
            );
            else a.push( {
                name: f, value: "", type: d.type
            }
            )
        }
        else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),
        a.push( {
            name: f, value: m, type: d.type, required: d.required
        }
        ));
        if(!t&&o.clk) {
            var g=e(o.clk), x=g[0];
            f=x.name, f&&!x.disabled&&"image"==x.type&&(a.push( {
                name: f, value: g.val()
            }
            ),
            a.push( {
                name: f+".x", value: o.clk_x
            }
            ,
            {
                name: f+".y", value: o.clk_y
            }
            ))
        }
        return a
    }
    ,
    e.fn.formSerialize=function(t) {
        return e.param(this.formToArray(t))
    }
    ,
    e.fn.fieldSerialize=function(t) {
        var r=[];
        return this.each(function() {
            var a=this.name;
            if(a) {
                var n=e.fieldValue(this, t);
                if(n&&n.constructor==Array)for(var i=0, o=n.length;
                o>i;
                i++)r.push( {
                    name: a, value: n[i]
                }
                );
                else null!==n&&"undefined"!=typeof n&&r.push( {
                    name: this.name, value: n
                }
                )
            }
        }
        ),
        e.param(r)
    }
    ,
    e.fn.fieldValue=function(t) {
        for(var r=[], a=0, n=this.length;
        n>a;
        a++) {
            var i=this[a], o=e.fieldValue(i, t);
            null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r, o): r.push(o))
        }
        return r
    }
    ,
    e.fieldValue=function(t,
    r) {
        var a=t.name, n=t.type, i=t.tagName.toLowerCase();
        if(void 0===r&&(r=!0), r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;
        if("select"==i) {
            var o=t.selectedIndex;
            if(0>o)return null;
            for(var s=[], u=t.options, c="select-one"==n, l=c?o+1: u.length, f=c?o: 0;
            l>f;
            f++) {
                var m=u[f];
                if(m.selected) {
                    var d=m.value;
                    if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text: m.value), c)return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }
    ,
    e.fn.clearForm=function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        }
        )
    }
    ,
    e.fn.clearFields=e.fn.clearInputs=function(t) {
        var r=/^(?: color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a=this.type, n=this.tagName.toLowerCase();
            r.test(a)||"textarea"==n?this.value="": "checkbox"==a||"radio"==a?this.checked=!1: "select"==n?this.selectedIndex=-1: "file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)): e(this).val(""): t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")
        }
        )
    }
    ,
    e.fn.resetForm=function() {
        return this.each(function() {
            ("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()
        }
        )
    }
    ,
    e.fn.enable=function(e) {
        return void 0===e&&(e=!0), this.each(function() {
            this.disabled=!e
        }
        )
    }
    ,
    e.fn.selected=function(t) {
        return void 0===t&&(t=!0), this.each(function() {
            var r=this.type;
            if("checkbox"==r||"radio"==r)this.checked=t;
            else if("option"==this.tagName.toLowerCase()) {
                var a=e(this).parent("select");
                t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1), this.selected=t
            }
        }
        )
    }
    ,
    e.fn.ajaxSubmit.debug=!1
}
);
(function($) {
    'use strict';
    if(typeof _wpcf7=='undefined'||_wpcf7===null) {
        return;
    }
    _wpcf7=$.extend( {
        cached: 0
    }
    ,
    _wpcf7);
    $.fn.wpcf7InitForm=function() {
        this.ajaxForm( {
            beforeSubmit: function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('.ajax-loader').addClass('is-active');
                return true;
            }
            ,
            beforeSerialize:function($form,
            options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                }
                );
                return true;
            }
            ,
            data: {
                '_wpcf7_is_ajax_call': 1
            }
            ,
            dataType:'json',
            success:$.wpcf7AjaxSuccess,
            error:function(xhr,
            status,
            error,
            $form) {
                var e=$('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        }
        );
        if(_wpcf7.cached) {
            this.wpcf7OnloadRefill();
        }
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        }
        );
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if(_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker( {
                    dateFormat: 'yy-mm-dd', minDate: new Date($(this).attr('min')), maxDate: new Date($(this).attr('max'))
                }
                );
            }
            );
        }
        if(_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner( {
                    min: $(this).attr('min'), max: $(this).attr('max'), step: $(this).attr('step')
                }
                );
            }
            );
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        }
        );
        this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
    }
    ;
    $.wpcf7AjaxSuccess=function(data,
    status,
    xhr,
    $form) {
        if(!$.isPlainObject(data)||$.isEmptyObject(data)) {
            return;
        }
        var $responseOutput=$form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if(data.captcha) {
            $form.wpcf7RefillCaptcha(data.captcha);
        }
        if(data.quiz) {
            $form.wpcf7RefillQuiz(data.quiz);
        }
        if(data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            }
            );
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).trigger('wpcf7:invalid');
            $(data.into).trigger('invalid.wpcf7');
        }
        else if(1==data.spam) {
            $form.find('[name="g-recaptcha-response"]').each(function() {
                if(''==$(this).val()) {
                    var $recaptcha=$(this).closest('.wpcf7-form-control-wrap');
                    $recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
                }
            }
            );
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).trigger('wpcf7:spam');
            $(data.into).trigger('spam.wpcf7');
        }
        else if(1==data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if(data.onSentOk) {
                $.each(data.onSentOk, function(i, n) {
                    eval(n)
                }
                );
            }
            $(data.into).trigger('wpcf7:mailsent');
            $(data.into).trigger('mailsent.wpcf7');
        }
        else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).trigger('wpcf7:mailfailed');
            $(data.into).trigger('mailfailed.wpcf7');
        }
        if(data.onSubmit) {
            $.each(data.onSubmit, function(i, n) {
                eval(n)
            }
            );
        }
        $(data.into).trigger('wpcf7:submit');
        $(data.into).trigger('submit.wpcf7');
        if(1==data.mailSent) {
            $form.resetForm();
        }
        $form.find('[placeholder].placeheld').each(function(i,
        n) {
            $(n).val($(n).attr('placeholder'));
        }
        );
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role',
        'alert');
        $.wpcf7UpdateScreenReaderResponse($form,
        data);
    }
    ;
    $.fn.wpcf7ExclusiveCheckbox=function() {
        return this.find('input:checkbox').click(function() {
            var name=$(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="'+name+'"]').not(this).prop('checked', false);
        }
        );
    }
    ;
    $.fn.wpcf7Placeholder=function() {
        if(_wpcf7.supportHtml5.placeholder) {
            return this;
        }
        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function() {
                if($(this).hasClass('placeheld')) $(this).val('').removeClass('placeheld');
            }
            );
            $(this).blur(function() {
                if(''==$(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7AjaxLoader=function() {
        return this.each(function() {
            $(this).after('<span class="ajax-loader"></span>');
        }
        );
    }
    ;
    $.fn.wpcf7ToggleSubmit=function() {
        return this.each(function() {
            var form=$(this);
            if(this.tagName.toLowerCase()!='form') {
                form=$(this).find('form').first();
            }
            if(form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }
            var submit=form.find('input:submit');
            if(!submit.length)return;
            var acceptances=form.find('input:checkbox.wpcf7-acceptance');
            if(!acceptances.length)return;
            submit.removeAttr('disabled');
            acceptances.each(function(i,
            n) {
                n=$(n);
                if(n.hasClass('wpcf7-invert')&&n.is(':checked')||!n.hasClass('wpcf7-invert')&&!n.is(':checked')) {
                    submit.attr('disabled', 'disabled');
                }
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7ToggleCheckboxFreetext=function() {
        return this.each(function() {
            var $wrap=$(this).closest('.wpcf7-form-control');
            if($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            }
            else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function() {
                var $cb=$('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext=$(':input.wpcf7-free-text', $wrap);
                if($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                }
                else {
                    $freetext.prop('disabled', true);
                }
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7CharacterCount=function() {
        return this.each(function() {
            var $count=$(this);
            var name=$count.attr('data-target-name');
            var down=$count.hasClass('down');
            var starting=parseInt($count.attr('data-starting-value'), 10);
            var maximum=parseInt($count.attr('data-maximum-value'), 10);
            var minimum=parseInt($count.attr('data-minimum-value'), 10);
            var updateCount=function($target) {
                var length=$target.val().length;
                var count=down?starting-length: length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if(maximum&&maximum<length) {
                    $count.addClass('too-long');
                }
                else {
                    $count.removeClass('too-long');
                }
                if(minimum&&length<minimum) {
                    $count.addClass('too-short');
                }
                else {
                    $count.removeClass('too-short');
                }
            }
            ;
            $count.closest('form').find(':input[name="'+name+'"]').each(function() {
                updateCount($(this));
                $(this).keyup(function() {
                    updateCount($(this));
                }
                );
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7NormalizeUrl=function() {
        return this.each(function() {
            var val=$.trim($(this).val());
            if(val&&!val.match(/^[a-z][a-z0-9.+-]*: /i)) {
                val=val.replace(/^\/+/, '');
                val='http://'+val;
            }
            $(this).val(val);
        }
        );
    }
    ;
    $.fn.wpcf7NotValidTip=function(message) {
        return this.each(function() {
            var $into=$(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">'+message+'</span>');
            if($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                }
                );
                $(':input',
                $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                }
                );
            }
        }
        );
    }
    ;
    $.fn.wpcf7FadeOut=function() {
        return this.each(function() {
            $(this).animate( {
                opacity: 0
            }
            ,
            'fast',
            function() {
                $(this).css( {
                    'z-index': -100
                }
                );
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7OnloadRefill=function() {
        return this.each(function() {
            var url=$(this).attr('action');
            if(0<url.indexOf('#')) {
                url=url.substr(0, url.indexOf('#'));
            }
            var id=$(this).find('input[name="_wpcf7"]').val();
            var unitTag=$(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url,
            {
                _wpcf7_is_ajax_call: 1, _wpcf7: id, _wpcf7_request_ver: $.now()
            }
            ,
            function(data) {
                if(data&&data.captcha) {
                    $('#'+unitTag).wpcf7RefillCaptcha(data.captcha);
                }
                if(data&&data.quiz) {
                    $('#'+unitTag).wpcf7RefillQuiz(data.quiz);
                }
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7RefillCaptcha=function(captcha) {
        return this.each(function() {
            var form=$(this);
            $.each(captcha, function(i, n) {
                form.find(':input[name="'+i+'"]').clearFields();
                form.find('img.wpcf7-captcha-'+i).attr('src', n);
                var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value', match[1]);
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7RefillQuiz=function(quiz) {
        return this.each(function() {
            var form=$(this);
            $.each(quiz, function(i, n) {
                form.find(':input[name="'+i+'"]').clearFields();
                form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value', n[1]);
            }
            );
        }
        );
    }
    ;
    $.fn.wpcf7ClearResponseOutput=function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('.ajax-loader').removeClass('is-active');
        }
        );
    }
    ;
    $.fn.wpcf7Recaptcha=function() {
        return this.each(function() {
            var events='wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
            $(this).closest('div.wpcf7').on(events, function(e) {
                if(recaptchaWidgets&&grecaptcha) {
                    $.each(recaptchaWidgets, function(index, value) {
                        grecaptcha.reset(value);
                    }
                    );
                }
            }
            );
        }
        );
    }
    ;
    $.wpcf7UpdateScreenReaderResponse=function($form,
    data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if(data.message) {
            var $response=$form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if(data.invalids) {
                var $invalids=$('<ul></ul>');
                $.each(data.invalids, function(i, n) {
                    if(n.idref) {
                        var $li=$('<li></li>').append($('<a></a>').attr('href', '#'+n.idref).append(n.message));
                    }
                    else {
                        var $li=$('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                }
                );
                $response.append($invalids);
            }
            $response.attr('role',
            'alert').focus();
        }
    }
    ;
    $.wpcf7SupportHtml5=function() {
        var features= {};
        var input=document.createElement('input');
        features.placeholder='placeholder'in input;
        var inputTypes=['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value]=input.type!=='text';
        }
        );
        return features;
    }
    ;
    $(function() {
        _wpcf7.supportHtml5=$.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    }
    );
}
)(jQuery);
/*!
 * WooCommerce Add to Cart JS
 */

jQuery(function(a) {
    return"undefined"!=typeof wc_add_to_cart_params&&void a(document).on("click", ".add_to_cart_button", function() {
        var b=a(this);
        if(b.is(".ajax_add_to_cart")) {
            if(!b.attr("data-product_id"))return!0;
            b.removeClass("added"), b.addClass("loading");
            var c= {};
            return a.each(b.data(), function(a, b) {
                c[a]=b
            }
            ),
            a(document.body).trigger("adding_to_cart",
            [b,
            c]),
            a.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%",
            "add_to_cart"),
            c,
            function(c) {
                if(c) {
                    var d=window.location.toString();
                    if(d=d.replace("add-to-cart", "added-to-cart"), c.error&&c.product_url)return void(window.location=c.product_url);
                    if("yes"===wc_add_to_cart_params.cart_redirect_after_add)return void(window.location=wc_add_to_cart_params.cart_url);
                    b.removeClass("loading");
                    var e=c.fragments, f=c.cart_hash;
                    e&&a.each(e, function(b) {
                        a(b).addClass("updating")
                    }
                    ),
                    a(".shop_table.cart, .updating, .cart_totals").fadeTo("400",
                    "0.6").block( {
                        message:null, overlayCSS: {
                            opacity: .6
                        }
                    }
                    ),
                    b.addClass("added"),
                    wc_add_to_cart_params.is_cart||0!==b.parent().find(".added_to_cart").length||b.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),
                    e&&a.each(e,
                    function(b,
                    c) {
                        a(b).replaceWith(c)
                    }
                    ),
                    a(".widget_shopping_cart, .updating").stop(!0).css("opacity",
                    "1").unblock(),
                    a(".shop_table.cart").load(d+" .shop_table.cart:eq(0) > *",
                    function() {
                        a(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), a(document.body).trigger("cart_page_refreshed")
                    }
                    ),
                    a(".cart_totals").load(d+" .cart_totals:eq(0) > *",
                    function() {
                        a(".cart_totals").stop(!0).css("opacity", "1").unblock()
                    }
                    ),
                    a(document.body).trigger("added_to_cart",
                    [e,
                    f,
                    b])
                }
            }
            ),
            !1
        }
        return!0
    }
    )
}
);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

!function() {
    "use strict";
    function a(a) {
        function b(b, d) {
            var f, p, q=b==window, r=d&&void 0!==d.message?d.message: void 0;
            if(d=a.extend( {}, a.blockUI.defaults, d|| {}), !d.ignoreIfBlocked||!a(b).data("blockUI.isBlocked")) {
                if(d.overlayCSS=a.extend( {}, a.blockUI.defaults.overlayCSS, d.overlayCSS|| {}), f=a.extend( {}, a.blockUI.defaults.css, d.css|| {}), d.onOverlayClick&&(d.overlayCSS.cursor="pointer"), p=a.extend( {}, a.blockUI.defaults.themedCSS, d.themedCSS|| {}), r=void 0===r?d.message:r, q&&n&&c(window, {
                    fadeOut: 0
                }
                ),
                r&&"string"!=typeof r&&(r.parentNode||r.jquery)) {
                    var s=r.jquery?r[0]:r, t= {};
                    a(b).data("blockUI.history", t), t.el=s, t.parent=s.parentNode, t.display=s.style.display, t.position=s.style.position, t.parent&&t.parent.removeChild(s)
                }
                a(b).data("blockUI.onUnblock",
                d.onUnblock);
                var u,
                v,
                w,
                x,
                y=d.baseZ;
                u=a(k||d.forceIframe?'<iframe class="blockUI" style="z-index:'+y++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+d.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),
                v=a(d.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+y++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+y++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),
                d.theme&&q?(x='<div class="blockUI '+d.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(y+10)+';display:none;position:fixed">',
                d.title&&(x+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(d.title||"&nbsp;")+"</div>"),
                x+='<div class="ui-widget-content ui-dialog-content"></div>',
                x+="</div>"):d.theme?(x='<div class="blockUI '+d.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(y+10)+';display:none;position:absolute">',
                d.title&&(x+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(d.title||"&nbsp;")+"</div>"),
                x+='<div class="ui-widget-content ui-dialog-content"></div>',
                x+="</div>"):x=q?'<div class="blockUI '+d.blockMsgClass+' blockPage" style="z-index:'+(y+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+d.blockMsgClass+' blockElement" style="z-index:'+(y+10)+';display:none;position:absolute"></div>',
                w=a(x),
                r&&(d.theme?(w.css(p),
                w.addClass("ui-widget-content")):w.css(f)),
                d.theme||v.css(d.overlayCSS),
                v.css("position",
                q?"fixed":"absolute"),
                (k||d.forceIframe)&&u.css("opacity",
                0);
                var z=[u,
                v,
                w],
                A=a(q?"body":b);
                a.each(z,
                function() {
                    this.appendTo(A)
                }
                ),
                d.theme&&d.draggable&&a.fn.draggable&&w.draggable( {
                    handle: ".ui-dialog-titlebar", cancel: "li"
                }
                );
                var B=m&&(!a.support.boxModel||a("object,embed",
                q?null:b).length>0);
                if(l||B) {
                    if(q&&d.allowBodyStretch&&a.support.boxModel&&a("html,body").css("height", "100%"), (l||!a.support.boxModel)&&!q)var C=i(b, "borderTopWidth"), D=i(b, "borderLeftWidth"), E=C?"(0 - "+C+")": 0, F=D?"(0 - "+D+")": 0;
                    a.each(z, function(a, b) {
                        var c=b[0].style;
                        if(c.position="absolute", a<2)q?c.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+d.quirksmodeOffsetHack+') + "px"'): c.setExpression("height", 'this.parentNode.offsetHeight + "px"'), q?c.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'): c.setExpression("width", 'this.parentNode.offsetWidth + "px"'), F&&c.setExpression("left", F), E&&c.setExpression("top", E);
                        else if(d.centerY)q&&c.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), c.marginTop=0;
                        else if(!d.centerY&&q) {
                            var e=d.css&&d.css.top?parseInt(d.css.top, 10): 0, f="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+e+') + "px"';
                            c.setExpression("top", f)
                        }
                    }
                    )
                }
                if(r&&(d.theme?w.find(".ui-widget-content").append(r):w.append(r),
                (r.jquery||r.nodeType)&&a(r).show()),
                (k||d.forceIframe)&&d.showOverlay&&u.show(),
                d.fadeIn) {
                    var G=d.onBlock?d.onBlock: j, H=d.showOverlay&&!r?G: j, I=r?G: j;
                    d.showOverlay&&v._fadeIn(d.fadeIn, H), r&&w._fadeIn(d.fadeIn, I)
                }
                else d.showOverlay&&v.show(),
                r&&w.show(),
                d.onBlock&&d.onBlock.bind(w)();
                if(e(1,
                b,
                d),
                q?(n=w[0],
                o=a(d.focusableElements,
                n),
                d.focusInput&&setTimeout(g,
                20)):h(w[0],
                d.centerX,
                d.centerY),
                d.timeout) {
                    var J=setTimeout(function() {
                        q?a.unblockUI(d): a(b).unblock(d)
                    }
                    ,
                    d.timeout);
                    a(b).data("blockUI.timeout",
                    J)
                }
            }
        }
        function c(b,
        c) {
            var f, g=b==window, h=a(b), i=h.data("blockUI.history"), j=h.data("blockUI.timeout");
            j&&(clearTimeout(j), h.removeData("blockUI.timeout")), c=a.extend( {}, a.blockUI.defaults, c|| {}), e(0, b, c), null===c.onUnblock&&(c.onUnblock=h.data("blockUI.onUnblock"), h.removeData("blockUI.onUnblock"));
            var k;
            k=g?a(document.body).children().filter(".blockUI").add("body > .blockUI"): h.find(">.blockUI"), c.cursorReset&&(k.length>1&&(k[1].style.cursor=c.cursorReset), k.length>2&&(k[2].style.cursor=c.cursorReset)), g&&(n=o=null), c.fadeOut?(f=k.length, k.stop().fadeOut(c.fadeOut, function() {
                0===--f&&d(k, i, c, b)
            }
            )):d(k,
            i,
            c,
            b)
        }
        function d(b,
        c,
        d,
        e) {
            var f=a(e);
            if(!f.data("blockUI.isBlocked")) {
                b.each(function(a, b) {
                    this.parentNode&&this.parentNode.removeChild(this)
                }
                ),
                c&&c.el&&(c.el.style.display=c.display,
                c.el.style.position=c.position,
                c.el.style.cursor="default",
                c.parent&&c.parent.appendChild(c.el),
                f.removeData("blockUI.history")),
                f.data("blockUI.static")&&f.css("position",
                "static"),
                "function"==typeof d.onUnblock&&d.onUnblock(e,
                d);
                var g=a(document.body),
                h=g.width(),
                i=g[0].style.width;
                g.width(h-1).width(h),
                g[0].style.width=i
            }
        }
        function e(b,
        c,
        d) {
            var e=c==window, g=a(c);
            if((b||(!e||n)&&(e||g.data("blockUI.isBlocked")))&&(g.data("blockUI.isBlocked", b), e&&d.bindEvents&&(!b||d.showOverlay))) {
                var h="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                b?a(document).bind(h, d, f): a(document).unbind(h, f)
            }
        }
        function f(b) {
            if("keydown"===b.type&&b.keyCode&&9==b.keyCode&&n&&b.data.constrainTabKey) {
                var c=o, d=!b.shiftKey&&b.target===c[c.length-1], e=b.shiftKey&&b.target===c[0];
                if(d||e)return setTimeout(function() {
                    g(e)
                }
                ,
                10),
                !1
            }
            var f=b.data,
            h=a(b.target);
            return h.hasClass("blockOverlay")&&f.onOverlayClick&&f.onOverlayClick(b),
            h.parents("div."+f.blockMsgClass).length>0||0===h.parents().children().filter("div.blockUI").length
        }
        function g(a) {
            if(o) {
                var b=o[a===!0?o.length-1: 0];
                b&&b.focus()
            }
        }
        function h(a,
        b,
        c) {
            var d=a.parentNode, e=a.style, f=(d.offsetWidth-a.offsetWidth)/2-i(d, "borderLeftWidth"), g=(d.offsetHeight-a.offsetHeight)/2-i(d, "borderTopWidth");
            b&&(e.left=f>0?f+"px": "0"), c&&(e.top=g>0?g+"px": "0")
        }
        function i(b,
        c) {
            return parseInt(a.css(b, c), 10)||0
        }
        a.fn._fadeIn=a.fn.fadeIn;
        var j=a.noop||function() {},
        k=/MSIE/.test(navigator.userAgent),
        l=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),
        m=(document.documentMode||0,
        a.isFunction(document.createElement("div").style.setExpression));
        a.blockUI=function(a) {
            b(window, a)
        }
        ,
        a.unblockUI=function(a) {
            c(window, a)
        }
        ,
        a.growlUI=function(b,
        c,
        d,
        e) {
            var f=a('<div class="growlUI"></div>');
            b&&f.append("<h1>"+b+"</h1>"), c&&f.append("<h2>"+c+"</h2>"), void 0===d&&(d=3e3);
            var g=function(b) {
                b=b|| {}, a.blockUI( {
                    message: f, fadeIn: "undefined"!=typeof b.fadeIn?b.fadeIn: 700, fadeOut: "undefined"!=typeof b.fadeOut?b.fadeOut: 1e3, timeout: "undefined"!=typeof b.timeout?b.timeout: d, centerY: !1, showOverlay: !1, onUnblock: e, css: a.blockUI.defaults.growlCSS
                }
                )
            }
            ;
            g();
            f.css("opacity");
            f.mouseover(function() {
                g( {
                    fadeIn: 0, timeout: 3e4
                }
                );
                var b=a(".blockMsg");
                b.stop(),
                b.fadeTo(300,
                1)
            }
            ).mouseout(function() {
                a(".blockMsg").fadeOut(1e3)
            }
            )
        }
        ,
        a.fn.block=function(c) {
            if(this[0]===window)return a.blockUI(c), this;
            var d=a.extend( {}, a.blockUI.defaults, c|| {});
            return this.each(function() {
                var b=a(this);
                d.ignoreIfBlocked&&b.data("blockUI.isBlocked")||b.unblock( {
                    fadeOut: 0
                }
                )
            }
            ),
            this.each(function() {
                "static"==a.css(this, "position")&&(this.style.position="relative", a(this).data("blockUI.static", !0)), this.style.zoom=1, b(this, c)
            }
            )
        }
        ,
        a.fn.unblock=function(b) {
            return this[0]===window?(a.unblockUI(b), this): this.each(function() {
                c(this, b)
            }
            )
        }
        ,
        a.blockUI.version=2.7,
        a.blockUI.defaults= {
            message:"<h1>Please wait...</h1>", title:null, draggable:!0, theme:!1, css: {
                padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait"
            }
            ,
            themedCSS: {
                width: "30%", top: "40%", left: "35%"
            }
            ,
            overlayCSS: {
                backgroundColor: "#000", opacity: .6, cursor: "wait"
            }
            ,
            cursorReset:"default",
            growlCSS: {
                width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px"
            }
            ,
            iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",
            forceIframe:!1,
            baseZ:1e3,
            centerX:!0,
            centerY:!0,
            allowBodyStretch:!0,
            bindEvents:!0,
            constrainTabKey:!0,
            fadeIn:200,
            fadeOut:400,
            timeout:0,
            showOverlay:!0,
            focusInput:!0,
            focusableElements:":input:enabled:visible",
            onBlock:null,
            onUnblock:null,
            onOverlayClick:null,
            quirksmodeOffsetHack:4,
            blockMsgClass:"blockMsg",
            ignoreIfBlocked:!1
        }
        ;
        var n=null,
        o=[]
    }
    "function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],
    a):a(jQuery)
}
();
jQuery(function(a) {
    a(".woocommerce-ordering").on("change", "select.orderby", function() {
        a(this).closest("form").submit()
    }
    ),
    a("input.qty:not(.product-quantity input.qty)").each(function() {
        var b=parseFloat(a(this).attr("min"));
        b>=0&&parseFloat(a(this).val())<b&&a(this).val(b)
    }
    )
}
);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

!function(a) {
    "function"==typeof define&&define.amd?define(["jquery"], a): a("object"==typeof exports?require("jquery"): jQuery)
}
(function(a) {
    function b(a) {
        return h.raw?a: encodeURIComponent(a)
    }
    function c(a) {
        return h.raw?a: decodeURIComponent(a)
    }
    function d(a) {
        return b(h.json?JSON.stringify(a): String(a))
    }
    function e(a) {
        0===a.indexOf('"')&&(a=a.slice(1, -1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(a){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;n<o;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)&&(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
 jQuery(function(a) {
            function b() {
                e&&sessionStorage.setItem("wc_cart_created", (new Date).getTime())
            }
            function c(a) {
                e&&(localStorage.setItem(f, a), sessionStorage.setItem(f, a))
            }
            function d() {
                a.ajax(g)
            }
            if("undefined"==typeof wc_cart_fragments_params)return!1;
            var e,
            f=wc_cart_fragments_params.ajax_url.toString()+"-wc_cart_hash";
            try {
                e="sessionStorage"in window&&null!==window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
            }
            catch(a) {
                e=!1
            }
            var g= {
                url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"), type: "POST", success: function(d) {
                    d&&d.fragments&&(a.each(d.fragments, function(b, c) {
                        a(b).replaceWith(c)
                    }
                    ),
                    e&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,
                    JSON.stringify(d.fragments)),
                    c(d.cart_hash),
                    d.cart_hash&&b()),
                    a(document.body).trigger("wc_fragments_refreshed"))
                }
            }
            ;
            if(e) {
                var h=null, i=864e5;
                a(document.body).bind("wc_fragment_refresh updated_wc_div", function() {
                    d()
                }
                ),
                a(document.body).bind("added_to_cart",
                function(a,
                d,
                e) {
                    var g=sessionStorage.getItem(f);
                    null!==g&&void 0!==g&&""!==g||b(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(d)), c(e)
                }
                ),
                a(document.body).bind("wc_fragments_refreshed",
                function() {
                    clearTimeout(h), h=setTimeout(d, i)
                }
                ),
                a(window).on("storage onstorage",
                function(a) {
                    f===a.originalEvent.key&&localStorage.getItem(f)!==sessionStorage.getItem(f)&&d()
                }
                );
                try {
                    var j=a.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)), k=sessionStorage.getItem(f), l=a.cookie("woocommerce_cart_hash"), m=sessionStorage.getItem("wc_cart_created");
                    if(null!==k&&void 0!==k&&""!==k||(k=""), null!==l&&void 0!==l&&""!==l||(l=""), k&&(null===m||void 0===m||""===m))throw"No cart_created";
                    if(m) {
                        var n=1*m+i, o=(new Date).getTime();
                        if(n<o)throw"Fragment expired";
                        h=setTimeout(d, n-o)
                    }
                    if(!j||!j["div.widget_shopping_cart_content"]||k!==l)throw"No fragment";
                    a.each(j,
                    function(b,
                    c) {
                        a(b).replaceWith(c)
                    }
                    ),
                    a(document.body).trigger("wc_fragments_loaded")
                }
                catch(a) {
                    d()
                }
            }
            else d();
            a.cookie("woocommerce_items_in_cart")>0?a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),
            a(document.body).bind("adding_to_cart",
            function() {
                a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
            }
            )
        }
        );
        ;
        window.Modernizr=function(a,
        b,
        c) {
            function D(a) {
                j.cssText=a
            }
            function E(a,
            b) {
                return D(n.join(a+";")+(b||""))
            }
            function F(a,
            b) {
                return typeof a===b
            }
            function G(a,
            b) {
                return!!~(""+a).indexOf(b)
            }
            function H(a,
            b) {
                for(var d in a) {
                    var e=a[d];
                    if(!G(e, "-")&&j[e]!==c)return b=="pfx"?e: !0
                }
                return!1
            }
            function I(a,
            b,
            d) {
                for(var e in a) {
                    var f=b[a[e]];
                    if(f!==c)return d===!1?a[e]: F(f, "function")?f.bind(d||b): f
                }
                return!1
            }
            function J(a,
            b,
            c) {
                var d=a.charAt(0).toUpperCase()+a.slice(1), e=(a+" "+p.join(d+" ")+d).split(" ");
                return F(b, "string")||F(b, "undefined")?H(e, b): (e=(a+" "+q.join(d+" ")+d).split(" "), I(e, b, c))
            }
            function K() {
                e.input=function(c) {
                    for(var d=0, e=c.length;
                    d<e;
                    d++)u[c[d]]=c[d]in k;
                    return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement), u
                }
                ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
                e.inputtypes=function(a) {
                    for(var d=0, e, f, h, i=a.length;
                    d<i;
                    d++)k.setAttribute("type", f=a[d]), e=k.type!=="text", e&&(k.value=l, k.style.cssText="position:absolute;visibility:hidden;", /^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k), h=b.defaultView, e=h.getComputedStyle&&h.getComputedStyle(k, null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0, g.removeChild(k)): /^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1: e=k.value!=l)), t[a[d]]=!!e;
                    return t
                }
                ("search tel url email datetime date month week time datetime-local number range color".split(" "))
            }
            var d="2.8.3",
            e= {},
            f=!0,
            g=b.documentElement,
            h="modernizr",
            i=b.createElement(h),
            j=i.style,
            k=b.createElement("input"),
            l=":)",
            m= {}.toString,
            n=" -webkit- -moz- -o- -ms- ".split(" "),
            o="Webkit Moz O ms",
            p=o.split(" "),
            q=o.toLowerCase().split(" "),
            r= {
                svg: "http://www.w3.org/2000/svg"
            }
            ,
            s= {},
            t= {},
            u= {},
            v=[],
            w=v.slice,
            x,
            y=function(a,
            c,
            d,
            e) {
                var f, i, j, k, l=b.createElement("div"), m=b.body, n=m||b.createElement("body");
                if(parseInt(d, 10))while(d--)j=b.createElement("div"), j.id=e?e[d]: h+(d+1), l.appendChild(j);
                return f=["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id=h, (m?l: n).innerHTML+=f, n.appendChild(l), m||(n.style.background="", n.style.overflow="hidden", k=g.style.overflow, g.style.overflow="hidden", g.appendChild(n)), i=c(l, a), m?l.parentNode.removeChild(l): (n.parentNode.removeChild(n), g.style.overflow=k), !!i
            }
            ,
            z=function(b) {
                var c=a.matchMedia||a.msMatchMedia;
                if(c)return c(b)&&c(b).matches||!1;
                var d;
                return y("@media "+b+" { #"+h+" { position: absolute; } }", function(b) {
                    d=(a.getComputedStyle?getComputedStyle(b, null): b.currentStyle)["position"]=="absolute"
                }
                ),
                d
            }
            ,
            A=function() {
                function d(d, e) {
                    e=e||b.createElement(a[d]||"div"), d="on"+d;
                    var f=d in e;
                    return f||(e.setAttribute||(e=b.createElement("div")), e.setAttribute&&e.removeAttribute&&(e.setAttribute(d, ""), f=F(e[d], "function"), F(e[d], "undefined")||(e[d]=c), e.removeAttribute(d))), e=null, f
                }
                var a= {
                    select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img"
                }
                ;
                return d
            }
            (),
            B= {}.hasOwnProperty,
            C;
            !F(B,
            "undefined")&&!F(B.call,
            "undefined")?C=function(a,
            b) {
                return B.call(a, b)
            }
            :C=function(a,
            b) {
                return b in a&&F(a.constructor.prototype[b], "undefined")
            }
            ,
            Function.prototype.bind||(Function.prototype.bind=function(b) {
                var c=this;
                if(typeof c!="function")throw new TypeError;
                var d=w.call(arguments, 1), e=function() {
                    if(this instanceof e) {
                        var a=function() {};
                        a.prototype=c.prototype;
                        var f=new a, g=c.apply(f, d.concat(w.call(arguments)));
                        return Object(g)===g?g: f
                    }
                    return c.apply(b,
                    d.concat(w.call(arguments)))
                }
                ;
                return e
            }
            ),
            s.flexbox=function() {
                return J("flexWrap")
            }
            ,
            s.webgl=function() {
                return!!a.WebGLRenderingContext
            }
            ,
            s.touch=function() {
                var c;
                return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0: y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                    c=a.offsetTop===9
                }
                ),
                c
            }
            ,
            s.geolocation=function() {
                return"geolocation"in navigator
            }
            ,
            s.hashchange=function() {
                return A("hashchange", a)&&(b.documentMode===c||b.documentMode>7)
            }
            ,
            s.history=function() {
                return!!a.history&&!!history.pushState
            }
            ,
            s.websockets=function() {
                return"WebSocket"in a||"MozWebSocket"in a
            }
            ,
            s.rgba=function() {
                return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
            }
            ,
            s.hsla=function() {
                return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba")||G(j.backgroundColor, "hsla")
            }
            ,
            s.multiplebgs=function() {
                return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?) {
                    3
                }
                /.test(j.background)
            }
            ,
            s.backgroundsize=function() {
                return J("backgroundSize")
            }
            ,
            s.borderimage=function() {
                return J("borderImage")
            }
            ,
            s.textshadow=function() {
                return b.createElement("div").style.textShadow===""
            }
            ,
            s.opacity=function() {
                return E("opacity:.55"), /^0.55$/.test(j.opacity)
            }
            ,
            s.cssanimations=function() {
                return J("animationName")
            }
            ,
            s.csscolumns=function() {
                return J("columnCount")
            }
            ,
            s.cssgradients=function() {
                var a="background-image:", b="gradient(linear,left top,right bottom,from(#9f9),to(white));", c="linear-gradient(left top,#9f9, white);";
                return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
            }
            ,
            s.cssreflections=function() {
                return J("boxReflect")
            }
            ,
            s.csstransforms=function() {
                return!!J("transform")
            }
            ,
            s.csstransforms3d=function() {
                var a=!!J("perspective");
                return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                    a=b.offsetLeft===9&&b.offsetHeight===3
                }
                ),
                a
            }
            ,
            s.csstransitions=function() {
                return J("transition")
            }
            ,
            s.fontface=function() {
                var a;
                return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                    var e=b.getElementById("smodernizr"), f=e.sheet||e.styleSheet, g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText: f.cssText||"": "";
                    a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0
                }
                ),
                a
            }
            ,
            s.generatedcontent=function() {
                var a;
                return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                    a=b.offsetHeight>=3
                }
                ),
                a
            }
            ,
            s.video=function() {
                var a=b.createElement("video"), c=!1;
                try {
                    if(c=!!a.canPlayType)c=new Boolean(c), c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
                }
                catch(d) {}return c
            }
            ,
            s.audio=function() {
                var a=b.createElement("audio"), c=!1;
                try {
                    if(c=!!a.canPlayType)c=new Boolean(c), c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/, "")
                }
                catch(d) {}return c
            }
            ,
            s.localstorage=function() {
                try {
                    return localStorage.setItem(h, h), localStorage.removeItem(h), !0
                }
                catch(a) {
                    return!1
                }
            }
            ,
            s.applicationcache=function() {
                return!!a.applicationCache
            }
            ,
            s.svg=function() {
                return!!b.createElementNS&&!!b.createElementNS(r.svg, "svg").createSVGRect
            }
            ,
            s.svgclippaths=function() {
                return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
            }
            ;
            for(var L in s)C(s,
            L)&&(x=L.toLowerCase(),
            e[x]=s[L](),
            v.push((e[x]?"":"no-")+x));
            return e.input||K(),
            e.addTest=function(a,
            b) {
                if(typeof a=="object")for(var d in a)C(a, d)&&e.addTest(d, a[d]);
                else {
                    a=a.toLowerCase();
                    if(e[a]!==c)return e;
                    b=typeof b=="function"?b(): b, typeof f!="undefined"&&f&&(g.className+=" "+(b?"": "no-")+a), e[a]=b
                }
                return e
            }
            ,
            D(""),
            i=k=null,
            function(a,
            b) {
                function l(a, b) {
                    var c=a.createElement("p"), d=a.getElementsByTagName("head")[0]||a.documentElement;
                    return c.innerHTML="x<style>"+b+"</style>", d.insertBefore(c.lastChild, d.firstChild)
                }
                function m() {
                    var a=s.elements;
                    return typeof a=="string"?a.split(" "): a
                }
                function n(a) {
                    var b=j[a[h]];
                    return b||(b= {}, i++, a[h]=i, j[i]=b), b
                }
                function o(a,
                c,
                d) {
                    c||(c=b);
                    if(k)return c.createElement(a);
                    d||(d=n(c));
                    var g;
                    return d.cache[a]?g=d.cache[a].cloneNode(): f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode(): g=d.createElem(a), g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g): g
                }
                function p(a,
                c) {
                    a||(a=b);
                    if(k)return a.createDocumentFragment();
                    c=c||n(a);
                    var d=c.frag.cloneNode(), e=0, f=m(), g=f.length;
                    for(;
                    e<g;
                    e++)d.createElement(f[e]);
                    return d
                }
                function q(a,
                b) {
                    b.cache||(b.cache= {}, b.createElem=a.createElement, b.createFrag=a.createDocumentFragment, b.frag=b.createFrag()), a.createElement=function(c) {
                        return s.shivMethods?o(c, a, b): b.createElem(c)
                    }
                    ,
                    a.createDocumentFragment=Function("h,f",
                    "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,
                    function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("'+a+'")'
                    }
                    )+");return n}")(s,
                    b.frag)
                }
                function r(a) {
                    a||(a=b);
                    var c=n(a);
                    return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k||q(a, c), a
                }
                var c="3.7.0",
                d=a.html5|| {},
                e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                g,
                h="_html5shiv",
                i=0,
                j= {},
                k;
                (function() {
                    try {
                        var a=b.createElement("a");
                        a.innerHTML="<xyz></xyz>", g="hidden"in a, k=a.childNodes.length==1||function() {
                            b.createElement("a");
                            var a=b.createDocumentFragment();
                            return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"
                        }
                        ()
                    }
                    catch(c) {
                        g=!0, k=!0
                    }
                }
                )();
                var s= {
                    elements: d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS!==!1, supportsUnknownElements: k, shivMethods: d.shivMethods!==!1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p
                }
                ;
                a.html5=s,
                r(b)
            }
            (this,
            b),
            e._version=d,
            e._prefixes=n,
            e._domPrefixes=q,
            e._cssomPrefixes=p,
            e.mq=z,
            e.hasEvent=A,
            e.testProp=function(a) {
                return H([a])
            }
            ,
            e.testAllProps=J,
            e.testStyles=y,
            e.prefixed=function(a,
            b,
            c) {
                return b?J(a, b, c): J(a, "pfx")
            }
            ,
            g.className=g.className.replace(/(^|\s)no-js(\s|$)/,
            "$1$2")+(f?" js "+v.join(" "):""),
            e
        }
        (this,
        this.document),
        function(a,
        b,
        c) {
            function d(a) {
                return"[object Function]"==o.call(a)
            }
            function e(a) {
                return"string"==typeof a
            }
            function f() {}function g(a) {
                return!a||"loaded"==a||"complete"==a||"uninitialized"==a
            }
            function h() {
                var a=p.shift();
                q=1, a?a.t?m(function() {
                    ("c"==a.t?B.injectCss: B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
                }
                ,
                0):(a(),
                h()):q=0
            }
            function i(a,
            c,
            d,
            e,
            f,
            i,
            j) {
                function k(b) {
                    if(!o&&g(l.readyState)&&(u.r=o=1, !q&&h(), l.onload=l.onreadystatechange=null, b)) {
                        "img"!=a&&m(function() {
                            t.removeChild(l)
                        }
                        ,
                        50);
                        for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()
                    }
                }
                var j=j||B.errorTimeout,
                l=b.createElement(a),
                o=0,
                r=0,
                u= {
                    t: d, s: c, e: f, a: i, x: j
                }
                ;
                1===y[c]&&(r=1,
                y[c]=[]),
                "object"==a?l.data=c:(l.src=c,
                l.type=a),
                l.width=l.height="0",
                l.onerror=l.onload=l.onreadystatechange=function() {
                    k.call(this, r)
                }
                ,
                p.splice(e,
                0,
                u),
                "img"!=a&&(r||2===y[c]?(t.insertBefore(l,
                s?null:n),
                m(k,
                j)):y[c].push(l))
            }
            function j(a,
            b,
            c,
            d,
            f) {
                return q=0, b=b||"j", e(a)?i("c"==b?v: u, a, b, this.i++, c, d, f): (p.splice(this.i++, 0, a), 1==p.length&&h()), this
            }
            function k() {
                var a=B;
                return a.loader= {
                    load: j, i: 0
                }
                ,
                a
            }
            var l=b.documentElement,
            m=a.setTimeout,
            n=b.getElementsByTagName("script")[0],
            o= {}.toString,
            p=[],
            q=0,
            r="MozAppearance"in l.style,
            s=r&&!!b.createRange().compareNode,
            t=s?l:n.parentNode,
            l=a.opera&&"[object Opera]"==o.call(a.opera),
            l=!!b.attachEvent&&!l,
            u=r?"object":l?"script":"img",
            v=l?"script":u,
            w=Array.isArray||function(a) {
                return"[object Array]"==o.call(a)
            }
            ,
            x=[],
            y= {},
            z= {
                timeout: function(a, b) {
                    return b.length&&(a.timeout=b[0]), a
                }
            }
            ,
            A,
            B;
            B=function(a) {
                function b(a) {
                    var a=a.split("!"), b=x.length, c=a.pop(), d=a.length, c= {
                        url: c, origUrl: c, prefixes: a
                    }
                    ,
                    e,
                    f,
                    g;
                    for(f=0;
                    f<d;
                    f++)g=a[f].split("="),
                    (e=z[g.shift()])&&(c=e(c,
                    g));
                    for(f=0;
                    f<b;
                    f++)c=x[f](c);
                    return c
                }
                function g(a,
                e,
                f,
                g,
                h) {
                    var i=b(a), j=i.autoCallback;
                    i.url.split(".").pop().split("?").shift(), i.bypass||(e&&(e=d(e)?e: e[a]||e[g]||e[a.split("/").pop().split("?")[0]]), i.instead?i.instead(a, e, f, g, h): (y[i.url]?i.noexec=!0: y[i.url]=1, f.load(i.url, i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c": c, i.noexec, i.attrs, i.timeout), (d(e)||d(j))&&f.load(function() {
                        k(), e&&e(i.origUrl, h, g), j&&j(i.origUrl, h, g), y[i.url]=2
                    }
                    )))
                }
                function h(a,
                b) {
                    function c(a, c) {
                        if(a) {
                            if(e(a))c||(j=function() {
                                var a=[].slice.call(arguments);
                                k.apply(this, a), l()
                            }
                            ),
                            g(a,
                            j,
                            b,
                            0,
                            h);
                            else if(Object(a)===a)for(n in m=function() {
                                var b=0, c;
                                for(c in a)a.hasOwnProperty(c)&&b++;
                                return b
                            }
                            (),
                            a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function() {
                                var a=[].slice.call(arguments);
                                k.apply(this, a), l()
                            }
                            :j[n]=function(a) {
                                return function() {
                                    var b=[].slice.call(arguments);
                                    a&&a.apply(this, b), l()
                                }
                            }
                            (k[n])),
                            g(a[n],
                            j,
                            b,
                            n,
                            h))
                        }
                        else!c&&l()
                    }
                    var h=!!a.test,
                    i=a.load||a.both,
                    j=a.callback||f,
                    k=j,
                    l=a.complete||f,
                    m,
                    n;
                    c(h?a.yep:a.nope,
                    !!i),
                    i&&c(i)
                }
                var i,
                j,
                l=this.yepnope.loader;
                if(e(a))g(a,
                0,
                l,
                0);
                else if(w(a))for(i=0;
                i<a.length;
                i++)j=a[i],
                e(j)?g(j,
                0,
                l,
                0):w(j)?B(j):Object(j)===j&&h(j,
                l);
                else Object(a)===a&&h(a,
                l)
            }
            ,
            B.addPrefix=function(a,
            b) {
                z[a]=b
            }
            ,
            B.addFilter=function(a) {
                x.push(a)
            }
            ,
            B.errorTimeout=1e4,
            null==b.readyState&&b.addEventListener&&(b.readyState="loading",
            b.addEventListener("DOMContentLoaded",
            A=function() {
                b.removeEventListener("DOMContentLoaded", A, 0), b.readyState="complete"
            }
            ,
            0)),
            a.yepnope=k(),
            a.yepnope.executeStack=h,
            a.yepnope.injectJs=function(a,
            c,
            d,
            e,
            i,
            j) {
                var k=b.createElement("script"), l, o, e=e||B.errorTimeout;
                k.src=a;
                for(o in d)k.setAttribute(o, d[o]);
                c=j?h: c||f, k.onreadystatechange=k.onload=function() {
                    !l&&g(k.readyState)&&(l=1, c(), k.onload=k.onreadystatechange=null)
                }
                ,
                m(function() {
                    l||(l=1, c(1))
                }
                ,
                e),
                i?k.onload():n.parentNode.insertBefore(k,
                n)
            }
            ,
            a.yepnope.injectCss=function(a,
            c,
            d,
            e,
            g,
            i) {
                var e=b.createElement("link"), j, c=i?h: c||f;
                e.href=a, e.rel="stylesheet", e.type="text/css";
                for(j in d)e.setAttribute(j, d[j]);
                g||(n.parentNode.insertBefore(e, n), m(c, 0))
            }
        }
        (this,
        document),
        Modernizr.load=function() {
            yepnope.apply(window, [].slice.call(arguments, 0))
        }
        ,
        Modernizr.addTest("mediaqueries",
        Modernizr.mq("only all")),
        Modernizr.addTest("regions",
        function() {
            var a=Modernizr.prefixed("flowFrom"), b=Modernizr.prefixed("flowInto");
            if(!a||!b)return!1;
            var c=document.createElement("div"), d=document.createElement("div"), e=document.createElement("div"), f="modernizr_flow_for_regions_check";
            d.innerText="M", c.style.cssText="top: 150px; left: 150px; padding: 0px;", e.style.cssText="width: 50px; height: 50px; padding: 42px;", e.style[a]=f, c.appendChild(d), c.appendChild(e), document.documentElement.appendChild(c);
            var g, h, i=d.getBoundingClientRect();
            return d.style[b]=f, g=d.getBoundingClientRect(), h=g.left-i.left, document.documentElement.removeChild(c), d=e=c=undefined, h==42
        }
        ),
        Modernizr.addTest("supports",
        "CSSSupportsRule"in window);
        /*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
        
        !function(a) {
            "function"==typeof define&&define.amd?define(["jquery"], a): a("object"==typeof exports?require("jquery"): window.jQuery||window.Zepto)
        }
        (function(a) {
            var b, c, d, e, f, g, h="Close", i="BeforeClose", j="AfterClose", k="BeforeAppend", l="MarkupParse", m="Open", n="Change", o="mfp", p="."+o, q="mfp-ready", r="mfp-removing", s="mfp-prevent-close", t=function() {}, u=!!window.jQuery, v=a(window), w=function(a, c) {
                b.ev.on(o+a+p, c)
            }
            ,
            x=function(b,
            c,
            d,
            e) {
                var f=document.createElement("div");
                return f.className="mfp-"+b, d&&(f.innerHTML=d), e?c&&c.appendChild(f): (f=a(f), c&&f.appendTo(c)), f
            }
            ,
            y=function(c,
            d) {
                b.ev.triggerHandler(o+c, d), b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1), b.st.callbacks[c]&&b.st.callbacks[c].apply(b, a.isArray(d)?d: [d]))
            }
            ,
            z=function(c) {
                return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g=c), b.currTemplate.closeBtn
            }
            ,
            A=function() {
                a.magnificPopup.instance||(b=new t, b.init(), a.magnificPopup.instance=b)
            }
            ,
            B=function() {
                var a=document.createElement("p").style, b=["ms", "O", "Moz", "Webkit"];
                if(void 0!==a.transition)return!0;
                for(;
                b.length;
                )if(b.pop()+"Transition"in a)return!0;
                return!1
            }
            ;
            t.prototype= {
                constructor: t, init: function() {
                    var c=navigator.appVersion;
                    b.isIE7=-1!==c.indexOf("MSIE 7."), b.isIE8=-1!==c.indexOf("MSIE 8."), b.isLowIE=b.isIE7||b.isIE8, b.isAndroid=/android/gi.test(c), b.isIOS=/iphone|ipad|ipod/gi.test(c), b.supportsTransition=B(), b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d=a(document), b.popupsCache= {}
                }
                ,
                open:function(c) {
                    var e;
                    if(c.isObj===!1) {
                        b.items=c.items.toArray(), b.index=0;
                        var g, h=c.items;
                        for(e=0;
                        e<h.length;
                        e++)if(g=h[e], g.parsed&&(g=g.el[0]), g===c.el[0]) {
                            b.index=e;
                            break
                        }
                    }
                    else b.items=a.isArray(c.items)?c.items:[c.items],
                    b.index=c.index||0;
                    if(b.isOpen)return void b.updateItemHTML();
                    b.types=[],
                    f="",
                    b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,
                    c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]= {}),
                    b.currTemplate=b.popupsCache[c.key]):b.currTemplate= {},
                    b.st=a.extend(!0,
                    {},
                    a.magnificPopup.defaults,
                    c),
                    b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,
                    b.st.modal&&(b.st.closeOnContentClick=!1,
                    b.st.closeOnBgClick=!1,
                    b.st.showCloseBtn=!1,
                    b.st.enableEscapeKey=!1),
                    b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,
                    function() {
                        b.close()
                    }
                    ),
                    b.wrap=x("wrap").attr("tabindex",
                    -1).on("click"+p,
                    function(a) {
                        b._checkIfClose(a.target)&&b.close()
                    }
                    ),
                    b.container=x("container",
                    b.wrap)),
                    b.contentContainer=x("content"),
                    b.st.preloader&&(b.preloader=x("preloader",
                    b.container,
                    b.st.tLoading));
                    var i=a.magnificPopup.modules;
                    for(e=0;
                    e<i.length;
                    e++) {
                        var j=i[e];
                        j=j.charAt(0).toUpperCase()+j.slice(1), b["init"+j].call(b)
                    }
                    y("BeforeOpen"),
                    b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,
                    function(a,
                    b,
                    c,
                    d) {
                        c.close_replaceWith=z(d.type)
                    }
                    ),
                    f+=" mfp-close-btn-in"):b.wrap.append(z())),
                    b.st.alignTop&&(f+=" mfp-align-top"),
                    b.wrap.css(b.fixedContentPos? {
                        overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY
                    }
                    : {
                        top: v.scrollTop(), position: "absolute"
                    }
                    ),
                    (b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css( {
                        height: d.height(), position: "absolute"
                    }
                    ),
                    b.st.enableEscapeKey&&d.on("keyup"+p,
                    function(a) {
                        27===a.keyCode&&b.close()
                    }
                    ),
                    v.on("resize"+p,
                    function() {
                        b.updateSize()
                    }
                    ),
                    b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),
                    f&&b.wrap.addClass(f);
                    var k=b.wH=v.height(),
                    n= {};
                    if(b.fixedContentPos&&b._hasScrollBar(k)) {
                        var o=b._getScrollbarSize();
                        o&&(n.marginRight=o)
                    }
                    b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow",
                    "hidden"):n.overflow="hidden");
                    var r=b.st.mainClass;
                    return b.isIE7&&(r+=" mfp-ie7"),
                    r&&b._addClassToMFP(r),
                    b.updateItemHTML(),
                    y("BuildControls"),
                    a("html").css(n),
                    b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),
                    b._lastFocusedEl=document.activeElement,
                    setTimeout(function() {
                        b.content?(b._addClassToMFP(q), b._setFocus()): b.bgOverlay.addClass(q), d.on("focusin"+p, b._onFocusIn)
                    }
                    ,
                    16),
                    b.isOpen=!0,
                    b.updateSize(k),
                    y(m),
                    c
                }
                ,
                close:function() {
                    b.isOpen&&(y(i), b.isOpen=!1, b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r), setTimeout(function() {
                        b._close()
                    }
                    ,
                    b.st.removalDelay)):b._close())
                }
                ,
                _close:function() {
                    y(h);
                    var c=r+" "+q+" ";
                    if(b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass&&(c+=b.st.mainClass+" "), b._removeClassFromMFP(c), b.fixedContentPos) {
                        var e= {
                            marginRight: ""
                        }
                        ;
                        b.isIE7?a("body, html").css("overflow",
                        ""):e.overflow="",
                        a("html").css(e)
                    }
                    d.off("keyup"+p+" focusin"+p),
                    b.ev.off(p),
                    b.wrap.attr("class",
                    "mfp-wrap").removeAttr("style"),
                    b.bgOverlay.attr("class",
                    "mfp-bg"),
                    b.container.attr("class",
                    "mfp-container"),
                    !b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),
                    b._lastFocusedEl&&a(b._lastFocusedEl).focus(),
                    b.currItem=null,
                    b.content=null,
                    b.currTemplate=null,
                    b.prevHeight=0,
                    y(j)
                }
                ,
                updateSize:function(a) {
                    if(b.isIOS) {
                        var c=document.documentElement.clientWidth/window.innerWidth, d=window.innerHeight*c;
                        b.wrap.css("height", d), b.wH=d
                    }
                    else b.wH=a||v.height();
                    b.fixedContentPos||b.wrap.css("height",
                    b.wH),
                    y("Resize")
                }
                ,
                updateItemHTML:function() {
                    var c=b.items[b.index];
                    b.contentContainer.detach(), b.content&&b.content.detach(), c.parsed||(c=b.parseEl(b.index));
                    var d=c.type;
                    if(y("BeforeChange", [b.currItem?b.currItem.type: "", d]), b.currItem=c, !b.currTemplate[d]) {
                        var f=b.st[d]?b.st[d].markup: !1;
                        y("FirstMarkupParse", f), b.currTemplate[d]=f?a(f): !0
                    }
                    e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");
                    var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,
                    b.currTemplate[d]);
                    b.appendContent(g,
                    d),
                    c.preloaded=!0,
                    y(n,
                    c),
                    e=c.type,
                    b.container.prepend(b.contentContainer),
                    y("AfterChange")
                }
                ,
                appendContent:function(a,
                c) {
                    b.content=a, a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()): b.content=a: b.content="", y(k), b.container.addClass("mfp-"+c+"-holder"), b.contentContainer.append(b.content)
                }
                ,
                parseEl:function(c) {
                    var d, e=b.items[c];
                    if(e.tagName?e= {
                        el: a(e)
                    }
                    :(d=e.type,
                    e= {
                        data: e, src: e.src
                    }
                    ),
                    e.el) {
                        for(var f=b.types, g=0;
                        g<f.length;
                        g++)if(e.el.hasClass("mfp-"+f[g])) {
                            d=f[g];
                            break
                        }
                        e.src=e.el.attr("data-mfp-src"),
                        e.src||(e.src=e.el.attr("href"))
                    }
                    return e.type=d||b.st.type||"inline",
                    e.index=c,
                    e.parsed=!0,
                    b.items[c]=e,
                    y("ElementParse",
                    e),
                    b.items[c]
                }
                ,
                addGroup:function(a,
                c) {
                    var d=function(d) {
                        d.mfpEl=this, b._openClick(d, a, c)
                    }
                    ;
                    c||(c= {});
                    var e="click.magnificPopup";
                    c.mainEl=a,
                    c.items?(c.isObj=!0,
                    a.off(e).on(e,
                    d)):(c.isObj=!1,
                    c.delegate?a.off(e).on(e,
                    c.delegate,
                    d):(c.items=a,
                    a.off(e).on(e,
                    d)))
                }
                ,
                _openClick:function(c,
                d,
                e) {
                    var f=void 0!==e.midClick?e.midClick: a.magnificPopup.defaults.midClick;
                    if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey) {
                        var g=void 0!==e.disableOn?e.disableOn: a.magnificPopup.defaults.disableOn;
                        if(g)if(a.isFunction(g)) {
                            if(!g.call(b))return!0
                        }
                        else if(v.width()<g)return!0;
                        c.type&&(c.preventDefault(),
                        b.isOpen&&c.stopPropagation()),
                        e.el=a(c.mfpEl),
                        e.delegate&&(e.items=d.find(e.delegate)),
                        b.open(e)
                    }
                }
                ,
                updateStatus:function(a,
                d) {
                    if(b.preloader) {
                        c!==a&&b.container.removeClass("mfp-s-"+c), d||"loading"!==a||(d=b.st.tLoading);
                        var e= {
                            status: a, text: d
                        }
                        ;
                        y("UpdateStatus",
                        e),
                        a=e.status,
                        d=e.text,
                        b.preloader.html(d),
                        b.preloader.find("a").on("click",
                        function(a) {
                            a.stopImmediatePropagation()
                        }
                        ),
                        b.container.addClass("mfp-s-"+a),
                        c=a
                    }
                }
                ,
                _checkIfClose:function(c) {
                    if(!a(c).hasClass(s)) {
                        var d=b.st.closeOnContentClick, e=b.st.closeOnBgClick;
                        if(d&&e)return!0;
                        if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;
                        if(c===b.content[0]||a.contains(b.content[0], c)) {
                            if(d)return!0
                        }
                        else if(e&&a.contains(document,
                        c))return!0;
                        return!1
                    }
                }
                ,
                _addClassToMFP:function(a) {
                    b.bgOverlay.addClass(a), b.wrap.addClass(a)
                }
                ,
                _removeClassFromMFP:function(a) {
                    this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
                }
                ,
                _hasScrollBar:function(a) {
                    return(b.isIE7?d.height(): document.body.scrollHeight)>(a||v.height())
                }
                ,
                _setFocus:function() {
                    (b.st.focus?b.content.find(b.st.focus).eq(0): b.wrap).focus()
                }
                ,
                _onFocusIn:function(c) {
                    return c.target===b.wrap[0]||a.contains(b.wrap[0], c.target)?void 0: (b._setFocus(), !1)
                }
                ,
                _parseMarkup:function(b,
                c,
                d) {
                    var e;
                    d.data&&(c=a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
                        if(void 0===c||c===!1)return!0;
                        if(e=a.split("_"), e.length>1) {
                            var d=b.find(p+"-"+e[0]);
                            if(d.length>0) {
                                var f=e[1];
                                "replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c): "img"===f?d.is("img")?d.attr("src", c): d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'): d.attr(e[1], c)
                            }
                        }
                        else b.find(p+"-"+a).html(c)
                    }
                    )
                }
                ,
                _getScrollbarSize:function() {
                    if(void 0===b.scrollbarSize) {
                        var a=document.createElement("div");
                        a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize=a.offsetWidth-a.clientWidth, document.body.removeChild(a)
                    }
                    return b.scrollbarSize
                }
            }
            ,
            a.magnificPopup= {
                instance: null, proto: t.prototype, modules: [], open: function(b, c) {
                    return A(), b=b?a.extend(!0, {}, b): {}, b.isObj=!0, b.index=c||0, this.instance.open(b)
                }
                ,
                close:function() {
                    return a.magnificPopup.instance&&a.magnificPopup.instance.close()
                }
                ,
                registerModule:function(b,
                c) {
                    c.options&&(a.magnificPopup.defaults[b]=c.options), a.extend(this.proto, c.proto), this.modules.push(b)
                }
                ,
                defaults: {
                    disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..."
                }
            }
            ,
            a.fn.magnificPopup=function(c) {
                A();
                var d=a(this);
                if("string"==typeof c)if("open"===c) {
                    var e, f=u?d.data("magnificPopup"): d[0].magnificPopup, g=parseInt(arguments[1], 10)||0;
                    f.items?e=f.items[g]: (e=d, f.delegate&&(e=e.find(f.delegate)), e=e.eq(g)), b._openClick( {
                        mfpEl: e
                    }
                    ,
                    d,
                    f)
                }
                else b.isOpen&&b[c].apply(b,
                Array.prototype.slice.call(arguments,
                1));
                else c=a.extend(!0,
                {},
                c),
                u?d.data("magnificPopup",
                c):d[0].magnificPopup=c,
                b.addGroup(d,
                c);
                return d
            }
            ;
            var C,
            D,
            E,
            F="inline",
            G=function() {
                E&&(D.after(E.addClass(C)).detach(), E=null)
            }
            ;
            a.magnificPopup.registerModule(F,
            {
                options: {
                    hiddenClass: "hide", markup: "", tNotFound: "Content not found"
                }
                ,
                proto: {
                    initInline: function() {
                        b.types.push(F), w(h+"."+F, function() {
                            G()
                        }
                        )
                    }
                    ,
                    getInline:function(c,
                    d) {
                        if(G(), c.src) {
                            var e=b.st.inline, f=a(c.src);
                            if(f.length) {
                                var g=f[0].parentNode;
                                g&&g.tagName&&(D||(C=e.hiddenClass, D=x(C), C="mfp-"+C), E=f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                            }
                            else b.updateStatus("error",
                            e.tNotFound),
                            f=a("<div>");
                            return c.inlineElement=f,
                            f
                        }
                        return b.updateStatus("ready"),
                        b._parseMarkup(d,
                        {},
                        c),
                        d
                    }
                }
            }
            );
            var H,
            I="ajax",
            J=function() {
                H&&a(document.body).removeClass(H)
            }
            ,
            K=function() {
                J(), b.req&&b.req.abort()
            }
            ;
            a.magnificPopup.registerModule(I,
            {
                options: {
                    settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.'
                }
                ,
                proto: {
                    initAjax: function() {
                        b.types.push(I), H=b.st.ajax.cursor, w(h+"."+I, K), w("BeforeChange."+I, K)
                    }
                    ,
                    getAjax:function(c) {
                        H&&a(document.body).addClass(H), b.updateStatus("loading");
                        var d=a.extend( {
                            url: c.src, success: function(d, e, f) {
                                var g= {
                                    data: d, xhr: f
                                }
                                ;
                                y("ParseAjax",
                                g),
                                b.appendContent(a(g.data),
                                I),
                                c.finished=!0,
                                J(),
                                b._setFocus(),
                                setTimeout(function() {
                                    b.wrap.addClass(q)
                                }
                                ,
                                16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded")
                            }
                            ,
                            error:function() {
                                J(), c.finished=c.loadError=!0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                            }
                        }
                        ,
                        b.st.ajax.settings);
                        return b.req=a.ajax(d),
                        ""
                    }
                }
            }
            );
            var L,
            M=function(c) {
                if(c.data&&void 0!==c.data.title)return c.data.title;
                var d=b.st.image.titleSrc;
                if(d) {
                    if(a.isFunction(d))return d.call(b, c);
                    if(c.el)return c.el.attr(d)||""
                }
                return""
            }
            ;
            a.magnificPopup.registerModule("image",
            {
                options: {
                    markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.'
                }
                ,
                proto: {
                    initImage: function() {
                        var c=b.st.image, d=".image";
                        b.types.push("image"), w(m+d, function() {
                            "image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)
                        }
                        ),
                        w(h+d,
                        function() {
                            c.cursor&&a(document.body).removeClass(c.cursor), v.off("resize"+p)
                        }
                        ),
                        w("Resize"+d,
                        b.resizeImage),
                        b.isLowIE&&w("AfterChange",
                        b.resizeImage)
                    }
                    ,
                    resizeImage:function() {
                        var a=b.currItem;
                        if(a&&a.img&&b.st.image.verticalFit) {
                            var c=0;
                            b.isLowIE&&(c=parseInt(a.img.css("padding-top"), 10)+parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH-c)
                        }
                    }
                    ,
                    _onImageHasSize:function(a) {
                        a.img&&(a.hasSize=!0, L&&clearInterval(L), a.isCheckingImgSize=!1, y("ImageHasSize", a), a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"), a.imgHidden=!1))
                    }
                    ,
                    findImageSize:function(a) {
                        var c=0, d=a.img[0], e=function(f) {
                            L&&clearInterval(L), L=setInterval(function() {
                                return d.naturalWidth>0?void b._onImageHasSize(a): (c>200&&clearInterval(L), c++, void(3===c?e(10): 40===c?e(50): 100===c&&e(500)))
                            }
                            ,
                            f)
                        }
                        ;
                        e(1)
                    }
                    ,
                    getImage:function(c,
                    d) {
                        var e=0, f=function() {
                            c&&(c.img[0].complete?(c.img.off(".mfploader"), c===b.currItem&&(b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize=!0, c.loaded=!0, y("ImageLoadComplete")): (e++, 200>e?setTimeout(f, 100): g()))
                        }
                        ,
                        g=function() {
                            c&&(c.img.off(".mfploader"), c===b.currItem&&(b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize=!0, c.loaded=!0, c.loadError=!0)
                        }
                        ,
                        h=b.st.image,
                        i=d.find(".mfp-img");
                        if(i.length) {
                            var j=document.createElement("img");
                            j.className="mfp-img", c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")), c.img=a(j).on("load.mfploader", f).on("error.mfploader", g), j.src=c.src, i.is("img")&&(c.img=c.img.clone()), j=c.img[0], j.naturalWidth>0?c.hasSize=!0: j.width||(c.hasSize=!1)
                        }
                        return b._parseMarkup(d,
                        {
                            title: M(c), img_replaceWith: c.img
                        }
                        ,
                        c),
                        b.resizeImage(),
                        c.hasSize?(L&&clearInterval(L),
                        c.loadError?(d.addClass("mfp-loading"),
                        b.updateStatus("error",
                        h.tError.replace("%url%",
                        c.src))):(d.removeClass("mfp-loading"),
                        b.updateStatus("ready")),
                        d):(b.updateStatus("loading"),
                        c.loading=!0,
                        c.hasSize||(c.imgHidden=!0,
                        d.addClass("mfp-loading"),
                        b.findImageSize(c)),
                        d)
                    }
                }
            }
            );
            var N,
            O=function() {
                return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform), N
            }
            ;
            a.magnificPopup.registerModule("zoom",
            {
                options: {
                    enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) {
                        return a.is("img")?a: a.find("img")
                    }
                }
                ,
                proto: {
                    initZoom: function() {
                        var a, c=b.st.zoom, d=".zoom";
                        if(c.enabled&&b.supportsTransition) {
                            var e, f, g=c.duration, j=function(a) {
                                var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d="all "+c.duration/1e3+"s "+c.easing, e= {
                                    position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"
                                }
                                ,
                                f="transition";
                                return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,
                                b.css(e),
                                b
                            }
                            ,
                            k=function() {
                                b.content.css("visibility", "visible")
                            }
                            ;
                            w("BuildControls"+d,
                            function() {
                                if(b._allowZoom()) {
                                    if(clearTimeout(e), b.content.css("visibility", "hidden"), a=b._getItemToZoom(), !a)return void k();
                                    f=j(a), f.css(b._getOffset()), b.wrap.append(f), e=setTimeout(function() {
                                        f.css(b._getOffset(!0)), e=setTimeout(function() {
                                            k(), setTimeout(function() {
                                                f.remove(), a=f=null, y("ZoomAnimationEnded")
                                            }
                                            ,
                                            16)
                                        }
                                        ,
                                        g)
                                    }
                                    ,
                                    16)
                                }
                            }
                            ),
                            w(i+d,
                            function() {
                                if(b._allowZoom()) {
                                    if(clearTimeout(e), b.st.removalDelay=g, !a) {
                                        if(a=b._getItemToZoom(), !a)return;
                                        f=j(a)
                                    }
                                    f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility",
                                    "hidden"),
                                    setTimeout(function() {
                                        f.css(b._getOffset())
                                    }
                                    ,
                                    16)
                                }
                            }
                            ),
                            w(h+d,
                            function() {
                                b._allowZoom()&&(k(), f&&f.remove(), a=null)
                            }
                            )
                        }
                    }
                    ,
                    _allowZoom:function() {
                        return"image"===b.currItem.type
                    }
                    ,
                    _getItemToZoom:function() {
                        return b.currItem.hasSize?b.currItem.img: !1
                    }
                    ,
                    _getOffset:function(c) {
                        var d;
                        d=c?b.currItem.img: b.st.zoom.opener(b.currItem.el||b.currItem);
                        var e=d.offset(), f=parseInt(d.css("padding-top"), 10), g=parseInt(d.css("padding-bottom"), 10);
                        e.top-=a(window).scrollTop()-f;
                        var h= {
                            width: d.width(), height: (u?d.innerHeight(): d[0].offsetHeight)-g-f
                        }
                        ;
                        return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,
                        h.top=e.top),
                        h
                    }
                }
            }
            );
            var P="iframe",
            Q="//about:blank",
            R=function(a) {
                if(b.currTemplate[P]) {
                    var c=b.currTemplate[P].find("iframe");
                    c.length&&(a||(c[0].src=Q), b.isIE8&&c.css("display", a?"block": "none"))
                }
            }
            ;
            a.magnificPopup.registerModule(P,
            {
                options: {
                    markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction:"iframe_src", patterns: {
                        youtube: {
                            index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"
                        }
                        ,
                        vimeo: {
                            index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"
                        }
                        ,
                        gmaps: {
                            index: "//maps.google.", src: "%id%&output=embed"
                        }
                    }
                }
                ,
                proto: {
                    initIframe: function() {
                        b.types.push(P), w("BeforeChange", function(a, b, c) {
                            b!==c&&(b===P?R(): c===P&&R(!0))
                        }
                        ),
                        w(h+"."+P,
                        function() {
                            R()
                        }
                        )
                    }
                    ,
                    getIframe:function(c,
                    d) {
                        var e=c.src, f=b.st.iframe;
                        a.each(f.patterns, function() {
                            return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length, e.length): this.id.call(this, e)), e=this.src.replace("%id%", e), !1): void 0
                        }
                        );
                        var g= {};
                        return f.srcAction&&(g[f.srcAction]=e),
                        b._parseMarkup(d,
                        g,
                        c),
                        b.updateStatus("ready"),
                        d
                    }
                }
            }
            );
            var S=function(a) {
                var c=b.items.length;
                return a>c-1?a-c: 0>a?c+a: a
            }
            ,
            T=function(a,
            b,
            c) {
                return a.replace(/%curr%/gi, b+1).replace(/%total%/gi, c)
            }
            ;
            a.magnificPopup.registerModule("gallery",
            {
                options: {
                    enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%"
                }
                ,
                proto: {
                    initGallery: function() {
                        var c=b.st.gallery, e=".mfp-gallery", g=Boolean(a.fn.mfpFastClick);
                        return b.direction=!0, c&&c.enabled?(f+=" mfp-gallery", w(m+e, function() {
                            c.navigateByImgClick&&b.wrap.on("click"+e, ".mfp-img", function() {
                                return b.items.length>1?(b.next(), !1): void 0
                            }
                            ),
                            d.on("keydown"+e,
                            function(a) {
                                37===a.keyCode?b.prev(): 39===a.keyCode&&b.next()
                            }
                            )
                        }
                        ),
                        w("UpdateStatus"+e,
                        function(a,
                        c) {
                            c.text&&(c.text=T(c.text, b.currItem.index, b.items.length))
                        }
                        ),
                        w(l+e,
                        function(a,
                        d,
                        e,
                        f) {
                            var g=b.items.length;
                            e.counter=g>1?T(c.tCounter, f.index, g): ""
                        }
                        ),
                        w("BuildControls"+e,
                        function() {
                            if(b.items.length>1&&c.arrows&&!b.arrowLeft) {
                                var d=c.arrowMarkup, e=b.arrowLeft=a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f=b.arrowRight=a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s), h=g?"mfpFastClick": "click";
                                e[h](function() {
                                    b.prev()
                                }
                                ),
                                f[h](function() {
                                    b.next()
                                }
                                ),
                                b.isIE7&&(x("b",
                                e[0],
                                !1,
                                !0),
                                x("a",
                                e[0],
                                !1,
                                !0),
                                x("b",
                                f[0],
                                !1,
                                !0),
                                x("a",
                                f[0],
                                !1,
                                !0)),
                                b.container.append(e.add(f))
                            }
                        }
                        ),
                        w(n+e,
                        function() {
                            b._preloadTimeout&&clearTimeout(b._preloadTimeout), b._preloadTimeout=setTimeout(function() {
                                b.preloadNearbyImages(), b._preloadTimeout=null
                            }
                            ,
                            16)
                        }
                        ),
                        void w(h+e,
                        function() {
                            d.off(e), b.wrap.off("click"+e), b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight=b.arrowLeft=null
                        }
                        )):!1
                    }
                    ,
                    next:function() {
                        b.direction=!0, b.index=S(b.index+1), b.updateItemHTML()
                    }
                    ,
                    prev:function() {
                        b.direction=!1, b.index=S(b.index-1), b.updateItemHTML()
                    }
                    ,
                    goTo:function(a) {
                        b.direction=a>=b.index, b.index=a, b.updateItemHTML()
                    }
                    ,
                    preloadNearbyImages:function() {
                        var a, c=b.st.gallery.preload, d=Math.min(c[0], b.items.length), e=Math.min(c[1], b.items.length);
                        for(a=1;
                        a<=(b.direction?e: d);
                        a++)b._preloadItem(b.index+a);
                        for(a=1;
                        a<=(b.direction?d: e);
                        a++)b._preloadItem(b.index-a)
                    }
                    ,
                    _preloadItem:function(c) {
                        if(c=S(c), !b.items[c].preloaded) {
                            var d=b.items[c];
                            d.parsed||(d=b.parseEl(c)), y("LazyLoad", d), "image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader", function() {
                                d.hasSize=!0
                            }
                            ).on("error.mfploader",
                            function() {
                                d.hasSize=!0, d.loadError=!0, y("LazyLoadError", d)
                            }
                            ).attr("src",
                            d.src)),
                            d.preloaded=!0
                        }
                    }
                }
            }
            );
            var U="retina";
            a.magnificPopup.registerModule(U,
            {
                options: {
                    replaceSrc: function(a) {
                        return a.src.replace(/\.\w+$/, function(a) {
                            return"@2x"+a
                        }
                        )
                    }
                    ,
                    ratio:1
                }
                ,
                proto: {
                    initRetina: function() {
                        if(window.devicePixelRatio>1) {
                            var a=b.st.retina, c=a.ratio;
                            c=isNaN(c)?c(): c, c>1&&(w("ImageHasSize."+U, function(a, b) {
                                b.img.css( {
                                    "max-width": b.img[0].naturalWidth/c, width: "100%"
                                }
                                )
                            }
                            ),
                            w("ElementParse."+U,
                            function(b,
                            d) {
                                d.src=a.replaceSrc(d, c)
                            }
                            ))
                        }
                    }
                }
            }
            ),
            function() {
                var b=1e3, c="ontouchstart"in window, d=function() {
                    v.off("touchmove"+f+" touchend"+f)
                }
                ,
                e="mfpFastClick",
                f="."+e;
                a.fn.mfpFastClick=function(e) {
                    return a(this).each(function() {
                        var g, h=a(this);
                        if(c) {
                            var i, j, k, l, m, n;
                            h.on("touchstart"+f, function(a) {
                                l=!1, n=1, m=a.originalEvent?a.originalEvent.touches[0]: a.touches[0], j=m.clientX, k=m.clientY, v.on("touchmove"+f, function(a) {
                                    m=a.originalEvent?a.originalEvent.touches: a.touches, n=m.length, m=m[0], (Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0, d())
                                }
                                ).on("touchend"+f,
                                function(a) {
                                    d(), l||n>1||(g=!0, a.preventDefault(), clearTimeout(i), i=setTimeout(function() {
                                        g=!1
                                    }
                                    ,
                                    b),
                                    e())
                                }
                                )
                            }
                            )
                        }
                        h.on("click"+f,
                        function() {
                            g||e()
                        }
                        )
                    }
                    )
                }
                ,
                a.fn.destroyMfpFastClick=function() {
                    a(this).off("touchstart"+f+" click"+f), c&&v.off("touchmove"+f+" touchend"+f)
                }
            }
            (),
            A()
        }
        );
        /*!jQuery Knob*/
        
        (function(e) {
            if(typeof define==="function"&&define.amd) {
                define(["jquery"], e)
            }
            else {
                e(jQuery)
            }
        }
        )(function(e) {
            "use strict";
            var t= {}, n=Math.max, r=Math.min;
            t.c= {};
            t.c.d=e(document);
            t.c.t=function(e) {
                return e.originalEvent.touches.length-1
            }
            ;
            t.o=function() {
                var n=this;
                this.o=null;
                this.$=null;
                this.i=null;
                this.g=null;
                this.v=null;
                this.cv=null;
                this.x=0;
                this.y=0;
                this.w=0;
                this.h=0;
                this.$c=null;
                this.c=null;
                this.t=0;
                this.isInit=false;
                this.fgColor=null;
                this.pColor=null;
                this.dH=null;
                this.cH=null;
                this.eH=null;
                this.rH=null;
                this.scale=1;
                this.relative=false;
                this.relativeWidth=false;
                this.relativeHeight=false;
                this.$div=null;
                this.run=function() {
                    var t=function(e, t) {
                        var r;
                        for(r in t) {
                            n.o[r]=t[r]
                        }
                        n._carve().init();
                        n._configure()._draw()
                    }
                    ;
                    if(this.$.data("kontroled"))return;
                    this.$.data("kontroled",
                    true);
                    this.extend();
                    this.o=e.extend( {
                        min: this.$.data("min")!==undefined?this.$.data("min"): 0, max: this.$.data("max")!==undefined?this.$.data("max"): 100, stopper: true, readOnly: this.$.data("readonly")||this.$.attr("readonly")==="readonly", cursor: this.$.data("cursor")===true&&30||this.$.data("cursor")||0, thickness: this.$.data("thickness")&&Math.max(Math.min(this.$.data("thickness"), 1), .01)||.35, lineCap: this.$.data("linecap")||"butt", width: this.$.data("width")||200, height: this.$.data("height")||200, displayInput: this.$.data("displayinput")==null||this.$.data("displayinput"), displayPrevious: this.$.data("displayprevious"), fgColor: this.$.data("fgcolor")||"#87CEEB", inputColor: this.$.data("inputcolor"), font: this.$.data("font")||"Arial", fontWeight: this.$.data("font-weight")||"bold", inline: false, step: this.$.data("step")||1, rotation: this.$.data("rotation"), draw: null, change: null, cancel: null, release: null, format: function(e) {
                            return e
                        }
                        ,
                        parse:function(e) {
                            return parseFloat(e)
                        }
                    }
                    ,
                    this.o);
                    this.o.flip=this.o.rotation==="anticlockwise"||this.o.rotation==="acw";
                    if(!this.o.inputColor) {
                        this.o.inputColor=this.o.fgColor
                    }
                    if(this.$.is("fieldset")) {
                        this.v= {};
                        this.i=this.$.find("input");
                        this.i.each(function(t) {
                            var r=e(this);
                            n.i[t]=r;
                            n.v[t]=n.o.parse(r.val());
                            r.bind("change blur", function() {
                                var e= {};
                                e[t]=r.val();
                                n.val(n._validate(e))
                            }
                            )
                        }
                        );
                        this.$.find("legend").remove()
                    }
                    else {
                        this.i=this.$;
                        this.v=this.o.parse(this.$.val());
                        this.v===""&&(this.v=this.o.min);
                        this.$.bind("change blur", function() {
                            n.val(n._validate(n.o.parse(n.$.val())))
                        }
                        )
                    }
                    !this.o.displayInput&&this.$.hide();
                    this.$c=e(document.createElement("canvas")).attr( {
                        width: this.o.width, height: this.o.height
                    }
                    );
                    this.$div=e('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+"px;"+'"></div>');
                    this.$.wrap(this.$div).before(this.$c);
                    this.$div=this.$.parent();
                    if(typeof G_vmlCanvasManager!=="undefined") {
                        G_vmlCanvasManager.initElement(this.$c[0])
                    }
                    this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null;
                    if(!this.c) {
                        throw {
                            name: "CanvasNotSupportedException", message: "Canvas not supported. Please use excanvas on IE8.0.", toString: function() {
                                return this.name+": "+this.message
                            }
                        }
                    }
                    this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1);
                    this.relativeWidth=this.o.width%1!==0&&this.o.width.indexOf("%");
                    this.relativeHeight=this.o.height%1!==0&&this.o.height.indexOf("%");
                    this.relative=this.relativeWidth||this.relativeHeight;
                    this._carve();
                    if(this.v instanceof Object) {
                        this.cv= {};
                        this.copy(this.v, this.cv)
                    }
                    else {
                        this.cv=this.v
                    }
                    this.$.bind("configure",
                    t).parent().bind("configure",
                    t);
                    this._listen()._configure()._xy().init();
                    this.isInit=true;
                    this.$.val(this.o.format(this.v));
                    this._draw();
                    return this
                }
                ;
                this._carve=function() {
                    if(this.relative) {
                        var e=this.relativeWidth?this.$div.parent().width()*parseInt(this.o.width)/100: this.$div.parent().width(), t=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100: this.$div.parent().height();
                        this.w=this.h=Math.min(e, t)
                    }
                    else {
                        this.w=this.o.width;
                        this.h=this.o.height
                    }
                    this.$div.css( {
                        width: this.w+"px", height: this.h+"px"
                    }
                    );
                    this.$c.attr( {
                        width: this.w, height: this.h
                    }
                    );
                    if(this.scale!==1) {
                        this.$c[0].width=this.$c[0].width*this.scale;
                        this.$c[0].height=this.$c[0].height*this.scale;
                        this.$c.width(this.w);
                        this.$c.height(this.h)
                    }
                    return this
                }
                ;
                this._draw=function() {
                    var e=true;
                    n.g=n.c;
                    n.clear();
                    n.dH&&(e=n.dH());
                    e!==false&&n.draw()
                }
                ;
                this._touch=function(e) {
                    var r=function(e) {
                        var t=n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
                        if(t==n.cv)return;
                        if(n.cH&&n.cH(t)===false)return;
                        n.change(n._validate(t));
                        n._draw()
                    }
                    ;
                    this.t=t.c.t(e);
                    r(e);
                    t.c.d.bind("touchmove.k",
                    r).bind("touchend.k",
                    function() {
                        t.c.d.unbind("touchmove.k touchend.k");
                        n.val(n.cv)
                    }
                    );
                    return this
                }
                ;
                this._mouse=function(e) {
                    var r=function(e) {
                        var t=n.xy2val(e.pageX, e.pageY);
                        if(t==n.cv)return;
                        if(n.cH&&n.cH(t)===false)return;
                        n.change(n._validate(t));
                        n._draw()
                    }
                    ;
                    r(e);
                    t.c.d.bind("mousemove.k",
                    r).bind("keyup.k",
                    function(e) {
                        if(e.keyCode===27) {
                            t.c.d.unbind("mouseup.k mousemove.k keyup.k");
                            if(n.eH&&n.eH()===false)return;
                            n.cancel()
                        }
                    }
                    ).bind("mouseup.k",
                    function(e) {
                        t.c.d.unbind("mousemove.k mouseup.k keyup.k");
                        n.val(n.cv)
                    }
                    );
                    return this
                }
                ;
                this._xy=function() {
                    var e=this.$c.offset();
                    this.x=e.left;
                    this.y=e.top;
                    return this
                }
                ;
                this._listen=function() {
                    if(!this.o.readOnly) {
                        this.$c.bind("mousedown", function(e) {
                            e.preventDefault();
                            n._xy()._mouse(e)
                        }
                        ).bind("touchstart",
                        function(e) {
                            e.preventDefault();
                            n._xy()._touch(e)
                        }
                        );
                        this.listen()
                    }
                    else {
                        this.$.attr("readonly", "readonly")
                    }
                    if(this.relative) {
                        e(window).resize(function() {
                            n._carve().init();
                            n._draw()
                        }
                        )
                    }
                    return this
                }
                ;
                this._configure=function() {
                    if(this.o.draw)this.dH=this.o.draw;
                    if(this.o.change)this.cH=this.o.change;
                    if(this.o.cancel)this.eH=this.o.cancel;
                    if(this.o.release)this.rH=this.o.release;
                    if(this.o.displayPrevious) {
                        this.pColor=this.h2rgba(this.o.fgColor, "0.4");
                        this.fgColor=this.h2rgba(this.o.fgColor, "0.6")
                    }
                    else {
                        this.fgColor=this.o.fgColor
                    }
                    return this
                }
                ;
                this._clear=function() {
                    this.$c[0].width=this.$c[0].width
                }
                ;
                this._validate=function(e) {
                    var t=~~((e<0?-.5: .5)+e/this.o.step)*this.o.step;
                    return Math.round(t*100)/100
                }
                ;
                this.listen=function() {};
                this.extend=function() {};
                this.init=function() {};
                this.change=function(e) {};
                this.val=function(e) {};
                this.xy2val=function(e,
                t) {};
                this.draw=function() {};
                this.clear=function() {
                    this._clear()
                }
                ;
                this.h2rgba=function(e,
                t) {
                    var n;
                    e=e.substring(1, 7);
                    n=[parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)];
                    return"rgba("+n[0]+","+n[1]+","+n[2]+","+t+")"
                }
                ;
                this.copy=function(e,
                t) {
                    for(var n in e) {
                        t[n]=e[n]
                    }
                }
            }
            ;
            t.Dial=function() {
                t.o.call(this);
                this.startAngle=null;
                this.xy=null;
                this.radius=null;
                this.lineWidth=null;
                this.cursorExt=null;
                this.w2=null;
                this.PI2=2*Math.PI;
                this.extend=function() {
                    this.o=e.extend( {
                        bgColor: this.$.data("bgcolor")||"#EEEEEE", angleOffset: this.$.data("angleoffset")||0, angleArc: this.$.data("anglearc")||360, inline: true
                    }
                    ,
                    this.o)
                }
                ;
                this.val=function(e,
                t) {
                    if(null!=e) {
                        e=this.o.parse(e);
                        if(t!==false&&e!=this.v&&this.rH&&this.rH(e)===false) {
                            return
                        }
                        this.cv=this.o.stopper?n(r(e,
                        this.o.max),
                        this.o.min):e;
                        this.v=this.cv;
                        this.$.val(this.o.format(this.v));
                        this._draw()
                    }
                    else {
                        return this.v
                    }
                }
                ;
                this.xy2val=function(e,
                t) {
                    var i, s;
                    i=Math.atan2(e-(this.x+this.w2), -(t-this.y-this.w2))-this.angleOffset;
                    if(this.o.flip) {
                        i=this.angleArc-i-this.PI2
                    }
                    if(this.angleArc!=this.PI2&&i<0&&i>-.5) {
                        i=0
                    }
                    else if(i<0) {
                        i+=this.PI2
                    }
                    s=i*(this.o.max-this.o.min)/this.angleArc+this.o.min;
                    this.o.stopper&&(s=n(r(s,
                    this.o.max),
                    this.o.min));
                    return s
                }
                ;
                this.listen=function() {
                    var t=this, i, s, o=function(e) {
                        e.preventDefault();
                        var o=e.originalEvent, u=o.detail||o.wheelDeltaX, a=o.detail||o.wheelDeltaY, f=t._validate(t.o.parse(t.$.val()))+(u>0||a>0?t.o.step: u<0||a<0?-t.o.step: 0);
                        f=n(r(f, t.o.max), t.o.min);
                        t.val(f, false);
                        if(t.rH) {
                            clearTimeout(i);
                            i=setTimeout(function() {
                                t.rH(f);
                                i=null
                            }
                            ,
                            100);
                            if(!s) {
                                s=setTimeout(function() {
                                    if(i)t.rH(f);
                                    s=null
                                }
                                ,
                                200)
                            }
                        }
                    }
                    ,
                    u,
                    a,
                    f=1,
                    l= {
                        37: -t.o.step, 38: t.o.step, 39: t.o.step, 40: -t.o.step
                    }
                    ;
                    this.$.bind("keydown",
                    function(i) {
                        var s=i.keyCode;
                        if(s>=96&&s<=105) {
                            s=i.keyCode=s-48
                        }
                        u=parseInt(String.fromCharCode(s));
                        if(isNaN(u)) {
                            s!==13&&s!==8&&s!==9&&s!==189&&(s!==190||t.$.val().match(/\./))&&i.preventDefault();
                            if(e.inArray(s, [37, 38, 39, 40])>-1) {
                                i.preventDefault();
                                var o=t.o.parse(t.$.val())+l[s]*f;
                                t.o.stopper&&(o=n(r(o, t.o.max), t.o.min));
                                t.change(t._validate(o));
                                t._draw();
                                a=window.setTimeout(function() {
                                    f*=2
                                }
                                ,
                                30)
                            }
                        }
                    }
                    ).bind("keyup",
                    function(e) {
                        if(isNaN(u)) {
                            if(a) {
                                window.clearTimeout(a);
                                a=null;
                                f=1;
                                t.val(t.$.val())
                            }
                        }
                        else {
                            t.$.val()>t.o.max&&t.$.val(t.o.max)||t.$.val()<t.o.min&&t.$.val(t.o.min)
                        }
                    }
                    );
                    this.$c.bind("mousewheel DOMMouseScroll",
                    o);
                    this.$.bind("mousewheel DOMMouseScroll",
                    o)
                }
                ;
                this.init=function() {
                    if(this.v<this.o.min||this.v>this.o.max) {
                        this.v=this.o.min
                    }
                    this.$.val(this.v);
                    this.w2=this.w/2;
                    this.cursorExt=this.o.cursor/100;
                    this.xy=this.w2*this.scale;
                    this.lineWidth=this.xy*this.o.thickness;
                    this.lineCap=this.o.lineCap;
                    this.radius=this.xy-this.lineWidth/2;
                    this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);
                    this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);
                    this.angleOffset=this.o.angleOffset*Math.PI/180;
                    this.angleArc=this.o.angleArc*Math.PI/180;
                    this.startAngle=1.5*Math.PI+this.angleOffset;
                    this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;
                    var e=n(String(Math.abs(this.o.max)).length,
                    String(Math.abs(this.o.min)).length,
                    2)+2;
                    this.o.displayInput&&this.i.css( {
                        width: (this.w/2+4>>0)+"px", height: (this.w/3>>0)+"px", position: "absolute", "vertical-align": "middle", "margin-top": (this.w/3>>0)+"px", "margin-left": "-"+(this.w*3/4+2>>0)+"px", border: 0, background: "none", font: this.o.fontWeight+" "+(this.w/e>>0)+"px "+this.o.font, "text-align": "center", color: this.o.inputColor||this.o.fgColor, padding: "0px", "-webkit-appearance": "none"
                    }
                    )||this.i.css( {
                        width: "0px", visibility: "hidden"
                    }
                    )
                }
                ;
                this.change=function(e) {
                    this.cv=e;
                    this.$.val(this.o.format(e))
                }
                ;
                this.angle=function(e) {
                    return(e-this.o.min)*this.angleArc/(this.o.max-this.o.min)
                }
                ;
                this.arc=function(e) {
                    var t, n;
                    e=this.angle(e);
                    if(this.o.flip) {
                        t=this.endAngle+1e-5;
                        n=t-e-1e-5
                    }
                    else {
                        t=this.startAngle-1e-5;
                        n=t+e+1e-5
                    }
                    this.o.cursor&&(t=n-this.cursorExt)&&(n=n+this.cursorExt);
                    return {
                        s: t, e: n, d: this.o.flip&&!this.o.cursor
                    }
                }
                ;
                this.draw=function() {
                    var e=this.g, t=this.arc(this.cv), n, r=1;
                    e.lineWidth=this.lineWidth;
                    e.lineCap=this.lineCap;
                    if(this.o.bgColor!=="none") {
                        e.beginPath();
                        e.strokeStyle=this.o.bgColor;
                        e.arc(this.xy, this.xy, this.radius, this.endAngle-1e-5, this.startAngle+1e-5, true);
                        e.stroke()
                    }
                    if(this.o.displayPrevious) {
                        n=this.arc(this.v);
                        e.beginPath();
                        e.strokeStyle=this.pColor;
                        e.arc(this.xy, this.xy, this.radius, n.s, n.e, n.d);
                        e.stroke();
                        r=this.cv==this.v
                    }
                    e.beginPath();
                    e.strokeStyle=r?this.o.fgColor:this.fgColor;
                    e.arc(this.xy,
                    this.xy,
                    this.radius,
                    t.s,
                    t.e,
                    t.d);
                    e.stroke()
                }
                ;
                this.cancel=function() {
                    this.val(this.v)
                }
            }
            ;
            e.fn.dial=e.fn.knob=function(n) {
                return this.each(function() {
                    var r=new t.Dial;
                    r.o=n;
                    r.$=e(this);
                    r.run()
                }
                ).parent()
            }
        }
        );
        !function(e) {
            e.fn.appear=function(a, r) {
                var n=e.extend( {
                    data: void 0, one: !0, accX: 0, accY: 0
                }
                ,
                r);
                return this.each(function() {
                    var r=e(this);
                    if(r.appeared=!1, !a)return void r.trigger("appear", n.data);
                    var p=e(window), t=function() {
                        if(!r.is(":visible"))return void(r.appeared=!1);
                        var e=p.scrollLeft(), a=p.scrollTop(), t=r.offset(), c=t.left, i=t.top, o=n.accX, f=n.accY, s=r.height(), u=p.height(), d=r.width(), l=p.width();
                        i+s+f>=a&&a+u+f>=i&&c+d+o>=e&&e+l+o>=c?r.appeared||r.trigger("appear", n.data): r.appeared=!1
                    }
                    ,
                    c=function() {
                        if(r.appeared=!0, n.one) {
                            p.unbind("scroll", t);
                            var c=e.inArray(t, e.fn.appear.checks);
                            c>=0&&e.fn.appear.checks.splice(c, 1)
                        }
                        a.apply(this,
                        arguments)
                    }
                    ;
                    n.one?r.one("appear",
                    n.data,
                    c):r.bind("appear",
                    n.data,
                    c),
                    p.scroll(t),
                    e.fn.appear.checks.push(t),
                    t()
                }
                )
            }
            ,
            e.extend(e.fn.appear,
            {
                checks: [], timeout: null, checkAll: function() {
                    var a=e.fn.appear.checks.length;
                    if(a>0)for(;
                    a--;
                    )e.fn.appear.checks[a]()
                }
                ,
                run:function() {
                    e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll, 20)
                }
            }
            ),
            e.each(["append",
            "prepend",
            "after",
            "before",
            "attr",
            "removeAttr",
            "addClass",
            "removeClass",
            "toggleClass",
            "remove",
            "css",
            "show",
            "hide"],
            function(a,
            r) {
                var n=e.fn[r];
                n&&(e.fn[r]=function() {
                    var a=n.apply(this, arguments);
                    return e.fn.appear.run(), a
                }
                )
            }
            )
        }
        (jQuery);
        /*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
        
        (function($) {
            $.fn.hoverIntent=function(handlerIn, handlerOut, selector) {
                var cfg= {
                    interval: 100, sensitivity: 6, timeout: 0
                }
                ;
                if(typeof handlerIn==="object") {
                    cfg=$.extend(cfg, handlerIn)
                }
                else {
                    if($.isFunction(handlerOut)) {
                        cfg=$.extend(cfg, {
                            over: handlerIn, out: handlerOut, selector: selector
                        }
                        )
                    }
                    else {
                        cfg=$.extend(cfg, {
                            over: handlerIn, out: handlerIn, selector: handlerOut
                        }
                        )
                    }
                }
                var cX,
                cY,
                pX,
                pY;
                var track=function(ev) {
                    cX=ev.pageX;
                    cY=ev.pageY
                }
                ;
                var compare=function(ev,
                ob) {
                    ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
                    if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity) {
                        $(ob).off("mousemove.hoverIntent", track);
                        ob.hoverIntent_s=true;
                        return cfg.over.apply(ob, [ev])
                    }
                    else {
                        pX=cX;
                        pY=cY;
                        ob.hoverIntent_t=setTimeout(function() {
                            compare(ev, ob)
                        }
                        ,
                        cfg.interval)
                    }
                }
                ;
                var delay=function(ev,
                ob) {
                    ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
                    ob.hoverIntent_s=false;
                    return cfg.out.apply(ob, [ev])
                }
                ;
                var handleHover=function(e) {
                    var ev=$.extend( {}, e);
                    var ob=this;
                    if(ob.hoverIntent_t) {
                        ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)
                    }
                    if(e.type==="mouseenter") {
                        pX=ev.pageX;
                        pY=ev.pageY;
                        $(ob).on("mousemove.hoverIntent", track);
                        if(!ob.hoverIntent_s) {
                            ob.hoverIntent_t=setTimeout(function() {
                                compare(ev, ob)
                            }
                            ,
                            cfg.interval)
                        }
                    }
                    else {
                        $(ob).off("mousemove.hoverIntent", track);
                        if(ob.hoverIntent_s) {
                            ob.hoverIntent_t=setTimeout(function() {
                                delay(ev, ob)
                            }
                            ,
                            cfg.timeout)
                        }
                    }
                }
                ;
                return this.on( {
                    "mouseenter.hoverIntent": handleHover, "mouseleave.hoverIntent": handleHover
                }
                ,
                cfg.selector)
            }
        }
        )(jQuery);
        (function(n) {
            function v(b, f) {
                var c, a=this, e=window.navigator, g=e.userAgent.toLowerCase();
                a.uid=n.rsModules.uid++;
                a.ns=".rs"+a.uid;
                var d=document.createElement("div").style, h=["webkit", "Moz", "ms", "O"], k="", l=0, q;
                for(c=0;
                c<h.length;
                c++)q=h[c], !k&&q+"Transform"in d&&(k=q), q=q.toLowerCase(), window.requestAnimationFrame||(window.requestAnimationFrame=window[q+"RequestAnimationFrame"], window.cancelAnimationFrame=window[q+"CancelAnimationFrame"]||window[q+"CancelRequestAnimationFrame"]);
                window.requestAnimationFrame||(window.requestAnimationFrame=function(a, b) {
                    var c=(new Date).getTime(), d=Math.max(0, 16-(c-l)), e=window.setTimeout(function() {
                        a(c+d)
                    }
                    ,
                    d);
                    l=c+d;
                    return e
                }
                );
                window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a) {
                    clearTimeout(a)
                }
                );
                a.isIPAD=g.match(/(ipad)/);
                a.isIOS=a.isIPAD||g.match(/(iphone|ipod)/);
                c=function(a) {
                    a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?: .*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?: .*? rv: ([\w.]+)|)/.exec(a)||[];
                    return {
                        browser: a[1]||"", version: a[2]||"0"
                    }
                }
                (g);
                h= {};
                c.browser&&(h[c.browser]=!0,
                h.version=c.version);
                h.chrome&&(h.webkit=!0);
                a._a=h;
                a.isAndroid=-1<g.indexOf("android");
                a.slider=n(b);
                a.ev=n(a);
                a._b=n(document);
                a.st=n.extend( {},
                n.fn.royalSlider.defaults,
                f);
                a._c=a.st.transitionSpeed;
                a._d=0;
                !a.st.allowCSS3||h.webkit&&!a.st.allowCSS3OnWebkit||(c=k+(k?"T":"t"),
                a._e=c+"ransform"in d&&c+"ransition"in d,
                a._e&&(a._f=k+(k?"P":"p")+"erspective"in d));
                k=k.toLowerCase();
                a._g="-"+k+"-";
                a._h="vertical"===a.st.slidesOrientation?!1:!0;
                a._i=a._h?"left":"top";
                a._j=a._h?"width":"height";
                a._k=-1;
                a._l="fade"===a.st.transitionType?!1:!0;
                a._l||(a.st.sliderDrag=!1,
                a._m=10);
                a._n="z-index:0; display:none; opacity:0;";
                a._o=0;
                a._p=0;
                a._q=0;
                n.each(n.rsModules,
                function(b,
                c) {
                    "uid"!==b&&c.call(a)
                }
                );
                a.slides=[];
                a._r=0;
                (a.st.slides?n(a.st.slides):a.slider.children().detach()).each(function() {
                    a._s(this, !0)
                }
                );
                a.st.randomizeSlides&&a.slides.sort(function() {
                    return.5-Math.random()
                }
                );
                a.numSlides=a.slides.length;
                a._t();
                a.st.startSlideId?a.st.startSlideId>a.numSlides-1&&(a.st.startSlideId=a.numSlides-1):a.st.startSlideId=0;
                a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;
                a.currSlide=a.slides[a.currSlideId];
                a._v=0;
                a.pointerMultitouch=!1;
                a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));
                d='<div class="rsOverflow"><div class="rsContainer">';
                a.slidesSpacing=a.st.slidesSpacing;
                a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;
                a._x=Boolean(0<a._y);
                1>=a.numSlides&&(a._z=!1);
                a._a1=a._z&&a._l?2===a.numSlides?1:2:0;
                a._b1=6>a.numSlides?a.numSlides:6;
                a._c1=0;
                a._d1=0;
                a.slidesJQ=[];
                for(c=0;
                c<a.numSlides;
                c++)a.slidesJQ.push(n('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));
                a._e1=d=n(d+"</div></div>");
                var m=a.ns,
                k=function(b,
                c,
                d,
                e,
                f) {
                    a._j1=b+c+m;
                    a._k1=b+d+m;
                    a._l1=b+e+m;
                    f&&(a._m1=b+f+m)
                }
                ;
                c=e.pointerEnabled;
                a.pointerEnabled=c||e.msPointerEnabled;
                a.pointerEnabled?(a.hasTouch=!1,
                a._n1=.2,
                a.pointerMultitouch=Boolean(1<e[(c?"m":"msM")+"axTouchPoints"]),
                c?k("pointer",
                "down",
                "move",
                "up",
                "cancel"):k("MSPointer",
                "Down",
                "Move",
                "Up",
                "Cancel")):(a.isIOS?a._j1=a._k1=a._l1=a._m1="":k("mouse",
                "down",
                "move",
                "up"),
                "ontouchstart"in window||"createTouch"in document?(a.hasTouch=!0,
                a._j1+=" touchstart"+m,
                a._k1+=" touchmove"+m,
                a._l1+=" touchend"+m,
                a._m1+=" touchcancel"+m,
                a._n1=.5,
                a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,
                a._n1=.2));
                a.st.sliderDrag&&(a._f1=!0,
                h.msie||h.opera?a._g1=a._h1="move":h.mozilla?(a._g1="-moz-grab",
                a._h1="-moz-grabbing"):h.webkit&&-1!=e.platform.indexOf("Mac")&&(a._g1="-webkit-grab",
                a._h1="-webkit-grabbing"),
                a._i1());
                a.slider.html(d);
                a._o1=a.st.controlsInside?a._e1:a.slider;
                a._p1=a._e1.children(".rsContainer");
                a.pointerEnabled&&a._p1.css((c?"":"-ms-")+"touch-action",
                a._h?"pan-y":"pan-x");
                a._q1=n('<div class="rsPreloader"></div>');
                e=a._p1.children(".rsSlide");
                a._r1=a.slidesJQ[a.currSlideId];
                a._s1=0;
                a._e?(a._t1="transition-property",
                a._u1="transition-duration",
                a._v1="transition-timing-function",
                a._w1=a._x1=a._g+"transform",
                a._f?(h.webkit&&!h.chrome&&a.slider.addClass("rsWebkit3d"),
                a._y1="translate3d(",
                a._z1="px, ",
                a._a2="px, 0px)"):(a._y1="translate(",
                a._z1="px, ",
                a._a2="px)"),
                a._l?a._p1[a._g+a._t1]=a._g+"transform":(h= {},
                h[a._g+a._t1]="opacity",
                h[a._g+a._u1]=a.st.transitionSpeed+"ms",
                h[a._g+a._v1]=a.st.css3easeInOut,
                e.css(h))):(a._x1="left",
                a._w1="top");
                var p;
                n(window).on("resize"+a.ns,
                function() {
                    p&&clearTimeout(p);
                    p=setTimeout(function() {
                        a.updateSliderSize()
                    }
                    ,
                    50)
                }
                );
                a.ev.trigger("rsAfterPropsSetup");
                a.updateSliderSize();
                a.st.keyboardNavEnabled&&a._b2();
                a.st.arrowsNavHideOnTouch&&(a.hasTouch||a.pointerMultitouch)&&(a.st.arrowsNav=!1);
                a.st.arrowsNav&&(e=a._o1,
                n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e),
                a._c2=e.children(".rsArrowLeft").click(function(b) {
                    b.preventDefault();
                    a.prev()
                }
                ),
                a._d2=e.children(".rsArrowRight").click(function(b) {
                    b.preventDefault();
                    a.next()
                }
                ),
                a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),
                a._d2.addClass("rsHidden"),
                e.one("mousemove.arrowshover",
                function() {
                    a._c2.removeClass("rsHidden");
                    a._d2.removeClass("rsHidden")
                }
                ),
                e.hover(function() {
                    a._e2||(a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"))
                }
                ,
                function() {
                    a._e2||(a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"))
                }
                )),
                a.ev.on("rsOnUpdateNav",
                function() {
                    a._f2()
                }
                ),
                a._f2());
                if(a.hasTouch&&a.st.sliderTouch||!a.hasTouch&&a.st.sliderDrag)a._p1.on(a._j1,
                function(b) {
                    a._g2(b)
                }
                );
                else a.dragSuccess=!1;
                var r=["rsPlayBtnIcon",
                "rsPlayBtn",
                "rsCloseVideoBtn",
                "rsCloseVideoIcn"];
                a._p1.click(function(b) {
                    if(!a.dragSuccess) {
                        var c=n(b.target).attr("class");
                        if(-1!==n.inArray(c, r)&&a.toggleVideo())return!1;
                        if(a.st.navigateByClick&&!a._h2) {
                            if(n(b.target).closest(".rsNoDrag", a._r1).length)return!0;
                            a._i2(b)
                        }
                        a.ev.trigger("rsSlideClick",
                        b)
                    }
                }
                ).on("click.rs",
                "a",
                function(b) {
                    if(a.dragSuccess)return!1;
                    a._h2=!0;
                    setTimeout(function() {
                        a._h2=!1
                    }
                    ,
                    3)
                }
                );
                a.ev.trigger("rsAfterInit")
            }
            n.rsModules||(n.rsModules= {
                uid: 0
            }
            );
            v.prototype= {
                constructor: v, _i2: function(b) {
                    b=b[this._h?"pageX": "pageY"]-this._j2;
                    b>=this._q?this.next(): 0>b&&this.prev()
                }
                ,
                _t:function() {
                    var b;
                    b=this.st.numImagesToPreload;
                    if(this._z=this.st.loop)2===this.numSlides?(this._z=!1, this.st.loopRewind=!0): 2>this.numSlides&&(this.st.loopRewind=this._z=!1);
                    this._z&&0<b&&(4>=this.numSlides?b=1: this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-1)/2)));
                    this._y=b
                }
                ,
                _s:function(b,
                f) {
                    function c(b, c) {
                        c?g.images.push(b.attr(c)): g.images.push(b.text());
                        if(h) {
                            h=!1;
                            g.caption="src"===c?b.attr("alt"): b.contents();
                            g.image=g.images[0];
                            g.videoURL=b.attr("data-rsVideo");
                            var d=b.attr("data-rsw"), e=b.attr("data-rsh");
                            "undefined"!==typeof d&&!1!==d&&"undefined"!==typeof e&&!1!==e?(g.iW=parseInt(d, 10), g.iH=parseInt(e, 10)): a.st.imgWidth&&a.st.imgHeight&&(g.iW=a.st.imgWidth, g.iH=a.st.imgHeight)
                        }
                    }
                    var a=this,
                    e,
                    g= {},
                    d,
                    h=!0;
                    b=n(b);
                    a._k2=b;
                    a.ev.trigger("rsBeforeParseNode",
                    [b,
                    g]);
                    if(!g.stopParsing)return b=a._k2,
                    g.id=a._r,
                    g.contentAdded=!1,
                    a._r++,
                    g.images=[],
                    g.isBig=!1,
                    g.hasCover||(b.hasClass("rsImg")?(d=b,
                    e=!0):(d=b.find(".rsImg"),
                    d.length&&(e=!0)),
                    e?(g.bigImage=d.eq(0).attr("data-rsBigImg"),
                    d.each(function() {
                        var a=n(this);
                        a.is("a")?c(a, "href"): a.is("img")?c(a, "src"): c(a)
                    }
                    )):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),
                    c(b,
                    "src"))),
                    d=b.find(".rsCaption"),
                    d.length&&(g.caption=d.remove()),
                    g.content=b,
                    a.ev.trigger("rsAfterParseNode",
                    [b,
                    g]),
                    f&&a.slides.push(g),
                    0===g.images.length&&(g.isLoaded=!0,
                    g.isRendered=!1,
                    g.isLoading=!1,
                    g.images=null),
                    g
                }
                ,
                _b2:function() {
                    var b=this, f, c, a=function(a) {
                        37===a?b.prev(): 39===a&&b.next()
                    }
                    ;
                    b._b.on("keydown"+b.ns,
                    function(e) {
                        if(!b.st.keyboardNavEnabled)return!0;
                        if(!(b._l2||(c=e.keyCode, 37!==c&&39!==c||f))) {
                            if(document.activeElement&&/(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName))return!0;
                            b.isFullscreen&&e.preventDefault();
                            a(c);
                            f=setInterval(function() {
                                a(c)
                            }
                            ,
                            700)
                        }
                    }
                    ).on("keyup"+b.ns,
                    function(a) {
                        f&&(clearInterval(f), f=null)
                    }
                    )
                }
                ,
                goTo:function(b,
                f) {
                    b!==this.currSlideId&&this._m2(b, this.st.transitionSpeed, !0, !f)
                }
                ,
                destroy:function(b) {
                    this.ev.trigger("rsBeforeDestroy");
                    this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);
                    this._p1.off(this._j1+" click");
                    this.slider.data("royalSlider", null);
                    n.removeData(this.slider, "royalSlider");
                    n(window).off("resize"+this.ns);
                    this.loadingTimeout&&clearTimeout(this.loadingTimeout);
                    b&&this.slider.remove();
                    this.ev=this.slider=this.slides=null
                }
                ,
                _n2:function(b,
                f) {
                    function c(c, f, g) {
                        c.isAdded?(a(f, c), e(f, c)): (g||(g=d.slidesJQ[f]), c.holder?g=c.holder: (g=d.slidesJQ[f]=n(g), c.holder=g), c.appendOnLoaded=!1, e(f, c, g), a(f, c), d._p2(c, g, b), c.isAdded=!0)
                    }
                    function a(a,
                    c) {
                        c.contentAdded||(d.setItemHtml(c, b), b||(c.contentAdded=!0))
                    }
                    function e(a,
                    b,
                    c) {
                        d._l&&(c||(c=d.slidesJQ[a]), c.css(d._i, (a+d._d1+p)*d._w))
                    }
                    function g(a) {
                        if(l) {
                            if(a>q-1)return g(a-q);
                            if(0>a)return g(q+a)
                        }
                        return a
                    }
                    var d=this,
                    h,
                    k,
                    l=d._z,
                    q=d.numSlides;
                    if(!isNaN(f))return g(f);
                    var m=d.currSlideId,
                    p,
                    r=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,
                    t=Math.min(2,
                    r),
                    w=!1,
                    v=!1,
                    u;
                    for(k=m;
                    k<m+1+t;
                    k++)if(u=g(k),
                    (h=d.slides[u])&&(!h.isAdded||!h.positionSet)) {
                        w=!0;
                        break
                    }
                    for(k=m-1;
                    k>m-1-t;
                    k--)if(u=g(k),
                    (h=d.slides[u])&&(!h.isAdded||!h.positionSet)) {
                        v=!0;
                        break
                    }
                    if(w)for(k=m;
                    k<m+r+1;
                    k++)u=g(k),
                    p=Math.floor((d._u-(m-k))/d.numSlides)*d.numSlides,
                    (h=d.slides[u])&&c(h,
                    u);
                    if(v)for(k=m-1;
                    k>m-1-r;
                    k--)u=g(k),
                    p=Math.floor((d._u-(m-k))/q)*q,
                    (h=d.slides[u])&&c(h,
                    u);
                    if(!b)for(t=g(m-r),
                    m=g(m+r),
                    r=t>m?0:t,
                    k=0;
                    k<q;
                    k++)t>m&&k>t-1||!(k<r||k>m)||(h=d.slides[k])&&h.holder&&(h.holder.detach(),
                    h.isAdded=!1)
                }
                ,
                setItemHtml:function(b,
                f) {
                    var c=this, a=function() {
                        if(!b.images)b.isRendered=!0, b.isLoaded=!0, b.isLoading=!1, d(!0);
                        else if(!b.isLoading) {
                            var a, f;
                            b.content.hasClass("rsImg")?(a=b.content, f=!0): a=b.content.find(".rsImg:not(img)");
                            a&&!a.is("img")&&a.each(function() {
                                var a=n(this), c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"): a.text())+'" />';
                                f?b.content=n(c): a.replaceWith(c)
                            }
                            );
                            a=f?b.content:b.content.find("img.rsImg");
                            k();
                            a.eq(0).addClass("rsMainSlideImage");
                            b.iW&&b.iH&&(b.isLoaded||c._q2(b),
                            d());
                            b.isLoading=!0;
                            if(b.isBig)n("<img />").on("load.rs error.rs",
                            function(a) {
                                n(this).off("load.rs error.rs");
                                e([this], !0)
                            }
                            ).attr("src",
                            b.image);
                            else {
                                b.loaded=[];
                                b.numStartedLoad=0;
                                a=function(a) {
                                    n(this).off("load.rs error.rs");
                                    b.loaded.push(this);
                                    b.loaded.length===b.numStartedLoad&&e(b.loaded, !1)
                                }
                                ;
                                for(var g=0;
                                g<b.images.length;
                                g++) {
                                    var h=n("<img />");
                                    b.numStartedLoad++;
                                    h.on("load.rs error.rs", a).attr("src", b.images[g])
                                }
                            }
                        }
                    }
                    ,
                    e=function(a,
                    c) {
                        if(a.length) {
                            var d=a[0];
                            if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&l();
                            else if(b.iW&&b.iH)g();
                            else if(b.iW=d.width, b.iH=d.height, b.iW&&b.iH)g();
                            else {
                                var e=new Image;
                                e.onload=function() {
                                    e.width?(b.iW=e.width, b.iH=e.height, g()): setTimeout(function() {
                                        e.width&&(b.iW=e.width, b.iH=e.height);
                                        g()
                                    }
                                    ,
                                    1E3)
                                }
                                ;
                                e.src=d.src
                            }
                        }
                        else g()
                    }
                    ,
                    g=function() {
                        b.isLoaded=!0;
                        b.isLoading=!1;
                        d();
                        l();
                        h()
                    }
                    ,
                    d=function() {
                        if(!b.isAppended&&c.ev) {
                            var a=c.st.visibleNearby, d=b.id-c._o;
                            f||b.appendOnLoaded||!c.st.fadeinLoadedSlide||0!==d&&(!(a||c._r2||c._l2)||-1!==d&&1!==d)||(a= {
                                visibility: "visible", opacity: 0
                            }
                            ,
                            a[c._g+"transition"]="opacity 400ms ease-in-out",
                            b.content.css(a),
                            setTimeout(function() {
                                b.content.css("opacity", 1)
                            }
                            ,
                            16));
                            b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);
                            b.isAppended=!0;
                            b.isLoaded&&(c._q2(b),
                            h());
                            b.sizeReady||(b.sizeReady=!0,
                            setTimeout(function() {
                                c.ev.trigger("rsMaybeSizeReady", b)
                            }
                            ,
                            100))
                        }
                    }
                    ,
                    h=function() {
                        !b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0, b.holder.trigger("rsAfterContentSet"), c.ev.trigger("rsAfterContentSet", b))
                    }
                    ,
                    k=function() {
                        c.st.usePreloader&&b.holder.html(c._q1.clone())
                    }
                    ,
                    l=function(a) {
                        c.st.usePreloader&&(a=b.holder.find(".rsPreloader"), a.length&&a.remove())
                    }
                    ;
                    b.isLoaded?d():f?!c._l&&b.images&&b.iW&&b.iH?a():(b.holder.isWaiting=!0,
                    k(),
                    b.holder.slideId=-99):a()
                }
                ,
                _p2:function(b,
                f,
                c) {
                    this._p1.append(b.holder);
                    b.appendOnLoaded=!1
                }
                ,
                _g2:function(b,
                f) {
                    var c=this, a, e="touchstart"===b.type;
                    c._s2=e;
                    c.ev.trigger("rsDragStart");
                    if(n(b.target).closest(".rsNoDrag", c._r1).length)return c.dragSuccess=!1, !0;
                    !f&&c._r2&&(c._t2=!0, c._u2());
                    c.dragSuccess=!1;
                    if(c._l2)e&&(c._v2=!0);
                    else {
                        e&&(c._v2=!1);
                        c._w2();
                        if(e) {
                            var g=b.originalEvent.touches;
                            if(g&&0<g.length)a=g[0], 1<g.length&&(c._v2=!0);
                            else return
                        }
                        else b.preventDefault(),
                        a=b,
                        c.pointerEnabled&&(a=a.originalEvent);
                        c._l2=!0;
                        c._b.on(c._k1,
                        function(a) {
                            c._x2(a, f)
                        }
                        ).on(c._l1,
                        function(a) {
                            c._y2(a, f)
                        }
                        );
                        c._z2="";
                        c._a3=!1;
                        c._b3=a.pageX;
                        c._c3=a.pageY;
                        c._d3=c._v=(f?c._e3:c._h)?a.pageX:a.pageY;
                        c._f3=0;
                        c._g3=0;
                        c._h3=f?c._i3:c._p;
                        c._j3=(new Date).getTime();
                        if(e)c._e1.on(c._m1,
                        function(a) {
                            c._y2(a, f)
                        }
                        )
                    }
                }
                ,
                _k3:function(b,
                f) {
                    if(this._l3) {
                        var c=this._m3, a=b.pageX-this._b3, e=b.pageY-this._c3, g=this._h3+a, d=this._h3+e, h=f?this._e3: this._h, g=h?g: d, d=this._z2;
                        this._a3=!0;
                        this._b3=b.pageX;
                        this._c3=b.pageY;
                        "x"===d&&0!==a?this._f3=0<a?1: -1: "y"===d&&0!==e&&(this._g3=0<e?1: -1);
                        d=h?this._b3: this._c3;
                        a=h?a: e;
                        f?g>this._n3?g=this._h3+a*this._n1: g<this._o3&&(g=this._h3+a*this._n1): this._z||(0>=this.currSlideId&&0<d-this._d3&&(g=this._h3+a*this._n1), this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(g=this._h3+a*this._n1));
                        this._h3=g;
                        200<c-this._j3&&(this._j3=c, this._v=d);
                        f?this._q3(this._h3): this._l&&this._p3(this._h3)
                    }
                }
                ,
                _x2:function(b,
                f) {
                    var c=this, a, e="touchmove"===b.type;
                    if(!c._s2||e) {
                        if(e) {
                            if(c._r3)return;
                            var g=b.originalEvent.touches;
                            if(g) {
                                if(1<g.length)return;
                                a=g[0]
                            }
                            else return
                        }
                        else a=b,
                        c.pointerEnabled&&(a=a.originalEvent);
                        c._a3||(c._e&&(f?c._s3:c._p1).css(c._g+c._u1,
                        "0s"),
                        function h() {
                            c._l2&&(c._t3=requestAnimationFrame(h), c._u3&&c._k3(c._u3, f))
                        }
                        ());
                        if(c._l3)b.preventDefault(),
                        c._m3=(new Date).getTime(),
                        c._u3=a;
                        else if(g=f?c._e3:c._h,
                        a=Math.abs(a.pageX-c._b3)-Math.abs(a.pageY-c._c3)-(g?-7:7),
                        7<a) {
                            if(g)b.preventDefault(), c._z2="x";
                            else if(e) {
                                c._v3(b);
                                return
                            }
                            c._l3=!0
                        }
                        else if(-7>a) {
                            if(!g)b.preventDefault(), c._z2="y";
                            else if(e) {
                                c._v3(b);
                                return
                            }
                            c._l3=!0
                        }
                    }
                }
                ,
                _v3:function(b,
                f) {
                    this._r3=!0;
                    this._a3=this._l2=!1;
                    this._y2(b)
                }
                ,
                _y2:function(b,
                f) {
                    function c(a) {
                        return 100>a?100: 500<a?500: a
                    }
                    function a(a,
                    b) {
                        if(e._l||f)h=(-e._u-e._d1)*e._w, k=Math.abs(e._p-h), e._c=k/b, a&&(e._c+=250), e._c=c(e._c), e._x3(h, !1)
                    }
                    var e=this,
                    g,
                    d,
                    h,
                    k;
                    g=-1<b.type.indexOf("touch");
                    if(!e._s2||g)if(e._s2=!1,
                    e.ev.trigger("rsDragRelease"),
                    e._u3=null,
                    e._l2=!1,
                    e._r3=!1,
                    e._l3=!1,
                    e._m3=0,
                    cancelAnimationFrame(e._t3),
                    e._a3&&(f?e._q3(e._h3):e._l&&e._p3(e._h3)),
                    e._b.off(e._k1).off(e._l1),
                    g&&e._e1.off(e._m1),
                    e._i1(),
                    !e._a3&&!e._v2&&f&&e._w3) {
                        var l=n(b.target).closest(".rsNavItem");
                        l.length&&e.goTo(l.index())
                    }
                    else {
                        d=f?e._e3: e._h;
                        if(!e._a3||"y"===e._z2&&d||"x"===e._z2&&!d)if(!f&&e._t2) {
                            e._t2=!1;
                            if(e.st.navigateByClick) {
                                e._i2(e.pointerEnabled?b.originalEvent: b);
                                e.dragSuccess=!0;
                                return
                            }
                            e.dragSuccess=!0
                        }
                        else {
                            e._t2=!1;
                            e.dragSuccess=!1;
                            return
                        }
                        else e.dragSuccess=!0;
                        e._t2=!1;
                        e._z2="";
                        var q=e.st.minSlideOffset;
                        g=g?b.originalEvent.changedTouches[0]:e.pointerEnabled?b.originalEvent:b;
                        var m=d?g.pageX:g.pageY,
                        p=e._d3;
                        g=e._v;
                        var r=e.currSlideId,
                        t=e.numSlides,
                        w=d?e._f3:e._g3,
                        v=e._z;
                        Math.abs(m-p);
                        g=m-g;
                        d=(new Date).getTime()-e._j3;
                        d=Math.abs(g)/d;
                        if(0===w||1>=t)a(!0,
                        d);
                        else {
                            if(!v&&!f)if(0>=r) {
                                if(0<w) {
                                    a(!0, d);
                                    return
                                }
                            }
                            else if(r>=t-1&&0>w) {
                                a(!0, d);
                                return
                            }
                            if(f) {
                                h=e._i3;
                                if(h>e._n3)h=e._n3;
                                else if(h<e._o3)h=e._o3;
                                else {
                                    m=d*d/.006;
                                    l=-e._i3;
                                    p=e._y3-e._z3+e._i3;
                                    0<g&&m>l?(l+=e._z3/(15/(m/d*.003)), d=d*l/m, m=l): 0>g&&m>p&&(p+=e._z3/(15/(m/d*.003)), d=d*p/m, m=p);
                                    l=Math.max(Math.round(d/.003), 50);
                                    h+=m*(0>g?-1: 1);
                                    if(h>e._n3) {
                                        e._a4(h, l, !0, e._n3, 200);
                                        return
                                    }
                                    if(h<e._o3) {
                                        e._a4(h, l, !0, e._o3, 200);
                                        return
                                    }
                                }
                                e._a4(h,
                                l,
                                !0)
                            }
                            else l=function(a) {
                                var b=Math.floor(a/e._w);
                                a-b*e._w>q&&b++;
                                return b
                            }
                            ,
                            p+q<m?0>w?a(!1,
                            d):(l=l(m-p),
                            e._m2(e.currSlideId-l,
                            c(Math.abs(e._p-(-e._u-e._d1+l)*e._w)/d),
                            !1,
                            !0,
                            !0)):p-q>m?0<w?a(!1,
                            d):(l=l(p-m),
                            e._m2(e.currSlideId+l,
                            c(Math.abs(e._p-(-e._u-e._d1-l)*e._w)/d),
                            !1,
                            !0,
                            !0)):a(!1,
                            d)
                        }
                    }
                }
                ,
                _p3:function(b) {
                    b=this._p=b;
                    this._e?this._p1.css(this._x1, this._y1+(this._h?b+this._z1+0: 0+this._z1+b)+this._a2): this._p1.css(this._h?this._x1: this._w1, b)
                }
                ,
                updateSliderSize:function(b) {
                    var f, c;
                    if(this.slider) {
                        if(this.st.autoScaleSlider) {
                            var a=this.st.autoScaleSliderWidth, e=this.st.autoScaleSliderHeight;
                            this.st.autoScaleHeight?(f=this.slider.width(), f!=this.width&&(this.slider.css("height", e/a*f), f=this.slider.width()), c=this.slider.height()): (c=this.slider.height(), c!=this.height&&(this.slider.css("width", a/e*c), c=this.slider.height()), f=this.slider.width())
                        }
                        else f=this.slider.width(),
                        c=this.slider.height();
                        if(b||f!=this.width||c!=this.height) {
                            this.width=f;
                            this.height=c;
                            this._b4=f;
                            this._c4=c;
                            this.ev.trigger("rsBeforeSizeSet");
                            this.ev.trigger("rsAfterSizePropSet");
                            this._e1.css( {
                                width: this._b4, height: this._c4
                            }
                            );
                            this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;
                            this._d4=this.st.imageScalePadding;
                            for(f=0;
                            f<this.slides.length;
                            f++)b=this.slides[f],
                            b.positionSet=!1,
                            b&&b.images&&b.isLoaded&&(b.isRendered=!1,
                            this._q2(b));
                            if(this._e4)for(f=0;
                            f<this._e4.length;
                            f++)b=this._e4[f],
                            b.holder.css(this._i,
                            (b.id+this._d1)*this._w);
                            this._n2();
                            this._l&&(this._e&&this._p1.css(this._g+"transition-duration",
                            "0s"),
                            this._p3((-this._u-this._d1)*this._w));
                            this.ev.trigger("rsOnUpdateNav")
                        }
                        this._j2=this._e1.offset();
                        this._j2=this._j2[this._i]
                    }
                }
                ,
                appendSlide:function(b,
                f) {
                    var c=this._s(b);
                    if(isNaN(f)||f>this.numSlides)f=this.numSlides;
                    this.slides.splice(f, 0, c);
                    this.slidesJQ.splice(f, 0, n('<div style="'+(this._l?"position:absolute;": this._n)+'" class="rsSlide"></div>'));
                    f<=this.currSlideId&&this.currSlideId++;
                    this.ev.trigger("rsOnAppendSlide", [c, f]);
                    this._f4(f);
                    f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")
                }
                ,
                removeSlide:function(b) {
                    var f=this.slides[b];
                    f&&(f.holder&&f.holder.remove(), b<this.currSlideId&&this.currSlideId--, this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [b]), this._f4(b), b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))
                }
                ,
                _f4:function(b) {
                    var f=this;
                    b=f.numSlides;
                    b=0>=f._u?0: Math.floor(f._u/b);
                    f.numSlides=f.slides.length;
                    0===f.numSlides?(f.currSlideId=f._d1=f._u=0, f.currSlide=f._g4=null): f._u=b*f.numSlides+f.currSlideId;
                    for(b=0;
                    b<f.numSlides;
                    b++)f.slides[b].id=b;
                    f.currSlide=f.slides[f.currSlideId];
                    f._r1=f.slidesJQ[f.currSlideId];
                    f.currSlideId>=f.numSlides?f.goTo(f.numSlides-1): 0>f.currSlideId&&f.goTo(0);
                    f._t();
                    f._l&&f._p1.css(f._g+f._u1, "0ms");
                    f._h4&&clearTimeout(f._h4);
                    f._h4=setTimeout(function() {
                        f._l&&f._p3((-f._u-f._d1)*f._w);
                        f._n2();
                        f._l||f._r1.css( {
                            display: "block", opacity: 1
                        }
                        )
                    }
                    ,
                    14);
                    f.ev.trigger("rsOnUpdateNav")
                }
                ,
                _i1:function() {
                    this._f1&&this._l&&(this._g1?this._e1.css("cursor", this._g1): (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
                }
                ,
                _w2:function() {
                    this._f1&&this._l&&(this._h1?this._e1.css("cursor", this._h1): (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
                }
                ,
                next:function(b) {
                    this._m2("next", this.st.transitionSpeed, !0, !b)
                }
                ,
                prev:function(b) {
                    this._m2("prev", this.st.transitionSpeed, !0, !b)
                }
                ,
                _m2:function(b,
                f,
                c,
                a,
                e) {
                    var g=this, d, h, k;
                    g.ev.trigger("rsBeforeMove", [b, a]);
                    k="next"===b?g.currSlideId+1: "prev"===b?g.currSlideId-1: b=parseInt(b, 10);
                    if(!g._z) {
                        if(0>k) {
                            g._i4("left", !a);
                            return
                        }
                        if(k>=g.numSlides) {
                            g._i4("right", !a);
                            return
                        }
                    }
                    g._r2&&(g._u2(!0),
                    c=!1);
                    h=k-g.currSlideId;
                    k=g._o2=g.currSlideId;
                    var l=g.currSlideId+h;
                    a=g._u;
                    var n;
                    g._z?(l=g._n2(!1,
                    l),
                    a+=h):a=l;
                    g._o=l;
                    g._g4=g.slidesJQ[g.currSlideId];
                    g._u=a;
                    g.currSlideId=g._o;
                    g.currSlide=g.slides[g.currSlideId];
                    g._r1=g.slidesJQ[g.currSlideId];
                    var l=g.st.slidesDiff,
                    m=Boolean(0<h);
                    h=Math.abs(h);
                    var p=Math.floor(k/g._y),
                    r=Math.floor((k+(m?l:-l))/g._y),
                    p=(m?Math.max(p,
                    r):Math.min(p,
                    r))*g._y+(m?g._y-1:0);
                    p>g.numSlides-1?p=g.numSlides-1:0>p&&(p=0);
                    k=m?p-k:k-p;
                    k>g._y&&(k=g._y);
                    if(h>k+l)for(g._d1+=(h-(k+l))*(m?-1:1),
                    f*=1.4,
                    k=0;
                    k<g.numSlides;
                    k++)g.slides[k].positionSet=!1;
                    g._c=f;
                    g._n2(!0);
                    e||(n=!0);
                    d=(-a-g._d1)*g._w;
                    n?setTimeout(function() {
                        g._j4=!1;
                        g._x3(d, b, !1, c);
                        g.ev.trigger("rsOnUpdateNav")
                    }
                    ,
                    0):(g._x3(d,
                    b,
                    !1,
                    c),
                    g.ev.trigger("rsOnUpdateNav"))
                }
                ,
                _f2:function() {
                    this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display", "none"), this._d2.css("display", "none")): (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"): this._c2.removeClass("rsArrowDisabled"), this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"): this._d2.removeClass("rsArrowDisabled"))))
                }
                ,
                _x3:function(b,
                f,
                c,
                a,
                e) {
                    function g() {
                        var a;
                        h&&(a=h.data("rsTimeout"))&&(h!==k&&h.css( {
                            opacity: 0, display: "none", zIndex: 0
                        }
                        ),
                        clearTimeout(a),
                        h.data("rsTimeout",
                        ""));
                        if(a=k.data("rsTimeout"))clearTimeout(a),
                        k.data("rsTimeout",
                        "")
                    }
                    var d=this,
                    h,
                    k,
                    l= {};
                    isNaN(d._c)&&(d._c=400);
                    d._p=d._h3=b;
                    d.ev.trigger("rsBeforeAnimStart");
                    d._e?d._l?(d._c=parseInt(d._c,
                    10),
                    c=d._g+d._v1,
                    l[d._g+d._u1]=d._c+"ms",
                    l[c]=a?n.rsCSS3Easing[d.st.easeInOut]:n.rsCSS3Easing[d.st.easeOut],
                    d._p1.css(l),
                    a||!d.hasTouch?setTimeout(function() {
                        d._p3(b)
                    }
                    ,
                    5):d._p3(b)):(d._c=d.st.transitionSpeed,
                    h=d._g4,
                    k=d._r1,
                    k.data("rsTimeout")&&k.css("opacity",
                    0),
                    g(),
                    h&&h.data("rsTimeout",
                    setTimeout(function() {
                        l[d._g+d._u1]="0ms";
                        l.zIndex=0;
                        l.display="none";
                        h.data("rsTimeout", "");
                        h.css(l);
                        setTimeout(function() {
                            h.css("opacity", 0)
                        }
                        ,
                        16)
                    }
                    ,
                    d._c+60)),
                    l.display="block",
                    l.zIndex=d._m,
                    l.opacity=0,
                    l[d._g+d._u1]="0ms",
                    l[d._g+d._v1]=n.rsCSS3Easing[d.st.easeInOut],
                    k.css(l),
                    k.data("rsTimeout",
                    setTimeout(function() {
                        k.css(d._g+d._u1, d._c+"ms");
                        k.data("rsTimeout", setTimeout(function() {
                            k.css("opacity", 1);
                            k.data("rsTimeout", "")
                        }
                        ,
                        20))
                    }
                    ,
                    20))):d._l?(l[d._h?d._x1:d._w1]=b+"px",
                    d._p1.animate(l,
                    d._c,
                    a?d.st.easeInOut:d.st.easeOut)):(h=d._g4,
                    k=d._r1,
                    k.stop(!0,
                    !0).css( {
                        opacity: 0, display: "block", zIndex: d._m
                    }
                    ),
                    d._c=d.st.transitionSpeed,
                    k.animate( {
                        opacity: 1
                    }
                    ,
                    d._c,
                    d.st.easeInOut),
                    g(),
                    h&&h.data("rsTimeout",
                    setTimeout(function() {
                        h.stop(!0, !0).css( {
                            opacity: 0, display: "none", zIndex: 0
                        }
                        )
                    }
                    ,
                    d._c+60)));
                    d._r2=!0;
                    d.loadingTimeout&&clearTimeout(d.loadingTimeout);
                    d.loadingTimeout=e?setTimeout(function() {
                        d.loadingTimeout=null;
                        e.call()
                    }
                    ,
                    d._c+60):setTimeout(function() {
                        d.loadingTimeout=null;
                        d._k4(f)
                    }
                    ,
                    d._c+60)
                }
                ,
                _u2:function(b) {
                    this._r2=!1;
                    clearTimeout(this.loadingTimeout);
                    if(this._l)if(!this._e)this._p1.stop(!0), this._p=parseInt(this._p1.css(this._h?this._x1: this._w1), 10);
                    else {
                        if(!b) {
                            b=this._p;
                            var f=this._h3=this._l4();
                            this._p1.css(this._g+this._u1, "0ms");
                            b!==f&&this._p3(f)
                        }
                    }
                    else 20<this._m?this._m=10:this._m++
                }
                ,
                _l4:function() {
                    var b=window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i, "").split(/, |\)$/g), f=0===b[0].indexOf("matrix3d");
                    return parseInt(b[this._h?f?12: 4: f?13: 5], 10)
                }
                ,
                _m4:function(b,
                f) {
                    return this._e?this._y1+(f?b+this._z1+0: 0+this._z1+b)+this._a2: b
                }
                ,
                _k4:function(b) {
                    this._l||(this._r1.css("z-index", 0), this._m=10);
                    this._r2=!1;
                    this.staticSlideId=this.currSlideId;
                    this._n2();
                    this._n4=!1;
                    this.ev.trigger("rsAfterSlideChange")
                }
                ,
                _i4:function(b,
                f) {
                    var c=this, a=(-c._u-c._d1)*c._w;
                    if(0!==c.numSlides&&!c._r2)if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1: 0, f);
                    else if(c._l) {
                        c._c=200;
                        var e=function() {
                            c._r2=!1
                        }
                        ;
                        c._x3(a+("left"===b?30:-30),
                        "",
                        !1,
                        !0,
                        function() {
                            c._r2=!1;
                            c._x3(a, "", !1, !0, e)
                        }
                        )
                    }
                }
                ,
                _q2:function(b,
                f) {
                    if(!b.isRendered) {
                        var c=b.content, a="rsMainSlideImage", e, g=n.isFunction(this.st.imageAlignCenter)?this.st.imageAlignCenter(b): this.st.imageAlignCenter, d=n.isFunction(this.st.imageScaleMode)?this.st.imageScaleMode(b): this.st.imageScaleMode, h;
                        b.videoURL&&(a="rsVideoContainer", "fill"!==d?e=!0: (h=c, h.hasClass(a)||(h=h.find("."+a)), h.css( {
                            width: "100%", height: "100%"
                        }
                        ),
                        a="rsMainSlideImage"));
                        c.hasClass(a)||(c=c.find("."+a));
                        if(c) {
                            var k=b.iW, l=b.iH;
                            b.isRendered=!0;
                            if("none"!==d||g) {
                                a="fill"!==d?this._d4: 0;
                                h=this._b4-2*a;
                                var q=this._c4-2*a, m, p, r= {};
                                "fit-if-smaller"===d&&(k>h||l>q)&&(d="fit");
                                if("fill"===d||"fit"===d)m=h/k, p=q/l, m="fill"==d?m>p?m: p: "fit"==d?m<p?m: p: 1, k=Math.ceil(k*m, 10), l=Math.ceil(l*m, 10);
                                "none"!==d&&(r.width=k, r.height=l, e&&c.find(".rsImg").css( {
                                    width: "100%", height: "100%"
                                }
                                ));
                                g&&(r.marginLeft=Math.floor((h-k)/2)+a,
                                r.marginTop=Math.floor((q-l)/2)+a);
                                c.css(r)
                            }
                        }
                    }
                }
            }
            ;
            n.rsProto=v.prototype;
            n.fn.royalSlider=function(b) {
                var f=arguments;
                return this.each(function() {
                    var c=n(this);
                    if("object"!==typeof b&&b) {
                        if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c, Array.prototype.slice.call(f, 1))
                    }
                    else c.data("royalSlider")||c.data("royalSlider",
                    new v(c,
                    b))
                }
                )
            }
            ;
            n.fn.royalSlider.defaults= {
                slidesSpacing: 8, startSlideId: 0, loop: !1, loopRewind: !1, numImagesToPreload: 4, fadeinLoadedSlide: !0, slidesOrientation: "horizontal", transitionType: "move", transitionSpeed: 600, controlNavigation: "bullets", controlsInside: !0, arrowsNav: !0, arrowsNavAutoHide: !0, navigateByClick: !0, randomizeSlides: !1, sliderDrag: !0, sliderTouch: !0, keyboardNavEnabled: !1, fadeInAfterLoaded: !0, allowCSS3: !0, allowCSS3OnWebkit: !0, addActiveClass: !1, autoHeight: !1, easeOut: "easeOutSine", easeInOut: "easeInOutSine", minSlideOffset: 10, imageScaleMode: "fit-if-smaller", imageAlignCenter: !0, imageScalePadding: 4, usePreloader: !0, autoScaleSlider: !1, autoScaleSliderWidth: 800, autoScaleSliderHeight: 400, autoScaleHeight: !0, arrowsNavHideOnTouch: !1, globalCaption: !1, slidesDiff: 2
            }
            ;
            n.rsCSS3Easing= {
                easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
            }
            ;
            n.extend(jQuery.easing,
            {
                easeInOutSine: function(b, f, c, a, e) {
                    return-a/2*(Math.cos(Math.PI*f/e)-1)+c
                }
                ,
                easeOutSine:function(b,
                f,
                c,
                a,
                e) {
                    return a*Math.sin(f/e*(Math.PI/2))+c
                }
                ,
                easeOutCubic:function(b,
                f,
                c,
                a,
                e) {
                    return a*((f=f/e-1)*f*f+1)+c
                }
            }
            )
        }
        )(jQuery,
        window);
        (function(c) {
            c.extend(c.rsProto, {
                _i5: function() {
                    var a=this;
                    "bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup", function() {
                        a._j5=!0;
                        a.slider.addClass("rsWithBullets");
                        for(var b='<div class="rsNav rsBullets">', e=0;
                        e<a.numSlides;
                        e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';
                        a._k5=b=c(b+"</div>");
                        a._l5=b.appendTo(a.slider).children();
                        a._k5.on("click.rs", ".rsNavItem", function(b) {
                            a._m5||a.goTo(c(this).index())
                        }
                        )
                    }
                    ),
                    a.ev.on("rsOnAppendSlide",
                    function(b,
                    c,
                    d) {
                        d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'): a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
                        a._l5=a._k5.children()
                    }
                    ),
                    a.ev.on("rsOnRemoveSlide",
                    function(b,
                    c) {
                        var d=a._l5.eq(c);
                        d&&d.length&&(d.remove(), a._l5=a._k5.children())
                    }
                    ),
                    a.ev.on("rsOnUpdateNav",
                    function() {
                        var b=a.currSlideId;
                        a._n5&&a._n5.removeClass("rsNavSelected");
                        b=a._l5.eq(b);
                        b.addClass("rsNavSelected");
                        a._n5=b
                    }
                    ))
                }
            }
            );
            c.rsModules.bullets=c.rsProto._i5
        }
        )(jQuery);
        (function(f) {
            f.extend(f.rsProto, {
                _h6: function() {
                    var a=this;
                    "thumbnails"===a.st.controlNavigation&&(a._i6= {
                        drag: !0, touch: !0, orientation: "horizontal", navigation: !0, arrows: !0, arrowLeft: null, arrowRight: null, spacing: 4, arrowsAutoHide: !1, appendSpan: !1, transitionSpeed: 600, autoCenter: !0, fitInViewport: !0, firstMargin: !0, paddingTop: 0, paddingBottom: 0
                    }
                    ,
                    a.st.thumbs=f.extend( {},
                    a._i6,
                    a.st.thumbs),
                    a._j6=!0,
                    !1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=a.st.thumbs.spacing),
                    a.ev.on("rsBeforeParseNode",
                    function(a,
                    b,
                    c) {
                        b=f(b);
                        c.thumbnail=b.find(".rsTmb").remove();
                        c.thumbnail.length?c.thumbnail=f(document.createElement("div")).append(c.thumbnail).html(): (c.thumbnail=b.attr("data-rsTmb"), c.thumbnail||(c.thumbnail=b.find(".rsImg").attr("data-rsTmb")), c.thumbnail=c.thumbnail?'<img src="'+c.thumbnail+'"/>': "")
                    }
                    ),
                    a.ev.one("rsAfterPropsSetup",
                    function() {
                        a._k6()
                    }
                    ),
                    a._n5=null,
                    a.ev.on("rsOnUpdateNav",
                    function() {
                        var e=f(a._l5[a.currSlideId]);
                        e!==a._n5&&(a._n5&&(a._n5.removeClass("rsNavSelected"), a._n5=null), a._l6&&a._m6(a.currSlideId), a._n5=e.addClass("rsNavSelected"))
                    }
                    ),
                    a.ev.on("rsOnAppendSlide",
                    function(e,
                    b,
                    c) {
                        e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+b.thumbnail+"</div>";
                        a._e&&a._s3.css(a._g+"transition-duration", "0ms");
                        c>=a.numSlides?a._s3.append(e): a._l5.eq(c).before(e);
                        a._l5=a._s3.children();
                        a.updateThumbsSize(!0)
                    }
                    ),
                    a.ev.on("rsOnRemoveSlide",
                    function(e,
                    b) {
                        var c=a._l5.eq(b);
                        c&&(a._e&&a._s3.css(a._g+"transition-duration", "0ms"), c.remove(), a._l5=a._s3.children(), a.updateThumbsSize(!0))
                    }
                    ))
                }
                ,
                _k6:function() {
                    var a=this, e="rsThumbs", b=a.st.thumbs, c="", g, d, h=b.spacing;
                    a._j5=!0;
                    a._e3="vertical"===b.orientation?!1: !0;
                    a._n6=g=h?' style="margin-'+(a._e3?"right": "bottom")+":"+h+'px;"': "";
                    a._i3=0;
                    a._p6=!1;
                    a._m5=!1;
                    a._l6=!1;
                    a._q6=b.arrows&&b.navigation;
                    d=a._e3?"Hor": "Ver";
                    a.slider.addClass("rsWithThumbs rsWithThumbs"+d);
                    c+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';
                    a._o6=b.appendSpan?'<span class="thumbIco"></span>': "";
                    for(var k=0;
                    k<a.numSlides;
                    k++)d=a.slides[k], c+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+"</div>";
                    c=f(c+"</div></div>");
                    g= {};
                    b.paddingTop&&(g[a._e3?"paddingTop": "paddingLeft"]=b.paddingTop);
                    b.paddingBottom&&(g[a._e3?"paddingBottom": "paddingRight"]=b.paddingBottom);
                    c.css(g);
                    a._s3=f(c).find("."+e+"Container");
                    a._q6&&(e+="Arrow", b.arrowLeft?a._r6=b.arrowLeft: (a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'), c.append(a._r6)), b.arrowRight?a._s6=b.arrowRight: (a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'), c.append(a._s6)), a._r6.click(function() {
                        var b=(Math.floor(a._i3/a._t6)+a._u6)*a._t6+a.st.thumbs.firstMargin;
                        a._a4(b>a._n3?a._n3: b)
                    }
                    ),
                    a._s6.click(function() {
                        var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6+a.st.thumbs.firstMargin;
                        a._a4(b<a._o3?a._o3: b)
                    }
                    ),
                    b.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",
                    0),
                    a._s6.css("opacity",
                    0),
                    c.one("mousemove.rsarrowshover",
                    function() {
                        a._l6&&(a._r6.css("opacity", 1), a._s6.css("opacity", 1))
                    }
                    ),
                    c.hover(function() {
                        a._l6&&(a._r6.css("opacity", 1), a._s6.css("opacity", 1))
                    }
                    ,
                    function() {
                        a._l6&&(a._r6.css("opacity", 0), a._s6.css("opacity", 0))
                    }
                    )));
                    a._k5=c;
                    a._l5=a._s3.children();
                    a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",
                    a._e3?"pan-y":"pan-x");
                    a.slider.append(c);
                    a._w3=!0;
                    a._v6=h;
                    b.navigation&&a._e&&a._s3.css(a._g+"transition-property",
                    a._g+"transform");
                    a._k5.on("click.rs",
                    ".rsNavItem",
                    function(b) {
                        a._m5||a.goTo(f(this).index())
                    }
                    );
                    a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",
                    function() {
                        a._w6=a._e3?a._c4: a._b4;
                        a.updateThumbsSize(!0)
                    }
                    );
                    a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs",
                    function(b,
                    c) {
                        a.updateThumbsSize(!0, c)
                    }
                    )
                }
                ,
                updateThumbsSize:function(a,
                e) {
                    var b=this, c=b._l5.first(), f= {}, d=b._l5.length;
                    b._t6=(b._e3?c.outerWidth(): c.outerHeight())+b._v6;
                    b._y3=d*b._t6-b._v6;
                    f[b._e3?"width": "height"]=b._y3+b._v6;
                    b._z3=b._e3?b._k5.width(): void 0!==e?e: b._k5.height();
                    b._w3&&(b.isFullscreen||b.st.thumbs.fitInViewport)&&(b._e3?b._c4=b._w6-b._k5.outerHeight(): b._b4=b._w6-b._k5.outerWidth());
                    b._z3&&(b._o3=-(b._y3-b._z3)-b.st.thumbs.firstMargin, b._n3=b.st.thumbs.firstMargin, b._u6=Math.floor(b._z3/b._t6), b._y3<b._z3?(b.st.thumbs.autoCenter?b._q3((b._z3-b._y3)/2): b._q3(b._n3), b.st.thumbs.arrows&&b._r6&&(b._r6.addClass("rsThumbsArrowDisabled"), b._s6.addClass("rsThumbsArrowDisabled")), b._l6=!1, b._m5=!1, b._k5.off(b._j1)): b.st.thumbs.navigation&&!b._l6&&(b._l6=!0, !b.hasTouch&&b.st.thumbs.drag||b.hasTouch&&b.st.thumbs.touch)&&(b._m5=!0, b._k5.on(b._j1, function(a) {
                        b._g2(a, !0)
                    }
                    )),
                    b._s3.css(f),
                    a&&e&&b._m6(b.currSlideId,
                    !0))
                }
                ,
                setThumbsOrientation:function(a,
                e) {
                    this._w3&&(this.st.thumbs.orientation=a, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e||this.updateSliderSize(!0))
                }
                ,
                _q3:function(a) {
                    this._i3=a;
                    this._e?this._s3.css(this._x1, this._y1+(this._e3?a+this._z1+0: 0+this._z1+a)+this._a2): this._s3.css(this._e3?this._x1: this._w1, a)
                }
                ,
                _a4:function(a,
                e,
                b,
                c,
                g) {
                    var d=this;
                    if(d._l6) {
                        e||(e=d.st.thumbs.transitionSpeed);
                        d._i3=a;
                        d._x6&&clearTimeout(d._x6);
                        d._p6&&(d._e||d._s3.stop(), b=!0);
                        var h= {};
                        d._p6=!0;
                        d._e?(h[d._g+"transition-duration"]=e+"ms", h[d._g+"transition-timing-function"]=b?f.rsCSS3Easing[d.st.easeOut]: f.rsCSS3Easing[d.st.easeInOut], d._s3.css(h), d._q3(a)): (h[d._e3?d._x1: d._w1]=a+"px", d._s3.animate(h, e, b?"easeOutCubic": d.st.easeInOut));
                        c&&(d._i3=c);
                        d._y6();
                        d._x6=setTimeout(function() {
                            d._p6=!1;
                            g&&(d._a4(c, g, !0), g=null)
                        }
                        ,
                        e)
                    }
                }
                ,
                _y6:function() {
                    this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"): this._r6.removeClass("rsThumbsArrowDisabled"), this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"): this._s6.removeClass("rsThumbsArrowDisabled"))
                }
                ,
                _m6:function(a,
                e) {
                    var b=0, c, f=a*this._t6+2*this._t6-this._v6+this._n3, d=Math.floor(this._i3/this._t6);
                    this._l6&&(this._j6&&(e=!0, this._j6=!1), f+this._i3>this._z3?(a===this.numSlides-1&&(b=1), d=-a+this._u6-2+b, c=d*this._t6+this._z3%this._t6+this._v6-this._n3): 0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(c=(-a+1)*this._t6+ this._n3): c=this._n3, c!==this._i3&&(b=void 0===c?this._i3: c, b>this._n3?this._q3(this._n3): b<this._o3?this._q3(this._o3): void 0!==c&&(e?this._q3(c): this._a4(c))), this._y6())
                }
            }
            );
            f.rsModules.thumbnails=f.rsProto._h6
        }
        )(jQuery);
        (function(e) {
            e.extend(e.rsProto, {
                _f6: function() {
                    var a=this;
                    "tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode", function(a, d, b) {
                        d=e(d);
                        b.thumbnail=d.find(".rsTmb").remove();
                        b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html(): (b.thumbnail=d.attr("data-rsTmb"), b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")), b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>': "")
                    }
                    ),
                    a.ev.one("rsAfterPropsSetup",
                    function() {
                        a._g6()
                    }
                    ),
                    a.ev.on("rsOnAppendSlide",
                    function(c,
                    d,
                    b) {
                        b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"): a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");
                        a._l5=a._k5.children()
                    }
                    ),
                    a.ev.on("rsOnRemoveSlide",
                    function(c,
                    d) {
                        var b=a._l5.eq(d);
                        b&&(b.remove(), a._l5=a._k5.children())
                    }
                    ),
                    a.ev.on("rsOnUpdateNav",
                    function() {
                        var c=a.currSlideId;
                        a._n5&&a._n5.removeClass("rsNavSelected");
                        c=a._l5.eq(c);
                        c.addClass("rsNavSelected");
                        a._n5=c
                    }
                    ))
                }
                ,
                _g6:function() {
                    var a=this, c;
                    a._j5=!0;
                    c='<div class="rsNav rsTabs">';
                    for(var d=0;
                    d<a.numSlides;
                    d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";
                    c=e(c+"</div>");
                    a._k5=c;
                    a._l5=c.children(".rsNavItem");
                    a.slider.append(c);
                    a._k5.click(function(b) {
                        b=e(b.target).closest(".rsNavItem");
                        b.length&&a.goTo(b.index())
                    }
                    )
                }
            }
            );
            e.rsModules.tabs=e.rsProto._f6
        }
        )(jQuery);
        (function(c) {
            c.extend(c.rsProto, {
                _q5: function() {
                    var a=this;
                    a._r5= {
                        enabled: !1, keyboardNav: !0, buttonFS: !0, nativeFS: !1, doubleTap: !0
                    }
                    ;
                    a.st.fullscreen=c.extend( {},
                    a._r5,
                    a.st.fullscreen);
                    if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",
                    function() {
                        a._s5()
                    }
                    )
                }
                ,
                _s5:function() {
                    var a=this;
                    a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;
                    if(a.st.fullscreen.nativeFS) {
                        var b= {
                            supportsFullScreen: !1, isFullScreen: function() {
                                return!1
                            }
                            ,
                            requestFullScreen:function() {},
                            cancelFullScreen:function() {},
                            fullScreenEventName:"",
                            prefix:""
                        }
                        ,
                        d=["webkit",
                        "moz",
                        "o",
                        "ms",
                        "khtml"];
                        if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;
                        else for(var e=0,
                        f=d.length;
                        e<f;
                        e++)if(b.prefix=d[e],
                        "undefined"!=typeof document[b.prefix+"CancelFullScreen"]) {
                            b.supportsFullScreen=!0;
                            break
                        }
                        b.supportsFullScreen?(a.nativeFS=!0,
                        b.fullScreenEventName=b.prefix+"fullscreenchange"+a.ns,
                        b.isFullScreen=function() {
                            switch(this.prefix) {
                                case"": return document.fullScreen;
                                case"webkit": return document.webkitIsFullScreen;
                                default: return document[this.prefix+"FullScreen"]
                            }
                        }
                        ,
                        b.requestFullScreen=function(a) {
                            return""===this.prefix?a.requestFullScreen(): a[this.prefix+"RequestFullScreen"]()
                        }
                        ,
                        b.cancelFullScreen=function(a) {
                            return""===this.prefix?document.cancelFullScreen(): document[this.prefix+"CancelFullScreen"]()
                        }
                        ,
                        a._u5=b):a._u5=!1
                    }
                    a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",
                    function() {
                        a.isFullscreen?a.exitFullscreen(): a.enterFullscreen()
                    }
                    ))
                }
                ,
                enterFullscreen:function(a) {
                    var b=this;
                    if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);
                    else {
                        b._b.on(b._u5.fullScreenEventName, function(a) {
                            b._u5.isFullScreen()?b.enterFullscreen(!0): b.exitFullscreen(!0)
                        }
                        );
                        b._u5.requestFullScreen(c("html")[0]);
                        return
                    }
                    if(!b._w5) {
                        b._w5=!0;
                        b._b.on("keyup"+b.ns+"fullscreen", function(a) {
                            27===a.keyCode&&b.exitFullscreen()
                        }
                        );
                        b._t5&&b._b2();
                        a=c(window);
                        b._x5=a.scrollTop();
                        b._y5=a.scrollLeft();
                        b._z5=c("html").attr("style");
                        b._a6=c("body").attr("style");
                        b._b6=b.slider.attr("style");
                        c("body, html").css( {
                            overflow: "hidden", height: "100%", width: "100%", margin: "0", padding: "0"
                        }
                        );
                        b.slider.addClass("rsFullscreen");
                        var d;
                        for(d=0;
                        d<b.numSlides;
                        d++)a=b.slides[d],
                        a.isRendered=!1,
                        a.bigImage&&(a.isBig=!0,
                        a.isMedLoaded=a.isLoaded,
                        a.isMedLoading=a.isLoading,
                        a.medImage=a.image,
                        a.medIW=a.iW,
                        a.medIH=a.iH,
                        a.slideId=-99,
                        a.bigImage!==a.medImage&&(a.sizeType="big"),
                        a.isLoaded=a.isBigLoaded,
                        a.isLoading=!1,
                        a.image=a.bigImage,
                        a.images[0]=a.bigImage,
                        a.iW=a.bigIW,
                        a.iH=a.bigIH,
                        a.isAppended=a.contentAdded=!1,
                        b._c6(a));
                        b.isFullscreen=!0;
                        b._w5=!1;
                        b.updateSliderSize();
                        b.ev.trigger("rsEnterFullscreen")
                    }
                }
                ,
                exitFullscreen:function(a) {
                    var b=this;
                    if(b._u5) {
                        if(!a) {
                            b._u5.cancelFullScreen(c("html")[0]);
                            return
                        }
                        b._b.off(b._u5.fullScreenEventName)
                    }
                    if(!b._w5) {
                        b._w5=!0;
                        b._b.off("keyup"+b.ns+"fullscreen");
                        b._t5&&b._b.off("keydown"+b.ns);
                        c("html").attr("style", b._z5||"");
                        c("body").attr("style", b._a6||"");
                        var d;
                        for(d=0;
                        d<b.numSlides;
                        d++)a=b.slides[d], a.isRendered=!1, a.bigImage&&(a.isBig=!1, a.slideId=-99, a.isBigLoaded=a.isLoaded, a.isBigLoading=a.isLoading, a.bigImage=a.image, a.bigIW=a.iW, a.bigIH=a.iH, a.isLoaded=a.isMedLoaded, a.isLoading=!1, a.image=a.medImage, a.images[0]=a.medImage, a.iW=a.medIW, a.iH=a.medIH, a.isAppended=a.contentAdded=!1, b._c6(a, !0), a.bigImage!==a.medImage&&(a.sizeType="med"));
                        b.isFullscreen=!1;
                        a=c(window);
                        a.scrollTop(b._x5);
                        a.scrollLeft(b._y5);
                        b._w5=!1;
                        b.slider.removeClass("rsFullscreen");
                        b.updateSliderSize();
                        setTimeout(function() {
                            b.updateSliderSize()
                        }
                        ,
                        1);
                        b.ev.trigger("rsExitFullscreen")
                    }
                }
                ,
                _c6:function(a,
                b) {
                    var d=a.isLoaded||a.isLoading?'<img class="rsImg rsMainSlideImage" src="'+ a.image+'"/>': '<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>';
                    a.content.hasClass("rsImg")?a.content=c(d): a.content.find(".rsImg").eq(0).replaceWith(d);
                    a.isLoaded||a.isLoading||!a.holder||a.holder.html(a.content)
                }
            }
            );
            c.rsModules.fullscreen=c.rsProto._q5
        }
        )(jQuery);
        (function(b) {
            b.extend(b.rsProto, {
                _x4: function() {
                    var a=this, d;
                    a._y4= {
                        enabled: !1, stopAtAction: !0, pauseOnHover: !0, delay: 2E3
                    }
                    ;
                    !a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);
                    a.st.autoPlay=b.extend( {},
                    a._y4,
                    a.st.autoPlay);
                    a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",
                    function(a,
                    c,
                    f) {
                        c=b(c);
                        if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d, 10)
                    }
                    ),
                    a.ev.one("rsAfterInit",
                    function() {
                        a._z4()
                    }
                    ),
                    a.ev.on("rsBeforeDestroy",
                    function() {
                        a.stopAutoPlay();
                        a.slider.off("mouseenter mouseleave");
                        b(window).off("blur"+ a.ns+" focus"+a.ns)
                    }
                    ))
                }
                ,
                _z4:function() {
                    var a=this;
                    a.startAutoPlay();
                    a.ev.on("rsAfterContentSet", function(b, e) {
                        a._l2||a._r2||!a._a5||e!==a.currSlide||a._b5()
                    }
                    );
                    a.ev.on("rsDragRelease",
                    function() {
                        a._a5&&a._c5&&(a._c5=!1, a._b5())
                    }
                    );
                    a.ev.on("rsAfterSlideChange",
                    function() {
                        a._a5&&a._c5&&(a._c5=!1, a.currSlide.isLoaded&&a._b5())
                    }
                    );
                    a.ev.on("rsDragStart",
                    function() {
                        a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay(): (a._c5=!0, a._d5()))
                    }
                    );
                    a.ev.on("rsBeforeMove",
                    function(b,
                    e,
                    c) {
                        a._a5&&(c&&a.st.autoPlay.stopAtAction?a.stopAutoPlay(): (a._c5=!0, a._d5()))
                    }
                    );
                    a._e5=!1;
                    a.ev.on("rsVideoStop",
                    function() {
                        a._a5&&(a._e5=!1, a._b5())
                    }
                    );
                    a.ev.on("rsVideoPlay",
                    function() {
                        a._a5&&(a._c5=!1, a._d5(), a._e5=!0)
                    }
                    );
                    b(window).on("blur"+a.ns,
                    function() {
                        a._a5&&(a._c5=!0, a._d5())
                    }
                    ).on("focus"+a.ns,
                    function() {
                        a._a5&&a._c5&&(a._c5=!1, a._b5())
                    }
                    );
                    a.st.autoPlay.pauseOnHover&&(a._f5=!1,
                    a.slider.hover(function() {
                        a._a5&&(a._c5=!1, a._d5(), a._f5=!0)
                    }
                    ,
                    function() {
                        a._a5&&(a._f5=!1, a._b5())
                    }
                    ))
                }
                ,
                toggleAutoPlay:function() {
                    this._a5?this.stopAutoPlay(): this.startAutoPlay()
                }
                ,
                startAutoPlay:function() {
                    this._a5=!0;
                    this.currSlide.isLoaded&&this._b5()
                }
                ,
                stopAutoPlay:function() {
                    this._e5=this._f5=this._c5=this._a5=!1;
                    this._d5()
                }
                ,
                _b5:function() {
                    var a=this;
                    a._f5||a._e5||(a._g5=!0, a._h5&&clearTimeout(a._h5), a._h5=setTimeout(function() {
                        var b;
                        a._z||a.st.loopRewind||(b=!0, a.st.loopRewind=!0);
                        a.next(!0);
                        b&&(a.st.loopRewind=!1)
                    }
                    ,
                    a.currSlide.customDelay?a.currSlide.customDelay:a.st.autoPlay.delay))
                }
                ,
                _d5:function() {
                    this._f5||this._e5||(this._g5=!1, this._h5&&(clearTimeout(this._h5), this._h5=null))
                }
            }
            );
            b.rsModules.autoplay=b.rsProto._x4
        }
        )(jQuery);
        (function(f) {
            f.extend(f.rsProto, {
                _z6: function() {
                    var a=this;
                    a._a7= {
                        autoHideArrows: !0, autoHideControlNav: !1, autoHideBlocks: !1, autoHideCaption: !1, disableCSS3inFF: !0, youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>', vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                    }
                    ;
                    a.st.video=f.extend( {},
                    a._a7,
                    a.st.video);
                    a.ev.on("rsBeforeSizeSet",
                    function() {
                        a._b7&&setTimeout(function() {
                            var b=a._r1, b=b.hasClass("rsVideoContainer")?b: b.find(".rsVideoContainer");
                            a._c7&&a._c7.css( {
                                width: b.width(), height: b.height()
                            }
                            )
                        }
                        ,
                        32)
                    }
                    );
                    var d=a._a.mozilla;
                    a.ev.on("rsAfterParseNode",
                    function(b,
                    c,
                    e) {
                        b=f(c);
                        if(e.videoURL) {
                            a.st.video.disableCSS3inFF&&d&&(a._e=a._f=!1);
                            c=f('<div class="rsVideoContainer"></div>');
                            var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                            b.hasClass("rsImg")?e.content=c.append(b).append(g): e.content.find(".rsImg").wrap(c).after(g)
                        }
                    }
                    );
                    a.ev.on("rsAfterSlideChange",
                    function() {
                        a.stopVideo()
                    }
                    )
                }
                ,
                toggleVideo:function() {
                    return this._b7?this.stopVideo(): this.playVideo()
                }
                ,
                playVideo:function() {
                    var a=this;
                    if(!a._b7) {
                        var d=a.currSlide;
                        if(!d.videoURL)return!1;
                        a._d7=d;
                        var b=a._e7=d.content, d=d.videoURL, c, e;
                        d.match(/youtu\.be/i)||d.match(/youtube\.com/i)?(e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (e=d.match(e))&&11==e[7].length&&(c=e[7]), void 0!==c&&(a._c7=a.st.video.youTubeCode.replace("%id%", c))): d.match(/vimeo\.com/i)&&(e=/(www\.)?vimeo.com\/(\d+)($|\/)/, (e=d.match(e))&&(c=e[2]), void 0!==c&&(a._c7=a.st.video.vimeoCode.replace("%id%", c)));
                        a.videoObj=f(a._c7);
                        a.ev.trigger("rsOnCreateVideoElement", [d]);
                        a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), a._c7.find(".rsPreloader").after(a.videoObj), b=b.hasClass("rsVideoContainer")?b: b.find(".rsVideoContainer"), a._c7.css( {
                            width: b.width(), height: b.height()
                        }
                        ).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",
                        function(b) {
                            a.stopVideo();
                            b.preventDefault();
                            b.stopPropagation();
                            return!1
                        }
                        ),
                        b.append(a._c7),
                        a.isIPAD&&b.addClass("rsIOSVideo"),
                        a._f7(!1),
                        setTimeout(function() {
                            a._c7.addClass("rsVideoActive")
                        }
                        ,
                        10),
                        a.ev.trigger("rsVideoPlay"),
                        a._b7=!0);
                        return!0
                    }
                    return!1
                }
                ,
                stopVideo:function() {
                    var a=this;
                    return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(), a._f7(!0), setTimeout(function() {
                        a.ev.trigger("rsOnDestroyVideoElement", [a.videoObj]);
                        var d=a._c7.find("iframe");
                        if(d.length)try {
                            d.attr("src", "")
                        }
                        catch(b) {}a._c7.remove();
                        a._c7=null
                    }
                    ,
                    16),
                    a.ev.trigger("rsVideoStop"),
                    a._b7=!1,
                    !0):!1
                }
                ,
                _f7:function(a,
                d) {
                    var b=[], c=this.st.video;
                    c.autoHideArrows&&(this._c2&&(b.push(this._c2, this._d2), this._e2=!a), this._v5&&b.push(this._v5));
                    c.autoHideControlNav&&this._k5&&b.push(this._k5);
                    c.autoHideBlocks&&this._d7.animBlocks&&b.push(this._d7.animBlocks);
                    c.autoHideCaption&&this.globalCaption&&b.push(this.globalCaption);
                    this.slider[a?"removeClass": "addClass"]("rsVideoPlaying");
                    if(b.length)for(c=0;
                    c<b.length;
                    c++)a?b[c].removeClass("rsHidden"): b[c].addClass("rsHidden")
                }
            }
            );
            f.rsModules.video=f.rsProto._z6
        }
        )(jQuery);
        (function(l) {
            l.extend(l.rsProto, {
                _p4: function() {
                    function m() {
                        var g=a.currSlide;
                        if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g) {
                            if(0<a._s4.length) {
                                for(b=0;
                                b<a._s4.length;
                                b++)clearTimeout(a._s4[b]);
                                a._s4=[]
                            }
                            if(0<a._r4.length) {
                                var f;
                                for(b=0;
                                b<a._r4.length;
                                b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1, "0s"), f.block.css(f.css)): f.block.stop(!0).css(f.css), a._t4=null, g.animBlocksDisplayed=!1;
                                a._r4=[]
                            }
                            g.animBlocks&&(g.animBlocksDisplayed=!0,
                            a._t4=g,
                            a._u4(g.animBlocks))
                        }
                    }
                    var a=this,
                    b;
                    a._q4= {
                        fadeEffect: !0, moveEffect: "top", moveOffset: 20, speed: 400, easing: "easeOutSine", delay: 200
                    }
                    ;
                    a.st.block=l.extend( {},
                    a._q4,
                    a.st.block);
                    a._r4=[];
                    a._s4=[];
                    a.ev.on("rsAfterInit",
                    function() {
                        m()
                    }
                    );
                    a.ev.on("rsBeforeParseNode",
                    function(a,
                    b,
                    d) {
                        b=l(b);
                        d.animBlocks=b.find(".rsABlock").css("display", "none");
                        d.animBlocks.length||(b.hasClass("rsABlock")?d.animBlocks=b.css("display", "none"): d.animBlocks=!1)
                    }
                    );
                    a.ev.on("rsAfterContentSet",
                    function(b,
                    f) {
                        f.id===a.slides[a.currSlideId].id&&setTimeout(function() {
                            m()
                        }
                        ,
                        a.st.fadeinLoadedSlide?300:0)
                    }
                    );
                    a.ev.on("rsAfterSlideChange",
                    function() {
                        m()
                    }
                    )
                }
                ,
                _v4:function(l,
                a) {
                    setTimeout(function() {
                        l.css(a)
                    }
                    ,
                    6)
                }
                ,
                _u4:function(m) {
                    var a=this, b, g, f, d, h, e, n;
                    a._s4=[];
                    m.each(function(m) {
                        b=l(this);
                        g= {};
                        f= {};
                        d=null;
                        var c=b.attr("data-move-offset"), c=c?parseInt(c, 10): a.st.block.moveOffset;
                        if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(), "none"===e?e=!1: "left"!==e&&"top"!==e&&"bottom"!==e&&"right"!==e&&(e=a.st.block.moveEffect, "none"===e&&(e=!1))): e=a.st.block.moveEffect, e&&"none"!==e)) {
                            var p;
                            p="right"===e||"left"===e?!0: !1;
                            var k;
                            n=!1;
                            a._e?(k=0, h=a._x1): (p?isNaN(parseInt(b.css("right"), 10))?h="left": (h="right", n=!0): isNaN(parseInt(b.css("bottom"), 10))?h="top": (h="bottom", n=!0), h="margin-"+h, n&&(c=-c), a._e?k=parseInt(b.css(h), 10): (k=b.data("rs-start-move-prop"), void 0===k&&(k=parseInt(b.css(h), 10), isNaN(k)&&(k=0), b.data("rs-start-move-prop", k))));
                            f[h]=a._m4("top"===e||"left"===e?k-c: k+c, p);
                            g[h]=a._m4(k, p)
                        }
                        c=b.attr("data-fade-effect");
                        if(!c)c=a.st.block.fadeEffect;
                        else if("none"===c.toLowerCase()||"false"===c.toLowerCase())c=!1;
                        c&&(f.opacity=0,
                        g.opacity=1);
                        if(c||e)d= {},
                        d.hasFade=Boolean(c),
                        Boolean(e)&&(d.moveProp=h,
                        d.hasMove=!0),
                        d.speed=b.data("speed"),
                        isNaN(d.speed)&&(d.speed=a.st.block.speed),
                        d.easing=b.data("easing"),
                        d.easing||(d.easing=a.st.block.easing),
                        d.css3Easing=l.rsCSS3Easing[d.easing],
                        d.delay=b.data("delay"),
                        isNaN(d.delay)&&(d.delay=a.st.block.delay*m);
                        c= {};
                        a._e&&(c[a._g+a._u1]="0ms");
                        c.moveProp=g.moveProp;
                        c.opacity=g.opacity;
                        c.display="none";
                        a._r4.push( {
                            block: b, css: c
                        }
                        );
                        a._v4(b,
                        f);
                        a._s4.push(setTimeout(function(b,
                        d,
                        c,
                        e) {
                            return function() {
                                b.css("display", "block");
                                if(c) {
                                    var g= {};
                                    if(a._e) {
                                        var f="";
                                        c.hasMove&&(f+=c.moveProp);
                                        c.hasFade&&(c.hasMove&&(f+=", "), f+="opacity");
                                        g[a._g+a._t1]=f;
                                        g[a._g+a._u1]=c.speed+"ms";
                                        g[a._g+a._v1]=c.css3Easing;
                                        b.css(g);
                                        setTimeout(function() {
                                            b.css(d)
                                        }
                                        ,
                                        24)
                                    }
                                    else setTimeout(function() {
                                        b.animate(d, c.speed, c.easing)
                                    }
                                    ,
                                    16)
                                }
                                delete a._s4[e]
                            }
                        }
                        (b,
                        g,
                        d,
                        m),
                        6>=d.delay?12:d.delay))
                    }
                    )
                }
            }
            );
            l.rsModules.animatedBlocks=l.rsProto._p4
        }
        )(jQuery);
        (function(b) {
            b.extend(b.rsProto, {
                _w4: function() {
                    var a=this;
                    if(a.st.autoHeight) {
                        var b, c, e, f=!0, d=function(d) {
                            e=a.slides[a.currSlideId];
                            (b=e.holder)&&(c=b.height())&&void 0!==c&&c>(a.st.minAutoHeight||30)&&(a._c4=c, a._e||!d?a._e1.css("height", c): a._e1.stop(!0, !0).animate( {
                                height: c
                            }
                            ,
                            a.st.transitionSpeed),
                            a.ev.trigger("rsAutoHeightChange",
                            c),
                            f&&(a._e&&setTimeout(function() {
                                a._e1.css(a._g+"transition", "height "+a.st.transitionSpeed+"ms ease-in-out")
                            }
                            ,
                            16),
                            f=!1))
                        }
                        ;
                        a.ev.on("rsMaybeSizeReady.rsAutoHeight",
                        function(a,
                        b) {
                            e===b&&d()
                        }
                        );
                        a.ev.on("rsAfterContentSet.rsAutoHeight",
                        function(a,
                        b) {
                            e===b&&d()
                        }
                        );
                        a.slider.addClass("rsAutoHeight");
                        a.ev.one("rsAfterInit",
                        function() {
                            setTimeout(function() {
                                d(!1);
                                setTimeout(function() {
                                    a.slider.append('<div style="clear:both; float: none;"></div>')
                                }
                                ,
                                16)
                            }
                            ,
                            16)
                        }
                        );
                        a.ev.on("rsBeforeAnimStart",
                        function() {
                            d(!0)
                        }
                        );
                        a.ev.on("rsBeforeSizeSet",
                        function() {
                            setTimeout(function() {
                                d(!1)
                            }
                            ,
                            16)
                        }
                        )
                    }
                }
            }
            );
            b.rsModules.autoHeight=b.rsProto._w4
        }
        )(jQuery);
        (function(b) {
            b.extend(b.rsProto, {
                _d6: function() {
                    var a=this;
                    a.st.globalCaption&&(a.ev.on("rsAfterInit", function() {
                        a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside?a._e1: a.slider);
                        a.globalCaption.html(a.currSlide.caption||"")
                    }
                    ),
                    a.ev.on("rsBeforeAnimStart",
                    function() {
                        a.globalCaption.html(a.currSlide.caption||"")
                    }
                    ))
                }
            }
            );
            b.rsModules.globalCaption=b.rsProto._d6
        }
        )(jQuery);
        (function(c) {
            c.rsProto._o4=function() {
                var b, a=this;
                if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav", function() {
                    b&&clearTimeout(b);
                    b=setTimeout(function() {
                        a._g4&&a._g4.removeClass("rsActiveSlide");
                        a._r1&&a._r1.addClass("rsActiveSlide");
                        b=null
                    }
                    ,
                    50)
                }
                )
            }
            ;
            c.rsModules.activeClass=c.rsProto._o4
        }
        )(jQuery);
        (function(b) {
            b.extend(b.rsProto, {
                _o5: function() {
                    var a=this, h, d, f;
                    a._p5= {
                        enabled: !1, change: !1, prefix: ""
                    }
                    ;
                    a.st.deeplinking=b.extend( {},
                    a._p5,
                    a.st.deeplinking);
                    if(a.st.deeplinking.enabled) {
                        var g=a.st.deeplinking.change, e=a.st.deeplinking.prefix, c="#"+e, k=function() {
                            var a=window.location.hash;
                            return a&&0<a.indexOf(e)&&(a=parseInt(a.substring(c.length), 10), 0<=a)?a-1: -1
                        }
                        ,
                        p=k();
                        -1!==p&&(a.st.startSlideId=p);
                        g&&(b(window).on("hashchange"+a.ns,
                        function(b) {
                            h||(b=k(), 0>b||(b>a.numSlides-1&&(b=a.numSlides-1), a.goTo(b)))
                        }
                        ),
                        a.ev.on("rsBeforeAnimStart",
                        function() {
                            d&&clearTimeout(d);
                            f&&clearTimeout(f)
                        }
                        ),
                        a.ev.on("rsAfterSlideChange",
                        function() {
                            d&&clearTimeout(d);
                            f&&clearTimeout(f);
                            f=setTimeout(function() {
                                h=!0;
                                window.location.replace((""+window.location).split("#")[0]+c+(a.currSlideId+1));
                                d=setTimeout(function() {
                                    h=!1;
                                    d=null
                                }
                                ,
                                60)
                            }
                            ,
                            400)
                        }
                        ));
                        a.ev.on("rsBeforeDestroy",
                        function() {
                            d=f=null;
                            g&&b(window).off("hashchange"+a.ns)
                        }
                        )
                    }
                }
            }
            );
            b.rsModules.deeplinking=b.rsProto._o5
        }
        )(jQuery);
        (function(b,
        a,
        h) {
            function d(a) {
                a=a||location.href;
                return"#"+a.replace(/^[^#]*#?(.*)$/, "$1")
            }
            "$:nomunge";
            var f=document,
            g,
            e=b.event.special,
            c=f.documentMode,
            k="onhashchange"in a&&(c===h||7<c);
            b.fn.hashchange=function(a) {
                return a?this.bind("hashchange", a): this.trigger("hashchange")
            }
            ;
            b.fn.hashchange.delay=50;
            e.hashchange=b.extend(e.hashchange,
            {
                setup: function() {
                    if(k)return!1;
                    b(g.start)
                }
                ,
                teardown:function() {
                    if(k)return!1;
                    b(g.stop)
                }
            }
            );
            g=function() {
                function g() {
                    var f=d(), e=q(l);
                    f!==l?(m(l=f, e), b(a).trigger("hashchange")): e!==l&&(location.href=location.href.replace(/#.*/, "")+e);
                    c=setTimeout(g, b.fn.hashchange.delay)
                }
                var e= {},
                c,
                l=d(),
                n=function(a) {
                    return a
                }
                ,
                m=n,
                q=n;
                e.start=function() {
                    c||g()
                }
                ;
                e.stop=function() {
                    c&&clearTimeout(c);
                    c=h
                }
                ;
                a.attachEvent&&!a.addEventListener&&!k&&function() {
                    var a, c;
                    e.start=function() {
                        a||(c=(c=b.fn.hashchange.src)&&c+d(), a=b('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                            c||m(d());
                            g()
                        }
                        ).attr("src",
                        c||"javascript:0").insertAfter("body")[0].contentWindow,
                        f.onpropertychange=function() {
                            try {
                                "title"===event.propertyName&&(a.document.title=f.title)
                            }
                            catch(b) {}
                        }
                        )
                    }
                    ;
                    e.stop=n;
                    q=function() {
                        return d(a.location.href)
                    }
                    ;
                    m=function(c,
                    e) {
                        var d=a.document, g=b.fn.hashchange.domain;
                        c!==e&&(d.title=f.title, d.open(), g&&d.write('<script>document.domain="'+g+'"\x3c/script>'), d.close(), a.location.hash=c)
                    }
                }
                ();
                return e
            }
            ()
        }
        )(jQuery,
        this);
        (function(d) {
            d.rsProto._g7=function() {
                var a=this;
                a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._h7= {
                    enabled: !0, centerArea: .6, center: !0, breakpoint: 0, breakpointCenterArea: .8, hiddenOverflow: !0, navigateByCenterClick: !1
                }
                ,
                a.st.visibleNearby=d.extend( {},
                a._h7,
                a.st.visibleNearby),
                a.ev.one("rsAfterPropsSetup",
                function() {
                    a._i7=a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
                    a.st.visibleNearby.hiddenOverflow||a._i7.css("overflow", "visible");
                    a._o1=a.st.controlsInside?a._i7: a.slider
                }
                ),
                a.ev.on("rsAfterSizePropSet",
                function() {
                    var b, c=a.st.visibleNearby;
                    b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea: c.centerArea;
                    a._h?(a._b4*=b, a._i7.css( {
                        height: a._c4, width: a._b4/b
                    }
                    ),
                    a._d=a._b4*(1-b)/2/b):(a._c4*=b,
                    a._i7.css( {
                        height: a._c4/b, width: a._b4
                    }
                    ),
                    a._d=a._c4*(1-b)/2/b);
                    c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);
                    c.center&&a._e1.css("margin-"+(a._h?"left":"top"),
                    a._d)
                }
                ))
            }
            ;
            d.rsModules.visibleNearby=d.rsProto._g7
        }
        )(jQuery);
        /*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
        
        !function(t) {
            "use strict";
            t.fn.fitVids=function(e) {
                var i= {
                    customSelector: null, ignore: null
                }
                ;
                if(!document.getElementById("fit-vids-style")) {
                    var r=document.head||document.getElementsByTagName("head")[0], a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}", d=document.createElement("div");
                    d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>", r.appendChild(d.childNodes[1])
                }
                return e&&t.extend(i,
                e),
                this.each(function() {
                    var e=['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                    i.customSelector&&e.push(i.customSelector);
                    var r=".fitvidsignore";
                    i.ignore&&(r=r+", "+i.ignore);
                    var a=t(this).find(e.join(","));
                    a=a.not("object object"), a=a.not(r), a.each(function(e) {
                        var i=t(this);
                        if(!(i.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length)) {
                            i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height", 9), i.attr("width", 16));
                            var a="object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"), 10))?parseInt(i.attr("height"), 10): i.height(), d=isNaN(parseInt(i.attr("width"), 10))?i.width(): parseInt(i.attr("width"), 10), o=a/d;
                            if(!i.attr("id")) {
                                var h="fitvid"+e;
                                i.attr("id", h)
                            }
                            i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",
                            100*o+"%"),
                            i.removeAttr("height").removeAttr("width")
                        }
                    }
                    )
                }
                )
            }
        }
        (window.jQuery||window.Zepto);
        (function($) {
            "use strict";
            var ie=(function() {
                var undef, v=3, div=document.createElement('div'), all=div.getElementsByTagName('i');
                while(div.innerHTML='<!--[if gt IE '+(++v)+']><i></i><![endif]-->', all[0]);
                return v>4?v: 120;
            }
            ());
            if(ie<=9) {
                $('body').append('<div id="max768"></div>');
                $('body').append('<div id="min768max1020"></div>');
                $('body').append('<div id="min767"></div>');
                $('body').append('<div id="max767"></div>');
                $('body').append('<div id="min1021max1140"></div>');
            }
            $(".embed-container, .wrapper.video-wrapper").fitVids( {
                customSelector: "iframe[src*='www.dailymotion.com']"
            }
            );
            function nav_px2em(xnumber) {
                var emSize=parseFloat($('#mh-main-nav ul li').css("font-size"));
                return(parseFloat(xnumber)/emSize);
            }
            function mh_cover_init() {
                var cover_h=$(window).height()-$('#wpadminbar').outerHeight()-$('#mh-mobile-bar').outerHeight();
                var win_width=$(window).width();
                var win_height=$(window).height();
                var el=$('.the-cover:not(.cover_mfw)');
                if(win_width<768) {
                    if(win_height<430) {
                        cover_h=400;
                    }
                    if(!el.hasClass('loaded')) {
                        el.attr('data-w1', win_width);
                        el.attr('data-h1', win_height);
                        el.css('height', cover_h);
                        el.addClass('loaded');
                    }
                    if(el.data('w1')!=win_width) {
                        el.attr('data-w1', win_width);
                    }
                    if(el.data('h1')!=win_height&&el.data('w1')==win_width) {
                        el.attr('data-h1', win_height);
                    }
                }
                else {
                    if(el.hasClass('cover_screen')) {
                        if(win_height<667) {
                            win_height=667;
                        }
                        ;
                        var header=$('#mh-header');
                        var wrap_logo=header.find('.mh-logo-wrap').height();
                        var content_position=win_height-header.height();
                        if(wrap_logo<header.find('.mh-logo-wrap img').attr('height')) {
                            content_position=content_position-(header.find('.mh-logo-wrap img').attr('height')-wrap_logo);
                        }
                        ;
                        if($('body').find('#mh-ads-top').length>0) {
                            win_height+=$('body').find('#mh-ads-top').outerHeight();
                        }
                        ;
                        el.find('.cover-bg').css('height',
                        win_height);
                        el.find('.cover-head-wrap').css('height',
                        content_position);
                    }
                    else if(el.hasClass('cover_full')) {
                        var header=$('#mh-header');
                        var wrap_logo=header.find('.mh-logo-wrap').height();
                        var header_height=header.height();
                        if(wrap_logo<header.find('.mh-logo-wrap img').attr('height')) {
                            header_height=header_height+(header.find('.mh-logo-wrap img').attr('height')-wrap_logo);
                        }
                        ;
                        var cov_height=el.height()+header_height;
                        if(win_height>cov_height) {
                            el.find('.cover-bg').css('height', win_height-cov_height+el.height());
                        }
                        ;
                    }
                    el.css('height',
                    'auto').removeClass('loaded');
                }
            }
            var data_affix= {
                data: {}, remove: function(resurce_id) {
                    delete data_affix.data[resurce_id];
                }
                ,
                get:function(resurce_id) {
                    return data_affix.data[resurce_id];
                }
                ,
                set:function(resurce_id,
                cachedData) {
                    data_affix.remove(resurce_id);
                    data_affix.data[resurce_id]=cachedData;
                }
            }
            ;
            var scroll_top=false;
            var scroll_down=false;
            var last_scroll_top=0;
            var loaded=false;
            function filter_affix() {
                $('.module-affix').each(function(index, value) {
                    var el=$(this);
                    var el_height=el.outerHeight();
                    if(el.closest('.mh-rows').length) {
                        var el_fr_height=el.closest('.mh-rows').children('.mh-col-8').outerHeight();
                    }
                    else if(el.closest('.the-content-wrap').length) {
                        var el_fr_height=el.closest('.the-content-wrap').find('.mh-col-8').outerHeight();
                    }
                    ;
                    if(el_height<=$(window).height()) {
                        el.addClass('mh_affix_to_small');
                    }
                    else {
                        el.removeClass('mh_affix_to_small');
                    }
                    if(el_height>=el_fr_height) {
                        el.removeClass('module-affix');
                    }
                    else {
                        if(!el.hasClass('module-affix')) {
                            el.addClass('module-affix');
                        }
                        ;
                    }
                }
                );
            }
            function affix_element(scrolltop) {
                if(ie<=9) {
                    var check=$('#min768max1020').is(':visible');
                }
                else {
                    var check=Modernizr.mq('(max-width: 768px)');
                }
                if(check) {
                    $('.module-affix').attr('style', '');
                    if(!$('.module-affix').hasClass('module-affix-off')) {
                        $('.module-affix').addClass('module-affix-off').removeClass('module-affix');
                    }
                }
                else {
                    if(!$('.module-affix-off').hasClass('module-affix')) {
                        $('.module-affix-off').addClass('module-affix');
                    }
                }
                if($('.module-affix').length) {
                    var current_scroll=scrolltop;
                    if(current_scroll>last_scroll_top) {
                        scroll_top=false;
                        scroll_down=true;
                    }
                    else {
                        scroll_top=true;
                        scroll_down=false;
                    }
                    last_scroll_top=current_scroll;
                    var tops=$('#mh-main-nav').outerHeight();
                    var tops_small=tops;
                    if($('body').hasClass('admin-bar')) {
                        var admin_height=$('#wpadminbar').outerHeight();
                        tops+=admin_height;
                    }
                    var loop=0;
                    $('.module-affix').each(function(index,
                    value) {
                        var el=$(this);
                        var el_width=el.parent().width();
                        var el_top=el.offset().top;
                        var el_height=el.outerHeight();
                        var window_height=$(window).height();
                        if(el.closest('.mh-rows').length) {
                            var parent_top=el.closest('.mh-rows').find('.mh-col-8').offset().top;
                            var parent_height=el.closest('.mh-rows').find('.mh-col-8').height();
                        }
                        else if(el.closest('.the-content-wrap').length) {
                            var parent_top=el.closest('.the-content-wrap').find('.mh-col-8').offset().top;
                            var parent_height=el.closest('.the-content-wrap').find('.mh-col-8').height();
                        }
                        var fixed_bottom_top=parent_height-el_height;
                        var diff_top=el_top-parent_top;
                        var fixed_tops=0;
                        var absolute_top=0;
                        var small_top=0;
                        var small_top_down=tops_small+'px';
                        var small_top_up=0;
                        var fixed_top_small=0;
                        var abs_bttm_small=0;
                        var static_top_small=0;
                        var nav_height=$('#mh-main-nav').outerHeight();
                        if($('body').hasClass('admin-bar')) {
                            fixed_tops=el_top-nav_height-admin_height;
                            absolute_top=parent_top-tops_small-admin_height;
                            small_top=admin_height+'px';
                            small_top_down=admin_height+tops_small+'px';
                            fixed_top_small=parent_top-admin_height;
                            abs_bttm_small=parent_top+parent_height-el_height-admin_height;
                            static_top_small=parent_top-tops_small-admin_height;
                            small_top_up=el_top+tops_small+admin_height;
                        }
                        else {
                            fixed_tops=el_top-nav_height;
                            absolute_top=parent_top-tops_small;
                            fixed_top_small=parent_top;
                            abs_bttm_small=parent_top+parent_height-el_height;
                            static_top_small=parent_top-tops_small;
                            small_top_up=el_top+tops_small;
                        }
                        if(el.hasClass('mh_affix_to_small')) {
                            if(current_scroll>=(fixed_top_small)&&current_scroll<=(abs_bttm_small)&&!el.hasClass('current-affix')) {
                                el.css( {
                                    'width': el_width+'px', 'top': small_top, 'bottom': 'auto', 'position': 'fixed', 'z-index': '1'
                                }
                                );
                                el.addClass('current-affix');
                            }
                            else if(current_scroll>=(abs_bttm_small)&&el.hasClass('current-affix')) {
                                el.css( {
                                    'width': el_width+'px', 'top': fixed_bottom_top+'px', 'bottom': 'auto', 'position': 'absolute', 'z-index': '1'
                                }
                                );
                                el.removeClass('current-affix');
                            }
                            else if(current_scroll<=(static_top_small)&&el.hasClass('current-affix')) {
                                el.css( {
                                    'width': 'auto', 'top': 'auto', 'bottom': 'auto', 'position': 'relative', 'z-index': '1', 'padding-top': '0'
                                }
                                );
                                el.removeClass('current-affix');
                            }
                        }
                        else if(!el.hasClass('mh_affix_to_small')) {
                            if(current_scroll>=parent_top&&current_scroll<(parent_top+parent_height-window_height)) {
                                if(scroll_top==true) {
                                    if(current_scroll<=(fixed_tops)&&!el.hasClass('current-affix')) {
                                        el.css( {
                                            'width': el_width+'px', 'top': tops+'px', 'bottom': 'auto', 'position': 'fixed', 'z-index': '1', 'padding-top': '0'
                                        }
                                        );
                                        el.addClass('current-affix');
                                        data_affix.set($(this)+'-bottom_of_el-'+loop,
                                        false);
                                        data_affix.set($(this)+'-top_of_el-'+loop,
                                        true);
                                    }
                                    else if(data_affix.get($(this)+'-bottom_of_el-'+loop)==true&&el.hasClass('current-affix')) {
                                        el.css( {
                                            'width': el_width+'px', 'top': diff_top+'px', 'bottom': 'auto', 'position': 'absolute', 'z-index': '1', 'padding-top': '0'
                                        }
                                        );
                                        el.removeClass('current-affix');
                                    }
                                    ;
                                }
                                else {
                                    if(current_scroll>=(el_top+el_height-window_height-30)&&!el.hasClass('current-affix')) {
                                        el.css( {
                                            'width': el_width+'px', 'top': 'auto', 'bottom': '-30px', 'position': 'fixed', 'z-index': '1', 'padding-top': '0'
                                        }
                                        );
                                        el.addClass('current-affix');
                                        data_affix.set($(this)+'-bottom_of_el-'+loop,
                                        true);
                                        data_affix.set($(this)+'-top_of_el-'+loop,
                                        false);
                                    }
                                    else if(data_affix.get($(this)+'-top_of_el-'+loop)==true&&el.hasClass('current-affix')) {
                                        el.css( {
                                            'width': el_width+'px', 'top': diff_top+'px', 'bottom': 'auto', 'position': 'absolute', 'z-index': '1', 'padding-top': '0'
                                        }
                                        );
                                        el.removeClass('current-affix');
                                    }
                                    ;
                                }
                            }
                            else if(current_scroll<=absolute_top&&el.hasClass('current-affix')) {
                                el.css( {
                                    'width': el_width+'px', 'top': 'auto', 'bottom': 'auto', 'position': 'relative', 'z-index': '1', 'padding-top': '0'
                                }
                                );
                                el.removeClass('current-affix');
                            }
                            else if(current_scroll>=(parent_top+parent_height-window_height)&&el.hasClass('current-affix')) {
                                el.css( {
                                    'width': el_width+'px', 'top': fixed_bottom_top+'px', 'bottom': 'auto', 'position': 'absolute', 'z-index': '1', 'padding-top': '0'
                                }
                                );
                                el.removeClass('current-affix');
                            }
                            ;
                        }
                        ;
                        loop++;
                    }
                    );
                }
            }
            var lastScrollTop=0;
            var up=0;
            var up2=0;
            function headerAffix(st) {
                var hg=$('#mh-main-nav').outerHeight();
                var hd=$('#mh-header').outerHeight()-hg+$('#wpadminbar').outerHeight();
                var hg_top=$('#mh-nav').offset().top;
                var hed_height=$('#mh-main-nav').outerHeight();
                if(st<lastScrollTop) {
                    if(!$('#mh-main-nav').hasClass('affix')) {
                        $('#mh-main-nav').addClass('affix');
                    }
                    if($('body').hasClass('admin-bar')) {
                        hg_top=$('#mh-nav').offset().top-$('#wpadminbar').outerHeight();
                    }
                    if(st>hg_top) {
                        if($('#mh-main-nav.affix').length>0) {
                            var sl=lastScrollTop-st;
                            if(up<=(hg*-1))up=hg*-1;
                            up+=sl;
                            if(up>=0)up=0;
                            $('#mh-main-nav').addClass('affix');
                            var topadmin=0;
                            if($('body').hasClass('admin-bar')) {
                                topadmin=$('#wpadminbar').outerHeight();
                            }
                            var up2=up+hed_height;
                            $('.module-affix.mh_affix_to_small.current-affix').css( {
                                'padding-top': up2+'px'
                            }
                            );
                            $('#mh-main-nav.affix').css( {
                                'top': (up+topadmin)+'px'
                            }
                            );
                        }
                    }
                    else {
                        $('#mh-main-nav').removeClass('affix').removeAttr('style');
                        $('.module-affix.mh_affix_to_small.current-affix').css( {
                            'padding-top': '0px'
                        }
                        );
                    }
                }
                else {
                    var sl=st-lastScrollTop;
                    up-=sl;
                    if(st>(hg_top+hg)) {
                        $('#mh-main-nav').addClass('affix');
                        var topadmin=0;
                        if($('body').hasClass('admin-bar')) {
                            topadmin=$('#wpadminbar').outerHeight();
                        }
                        var up2=up+hed_height;
                        if(up2<=0) {
                            up2=0;
                        }
                        ;
                        $('.module-affix.mh_affix_to_small.current-affix').css( {
                            'padding-top': up2+'px'
                        }
                        );
                        $('#mh-main-nav.affix').css( {
                            'top': (up+topadmin)+'px'
                        }
                        );
                    }
                }
                lastScrollTop=st;
            }
            var mh_local_cache= {
                data: {}, remove: function(resurce_id) {
                    delete mh_local_cache.data[resurce_id];
                }
                ,
                exist:function(resurce_id) {
                    return mh_local_cache.data.hasOwnProperty(resurce_id)&&mh_local_cache.data[resurce_id]!==null;
                }
                ,
                get:function(resurce_id) {
                    return mh_local_cache.data[resurce_id];
                }
                ,
                set:function(resurce_id,
                cachedData) {
                    mh_local_cache.remove(resurce_id);
                    mh_local_cache.data[resurce_id]=cachedData;
                }
            }
            ;
            function cat_ajax_get(id,
            catID,
            path,
            per_page) {
                var c=JSON.stringify(id+'x'+per_page);
                if(mh_local_cache.exist(c)) {
                    return jQuery(path).html(mh_local_cache.get(c)).hide().fadeIn();
                }
                jQuery.ajax( {
                    type:'POST', url:mahaAjax.ajaxurl, cache:!0, data: {
                        "action": "load_filter", cat: catID, item: per_page
                    }
                    ,
                    beforeSend:function() {
                        jQuery(path).animate( {
                            'opacity': '0.3'
                        }
                        ,
                        100);
                        var el_loading=jQuery(path).closest('.nav-sub-wrap').find('.mh-mega-menu-loading .mloading');
                        el_loading.addClass('show');
                    }
                    ,
                    success:function(response) {
                        var el_loading=jQuery(path).closest('.nav-sub-wrap').find('.mh-mega-menu-loading .mloading');
                        el_loading.removeClass('show');
                        mh_local_cache.set(c, response);
                        jQuery(path).animate( {
                            'opacity': '1'
                        }
                        ,
                        100);
                        jQuery(path).html(response).hide().fadeIn();
                    }
                    ,
                    error:function() {
                        jQuery(path).html("error");
                    }
                }
                );
            }
            function mtype(module) {
                if(module=='medium_w'||module=='medium_x'||module=='medium_y'||module=='medium_z') {
                    return'medium';
                }
                else if(module=='large_w'||module=='large_x'||module=='large_y'||module=='large_z') {
                    return'large';
                }
                else if(module=='list') {
                    return'list';
                }
                else {
                    return'small';
                }
            }
            function get_module_filter(action,
            key,
            module,
            data,
            path,
            save,
            append) {
                var path_replace=path;
                if(mtype(module)=='large'||mtype(module)=='list') {
                    path_replace=path.children();
                }
                if(save) {
                    var c=JSON.stringify(key);
                    if(mh_local_cache.exist(c)) {
                        path_replace.animate( {
                            'opacity': '0.5'
                        }
                        ,
                        250);
                        path_replace.children().html(mh_local_cache.get(c));
                        path_replace.animate( {
                            'opacity': '1'
                        }
                        ,
                        250);
                        return false;
                    }
                }
                jQuery.ajax( {
                    type:'POST', url:mahaAjax.ajaxurl, cache:!0, data: {
                        "action": action, module: module, data: data
                    }
                    ,
                    beforeSend:function() {
                        if(key.indexOf('-filter-')!==-1) {
                            $(path).closest('.mh-mods').find('.mh-filter-onload').fadeIn();
                            $(path).closest('.mh-module').find('.mh-module-content').animate( {
                                'opacity': '0.5'
                            }
                            ,
                            250);
                        }
                        else {
                            path.animate( {
                                'opacity': '0.5'
                            }
                            ,
                            150);
                            path.parent().find('.mloading').addClass('show');
                            path.parent().find('a.loadmore, .mh-nav-nextprev').fadeOut();
                        }
                    }
                    ,
                    success:function(response) {
                        var response=$(response);
                        if(save) {
                            mh_local_cache.set(c, response);
                        }
                        if(append) {
                            var limit_perpage=-response.length;
                            path_replace.children().append(response);
                        }
                        else {
                            var limit_perpage=0;
                            path_replace.children().html(response);
                        }
                        if(key.indexOf('-filter-')!==-1) {
                            $(path).closest('.mh-mods').find('.mh-filter-onload').fadeOut();
                            $(path).closest('.mh-module').find('.mh-module-content').animate( {
                                'opacity': '1'
                            }
                            ,
                            250);
                            var mod_object='';
                            var med_a=0;
                            if(($(path).closest('.mh-module').hasClass('mh-mod-f'))||($(path).closest('.mh-module').hasClass('mh-mod-e'))) {
                                mod_object='.mh-i-small-wrap';
                            }
                            else if($(path).closest('.mh-module').hasClass('mh-mod-d')||$(path).closest('.mh-module').hasClass('mh-mod-g')||$(path).closest('.mh-module').hasClass('mh-mod-h')||$(path).closest('.mh-module').hasClass('mh-mod-j')) {
                                mod_object='.mh-mod-content > div[class*=mh-col-] > *';
                            }
                            else if($(path).closest('.mh-module').hasClass('mh-mod-i')) {
                                mod_object='.mh-mod-content > .mh-row-i .mh-item-medium';
                            }
                            else if($(path).closest('.mh-module').hasClass('mh-mod-a')||$(path).closest('.mh-module').hasClass('mh-mod-b')) {
                                mod_object='.mh-i-small-wrap';
                                $(path).closest('.mh-module').find('.mh-item-medium').css('opacity', '0');
                                $(path).closest('.mh-module').find('.mh-item-medium').each(function(i, el) {
                                    setTimeout(function() {
                                        $(el).animate( {
                                            'opacity': '1'
                                        }
                                        ,
                                        250);
                                    }
                                    ,
                                    50+(i*50));
                                    med_a+=50;
                                }
                                );
                            }
                            else if($(path).closest('.mh-module').hasClass('mh-mod-c')) {
                                mod_object='.mh-i-small-wrap';
                                $(path).closest('.mh-module').find('.mh-item-wide').css('opacity', '0');
                                $(path).closest('.mh-module').find('.mh-item-wide').each(function(i, el) {
                                    setTimeout(function() {
                                        $(el).animate( {
                                            'opacity': '1'
                                        }
                                        ,
                                        250);
                                    }
                                    ,
                                    50+(i*50));
                                    med_a+=50;
                                }
                                );
                            }
                            ;
                            $(path).closest('.mh-module').find(mod_object).slice(-limit_perpage).css('opacity',
                            '0');
                            $(path).closest('.mh-module').find(mod_object).slice(-limit_perpage).each(function(i,
                            el) {
                                setTimeout(function() {
                                    $(el).animate( {
                                        'opacity': '1'
                                    }
                                    ,
                                    250);
                                }
                                ,
                                50+med_a+(i*50));
                            }
                            );
                        }
                        else {
                            path.animate( {
                                'opacity': '1'
                            }
                            ,
                            150);
                            if(module=='combine') {
                                var t=0;
                                path.find('.mh-mod-content .mh-mod-row').slice(limit_perpage).children().each(function(i, el) {
                                    $(this).children().css('opacity', '0').each(function(s, e) {
                                        setTimeout(function() {
                                            $(e).animate( {
                                                'opacity': '1'
                                            }
                                            ,
                                            250);
                                        }
                                        ,
                                        50+(t*50));
                                        t++;
                                    }
                                    );
                                }
                                );
                            }
                            else {
                                path.find('.mh-mod-content').find('.mh-item-'+mtype(module)).slice(limit_perpage).css('opacity', '0').each(function(i, el) {
                                    setTimeout(function() {
                                        $(el).animate( {
                                            'opacity': '1'
                                        }
                                        ,
                                        250);
                                    }
                                    ,
                                    50+(i*50));
                                }
                                );
                            }
                            path.parent().find('.mloading').removeClass('show');
                            path.parent().find('a.loadmore, .mh-nav-nextprev').fadeIn();
                        }
                    }
                    ,
                    error:function() {
                        console.log('error');
                    }
                }
                );
            }
            function mh_get_mod_post(data,
            path) {
                var wrap=path.closest('.mh-mods');
                jQuery.ajax( {
                    type:'POST', url:mahaAjax.ajaxurl, cache:!0, data: {
                        action: 'mh_get_mod_posts', data: data
                    }
                    ,
                    beforeSend:function() {
                        path.animate( {
                            'opacity': '0.5'
                        }
                        ,
                        250);
                        wrap.find('.load_more a').fadeOut();
                        wrap.find('.load_more .mloading').addClass('show');
                    }
                    ,
                    success:function(response) {
                        response=$(response);
                        var limit_perpage=-response.length;
                        path.append(response);
                        wrap.find('.load_more .mloading').removeClass('show');
                        wrap.find('.load_more a').fadeIn();
                        path.animate( {
                            'opacity': '1'
                        }
                        ,
                        250);
                        path.children().slice(limit_perpage).css('opacity',
                        '0').each(function(i,
                        el) {
                            setTimeout(function() {
                                $(el).animate( {
                                    'opacity': '1'
                                }
                                ,
                                250);
                            }
                            ,
                            50+(i*50));
                        }
                        );
                    }
                    ,
                    error:function() {
                        console.log('error');
                    }
                }
                );
            }
            function myRetina() {
                var isRetina=(window.devicePixelRatio>1||(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches));
                if(isRetina&&($('.mh-logo-wrap a img').attr('data-status')!='ok')&&($('.mh-logo-wrap .mh-data-retina').data('retina'))) {
                    var dataretina=$('.mh-logo-wrap .mh-data-retina').data('retina');
                    var dataheight=$('.mh-logo-wrap .mh-data-retina').data('height');
                    var datawidth=$('.mh-logo-wrap .mh-data-retina').data('width');
                    if(dataretina==$('.mh-logo a img').attr('src')) {
                        if(($(window).width()<767)||($(window).width()>991)) {
                            $('.mh-logo-wrap a img').attr('width', datawidth/2);
                            $('.mh-logo-wrap a img').attr('height', dataheight/2);
                            $('.mh-logo-wrap a img').attr('data-status', 'ok');
                        }
                    }
                    else {
                        $('.mh-logo-wrap a img').attr('src', dataretina).load(function() {
                            if(($(window).width()<767)||($(window).width()>991)) {
                                this.width=datawidth/2;
                                this.height=dataheight/2;
                                $('.mh-logo-wrap a img').attr('data-status', 'ok');
                            }
                        }
                        );
                    }
                }
                if(isRetina&&($('.mh-logoinnav a img').attr('data-status')!='ok')&&($('.mh-logoinnav .mh-data-retina').data('retina'))) {
                    var dataretinasmall=$('.mh-logoinnav .mh-data-retina').data('retina');
                    var dataheightsmall=$('.mh-logoinnav .mh-data-retina').data('height');
                    var datawidthsmall=$('.mh-logoinnav .mh-data-retina').data('width');
                    $('.mh-logoinnav a img').attr('src', dataretinasmall).load(function() {
                        this.width=datawidthsmall/2;
                        this.height=dataheightsmall/2;
                    }
                    );
                }
                if(isRetina&&$('.mh-logo-mobile .mh-data-retina').data('retina')) {
                    var img_retina=$('.mh-logo-mobile .mh-data-retina').data('retina');
                    var height_retina=$('.mh-logo-mobile .mh-data-retina').data('height');
                    var width_retina=$('.mh-logo-mobile .mh-data-retina').data('width');
                    $('.mh-logo-mobile img').attr('src', img_retina).load(function() {
                        this.width=width_retina/2;
                        this.height=height_retina/2;
                    }
                    );
                }
                ;
            }
            function mh_parallax_cover(object,
            win_height) {
                if($(window).scrollTop()+win_height-150>win_height) {
                    var opacity=1-(($(window).scrollTop()-150)/win_height);
                    opacity=opacity.toFixed(2);
                    if(opacity>=0&&opacity<=1) {
                        object.parent('.mh-cover.cover').find('.mh-heading-cover-wrap').css('opacity', opacity);
                    }
                    ;
                }
                else {
                    object.parent('.mh-cover.cover').find('.mh-heading-cover-wrap').css('opacity', '1');
                }
                if($(window).scrollTop()<=win_height) {
                    var yPos=($(window).scrollTop()*0.1);
                    var start=-25;
                    object.children().css( {
                        'transform': 'translate3d(0, '+(start+yPos)+'px, 0px)'
                    }
                    );
                }
            }
            var grid431=$(".mod-one_slider .mh-slider, .mod-grid3_slider .mh-slider, .mod-grid4_slider .mh-slider");
            var carousel3=$(".mod-carousel_slider .mh-slider");
            var hello4=$(".mod-hello_slider .mh-slider");
            function the_slider_global(init) {
                grid431.each(function() {
                    var rx=$(this).parent().find('.rx');
                    var rs=$(this).data('royalSlider');
                    var mh_slideSpace=0;
                    var auto_height=false;
                    var get=$(this).closest('.mh-mod-slider');
                    var transition=get.data('transition');
                    var autoplay=get.data('autoplay');
                    var delay=get.data('speed')*1000;
                    var paging=get.data('paging');
                    if(paging=='off') {
                        paging='none';
                    }
                    else {
                        paging='bullets';
                    }
                    if(autoplay=='on') {
                        autoplay=true;
                    }
                    else {
                        autoplay=false;
                    }
                    if(get.is('.mod-grid3_slider, .mod-grid4_slider')) {
                        mh_slideSpace=4;
                    }
                    if(!rx.hasClass('loaded')) {
                        rx.append($(this).find('.mh-slider-item').clone());
                        rx.addClass('loaded');
                    }
                    if($(window).width()<768) {
                        if(!get.hasClass('goMobile')) {
                            $(this).children().remove();
                            if(typeof rs!='undefined') {
                                rs.destroy();
                            }
                            if(get.is('.mod-grid4_slider')) {
                                $(this).append(rx.find('.mh-slider-col').clone());
                                $(this).find('.mh-slider-col').wrap('<div class="mh-slider-item"></div>');
                            }
                            else {
                                $(this).append(rx.children().clone());
                            }
                            $(this).royalSlider( {
                                controlsInside:false, slidesSpacing:mh_slideSpace, addActiveClass:true, controlNavigation:paging, loop:true, transitionType:'move', autoPlay: {
                                    enabled: autoplay, pauseOnHover: true, delay: delay
                                }
                                ,
                                autoHeight:auto_height
                            }
                            );
                            $(this).closest('.mh-mod-slider').addClass('goMobile');
                        }
                    }
                    else {
                        if(get.hasClass('goMobile')||typeof init!='undefined') {
                            $(this).removeClass('rsHor');
                            $(this).children().remove();
                            if(typeof rs!='undefined') {
                                rs.destroy();
                            }
                            $(this).append(rx.children().clone());
                            $(this).royalSlider( {
                                controlsInside:false, slidesSpacing:mh_slideSpace, addActiveClass:true, controlNavigation:paging, loop:true, transitionType:transition, autoPlay: {
                                    enabled: autoplay, pauseOnHover: true, delay: delay
                                }
                                ,
                                autoHeight:auto_height
                            }
                            );
                            $(this).closest('.mh-mod-slider').removeClass('goMobile');
                        }
                    }
                }
                );
            }
            function the_slider_carousel(init) {
                carousel3.each(function() {
                    var rx=$(this).parent().find('.rx');
                    var rs=$(this).data('royalSlider');
                    var get=$(this).closest('.mod-carousel_slider');
                    var autoplay=get.data('autoplay');
                    var delay=get.data('speed')*1000;
                    var paging=get.data('paging');
                    if(paging=='off') {
                        paging='none';
                    }
                    else {
                        paging='bullets';
                    }
                    if(autoplay=='on') {
                        autoplay=true;
                    }
                    else {
                        autoplay=false;
                    }
                    if(!rx.hasClass('loaded')) {
                        rx.append($(this).find('.mh-slider-item').clone());
                        rx.addClass('loaded');
                    }
                    if($(window).width()<768) {
                        if(!get.hasClass('goMobile')) {
                            $(this).children().remove();
                            if(typeof rs!='undefined') {
                                rs.destroy();
                            }
                            $(this).append(rx.children().clone());
                            $(this).royalSlider( {
                                loop:true, transition:'move', controlsInside:false, slidesSpacing:4, addActiveClass:true, controlNavigation:paging, visibleNearby: {
                                    enabled: true, centerArea: 0.9, center: true, breakpointCenterArea: 0.87, navigateByCenterClick: true
                                }
                                ,
                                autoPlay: {
                                    enabled: autoplay, pauseOnHover: true, delay: delay
                                }
                                ,
                                autoScaleSlider:false
                            }
                            );
                            get.addClass('goMobile');
                        }
                    }
                    else {
                        if(get.hasClass('goMobile')||typeof init!='undefined') {
                            $(this).children().remove();
                            if(typeof rs!='undefined') {
                                rs.destroy();
                            }
                            $(this).append(rx.children().clone());
                            $(this).royalSlider( {
                                loop:true, transition:'move', controlsInside:false, slidesSpacing:4, addActiveClass:true, controlNavigation:paging, visibleNearby: {
                                    enabled: true, centerArea: $(window).width()>1120?0.67: 0.67, center: true, breakpoint: 1150, breakpointCenterArea: 0.8, navigateByCenterClick: true
                                }
                                ,
                                autoPlay: {
                                    enabled: autoplay, pauseOnHover: true, delay: delay
                                }
                                ,
                                autoScaleSlider:false
                            }
                            );
                            get.removeClass('goMobile');
                        }
                    }
                }
                );
            }
            function the_slider_hello(init) {
                hello4.each(function() {
                    var rx=$(this).parent().find('.rx');
                    var rs=$(this).data('royalSlider');
                    var get=$(this).closest('.mod-hello_slider');
                    var autoplay=get.data('autoplay');
                    var delay=get.data('speed')*1000;
                    if(autoplay=='on') {
                        autoplay=true;
                    }
                    else {
                        autoplay=false;
                    }
                    if(!rx.hasClass('loaded')) {
                        rx.append($(this).find('.mh-slider-item').clone());
                        rx.addClass('loaded');
                    }
                    if($(window).width()<768) {
                        if(!get.hasClass('goMobile')) {
                            $(this).children().remove();
                            if(typeof rs!='undefined') {
                                rs.destroy();
                            }
                            $(this).append(rx.children().clone());
                            $(this).royalSlider( {
                                loop:true, arrowsNav:false, transitionType:'move', controlsInside:false, slidesSpacing:0, addActiveClass:true, controlNavigation:'bullets', autoPlay: {
                                    enabled: autoplay, pauseOnHover: true, delay: delay
                                }
                            }
                            );
                            get.addClass('goMobile');
                        }
                    }
                    else {
                        if(get.hasClass('goMobile')||typeof init!='undefined') {
                            $(this).children().remove();
                            if(typeof rs!='undefined') {
                                rs.destroy();
                            }
                            $(this).append(rx.children().clone());
                            $(this).royalSlider( {
                                loop:true, arrowsNav:false, transitionType:'fade', controlsInside:false, slidesSpacing:0, addActiveClass:true, controlNavigationSpacing:0, controlNavigation:'thumbnails', thumbs: {
                                    autoCenter: false, fitInViewport: true, spacing: 0, arrowsAutoHide: true
                                }
                                ,
                                autoPlay: {
                                    enabled: autoplay, pauseOnHover: true, delay: delay
                                }
                            }
                            );
                            get.removeClass('goMobile');
                        }
                    }
                }
                );
            }
            $(document).ready(function() {
                $('#mh-review').find('.dial').knob();
                $('#mh-review').find('.mh-mnml-bar').each(function(i) {
                    var el=$(this);
                    var bar=el.find('.barstatus');
                    var percent=bar.data('width')+'%';
                    el.appear(function() {
                        bar.animate( {
                            'width': percent
                        }
                        ,
                        1000);
                    }
                    );
                }
                );
                $('.mh-content').find('img').each(function() {
                    var el=$(this);
                    if(el.hasClass('aligncenter')) {
                        el.closest('p').addClass('mh-media-img imgcenter');
                    }
                    else if(el.hasClass('alignleft')) {
                        el.closest('p').addClass('mh-media-img imgleft');
                    }
                    else if(el.hasClass('alignright')) {
                        el.closest('p').addClass('mh-media-img imgright');
                    }
                    else if(el.hasClass('alignnone')) {
                        el.closest('p').addClass('mh-media-img imgnone');
                    }
                }
                );
                mh_cover_init();
                $('#mh-nav').css('min-height',
                $('#mh-nav').outerHeight());
                $('.mh-menu-top li .nav-sub-menus').not($('.nav-sub-wrap .nav-sub-menus')).wrap('<div class="nsw" />');
                $('.mh-menu-top li .nav-sub-wrap .nsw').each(function(index,
                element) {
                    if($(element).children().length===1) {
                        if($(element).children().attr('class')=='nav-sub-menus') {
                            if($(element).hasClass('mh-mega-1')) {
                                $(element).parents('li').addClass('ord-nav-offset');
                                $(element).parent().addClass('ord-nav').removeClass('container').find('.mh-bg-mega-menu').remove();
                                $(element).removeClass('row');
                            }
                        }
                        else {
                            $(element).addClass('mm-full');
                            $(element).parent().find('.mh-mega-menu-loading').addClass('full');
                        }
                    }
                    if($(element).children().length===0) {
                        $(element).parent().remove();
                    }
                    if($(element).children().length===2) {
                        if($(element).hasClass('mh-mega-2')) {
                            $(element).find('.nav-sub-posts').addClass('col-sm-3of3');
                            $(element).find('.nav-sub-posts + .nav-sub-menus').addClass('col-sm-1of4').insertBefore($(element).find('.nav-sub-posts'));
                        }
                        ;
                    }
                    if($(element).hasClass('mh-mega-4')) {
                        $(element).addClass('mm-full');
                        $(element).children().addClass('clearfix');
                    }
                    ;
                    if($(element).parents('li.menu-item').hasClass('mh-mega-4')) {
                        var el_mega_col=$(element).parent().attr('class').split('nav-sub-wrap container mh-col-mega-');
                        $(element).parents('li.menu-item').addClass('mega-has-col-'+el_mega_col[1]);
                    }
                    ;
                }
                );
                $('.mh-mega-1 .nav-sub-menus > ul > li > .nav-sub-menus').each(function(index,
                element) {
                    $(element).wrap('<div class="nav-sub-wrap ord-nav"/>');
                    $(element).wrap('<div class="nsw"/>');
                }
                );
                $('.nav-sub-wrap').each(function(index,
                element) {
                    var height=$(element).find('.nav-sub-menus').find('ul').height();
                    $(element).find('.nav-sub-posts').css('min-height', height+'px');
                }
                );
                var min_nsw_width='13';
                var max_nsw_width='22';
                $('.nav-sub-wrap > .nsw > div > ul').each(function(index,
                element) {
                    $(element).find('li > a').css( {
                        'white-space': 'nowrap'
                    }
                    );
                    if(!$(element).closest('.nav-sub-wrap').hasClass('container')) {
                        var nsw_plus=1;
                        var for_nsw_width=$(element).find('li').outerWidth();
                        var nsw_ul_width=(nav_px2em(for_nsw_width)+nsw_plus).toFixed(1);
                        if(nsw_ul_width>max_nsw_width) {
                            nsw_ul_width=max_nsw_width;
                        }
                        if(nsw_ul_width<min_nsw_width) {
                            nsw_ul_width=min_nsw_width;
                        }
                        $(element).css( {
                            width: nsw_ul_width+'em'
                        }
                        );
                        if($(element).closest('.nav-sub-wrap').parent().is(':not(.menu-item.mh-mega-1)')) {
                            $(element).closest('.nav-sub-wrap').css( {
                                left: nav_px2em($(element).closest('.nav-sub-wrap').closest('ul').width()).toFixed(1)+'em'
                            }
                            );
                        }
                    }
                }
                );
                $('.nav-sub-wrap').find('.nsw div ul li a').removeAttr('style');
                $('.nav-sub-wrap').css( {
                    visibility: 'visible', display: 'none', opacity: '0'
                }
                ) var menu_over=function() {
                    $(this).find('> .sub-menu').show().animate( {
                        opacity: 1
                    }
                    ,
                    200);
                }
                var menu_out=function() {
                    var el=$(this).find('> .sub-menu');
                    el.animate( {
                        opacity: 0
                    }
                    ,
                    100,
                    function() {
                        el.hide()
                    }
                    );
                }
                var main_menu_over=function() {
                    $(this).find('> .nav-sub-wrap').show().animate( {
                        opacity: 1
                    }
                    ,
                    200);
                }
                var main_menu_out=function() {
                    var el=$(this).find('> .nav-sub-wrap');
                    el.animate( {
                        opacity: 0
                    }
                    ,
                    100,
                    function() {
                        el.hide()
                    }
                    );
                }
                $('.mh-menu-top li').hoverIntent( {
                    over: menu_over, out: menu_out, timeout: 100
                }
                );
                $('.mh-main-menu li').hoverIntent( {
                    over: main_menu_over, out: main_menu_out, timeout: 100
                }
                );
                $('.mh-header-search').live("mouseenter",
                function() {
                    var hsearch=$(this);
                    hsearch.find('.button.button-search').click(function() {
                        if(hsearch.find('.mh-search-field')==''||!hsearch.hasClass('focus')) {
                            return false;
                        }
                    }
                    );
                    $(this).addClass('focus');
                }
                ).live("mouseleave",
                function() {
                    $(this).removeClass('focus');
                }
                );
                $('.sf-menu ul li').mouseenter(function() {
                    var wapoMainWindowWidth=$(window).width();
                    var subMenuExist=$(this).find('.sub-menu').length;
                    if(subMenuExist>0) {
                        var subMenuWidth=$(this).find('.sub-menu').width();
                        var subMenuOffset=$(this).find('.sub-menu').parent().offset().left+subMenuWidth;
                        if((subMenuOffset+subMenuWidth)>wapoMainWindowWidth) {
                            var newSubMenuPosition=subMenuWidth+3;
                            $(this).find('.sub-menu').css( {
                                left: -newSubMenuPosition, top: '0',
                            }
                            );
                        }
                    }
                    var subMenuExist=$(this).find('.nav-sub-wrap').length;
                    if(subMenuExist>0) {
                        var subMenuWidth=$(this).find('.nav-sub-wrap .nav-sub-menus > ul').width();
                        var subMenuOffset=$(this).find('.nav-sub-wrap').parent().offset().left+subMenuWidth;
                        if((subMenuOffset+subMenuWidth)>wapoMainWindowWidth) {
                            var newSubMenuPosition=subMenuWidth;
                            $(this).find('.nav-sub-wrap').css( {
                                left: -newSubMenuPosition, top: '0',
                            }
                            );
                        }
                    }
                }
                );
                $('#mh-mobile-bar .mh-menu-open a').on('click',
                function() {
                    $('body').addClass('canvas-style');
                    $('#mh-mobile-nav').animate( {
                        left: "0"
                    }
                    ,
                    400);
                    return false;
                }
                );
                $('#mh-mobile-nav .mh-menu-close a').on('click',
                function() {
                    $('body').removeClass('canvas-style');
                    $('#mh-mobile-nav').animate( {
                        left: "-100%"
                    }
                    ,
                    400);
                    return false;
                }
                );
                $('#mh-mobile-nav ul li.menu-item-has-children > a').on('click',
                function() {
                    var el=$(this);
                    if(el.hasClass('process')) {
                        return false;
                    }
                    ;
                    el.addClass('process').next().slideToggle(300,
                    function() {
                        el.removeClass('process');
                    }
                    );
                    if(el.hasClass('open-menu')) {
                        el.removeClass('open-menu');
                    }
                    else {
                        el.addClass('open-menu');
                    }
                    return false;
                }
                );
                var sopen=false;
                $('.mh-search > span').on('click',
                function() {
                    var th=$(this);
                    var el=$(this).parent().find('.mh-form-search');
                    if(el.hasClass('active')&&sopen==true) {
                        el.removeClass('active');
                        th.addClass('tm-search');
                        th.removeClass('tm-cancel');
                        el.animate( {
                            'opacity': '0'
                        }
                        ,
                        200,
                        function() {
                            sopen=false;
                            el.css('display', 'none');
                        }
                        );
                    }
                    else if(sopen==false) {
                        el.addClass('active');
                        th.removeClass('tm-search');
                        th.addClass('tm-cancel');
                        el.css('display', 'block');
                        el.animate( {
                            'opacity': '1'
                        }
                        ,
                        200,
                        function() {
                            sopen=true;
                            th.parent().find('.mh-search-field').focus();
                        }
                        );
                    }
                }
                );
                $("#mh-main-nav nav > ul > li.mh-mega-2 > a").on('mouseenter',
                function() {
                    if(typeof $(this).data('idcat')!="undefined") {
                        var path=$(this).parent().find('.nav-sub-posts').find('.row');
                        cat_ajax_get($(this).data('id'), $(this).data('idcat'), path, $(this).data('perpage'));
                    }
                }
                );
                $("#mh-main-nav li.mh-mega-2 .nav-sub-menus.col-sm-1of4 li:not(.menu-item-has-children) a").on('mouseenter',
                function() {
                    if(typeof $(this).data('idcat')!="undefined") {
                        var path=$(this).closest('.nav-sub-menus.col-sm-1of4').parent().find('.nav-sub-posts').find('.row');
                        cat_ajax_get($(this).data('id'), $(this).data('idcat'), path, 3);
                    }
                }
                );
                $('.mh-block-filter a').on('click',
                function() {
                    var path=$(this).closest('.mh-mods').find('.mh-module-content');
                    var key=$(this).closest('.mh-mods').find('.mh-module').data('filterid');
                    var getIndex=null;
                    var datas='';
                    $.each(mh_blocks, function(index, value) {
                        if(value.id==key) {
                            getIndex=index;
                            datas=value;
                        }
                        ;
                    }
                    );
                    var type=$(this).data('type');
                    var cat_id=$(this).data('category');
                    var tag_id=$(this).data('tag');
                    var max_page=$(this).data('max_page');
                    if(typeof cat_id==='undefined') {
                        cat_id='';
                    }
                    if(typeof tag_id==='undefined') {
                        tag_id='';
                    }
                    mh_blocks[getIndex].types=type;
                    mh_blocks[getIndex].category=cat_id;
                    mh_blocks[getIndex].tag=tag_id;
                    mh_blocks[getIndex].paged=1;
                    mh_blocks[getIndex].max_page=max_page;
                    datas=mh_blocks[getIndex];
                    if(mh_blocks[getIndex].paged<=1) {
                        $(this).closest('.mh-mods').find('.prev').addClass('disable');
                        if($(this).closest('.mh-mods').find('.next').hasClass('disable')) {
                            $(this).closest('.mh-mods').find('.next').removeClass('disable');
                        }
                        ;
                        $(this).closest('.mh-mods').find('.paginav.load-more').removeAttr('style').css('display',
                        'block');
                    }
                    if(mh_blocks[getIndex].paged>=mh_blocks[getIndex].max_page) {
                        if(!$(this).closest('.mh-mods').find('.next').hasClass('disable')) {
                            $(this).closest('.mh-mods').find('.next').addClass('disable');
                        }
                        ;
                        $(this).closest('.mh-mods').find('.paginav.load-more').removeAttr('style').addClass('doneload');
                    }
                    ;
                    var key_filter=key+'-filter-'+datas.types+'-'+cat_id+'-'+tag_id;
                    $(this).closest('.mh-block-filter').find('.filter-active').find('span').html($(this).html());
                    $(this).closest('.mh-mods').find('.paginav').css('display',
                    'block');
                    get_module_filter('load_module',
                    key_filter,
                    datas.module,
                    JSON.stringify(datas),
                    path,
                    true,
                    false);
                    return false;
                }
                );
                $('.paginav:not(.mh-item-nav) .mh-nav-nextprev').on('click',
                function() {
                    if($(this).hasClass('disable')) {
                        return false;
                    }
                    ;
                    var paged=null;
                    var getIndex=null;
                    var per_module=null;
                    var sorting=null;
                    var column=null;
                    var small_style=null;
                    var key=$(this).closest('.mh-module').data('filterid');
                    var datas='';
                    $.each(mh_blocks,
                    function(index,
                    value) {
                        if(value.id==key) {
                            getIndex=index;
                            datas=value;
                        }
                        ;
                    }
                    );
                    if($(this).hasClass('next')) {
                        if(mh_blocks[getIndex].paged<mh_blocks[getIndex].max_page) {
                            mh_blocks[getIndex].paged++;
                            $(this).parent().find('a').removeClass('disable');
                        }
                    }
                    else if($(this).hasClass('prev')) {
                        if(mh_blocks[getIndex].paged>1) {
                            mh_blocks[getIndex].paged--;
                            $(this).parent().find('a').removeClass('disable');
                        }
                    }
                    ;
                    if(mh_blocks[getIndex].paged<=1) {
                        $(this).parent().find('.prev').addClass('disable');
                    }
                    if(mh_blocks[getIndex].paged>=mh_blocks[getIndex].max_page) {
                        $(this).parent().find('.next').addClass('disable');
                    }
                    ;
                    var path=$(this).closest('.mh-module').find('.mh-module-content');
                    var key_filter=key+'-pagination-'+datas.paged+'-'+datas.types+'-'+datas.category+'-'+datas.tag;
                    get_module_filter('load_module',
                    key_filter,
                    datas.module,
                    JSON.stringify(datas),
                    path,
                    true,
                    false);
                    return false;
                }
                );
                $('.paginav:not(.mh-item-nav) .loadmore').on('click',
                function() {
                    var paged=null;
                    var getIndex=null;
                    var per_module=null;
                    var sorting=null;
                    var column=null;
                    var small_style=null;
                    var key=$(this).closest('.mh-module').data('filterid');
                    var datas='';
                    $.each(mh_blocks, function(index, value) {
                        if(value.id==key) {
                            getIndex=index;
                            datas=value;
                        }
                        ;
                    }
                    );
                    if(mh_blocks[getIndex].paged<mh_blocks[getIndex].max_page) {
                        mh_blocks[getIndex].paged++;
                    }
                    ;
                    if(mh_blocks[getIndex].paged>=mh_blocks[getIndex].max_page) {
                        $(this).parent().addClass('doneload');
                    }
                    var path=$(this).closest('.mh-module').find('.mh-module-content');
                    get_module_filter('load_module',
                    key,
                    datas.module,
                    JSON.stringify(datas),
                    path,
                    false,
                    true);
                    return false;
                }
                );
                $('.mh-item-nav .loadmore').on('click',
                function() {
                    var datas='';
                    var pg_mhmods=$(this).closest('.mh-mods');
                    var pg_wloop=pg_mhmods.find('.mh-wloop');
                    $.each(mh_mod_posts, function(index, value) {
                        datas=value;
                    }
                    );
                    if(datas.paged<datas.maxpage) {
                        datas.paged++;
                    }
                    ;
                    if(datas.paged>=datas.maxpage) {
                        $(this).fadeOut();
                        $(this).parent().addClass('doneload');
                    }
                    if(pg_mhmods.hasClass('mh-mod-large')||pg_mhmods.hasClass('list')) {
                        var path=pg_wloop.children();
                    }
                    else {
                        var path=pg_wloop;
                    }
                    mh_get_mod_post(JSON.stringify(datas),
                    path);
                    return false;
                }
                );
                myRetina();
                the_slider_global('go');
                the_slider_carousel('go');
                the_slider_hello('go');
                $('.mh-slider-item-big, .mh-slider-item-full, .mh-slider-item-small').live("mouseenter",
                function() {
                    if($(this).closest('.rsSlide').hasClass('rsActiveSlide')) {
                        $(this).find('.mh-item-link').addClass('goshow').removeClass('gohide');
                    }
                }
                ).live("mouseleave",
                function() {
                    $(this).find('.mh-item-link').addClass('gohide').removeClass('goshow');
                }
                );
                $(".widget-slider .mh-mod-content").each(function() {
                    var get=$(this).closest('.widget-slider');
                    var transition=get.data('transition');
                    var paging=get.data('paging');
                    var autoplay=get.data('autoplay');
                    var delay=get.data('speed')*1000;
                    if(autoplay=='on') {
                        autoplay=true;
                    }
                    else {
                        autoplay=false;
                    }
                    if(paging!='bullets') {
                        paging='none';
                    }
                    $(this).royalSlider( {
                        controlsInside:false, slidesSpacing:0, addActiveClass:true, controlNavigation:paging, loop:true, transitionType:transition, autoPlay: {
                            enabled: autoplay, pauseOnHover: true, delay: delay
                        }
                        ,
                        autoHeight:true
                    }
                    );
                }
                );
                $('.maha-wp-gallery').each(function() {
                    var autoplay='on';
                    var delay=5*1000;
                    if(autoplay=='on') {
                        autoplay=true;
                    }
                    else {
                        autoplay=false;
                    }
                    $(this).royalSlider( {
                        navigateByClick:false, autoHeight:true, loop:true, arrowsNav:false, transitionType:'move', controlsInside:false, slidesSpacing:0, addActiveClass:true, controlNavigationSpacing:0, controlNavigation:'thumbnails', thumbs: {
                            autoCenter: false, fitInViewport: true, spacing: 14, arrowsAutoHide: true, transitionSpeed: 600
                        }
                        ,
                        autoPlay: {
                            enabled: autoplay, pauseOnHover: true, delay: delay
                        }
                    }
                    );
                    var maha_gallery=$(this).data('royalSlider');
                    maha_gallery.ev.on('rsSlideClick',
                    function(event,
                    originalEvent) {
                        var gallery_item=[];
                        for(var i=0;
                        i<maha_gallery.numSlides;
                        i++) {
                            gallery_item[i]= {
                                src: $(maha_gallery.slides[i].content).find('img').data('img'), caption: $(maha_gallery.slides[i].content).find('.mh-gcaption').text()
                            }
                        }
                        ;
                        $.magnificPopup.open( {
                            items:gallery_item, type:'image', tLoading:'Loading image #%curr%...', mainClass:'mfp-img-mobile', removalDelay:200, gallery: {
                                enabled: true, navigateByImgClick: true,
                            }
                            ,
                            image: {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function(item) {
                                    return item.data.caption;
                                }
                            }
                            ,
                            callbacks: {
                                beforeOpen: function() {
                                    this.st.image.markup=this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                                    this.st.mainClass='mfp-fade close-right mfp-img-mobile';
                                }
                                ,
                                change:function() {
                                    maha_gallery.goTo($.magnificPopup.instance.index);
                                }
                                ,
                            }
                            ,
                        }
                        ,
                        maha_gallery.currSlideId);
                    }
                    );
                }
                );
                if($('.mh-listing-content.mh-slider').length) {
                    $('.mh-listing-content.mh-slider').each(function() {
                        $(this).royalSlider( {
                            arrowsNavAutoHide: false, controlNavigation: 'bullets', autoHeight: true, navigateByClick: true
                        }
                        );
                        $(this).parent().children('div:not(:nth-child(2))').append($(this).find('.rsArrow'));
                        var maha_gallery=$(this).data('royalSlider');
                        $(this).closest('.mh-listing').find('.mh-listing-header, .rsBullets').slideDown();
                        var listing_slider=$('.mh-listing-content.mh-slider').find('img').parent('a');
                        listing_slider.each(function() {
                            if($(this).attr('href').match(/\.(jpeg|jpg|gif|png)$/)!=null) {
                                $(this).addClass('magnific-listing');
                                if($(this).parent('.wp-caption').length) {
                                    $(this).parent('.wp-caption').find('a').addClass('magnific-caption');
                                }
                                ;
                            }
                            ;
                        }
                        );
                        $(this).on('click',
                        'a.magnific-listing',
                        function(event) {
                            var content=$(this);
                            event.preventDefault();
                            $.magnificPopup.open( {
                                items: {
                                    src: $(this).find('img').attr('src')
                                }
                                ,
                                type:'image',
                                tLoading:'Loading image #%curr%...',
                                mainClass:'mfp-img-mobile',
                                removalDelay:200,
                                image: {
                                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function(item) {
                                        if(content.hasClass('magnific-caption')) {
                                            return content.parent('.wp-caption').find('.wp-caption-text').text();
                                        }
                                        ;
                                    }
                                }
                                ,
                                callbacks: {
                                    beforeOpen: function() {
                                        this.st.image.markup=this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                                        this.st.mainClass='mfp-fade close-right mfp-img-mobile';
                                    }
                                }
                                ,
                            }
                            ,
                            0);
                        }
                        );
                    }
                    );
                }
                $('[data-tip]').mouseenter(function() {
                    if($(this).is('[data-tip]')) {
                        $('.mh-tooltip').text($(this).data('tip'));
                        var offset=$(this).offset();
                        var tipwidth=$('.mh-tooltip').outerWidth();
                        var tipheight=$('.mh-tooltip').outerHeight();
                        var catwidth=$(this).outerWidth();
                        var posY=offset.top-$(window).scrollTop()-tipheight-5;
                        var posX=offset.left-$(window).scrollLeft()-(tipwidth/2)+(catwidth/2);
                        if(posY<1) {
                            posY=posY+tipheight+$(this).outerHeight()+8;
                            $('.mh-tooltip').addClass('tt-bottom');
                        }
                        else {
                            $('.mh-tooltip').addClass('tt-top');
                        }
                        $('.mh-tooltip').css( {
                            'left': posX, 'top': posY, 'z-index': 999, 'visibility': 'visible', 'opacity': '1'
                        }
                        );
                    }
                }
                ).mouseleave(function() {
                    $('.mh-tooltip').css( {
                        'visibility': 'hidden', 'opacity': '0'
                    }
                    ).removeClass('tt-top tt-bottom');
                }
                );
                $('.mh-search-field').focus(function() {
                    $(this).parent().addClass('focused');
                }
                );
                $('.mh-search-field').focusout(function() {
                    $(this).parent().removeClass('focused');
                }
                );
                $('.search-form .search-field').focus(function() {
                    $(this).closest('form').addClass('focused');
                }
                );
                $('.search-form .search-field').focusout(function() {
                    $(this).closest('form').removeClass('focused');
                }
                );
                $('.search-form .search-field').attr('placeholder',
                'Type and hit enter...');
                $('.mh-scroll-up').click(function() {
                    $('body,html').animate( {
                        scrollTop: 0
                    }
                    ,
                    1000);
                }
                );
                $('.goscroll').click(function() {
                    var content_top=$('.the-content-wrap').offset().top;
                    $('body,html').animate( {
                        scrollTop: (content_top-45)
                    }
                    ,
                    1000);
                }
                );
                $('.lwa-links-register-inline').click(function() {
                    var closest_lwa=$(this).closest('.lwa-modal');
                    closest_lwa.find('.mh-login-ajax-title').html(closest_lwa.find('.lwa-register > .form-ajax-title').text());
                    closest_lwa.find('.mh-login-ajax-form').slideUp();
                }
                );
                $('.lwa-links-remember').click(function() {
                    var closest_lwa=$(this).closest('.lwa-modal');
                    closest_lwa.find('.mh-login-ajax-title').text(closest_lwa.find('.lwa-remember .form-ajax-title').text());
                    closest_lwa.find('.mh-login-ajax-form').slideUp();
                }
                );
                $('.lwa-links-remember-cancel').click(function() {
                    var closest_lwa=$(this).closest('.lwa-modal');
                    closest_lwa.find('.mh-login-ajax-title').text(closest_lwa.find('.mh-login-ajax-form .form-ajax-title').text());
                    closest_lwa.find('.lwa-remember').slideUp();
                    closest_lwa.find('.mh-login-ajax-form').slideDown();
                }
                );
                $('.lwa-links-register-inline-cancel').click(function() {
                    var closest_lwa=$(this).closest('.lwa-modal');
                    closest_lwa.find('.mh-login-ajax-title').text(closest_lwa.find('.mh-login-ajax-form .form-ajax-title').text());
                    closest_lwa.find('.lwa-register').slideUp();
                    closest_lwa.find('.mh-login-ajax-form').slideDown();
                }
                );
                var dataparams=$('.mh-popup-video').data('params');
                $('.mh-popup-video').magnificPopup( {
                    disableOn:700, type:'iframe', removalDelay:200, preloader:false, fixedContentPos:false, iframe: {
                        patterns: {
                            youtube: {
                                index: 'youtube.com/', id: 'v=', src: '//www.youtube.com/embed/%id%'+dataparams
                            }
                            ,
                            vimeo: {
                                index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%'+dataparams+'&autoplay=0'
                            }
                            ,
                            dailymotion: {
                                index: 'dailymotion.com', id: function(url) {
                                    var m=url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                                    if(m!==null) {
                                        if(m[4]!==undefined) {
                                            return m[4];
                                        }
                                        return m[2];
                                    }
                                    return null;
                                }
                                ,
                                src:'http://www.dailymotion.com/embed/video/%id%'+dataparams
                            }
                        }
                    }
                    ,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.iframe.markup=this.st.iframe.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass='mfp-zoom-in';
                        }
                    }
                    ,
                }
                );
                $('.mh-popup-video-inline').each(function() {
                    var data=$(this).data('video');
                    var video="<video controls>";
                    video+="<source src='"+data+"' type='video/mp4' />";
                    video+="<source src='"+data+"' type='video/webm' />";
                    video+="<source src='"+data+"' type='video/ogg' />";
                    video+="Your browser does not support the video tag.";
                    video+="</video>";
                    $('.mh-popup-video-inline').magnificPopup( {
                        items: {
                            src: video, type: 'inline'
                        }
                        ,
                        removalDelay:200,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.iframe.markup=this.st.iframe.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                                this.st.mainClass='mfp-zoom-in';
                            }
                        }
                        ,
                    }
                    );
                }
                );
                $('.mh-popup-audio').magnificPopup( {
                    disableOn:700, type:'iframe', removalDelay:200, preloader:false, fixedContentPos:false, callbacks: {
                        beforeOpen: function() {
                            this.st.iframe.markup=this.st.iframe.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass='mfp-zoom-in';
                        }
                    }
                    ,
                }
                );
                $('.mh-popup-audio-inline').each(function() {
                    var data=$(this).data('audio');
                    var audio="<audio controls>";
                    audio+="<source src='"+data+"' type='audio/mpeg' />";
                    audio+="<source src='"+data+"' type='audio/ogg' />";
                    audio+="<source src='"+data+"' type='audio/wav' />";
                    audio+="Your browser does not support the audio element.";
                    audio+="</audio>";
                    $('.mh-popup-audio-inline').magnificPopup( {
                        items: {
                            src: audio, type: 'inline'
                        }
                        ,
                        removalDelay:200,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.iframe.markup=this.st.iframe.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                                this.st.mainClass='mfp-zoom-in';
                            }
                        }
                        ,
                    }
                    );
                }
                );
                $('.gallery-item').magnificPopup( {
                    delegate:'a', type:'image', tLoading:'Loading image #%curr%...', mainClass:'mfp-img-mobile', removalDelay:200, gallery: {
                        enabled: true, navigateByImgClick: true, preload: [0, 1]
                    }
                    ,
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function(item) {
                            return item.el.closest('.gallery-item').find('.wp-caption-text').text();
                        }
                    }
                    ,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.image.markup=this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass='mfp-fade close-right mfp-img-mobile';
                        }
                    }
                    ,
                }
                );
                $('.mh-content-post a[rel~="attachment"] > img, .mh-content-page a[rel~="attachment"] > img').parent('a').each(function() {
                    if($(this).attr('href').match(/\.(jpeg|jpg|gif|png)$/)!=null) {
                        $(this).addClass('magnific');
                    }
                    ;
                }
                );
                $('.mh-content-post, .mh-content-page').magnificPopup( {
                    delegate: 'a.magnific:not(.magnific-listing)', type:'image', removalDelay:200, callbacks: {
                        beforeOpen: function() {
                            this.st.image.markup=this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass='mfp-fade close-right';
                        }
                    }
                    ,
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function(item) {
                            return item.el.closest('.wp-caption').find('.wp-caption-text').text();
                        }
                    }
                    ,
                }
                );
                $('.share-mooore').each(function() {
                    $('.share-mooore').magnificPopup( {
                        src: $(this).attr('href'), type: 'inline', preloader: false, mainClass: 'mh-effect', removalDelay: 200,
                    }
                    );
                }
                );
                $(document).on('click',
                '.share-item-comment',
                function() {
                    $.magnificPopup.close();
                    var top=$("#comment-id").offset().top;
                    if($('body').hasClass('admin-bar')) {
                        top=top-$('#wpadminbar').outerHeight();
                    }
                    ;
                    $('html, body').animate( {
                        scrollTop: top
                    }
                    ,
                    1000);
                    return false;
                }
                );
                if($('html').hasClass('cssanimations')) {
                    $('.mh-parallax').each(function() {
                        var $bgobj=$(this);
                        var win_height=$(window).height();
                        if($('body').hasClass('admin-bar')) {
                            win_height=$(window).height()-$('#wpadminbar').outerHeight();
                        }
                        ;
                        if(win_height<635) {
                            win_height=635;
                        }
                        ;
                        if(Modernizr.mq('(min-width: 480px) and (max-width: 767px)')||Modernizr.mq('(max-width: 479px)')) {
                            win_height=450;
                        }
                        mh_parallax_cover($bgobj,
                        win_height);
                        $(window).scroll(function() {
                            mh_parallax_cover($bgobj, win_height);
                        }
                        );
                    }
                    );
                }
                jQuery(document).on('mousemove',
                '.active-vote',
                function(e) {
                    var rated=jQuery(this);
                    var rated_parent=rated.closest('.rbar').find('.rbar-text');
                    var width=rated.width();
                    if(rated.hasClass('rated-done')) {
                        return false;
                    }
                    if(!e.offsetX) {
                        e.offsetX=e.clientX-jQuery(e.target).offset().left;
                    }
                    var offset=e.offsetX;
                    var ops=offset/width*100;
                    var round=Math.round(ops);
                    var ope=1;
                    if(rated.hasClass('stars')) {
                        ope=20;
                    }
                    ;
                    rated.attr('data-score',
                    round);
                    if(rated.closest('.rbar').hasClass('stars')) {
                        rated.children().css('width', round+'%');
                        rated.closest('.rbar-star').attr('title', round/ope);
                    }
                    else {
                        rated.children().css('width', round+'%');
                        rated_parent.find('.rbar-score').html(round+'%');
                    }
                }
                );
                jQuery(document).on('click',
                '.active-vote',
                function() {
                    var rated=jQuery(this);
                    var rated_parent=rated.closest('.rbar').find('.rbar-text');
                    if(rated.hasClass('rated-done')) {
                        return false;
                    }
                    var score=rated.data('score');
                    if(score>100) {
                        score=100;
                    }
                    ;
                    var post_id=rated.closest('.ureview').data('id');
                    jQuery.ajax( {
                        type:'POST', url:mahaAjax.ajaxurl, cache:!0, data: {
                            "action": "mh_rate_post", post: post_id, value: score
                        }
                        ,
                        beforeSend:function() {
                            rated.animate( {
                                'opacity': '0.5'
                            }
                            ,
                            150);
                        }
                        ,
                        success:function(response) {
                            if(response!=false) {
                                if(rated.closest('.rbar').hasClass('percentage')) {
                                    rated_parent.find('.rbar-score').html(score+'%');
                                }
                                else if(rated.closest('.rbar').hasClass('stars')) {
                                    rated_parent.find('.rbar-score').html(score/20);
                                }
                                else if(rated.closest('.rbar').hasClass('points')) {
                                    rated_parent.find('.rbar-score').html(score/10);
                                }
                                rated_parent.find('.rbar-name > span:first-child').html('Your Rating : ');
                                rated_parent.find('.mh-vote-count').html(parseInt(rated_parent.find('.mh-vote-count').text())+1);
                                rated.attr('data-width',
                                score);
                                rated.find('span').css('width',
                                score+'%');
                                rated.removeClass('active-vote');
                            }
                            ;
                            rated.animate( {
                                'opacity': '1'
                            }
                            ,
                            150);
                        }
                        ,
                        error:function() {
                            console.log('error');
                        }
                    }
                    );
                    return false;
                }
                );
                jQuery(document).on('mouseleave',
                '.active-vote',
                function() {
                    var rated=jQuery(this);
                    var rated_parent=rated.closest('.rbar').find('.rbar-text');
                    if(rated.hasClass('rated-done')) {
                        return false;
                    }
                    var post_rate=rated.data('width');
                    rated.find("span").css('width',
                    post_rate+'%');
                    if(rated.closest('.rbar').hasClass('percentage')) {
                        rated_parent.find('.rbar-score').html(post_rate+'%');
                    }
                    else if(rated.closest('.rbar').hasClass('points')) {};
                }
                );
                if($('.mh-comment-wrap .comment-label').length>0) {
                    $('#respond').prepend($('.mh-comment-wrap .comment-label'));
                }
                ;
            }
            );
            $(window).on('load',
            function() {
                if($('.module-affix').length>0) {
                    filter_affix();
                    affix_element($(window).scrollTop());
                    loaded=true;
                    $(window).scroll(function() {
                        if(loaded==true) {
                            affix_element($(window).scrollTop());
                        }
                        ;
                    }
                    );
                    $(window).resize(function() {
                        if(loaded==true) {
                            filter_affix();
                            affix_element($(window).scrollTop());
                        }
                        ;
                    }
                    );
                }
                ;
                if($('.mh-related-box-slide').length>0) {
                    var close=false;
                    $(".mh-related-box-slide .cancel-wrap").on('click', function() {
                        $(".mh-related-box-slide").removeClass("show");
                        close=true;
                        return false;
                    }
                    );
                    var content_height=$('.mh-the-author').offset().top-500;
                    $(window).scroll(function() {
                        if(!close) {
                            var current_scroll=$(document).scrollTop();
                            if(current_scroll>content_height) {
                                $('.mh-related-box-slide').addClass('show');
                            }
                            else {
                                $('.mh-related-box-slide').removeClass('show');
                            }
                        }
                    }
                    );
                    $(window).on('resize',
                    function() {
                        if(!close) {
                            content_height=$('.mh-the-author').offset().top-500;
                            var current_scroll=$(document).scrollTop();
                            if(current_scroll>content_height) {
                                $('.mh-related-box-slide').addClass('show');
                            }
                            else {
                                $('.mh-related-box-slide').removeClass('show');
                            }
                        }
                    }
                    );
                }
            }
            );
            $(window).resize(function() {
                var el_width=360;
                if($('body').hasClass('blocked')) {
                    el_width=333;
                }
                if(ie<=9) {
                    var mdq=$('#max768').is(':visible');
                    if($('#min768max1020').is(':visible')) {
                        $('.module-affix').css('width', '210px');
                    }
                    else if($('#min1021max1140').is(':visible')) {
                        $('.module-affix').css('width', '287px');
                    }
                    else {
                        $('.module-affix').css('width', '360px');
                    }
                    if($('#max767').is(':visible')) {
                        if($('#mh-main-nav').hasClass('affix')) {
                            $('#mh-main-nav').removeClass('affix').removeAttr('style');
                        }
                        ;
                    }
                    else {
                        $('#mh-nav').css('min-height', $('#mh-main-nav').outerHeight());
                    }
                }
                else {
                    var mdq=Modernizr.mq('(max-width: 768px)');
                    if(Modernizr.mq('(min-width: 768px) and (max-width: 1019px)')) {
                        $('.module-affix').css('width', '210px');
                    }
                    else if(Modernizr.mq('(min-width: 1020px) and (max-width: 1199px)')) {
                        $('.module-affix').css('width', '287px');
                    }
                    else {
                        $('.module-affix').css('width', '360px');
                    }
                    if(Modernizr.mq('(max-width: 767px)')) {
                        if($('#mh-main-nav').hasClass('affix')) {
                            $('#mh-main-nav').removeClass('affix').removeAttr('style');
                        }
                        ;
                    }
                    else {
                        $('#mh-nav').css('min-height', $('#mh-main-nav').outerHeight());
                    }
                }
                if(mdq) {
                    $('.module-affix').attr('style', '');
                    if(!$('.module-affix').hasClass('module-affix-off')) {
                        $('.module-affix').addClass('module-affix-off').removeClass('module-affix');
                    }
                }
                else {
                    if(!$('.module-affix-off').hasClass('module-affix')) {
                        $('.module-affix-off').addClass('module-affix').removeClass('module-affix-off');
                    }
                }
                mh_cover_init();
                myRetina();
                the_slider_global();
                the_slider_carousel();
                the_slider_hello();
            }
            );
            $(window).scroll(function() {
                var current_scroll=$(window).scrollTop();
                if(ie<=9) {
                    if($('#min767').is(':visible')) {
                        headerAffix(current_scroll);
                    }
                }
                else {
                    if(Modernizr.mq('(min-width: 767px)')) {
                        headerAffix(current_scroll);
                    }
                }
                if($(this).scrollTop()>400) {
                    $('.goscroll').fadeOut();
                    $('.mh-scroll-up').addClass('visible');
                }
                else {
                    $('.goscroll').fadeIn();
                    $('.mh-scroll-up').removeClass('visible');
                }
            }
            );
            function initialize() {
                var LatLng=$('#map-canvas').data('point').split(',');
                var myLatlng=new google.maps.LatLng(LatLng[0], LatLng[1]);
                var mapOptions= {
                    zoom: $('#map-canvas').data('zoom'), center: myLatlng
                }
                var map=new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
                var marker=new google.maps.Marker( {
                    position: myLatlng, map: map,
                }
                );
            }
            if($('#map-canvas').length) {
                google.maps.event.addDomListener(window, 'load', initialize);
            }
            var overflow=null;
            function ssc_init() {
                if(document.body) {
                    var e=document.body, s=document.documentElement, c=window.innerHeight, t=e.scrollHeight;
                    if(ssc_root=document.compatMode.indexOf("CSS")>=0?s: e, ssc_activeElement=e, ssc_initdone=!0, top!=self) ssc_frame=!0;
                    else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&(ssc_root.style.height="auto", ssc_root.offsetHeight<=c)) {
                        var r=document.createElement("div");
                        r.style.clear="both", e.appendChild(r)
                    }
                    ssc_fixedback||(e.style.backgroundAttachment="scroll",
                    s.style.backgroundAttachment="scroll"),
                    ssc_keyboardsupport&&ssc_addEvent("keydown",
                    ssc_keydown)
                }
            }
            function ssc_scrollArray(e,
            s,
            c,
            t) {
                if(t||(t=1e3), ssc_directionCheck(s, c), ssc_que.push( {
                    x: s, y: c, lastX: 0>s?.99: -.99, lastY: 0>c?.99: -.99, start: +new Date
                }
                ),
                !ssc_pending) {
                    var r=function() {
                        for(var o=+new Date, n=0, a=0, i=0;
                        i<ssc_que.length;
                        i++) {
                            var l=ssc_que[i], _=o-l.start, u=_>=ssc_animtime, d=u?1: _/ssc_animtime;
                            ssc_pulseAlgorithm&&(d=ssc_pulse(d));
                            var f=l.x*d-l.lastX>>0, m=l.y*d-l.lastY>>0;
                            n+=f, a+=m, l.lastX+=f, l.lastY+=m, u&&(ssc_que.splice(i, 1), i--)
                        }
                        if(s) {
                            var h=e.scrollLeft;
                            e.scrollLeft+=n, n&&e.scrollLeft===h&&(s=0)
                        }
                        if(c) {
                            var p=e.scrollTop;
                            e.scrollTop+=a, a&&e.scrollTop===p&&(c=0)
                        }
                        s||c||(ssc_que=[]),
                        ssc_que.length?setTimeout(r,
                        t/ssc_framerate+1):ssc_pending=!1
                    }
                    ;
                    setTimeout(r,
                    0),
                    ssc_pending=!0
                }
            }
            function ssc_wheel(e) {
                ssc_initdone||ssc_init();
                var s=e.target, c=ssc_overflowingAncestor(s);
                if(!c||e.defaultPrevented||ssc_isNodeName(ssc_activeElement, "embed")||ssc_isNodeName(s, "embed")&&/\.pdf/i.test(s.src)) return!0;
                var t=e.wheelDeltaX||0, r=e.wheelDeltaY||0;
                t||r||(r=e.wheelDelta||0), Math.abs(t)>1.2&&(t*=ssc_stepsize/120), Math.abs(r)>1.2&&(r*=ssc_stepsize/190), ssc_scrollArray(c, -t, -r), e.preventDefault()
            }
            function ssc_keydown(e) {
                var s=e.target, c=e.ctrlKey||e.altKey||e.metaKey;
                if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c) return!0;
                if(ssc_isNodeName(s, "button")&&e.keyCode===ssc_key.spacebar) return!0;
                var t, r=0, o=0, n=ssc_overflowingAncestor(ssc_activeElement), a=n.clientHeight;
                switch(n==document.body&&(a=window.innerHeight), e.keyCode) {
                    case ssc_key.up: o=-ssc_arrowscroll;
                    break;
                    case ssc_key.down: o=ssc_arrowscroll;
                    break;
                    case ssc_key.spacebar: t=e.shiftKey?1: -1, o=-t*a*.9;
                    break;
                    case ssc_key.pageup: o=.9*-a;
                    break;
                    case ssc_key.pagedown: o=.9*a;
                    break;
                    case ssc_key.home: o=-n.scrollTop;
                    break;
                    case ssc_key.end: var i=n.scrollHeight-n.scrollTop-a;
                    o=i>0?i+10: 0;
                    break;
                    case ssc_key.left: r=-ssc_arrowscroll;
                    break;
                    case ssc_key.right: r=ssc_arrowscroll;
                    break;
                    default: return!0
                }
                ssc_scrollArray(n,
                r,
                o),
                e.preventDefault()
            }
            function ssc_mousedown(e) {
                ssc_activeElement=e.target
            }
            function ssc_setCache(e,
            s) {
                for(var c=e.length;
                c--;
                ) ssc_cache[ssc_uniqueID(e[c])]=s;
                return s
            }
            function ssc_overflowingAncestor(e) {
                var s=[], c=ssc_root.scrollHeight;
                do {
                    var t=ssc_cache[ssc_uniqueID(e)];
                    if(t) return ssc_setCache(s, t);
                    if(s.push(e), c===e.scrollHeight) {
                        if(!ssc_frame||ssc_root.clientHeight+10<c) return ssc_setCache(s, document.body)
                    }
                    else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,
                    "").getPropertyValue("overflow"),
                    "scroll"===overflow||"auto"===overflow)) return ssc_setCache(s,
                    e)
                }
                while(e=e.parentNode)
            }
            function ssc_addEvent(e,
            s,
            c) {
                window.addEventListener(e, s, c||!1)
            }
            function ssc_removeEvent(e,
            s,
            c) {
                window.removeEventListener(e, s, c||!1)
            }
            function ssc_isNodeName(e,
            s) {
                return e.nodeName.toLowerCase()===s.toLowerCase()
            }
            function ssc_directionCheck(e,
            s) {
                e=e>0?1: -1, s=s>0?1: -1, (ssc_direction.x!==e||ssc_direction.y!==s)&&(ssc_direction.x=e, ssc_direction.y=s, ssc_que=[])
            }
            function ssc_pulse_(e) {
                var s, c, t;
                return e*=ssc_pulseScale, 1>e?s=e-(1-Math.exp(-e)): (c=Math.exp(-1), e-=1, t=1-Math.exp(-e), s=c+t*(1-c)), s*ssc_pulseNormalize
            }
            function ssc_pulse(e) {
                return e>=1?1: 0>=e?0: (1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)), ssc_pulse_(e))
            }
            if(!$('body').hasClass('ie')) {
                var isMacLike=navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true: false;
                var isIOS=navigator.platform.match(/(iPhone|iPod|iPad)/i)?true: false;
                if(!isMacLike&&!isIOS) {
                    var ssc_framerate=150, ssc_animtime=500, ssc_stepsize=150, ssc_pulseAlgorithm=!0, ssc_pulseScale=6, ssc_pulseNormalize=1, ssc_keyboardsupport=!0, ssc_arrowscroll=50, ssc_frame=!1, ssc_direction= {
                        x: 0, y: 0
                    }
                    ,
                    ssc_initdone=!1,
                    ssc_fixedback=!0,
                    ssc_root=document.documentElement,
                    ssc_activeElement,
                    ssc_key= {
                        left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
                    }
                    ,
                    ssc_que=[],
                    ssc_pending=!1,
                    ssc_cache= {};
                    setInterval(function() {
                        ssc_cache= {}
                    }
                    ,
                    1e4);
                    var ssc_uniqueID=function() {
                        var e=0;
                        return function(s) {
                            return s.ssc_uniqueID||(s.ssc_uniqueID=e++)
                        }
                    }
                    ();
                    $.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase()),
                    $.browser.chrome&&(ssc_addEvent("mousedown",
                    ssc_mousedown),
                    ssc_addEvent("mousewheel",
                    ssc_wheel),
                    ssc_addEvent("load",
                    ssc_init));
                }
            }
        }
        )(jQuery);
        var addComment= {
            moveForm: function(a, b, c, d) {
                var e, f, g, h, i=this, j=i.I(a), k=i.I(c), l=i.I("cancel-comment-reply-link"), m=i.I("comment_parent"), n=i.I("comment_post_ID"), o=k.getElementsByTagName("form")[0];
                if(j&&k&&l&&m&&o) {
                    i.respondId=c, d=d||!1, i.I("wp-temp-form-div")||(e=document.createElement("div"), e.id="wp-temp-form-div", e.style.display="none", k.parentNode.insertBefore(e, k)), j.parentNode.insertBefore(k, j.nextSibling), n&&d&&(n.value=d), m.value=b, l.style.display="", l.onclick=function() {
                        var a=addComment, b=a.I("wp-temp-form-div"), c=a.I(a.respondId);
                        if(b&&c)return a.I("comment_parent").value="0", b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b), this.style.display="none", this.onclick=null, !1
                    }
                    ;
                    try {
                        for(var p=0;
                        p<o.elements.length;
                        p++)if(f=o.elements[p], h=!1, "getComputedStyle"in window?g=window.getComputedStyle(f): document.documentElement.currentStyle&&(g=f.currentStyle), (f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0), "hidden"!==f.type&&!f.disabled&&!h) {
                            f.focus();
                            break
                        }
                    }
                    catch(q) {}return!1
                }
            }
            ,
            I:function(a) {
                return document.getElementById(a)
            }
        }
        ;
        !function(a,
        b) {
            "use strict";
            function c() {
                if(!e) {
                    e=!0;
                    var a, c, d, f, g=-1!==navigator.appVersion.indexOf("MSIE 10"), h=!!navigator.userAgent.match(/Trident.*rv: 11\./), i=b.querySelectorAll("iframe.wp-embedded-content");
                    for(c=0;
                    c<i.length;
                    c++) {
                        if(d=i[c], !d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2, 10), d.src+="#?secret="+f, d.setAttribute("data-secret", f);
                        if(g||h)a=d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
                    }
                }
            }
            var d=!1,
            e=!1;
            if(b.querySelector)if(a.addEventListener)d=!0;
            if(a.wp=a.wp|| {},
            !a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c) {
                var d=c.data;
                if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)) {
                    var e, f, g, h, i, j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'), k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');
                    for(e=0;
                    e<k.length;
                    e++)k[e].style.display="none";
                    for(e=0;
                    e<j.length;
                    e++)if(f=j[e], c.source===f.contentWindow) {
                        if(f.removeAttribute("style"), "height"===d.message) {
                            if(g=parseInt(d.value, 10), g>1e3)g=1e3;
                            else if(~~g<200)g=200;
                            f.height=g
                        }
                        if("link"===d.message)if(h=b.createElement("a"),
                        i=b.createElement("a"),
                        h.href=f.getAttribute("src"),
                        i.href=d.value,
                        i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value
                    }
                    else;
                }
            }
            ,
            d)a.addEventListener("message",
            a.wp.receiveEmbedMessage,
            !1),
            b.addEventListener("DOMContentLoaded",
            c,
            !1),
            a.addEventListener("load",
            c,
            !1)
        }
        (window,
        document);