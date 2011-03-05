(function(){var a=function(a,b){function c(){}c.prototype=(a.superclass=b).prototype;return(a.prototype=new c).constructor=a};define("ace/mode/coco",function(b,c,d){var e,f,g,h;e="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*",c.Mode=f=function(c){function g(){this.$tokenizer=new(b("ace/tokenizer").Tokenizer)(g.Rules),this.$outdent=new(b("ace/mode/matching_brace_outdent").MatchingBraceOutdent)}var d,f=a(g,c).prototype;g.displayName="CocoMode",d=RegExp("(?:[({[=:]|[-~]>|\\b(?:else|d(?:o|efault)|try|finally|catch(?:\\s*"+e+")?))\\s*$"),f.getNextLineIndent=function(a,b,c){var e,f;e=this.$getIndent(b),f=this.$tokenizer.getLineTokens(b,a).tokens,(!f.length||f[f.length-1].type!=="comment")&&a==="start"&&d.test(b)&&(e+=c);return e},f.toggleCommentLines=function(a,c,d,e){var f,g,h,i,j;f=/^(\s*)#/,g=new(b("ace/range").Range)(0,0,0,0);for(h=d;h<=e;++h)(j=f.test(i=c.getLine(h)))?i=i.replace(f,"$1"):i=i.replace(/^\s*/,"$&#"),g.end.row=g.start.row=h,g.end.column=i.length+1,c.replace(g,i);return 1-j*2},f.checkOutdent=function(a,b,c){return this.$outdent.checkOutdent(b,c)},f.autoOutdent=function(a,b,c){return this.$outdent.autoOutdent(b,c)};return g}(b("ace/mode/text").Mode),g="(?![$\\w]|\\s*:(?!:))",h={token:"string",regex:".+"},f.Rules={start:[{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof)|c(?:ontinue|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mport|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or|inally|unction)|s(?:uper|witch)|e(?:lse|xtends|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let)"+g},{token:"constant.language",regex:"(?:true|false|null|void)"+g},{token:"invalid.illegal",regex:"(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|e(?:num|xport)|var|const|static|yield)"+g},{token:"language.support.class",regex:"(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)"+g},{token:"language.support.function",regex:"(?:is(?:NaN|Finite)|parse(?:Int|Float)|encodeURI(?:Component)?|decodeURI(?:Component)?|Math|JSON)"+g},{token:"variable.language",regex:"(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by)"+g},{token:"identifier",regex:e+"\\s*:(?!:)"},{token:"variable",regex:e},{token:"keyword",regex:"@+",next:"key"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"string.doc",regex:"'''",next:"qdoc"},{token:"string.doc",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"string.regex",regex:"///",next:"heregex"},{token:"comment.doc",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"string.regex",regex:"/(?!\\s)[^[/\\n\\\\]*(?: (?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[/\\n\\\\]*)*/[imgy]{0,4}(?!\\w)",next:"key"},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F]+|(?:[1-9]\\d?)[rR][\\da-zA-Z]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?[a-zA-Z_]*)"},{token:"lparen",regex:"[({[]"},{token:"rparen",regex:"[)}\\]]",next:"key"},{token:"keyword.operator",regex:"(?:[?~]?\\.\\s*|::)",next:"key"},{token:"keyword.operator",regex:"\\S+"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?///(?:\\?|[imgy]{0,4})",next:"start"},{token:"string.regex",regex:"\\s*#{"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],key:[{token:"identifier",regex:e,next:"start"},{token:"text",regex:".",next:"start"}],qdoc:[{token:"string",regex:".*?'''",next:"key"},h],qqdoc:[{token:"string",regex:'.*?"""',next:"key"},h],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"key"},h],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"key"},h],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"key"},h],words:[{token:"string",regex:".*?]>",next:"key"},h],comment:[{token:"comment.doc",regex:".*?\\*/",next:"start"},{token:"comment.doc",regex:".+"}]}})}).call(this)