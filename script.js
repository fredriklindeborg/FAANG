// Our variables
let url = "https://newsapi.org/v2/everything?q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20AND%20(sweden%20OR%20swedish)&apiKey=5e168ff8fd5e4aa1b92b4a5ce9881c2a&pageSize=7&sortBy=publishedAt"


// Our main function which handles the news items and adds them to the DOM
let receivedNews = (newsData) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsData.articles.forEach((article) => {

    // Here we create and add html elements to our html file
    document.querySelector(".allNews").innerHTML +=
      `<a class="nyhet" href="${article.url}">

      <img src="${article.urlToImage}" alt="image" onerror="this.style.display='none'">
      <div class="datumrubrik">
      <p class="kalla">Från ${article.source.name}</p>
      <p class="datum">Publicerad ${moment(article.publishedAt).format("DD MMM YYYY")}</p>
        <p>${article.title}</p>
        <div class="lasmer">Läs mer »</div>
        </div>
      </a>`

  })
}


// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(url)
  .then(response => response.json())
  .then(receivedNews)











  // Our variables
  let urlMest = "https://newsapi.org/v2/everything?q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20AND%20(sweden%20OR%20swedish)&apiKey=5e168ff8fd5e4aa1b92b4a5ce9881c2a&domains=cnn.com,forbes.com,independent.co.uk,financial-times&pageSize=7"


  // Our main function which handles the news items and adds them to the DOM
  let mestNews = (newsData) => {

    // newsData is the entire response from the API.
    // newsData.articles is an array of objects representing each article.
    // For each article object from the API, we create a new div in HTML.
    newsData.articles.forEach((article) => {

      // Here we create and add html elements to our html file
      document.querySelector(".mestNews").innerHTML +=
      `<a class="nyhet" href="${article.url}">

      <img src="${article.urlToImage}" alt="image">
      <div class="datumrubrik">
      <p class="kalla">Från ${article.source.name}</p>
      <p class="datum">Publicerad ${moment(article.publishedAt).format("DD MMM YYYY")}</p>
        <p>${article.title}</p>
        <div class="lasmer">Läs mer »</div>
        </div>
      </a>`
    })
  }


  // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
  // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
  fetch(urlMest)
    .then(response => response.json())
    .then(mestNews)

















    // Our variables
    let urlFace = "https://newsapi.org/v2/everything?q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20AND%20(sweden%20OR%20swedish)&apiKey=5e168ff8fd5e4aa1b92b4a5ce9881c2a&domains=cnn.com,forbes.com,independent.co.uk,financial-times&pageSize=7"


    // Our main function which handles the news items and adds them to the DOM
    let faceNews = (newsData) => {

      // newsData is the entire response from the API.
      // newsData.articles is an array of objects representing each article.
      // For each article object from the API, we create a new div in HTML.
      newsData.articles.forEach((article) => {

        // Here we create and add html elements to our html file
        document.querySelector(".faceNews").innerHTML +=
        `<a class="nyhet" href="${article.url}">

        <div class="datumrubrik">
        <p class="kalla">Från ${article.source.name}</p>
        <p class="datum">Publicerad ${moment(article.publishedAt).format("DD MMM YYYY")}</p>
          <p>${article.title}</p>
          <div class="lasmer">Läs mer »</div>
          </div>
        </a>`
      })
    }


    // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
    // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
    fetch(urlFace)
      .then(response => response.json())
      .then(faceNews)





















      // Our variables
      let urlApple = "https://newsapi.org/v2/everything?q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20AND%20(sweden%20OR%20swedish)&apiKey=5e168ff8fd5e4aa1b92b4a5ce9881c2a&domains=cnn.com,forbes.com,independent.co.uk,financial-times&pageSize=7"


      // Our main function which handles the news items and adds them to the DOM
      let appleNews = (newsData) => {

        // newsData is the entire response from the API.
        // newsData.articles is an array of objects representing each article.
        // For each article object from the API, we create a new div in HTML.
        newsData.articles.forEach((article) => {

          // Here we create and add html elements to our html file
          document.querySelector(".appleNews").innerHTML +=
          `<a class="nyhet" href="${article.url}">

          <div class="datumrubrik">
          <p class="kalla">Från ${article.source.name}</p>
          <p class="datum">Publicerad ${moment(article.publishedAt).format("DD MMM YYYY")}</p>
            <p>${article.title}</p>
            <div class="lasmer">Läs mer »</div>
            </div>
          </a>`
        })
      }


      // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
      // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
      fetch(urlApple)
        .then(response => response.json())
        .then(appleNews)










        // Our variables
        let urlAmazon = "https://newsapi.org/v2/everything?q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20AND%20(sweden%20OR%20swedish)&apiKey=5e168ff8fd5e4aa1b92b4a5ce9881c2a&domains=cnn.com,forbes.com,independent.co.uk,financial-times&pageSize=7"


        // Our main function which handles the news items and adds them to the DOM
        let amazonNews = (newsData) => {

          // newsData is the entire response from the API.
          // newsData.articles is an array of objects representing each article.
          // For each article object from the API, we create a new div in HTML.
          newsData.articles.forEach((article) => {

            // Here we create and add html elements to our html file
            document.querySelector(".amazonNews").innerHTML +=
            `<a class="nyhet" href="${article.url}">

            <div class="datumrubrik">
            <p class="kalla">Från ${article.source.name}</p>
            <p class="datum">Publicerad ${moment(article.publishedAt).format("DD MMM YYYY")}</p>
              <p>${article.title}</p>
              <div class="lasmer">Läs mer »</div>
              </div>
            </a>`
          })
        }


        // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
        // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
        fetch(urlAmazon)
          .then(response => response.json())
          .then(amazonNews)












          // Our variables
          let urlNetflix = "https://newsapi.org/v2/everything?q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20AND%20(sweden%20OR%20swedish)&apiKey=5e168ff8fd5e4aa1b92b4a5ce9881c2a&domains=cnn.com,forbes.com,independent.co.uk,financial-times&pageSize=7"


          // Our main function which handles the news items and adds them to the DOM
          let netflixNews = (newsData) => {

            // newsData is the entire response from the API.
            // newsData.articles is an array of objects representing each article.
            // For each article object from the API, we create a new div in HTML.
            newsData.articles.forEach((article) => {

              // Here we create and add html elements to our html file
              document.querySelector(".netflixNews").innerHTML +=
              `<a class="nyhet" href="${article.url}">

              <div class="datumrubrik">
              <p class="kalla">Från ${article.source.name}</p>
              <p class="datum">Publicerad ${moment(article.publishedAt).format("DD MMM YYYY")}</p>
                <p>${article.title}</p>
                <div class="lasmer">Läs mer »</div>
                </div>
              </a>`
            })
          }


          // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
          // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
          fetch(urlNetflix)
            .then(response => response.json())
            .then(netflixNews)





            // Our variables
            let urlGoogle = "https://newsapi.org/v2/everything?q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20AND%20(sweden%20OR%20swedish)&apiKey=5e168ff8fd5e4aa1b92b4a5ce9881c2a&domains=cnn.com,forbes.com,independent.co.uk,financial-times&pageSize=7"


            // Our main function which handles the news items and adds them to the DOM
            let googleNews = (newsData) => {

              // newsData is the entire response from the API.
              // newsData.articles is an array of objects representing each article.
              // For each article object from the API, we create a new div in HTML.
              newsData.articles.forEach((article) => {

                // Here we create and add html elements to our html file
                document.querySelector(".googleNews").innerHTML +=
                `<a class="nyhet" href="${article.url}">

                <div class="datumrubrik">
                <p class="kalla">Från ${article.source.name}</p>
                <p class="datum">Publicerad ${moment(article.publishedAt).format("DD MMM YYYY")}</p>
                  <p>${article.title}</p>
                  <div class="lasmer">Läs mer »</div>
                  </div>
                </a>`
              })
            }


            // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
            // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
            fetch(urlGoogle)
              .then(response => response.json())
              .then(googleNews)
