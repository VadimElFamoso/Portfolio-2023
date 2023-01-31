let news_container = document.getElementById("today_news");

const news = [
    "J'ai bientôt 20 ans",
    "J'ai habité dans plusieurs régions dont la Suisse (Genève) !",
    "Je code déjà depuis presque 10 ans :o",
    "J'ai commencé à coder avec Java (oui...)",
    "La Republique Tchèque est l'un de mes pays favoris"
]

let i = Math.floor(Math.random() * news.length);;
news_container.innerHTML = news[i];