// // you will also have to setup the referring domains on your marvel developer portal
// var PRIV_KEY = "031ca1fac23003d23746778930061410ee0ce721";
// var PUBLIC_KEY = "2b843bf0f7da77cafed79bf1df94d3e6";

// function getMarvelResponse() {
//   // you need a new ts every request
//   var ts = new Date().getTime();
//   var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

//   // the api deals a lot in ids rather than just the strings you want to use
//   var characterId = "1009718"; // wolverine

//   var url = "http://gateway.marvel.com:80/v1/public/comics";

//   console.log(url);
//   $.getJSON(url, {
//     ts: ts,
//     apikey: PUBLIC_KEY,
//     hash: hash,
//     characters: characterId
//   })
//     .done(function(data) {
//       // sort of a long dump you will need to sort through
//       console.log(data);
//     })
//     .fail(function(err) {
//       // the error codes are listed on the dev site
//       console.log(err);
//     });
// }

// getMarvelResponse();

// // // const baseUrl = ‘http://gateway.marvel.com/v1/public/characters';

// // // const query = `?limit=${​​​​​req.query.limit}​​​​​&nameStartsWith=${​​​​​req.query.name}​​​​​`;

// // // const timestamp = new Date().getTime();

// // // const hash = crypto.createHash(‘md5’).update(timestamp + config.privateKey + config.publicKey).digest(‘hex’);

// // // const auth = `&ts=${​​​​​timestamp}​​​​​&apikey=${​​​​​apiPublicKey}​​​​​&hash=${​​​​​hash}​​​​​`; const url = `${​​​​​baseUrl}​​​​​${​​​​​query}​​​​​${​​​​​auth}​​​​​`;

// // // const url = `${​​​​​baseUrl}​​​​​${​​​​​query}​​​​​${​​​​​auth}​​​​​`;
