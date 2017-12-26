export default {
  index: '/',

  __query (str, obj) {
    return `${str}${JSON.stringify(obj).replace('{"', '?').replace('"}', '').replace(/":"/g, '=').replace(/","/g, '&')}`
  },

  url (url, query) {
    return this.__query(url, query)
  },

  user (zone) {
    return `/user/${zone}`
  },

  bangumi (id) {
    return `/bangumi/${id}`
  },

  video (id) {
    return `/video/${id}`
  },

  post (id) {
    return `/post/${id}`
  },

  bangumiTag (id) {
    return id ? `/bangumi/tags?id=${id}` : '/bangumi/tags'
  },

  bangumiNews () {
    return '/bangumi/news'
  }
}
