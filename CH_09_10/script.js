const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + "Done Success");
    };
    document.head.append(script);
  });
};

// Problem 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.css")
// a.then((value) => {
//     console.log(value)
// })

// Problem 2
// const main2 = async () => {
//     console.log(new Date().getSeconds())
//   let a = await loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.css")
//     console.log(a)
//      console.log(new Date().getMilliseconds());
// }
// main2()

// Problem 3

// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("This is not acceptable"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (err) {
//     console.log("This error has been handled");
//   }
// };

// a();

// Problem 4

let p1 = async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(10)   
        },2000);
    })
}
let p2 = async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(20)   
        },1000);
    })
}
let p3 = async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(30)   
        },3000);
    })
}

const run = async () => {
  console.time("run");
//   let a1 = await p1(); // Fetch first 10 products from the database
//   let a2 = await p2(); // Fetch another 10 products from the database
//    let a3 = await p3(); // Fetch another 10 products from the database
    
  let a1 =  p1(); // Fetch first 10 products from the database
  let a2 =  p2(); // Fetch another 10 products from the database
  let a3 = p3(); // Fetch another 10 products from the database
    let a1a2a3 = await Promise.all([a1, a2, a3]) // phly hum saron ko await kr rhy thay,is liye unka ziada time lag rha tha,ab humny isko srf aik array mein await krwaya ha,to ye jaldi ho gaye han.
    console.log(a1a2a3)
//   console.log(a1, a2, a3)
  console.timeEnd("run");
}

run()