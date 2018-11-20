import Vue from 'vue'
import env from 'env'
import Alias from '~/assets/js/alias'
import Utils from '~/assets/js/utils'
import NoSSR from '~/assets/js/nossr'
import Time from '~/assets/js/timeago'
import BangumiPanel from '~/components/bangumi/BangumiPanel'
import NoContent from '~/components/NoContent'
import Hr from '~/components/common/Hr'
import Header from '~/components/layouts/Header'
import Share from '~/components/common/Share'
import Dialog from '~/components/common/Dialog'
import Layout from '~/components/layouts/Layout'
import AvaDialog from '~/components/common/AvaDialog'
import BangumiSearch from '~/components/search/BangumiSearch'
import ElementUI from 'element-ui'
import '~/assets/css/element-ui.scss'
import Affix from '~/components/common/Affix'
import ImageLazyLoad from '~/components/common/ImageLazyLoad'
import LoadMoreBtn from '~/components/common/LoadMoreBtn'
import ReportDialog from '~/components/common/ReportDialog'
import UserCard from '~/components/user/UserCard'

import { InfiniteScroll, Spinner } from 'mint-ui'

Vue.use(ElementUI)
Vue.use(InfiniteScroll)
Vue.use(ImageLazyLoad, {})
Vue.component(Spinner.name, Spinner)
Vue.component(UserCard.name, UserCard)
Vue.component(ReportDialog.name, ReportDialog)
Vue.component(LoadMoreBtn.name, LoadMoreBtn)
Vue.component(Header.name, Header)
Vue.component(Affix.name, Affix)
Vue.component(BangumiSearch.name, BangumiSearch)
Vue.component(Layout.name, Layout)
Vue.component(AvaDialog.name, AvaDialog)
Vue.component(Share.name, Share)
Vue.component(NoSSR.name, NoSSR)
Vue.component(Time.name, Time)
Vue.component(BangumiPanel.name, BangumiPanel)
Vue.component(NoContent.name, NoContent)
Vue.component(Hr.name, Hr)
Vue.component(Share.name, Share)
Vue.component(Dialog.name, Dialog)

Vue.use({
  install(Vue) {
    Vue.prototype.$utils = Utils

    Vue.prototype.$cdn = env.cdn

    Vue.prototype.$channel = new Vue()

    Vue.prototype.$alias = Alias

    Vue.prototype.$resize = (url, options = {}) => {
      if (!url) {
        return ''
      }

      if (/imageMogr2/.test(url)) {
        return url
      }

      const link = /^http/.test(url) ? url : `${env.cdn.image}${url}`
      const canUseWebP = () => {
        if (Vue.prototype.$isServer) {
          return false
        }
        if (window.supportWebP !== undefined) {
          return window.supportWebP
        }

        const elem = document.createElement('canvas')

        if (elem.getContext && elem.getContext('2d')) {
          const support =
            elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
          window.supportWebP = support
          return support
        }

        return false
      }

      const useWebP = options.webP === undefined ? true : options.webP
      const format = canUseWebP() && useWebP ? '/format/webp' : ''
      const mode = options.mode === undefined ? 1 : options.mode

      if (
        (mode === 1 && !options.width) ||
        (!options.width && !options.height)
      ) {
        return `${link}?imageMogr2/auto-orient/strip${format}`
      }

      let width
      let height

      if (mode === 1) {
        width = `/w/${options.width}`
        height = options.height ? `/h/${options.height}` : `/h/${options.width}`
      } else {
        width = options.width ? `/w/${options.width}` : ''
        height = options.height ? `/h/${options.height}` : ''
      }

      return `${link}?imageMogr2/auto-orient/strip|imageView2/${mode}${width}${height}${format}`
    }
  }
})
