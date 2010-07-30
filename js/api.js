(function() {
    var trueName = '';
    for (var i = 0; i < 16; i++) {
        trueName += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    window[trueName] = {};
    var $ = window[trueName];
    $.f = function() {
        return {
            runFunction: [],
            init: function(target) {
                var scripts = document.getElementsByTagName('script');
                for (var i = 0; i < scripts.length; i++) {
                    if (scripts[i].src.match(target)) {
                        $.f.buildStructure();
                        scripts[i].parentNode.insertBefore($.w, scripts[i]);
                        scripts[i].parentNode.removeChild(scripts[i]);
                        break;
                    }
                }
            },
            buildStructure: function() {
                $.w = document.createElement('div');
                $.w.className = 'moduletable';
                $.w.id = 'radioesperanzah';
                $.f.runSearch();
            },
            runSearch: function() {
                $.w.innerHTML = '';
                if (!$.f.runFunction) {
                    $.f.runFunction = [];
                }
                var n = $.f.runFunction.length;
                var id = trueName + '.f.runFunction[' + n + ']';
                $.f.runFunction[n] = function(r) {
                    delete($.f.runFunction[n]);
                    $.f.removeScript(id);
                    $.f.renderResult(r.value.items);
                };
                var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=fd7ba2c2885668ceee1156702e615da9&_render=json&s=http%3A%2F%2Ffeeds.feedburner.com%2Fradio-esperanzah%3Fformat%3Dxml';
                url += '&_callback=' + id;
                $.f.runScript(url, id);
            },
            renderResult: function(r) {
                var title = document.createElement('h3');
                title.innerHTML = "Radio Esperanzah!";
                $.w.appendChild(title);
                var list = document.createElement('ul');
                list.className = 'list';
                for (var i = 0; i < r.length; i++) {
                    var item = document.createElement('li');
                    var link = document.createElement('a');
                    link.href = r[i]['feedburner:origLink'];
                    link.innerHTML = r[i].title;
                    item.appendChild(link);
                    list.appendChild(item);
                }
                $.w.appendChild(list);
            },
            runScript: function(url, id) {
                var s = document.createElement('script');
                s.id = id;
                s.type = 'text/javascript';
                s.src = url;
                document.getElementsByTagName('body')[0].appendChild(s);
            },
            removeScript: function(id) {
                if (document.getElementById(id)) {
                    var s = document.getElementById(id);
                    s.parentNode.removeChild(s);
                }
            }
        };
    } ();
    var script = /(api|embed).js$/;
    if (typeof window.addEventListener !== 'undefined') {
        if (window.opera) {
            $.f.init(script);
        } else {
            window.addEventListener('load', function() {
                $.f.init(script);
            }, false);
        }
    } else if (typeof window.attachEvent !== 'undefined') {
        window.attachEvent('onload', function() {
            $.f.init(script);
        });
    }
    $.f.init(script);
})();