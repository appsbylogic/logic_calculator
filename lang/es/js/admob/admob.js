var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-4382391968703736/3546767427',
    interstitial: 'ca-app-pub-4382391968703736/3433488291',
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: 'ca-app-pub-4382391968703736/6172680439',
    interstitial: 'ca-app-pub-4382391968703736/1411771367',
  }
}


  
  admob.banner.config({
    id: admobid.banner,
    isTesting: false
    
  })
  admob.banner.prepare()
 
  admob.banner.show();

  admob.interstitial.config({
    id: admobid.interstitial,
    isTesting: false,
    autoShow: false,
  })
  admob.interstitial.prepare()

   


document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
  console.log(event)
  
})

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
  console.log(event)

  admob.interstitial.prepare()
})