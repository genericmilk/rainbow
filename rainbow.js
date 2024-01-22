var r = {
    dictionary: [
        {
            char: '🙂',
            match: [':)',':-)','(:','(-:',':]',':-]',':-3',':3',':->',':>',':-}',':}',':o)',':c)',':^)','=]','=)',':smile:']
        },
        {
            char: '😄',
            match: [':-D',':D','=D']
        },
        {
            char: '😂',
            match: ['xD','XD',';D',';-D',":')",":'-)",":joy:"]
        },
        {
            char: '😞',
            match: [':(',':-(',':c',':-c',':<',':-<',':[',':-[']
        },
        {
            char: '😡',
            match: [':@',':-@','>:(','>:-(']
        },
        {
            char: '😢',
            match: [":'(",":'-("]
        },
        {
            char: '😘',
            match: [':*',':-*',':x']
        },
        {
            char: '😉',
            match: [';-)',';)',';]',';-]',';^)',';D']
        },
        {
            char: '😛',
            match: [':P',':-P',':p',':-p']
        },
        {
            char: '❤️',
            match: ['<3',':heart:']
    ],
    parse: function(e){
        $.each(r.dictionary, function(dk,emoji) {
            $.each(emoji.match, function(mk,m) {
                e.val(e.val().replace(m,emoji.char));
            });
        });        
    },
    attach:function(e){
        e.keyup(function() {
            r.parse(e);
        });
    }
};
