export async function getLocation () {
  const coords = [];
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    console.log("Locating...");
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        coords.push(position.coords.latitude);
        coords.push(position.coords.longitude);
      },
      () => {
        console.log("Unable to retrieve your location");
      }
    );
  }
  return coords;
};