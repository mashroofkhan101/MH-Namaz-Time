import { Geolocation } from '@capacitor/geolocation';

window.getPrayerPosition = async function () {
  let permission = await Geolocation.checkPermissions();

  if (permission.location !== 'granted') {
    permission = await Geolocation.requestPermissions();
  }

  if (permission.location !== 'granted') {
    throw new Error('Location permission not granted');
  }

  return await Geolocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 60000
  });
};
