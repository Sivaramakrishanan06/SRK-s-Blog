// Array of blog data
const blogs = [
  {
    title: "Rishabh Pant: The Game Changer",
    date: "July 20, 2025",
    author: "SRK",
    img: "rp17.jpg",
    desc: "Rishabh Pant has transformed India's lower order with his fearless test batting style, especially overseas."
  },
  {
    title: "Virat Kohli: Test Maestro",
    date: "July 25, 2025",
    author: "SRK",
    img: "virat.jpg",
    desc: "Known for his passion and aggression, Kohli revived India's test dominance both at home and abroad."
  },
  {
    title: "Joe Root: England's Run Machine",
    date: "July 29, 2025",
    author: "SRK",
    img: "root.jpg",
    desc: "Joe Root has been England’s most consistent performer, mastering spin and pace in every condition."
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
