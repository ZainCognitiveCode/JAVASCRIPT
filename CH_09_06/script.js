async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  })

  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 5000);
  })
    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait.....")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW);
    console.log("Fetching Banglore Weather Please wait.....")
    let bangloreW = await bangloreWeather
    console.log("Fetched Banglore Weather: " + bangloreW);
    return [delhiW, bangloreW]
    // await ka matlab ky ruko pehly ye resolve kro,phr agay bhrna ha,pehly agay nhi bhrna.
}
const cherry = async () => {
    console.log("Hey I am cherry and I am waiting")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()
}
main1()
// async function parallel execute hon gay.
