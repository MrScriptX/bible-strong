import { useEffect } from 'react'
import remoteConfig from '@react-native-firebase/remote-config'

export const useRemoteConfig = () => {
  useEffect(() => {
    ;(async () => {
      await remoteConfig().setDefaults({
        apple_reviewing: false,
      })
      const fetchedRemotely = await remoteConfig().fetchAndActivate()

      if (fetchedRemotely) {
        console.log('Configs were retrieved from the backend and activated.')
      } else {
        console.log(
          'No configs were fetched from the backend, and the local configs were already activated'
        )
      }
    })()
  }, [])
}
