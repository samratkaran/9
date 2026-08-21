// async function  getdata() {
//   const response = await fetch('https://dummyjson.com/quotes?limit=10')
  
//   try {
//       data = await response.json()
   
//   let html = "";
//   data.quotes.map((q) => {
//     html += `<p>${q.quote} - ${q.author}</p>`;
//   });

//   document.getElementById("output").innerHTML = html;
//   } catch (error) {
//     console.log(error)
//   }

  
  
// }
let html = ''


 function clikcked(){
     fetch('https://dummyjson.com/quotes?limit=10')
.then((res)=>  res.json())
.then((data)=>data.quotes.map((val)=>html+=`<li>${val.quote}<li/>`))
document.getElementById("output").innerHTML = html;
}
