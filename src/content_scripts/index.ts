import onYouTubeLoaded from './modules/youtube'
import { type YouTubeAppInfo, type WebAppInfo } from '../common/interfaces'

const youtubeEnabled: boolean = true
let checkAppLoaded: string = ''

const runApp = (webAppInfo: WebAppInfo): undefined => {
  if (checkAppLoaded !== window.location.href) {
    checkAppLoaded = window.location.href
    const { appName } = webAppInfo
    if (appName === 'youtube' && youtubeEnabled) {
      const youtubeAppInfo = webAppInfo as YouTubeAppInfo
      void onYouTubeLoaded(youtubeAppInfo)
    }
  }
}

chrome.runtime.onMessage.addListener(runApp)
