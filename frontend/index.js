
const cards = document.querySelector(".main_container")
    $.ajax({
      url: "http://localhost/News_website/backend/news.php",
      success: (data) => {
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
          title = data[i].title;
          text = data[i].discription;
          cards.innerHTML += `<section>
          <h2>World News</h2>
          <div class="news-container">
              <article>
                  <h3>${title}</h3>
                  <img src="download.png" alt="News Image">
                  <p>${discription}</p>
                  <a>Read More</a>
              </article>	
          </div>
      </section>`;
         
        }
        
      },
    });

