const string = "親譲りの無鉄砲で小供の時から損ばかりしている。";

// indexOf 0
// 部分文字列の先頭から検索
console.log(string.indexOf('親譲り'));

// lastIndexOf 19
// 部分文字列の後ろから検索
console.log(string.lastIndexOf('ている。'));

// startsWith true
// 部分文字列の先頭から検索
console.log(string.startsWith('親'));

// endsWith true
// 部分文字列の後ろから検索
console.log(string.endsWith('る。'));

// includes true
// 部分文字列を検索
console.log(string.includes('小供の'));