export async function getLocation () {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      reject()
    } else {
      console.log("Locating...");
      navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position)
          },
          () => {
            reject()
            console.log("Unable to retrieve your location");
          }
      );
    }
  })
};