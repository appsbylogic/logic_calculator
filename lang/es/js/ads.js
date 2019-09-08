document.addEventListener('deviceready', () => {
  console.log('asdasd')
  admob.banner.show({
    id: {
      // replace with your ad unit IDs
      android: 'ca-app-pub-4382391968703736/3546767427',
      ios: 'ca-app-pub-xxx/zzz',
      
    },
  })
}, false)