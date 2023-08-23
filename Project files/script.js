const API_KEY = "499d03534f224e8890dcd1f95376001c"
const url = "https://newsapi.org/v2/everything?q="



async function fetchData(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json()
    return data
}
fetchData("all").then(data => renderMain(data.articles))

//menu btn
let mobilemenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})


//render news 
function renderMain(arr){
    let mainHTML = ''
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i].urlToImage){
        mainHTML += ` <div class="card">
                        <a href=${arr[i].url}>
                        <img src=${arr[i].urlToImage} lazy="loading" />
                        <h4>${arr[i].title}</h4>
                        <div class="publishbyDate">
                            <p>${arr[i].source.name}</p>
                            <span>•</span>
                            <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                           ${arr[i].description}
                        </div>
                        </a>
                     </div>
        `
        }
    }

    document.querySelector("main").innerHTML = mainHTML
}


const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchFormMobile = document.getElementById("searchFormMobile");
const searchInputMobile = document.getElementById("searchInputMobile");

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const data = await fetchData(searchInput.value);
    renderMain(data.articles);
});

searchFormMobile.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const data = await fetchData(searchInputMobile.value);
    renderMain(data.articles);
});

searchBtnMobile.addEventListener("submit",async(e)=>{
    e.preventDefault()
    const data = await fetchData(searchInputMobile.value)
    renderMain(data.articles)
})


async function Search(query){
    const data = await fetchData(query)
    renderMain(data.articles)
};
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const signupButton = document.getElementById("signupButton");
  
    signupButton.addEventListener("click", function() {
      const userEmail = emailInput.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
      if (!emailPattern.test(userEmail)) {
        alert("Please enter a valid email address.");
      } else {
        alert(`Thank you for subscribing with ${userEmail}!`);
      }
});
});

 
 
