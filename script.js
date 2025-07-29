// Array of blog data
const blogs = [
  {
    title: "Rishabh Pant: The Game Changer",
    date: "July 20, 2025",
    author: "SRK",
    img: "rp17.jpg",
    desc: "Rishabh Pant has emerged as a dynamic and fearless player in Test cricket. Known for his aggressive batting in tough situations, he has played several match-winning innings for India. One of his most iconic performances came during the 2020–21 Border-Gavaskar Trophy in Australia, where he scored a crucial 97 at Sydney and an unbeaten 89 at Gabba, leading India to a historic series win. Pant is also known for his ability to change the course of a match quickly with his counter-attacking style. As a wicketkeeper, he holds multiple records, including being the fastest Indian keeper to reach 100 dismissals in Tests."
  },
  {
    title: "Virat Kohli: Test Maestro",
    date: "July 25, 2025",
    author: "SRK",
    img: "virat.jpg",
    desc: "Virat Kohli is one of India’s greatest Test cricketers and former captain of the Indian Test team. Known for his intense focus, fitness, and elegant stroke play, Kohli has scored over 8,000 runs in Test matches with multiple double centuries. He became the first Indian captain to win a Test series in Australia in 2018–19, a landmark achievement in Indian cricket history. Under his leadership, India reached the No.1 ranking in Test cricket and played the World Test Championship Final in 2021. Kohli is praised for his passion, consistency, and ability to perform under pressure in the longest format of the game."
  },
  {
    title: "Joe Root: England's Run Machine",
    date: "July 29, 2025",
    author: "SRK",
    img: "root.jpg",
    desc: "Joe Root is one of England’s finest Test cricketers and a former captain of the England Test team. Renowned for his classical technique and consistency, Root has scored over 11,000 runs in Test matches, placing him among the top run-scorers in the format. He has a remarkable ability to anchor innings and play long, patient knocks, often leading from the front. In 2021 alone, he scored over 1,700 Test runs — one of the highest ever in a calendar year. As captain, Root guided England through several memorable victories and remains a key figure in their Test batting lineup.









Ask ChatGPT
"
  }
];

// Inject articles dynamically
const blogSection = document.getElementById("blog-section");

blogs.forEach((blog) => {
  const blogCard = document.createElement("div");
  blogCard.className = "blog-card";
  blogCard.innerHTML = `
    <img src="${blog.img}" alt="${blog.title}">
    <div class="content">
      <h3>${blog.title}</h3>
      <p><strong>Date:</strong> ${blog.date}</p>
      <p><strong>Author:</strong> ${blog.author}</p>
      <p>${blog.desc}</p>
    </div>
  `;
  blogSection.appendChild(blogCard);
});
