export function html2Escape(sHtml) {
  return sHtml.replace(/[<>&"]/g, function(c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]
  })
}

export function escape2Html(str) {
  var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' }
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(all, t) {
    return arrEntities[t]
  })
}
