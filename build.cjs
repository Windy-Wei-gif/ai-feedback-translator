const fs=require('node:fs');
let shell=fs.readFileSync('src/shell.html','utf8');
const wrap=s=>'<script>\n'+s.replace(/<\/script/gi,'<\\/script')+'\n</script>';
shell=shell.replace('</body>',()=>'<script type="text/plain" id="third-party-license">\nSheetJS CE 0.20.3, Copyright (C) 2013-present SheetJS\n'+fs.readFileSync('vendor/LICENSE.txt','utf8').replace(/<\/script/gi,'<\\/script')+'\n</script>\n</body>');
shell=shell.replace('<!-- VENDOR -->',()=>wrap(fs.readFileSync('vendor/xlsx.full.min.js','utf8'))).replace('<!-- APP -->',()=>wrap(fs.readFileSync('src/app.js','utf8')));
fs.writeFileSync('VIP_Translator.html',shell);
console.log('Built VIP_Translator.html ('+Buffer.byteLength(shell)+' bytes)');
