const articles = {
  1: {
    title: "Technology and its Effects on Sustainable Development",
    author: "Shreyashi Karki",
    image: "../Assets/Images/blog/blog1.jpg",
    content: `
      <h3>Introduction</h3>
      <p>
      Technology has become an essential part of modern life, influencing how societies
      grow, communicate, and consume resources. In the context of sustainable development,
      technology acts as a powerful tool that can either support environmental protection
      or contribute to environmental degradation depending on how it is used.
      </p>

      <p>
      Sustainable development focuses on meeting present needs without compromising
      the ability of future generations to meet their own needs. When technology is
      aligned with this goal, it creates long-term economic, social, and environmental
      benefits.
      </p>

      <h3>Role of Technology in Sustainable Development</h3>
      <p>
      Technology helps improve efficiency in industries, agriculture, and transportation.
      Smart systems reduce energy consumption, minimize waste, and optimize the use
      of natural resources.
      </p>

      <p>
      Digital platforms also improve access to education, healthcare, and information,
      supporting social sustainability by reducing inequality and increasing awareness.
      </p>

      <h3>Positive Impacts of Technology</h3>
      <p>
      One of the most significant contributions of technology is renewable energy.
      Solar panels, wind turbines, and hydropower systems reduce dependence on fossil fuels
      and lower carbon emissions.
      </p>

      <p>
      In agriculture, smart irrigation systems and data-driven farming techniques
      increase productivity while conserving water and soil quality.
      </p>

      <p>
      Technology also enables sustainable business practices by supporting digital
      marketing, e-commerce, and transparent supply chains for eco-friendly products.
      </p>

      <h3>Negative Impacts of Technology</h3>
      <p>
      Despite its advantages, technology can negatively affect sustainability if misused.
      The rapid production of electronic devices has increased e-waste, which contains
      harmful chemicals that pollute soil and water.
      </p>

      <p>
      High energy consumption by data centers and digital infrastructure contributes
      to greenhouse gas emissions, especially when powered by non-renewable energy sources.
      </p>

      <h3>Technology and Sustainable Product Awareness</h3>
      <p>
      Online platforms allow consumers to compare products, read reviews, and learn
      about certifications related to sustainability. This transparency encourages
      responsible consumption.
      </p>

      <p>
      Social media campaigns and digital storytelling spread awareness about environmental
      issues, motivating individuals to choose sustainable alternatives.
      </p>

      <h3>Conclusion</h3>
      <p>
      Technology itself is not inherently good or bad—it is a tool shaped by human choices.
      When guided by sustainable goals, technology becomes a bridge between innovation
      and environmental responsibility.
      </p>

      <p>
      For sustainable development to succeed, governments, businesses, and individuals
      must work together to ensure that technological progress benefits both people
      and the planet.
      </p>
    `
  },

  2: {
    title: "Green Practices in Modern Technology",
    author: "Shreyashi Karki",
    image: "../Assets/Images/blog/blog2.jpg",
    content: `
      <h3>Introduction</h3>
      <p>
      As environmental challenges continue to grow, the technology industry is shifting
      its focus toward sustainability. Green practices in modern technology aim to reduce
      environmental impact while maintaining innovation and efficiency.
      </p>

      <h3>Why Sustainable Technology Matters</h3>
      <p>
      Although sustainable technology may require higher initial investment,
      it provides long-term benefits such as reduced operational costs,
      improved brand reputation, and investor confidence.
      </p>

      <h3>Environmentally Friendly Devices</h3>
      <p>
      Manufacturers are now designing products using recycled materials,
      biodegradable components, and energy-efficient hardware.
      </p>

      <p>
      Repairable and modular devices are also gaining popularity, helping
      reduce electronic waste and extend product life cycles.
      </p>

      <h3>Cloud Computing and Sustainability</h3>
      <p>
      Cloud technology reduces the need for large physical infrastructure,
      lowering energy consumption and emissions.
      </p>

      <p>
      Companies are increasingly using renewable energy-powered data centers
      and efficient cooling systems to minimize environmental impact.
      </p>

      <h3>Artificial Intelligence and Green Innovation</h3>
      <p>
      Artificial intelligence helps analyze large datasets to optimize energy usage,
      predict climate patterns, and improve environmental monitoring.
      </p>

      <p>
      AI-driven smart cities and energy grids reduce waste and enhance
      sustainability at a global scale.
      </p>

      <h3>Conclusion</h3>
      <p>
      The future of technology is undeniably green. As innovation continues,
      sustainable practices will become essential rather than optional.
      </p>

      <p>
      By integrating eco-conscious strategies, the tech industry can lead
      the way toward a cleaner, more sustainable world.
      </p>
    `
  },
    3: {
    title: "Sustainable Agriculture and Smart Farming",
    author: "Shreyashi Karki",
    image: "../Assets/Images/blog/blog3.jpg",
    content: `
      <h3>Introduction</h3>
      <p>
      Agriculture is the backbone of human survival, but traditional farming methods
      often place heavy pressure on natural resources. Sustainable agriculture focuses
      on producing food efficiently while protecting the environment and ensuring
      long-term soil health.
      </p>

      <h3>What is Sustainable Agriculture?</h3>
      <p>
      Sustainable agriculture uses eco-friendly practices such as crop rotation,
      organic fertilizers, water conservation, and reduced chemical usage.
      These methods help preserve biodiversity and maintain soil fertility.
      </p>

      <h3>Role of Smart Farming Technology</h3>
      <p>
      Smart farming integrates technology like sensors, drones, and data analytics
      to monitor crops and soil conditions. Farmers can make informed decisions,
      reducing water waste and improving crop yield.
      </p>

      <h3>Environmental Benefits</h3>
      <p>
      Sustainable farming reduces greenhouse gas emissions, prevents soil erosion,
      and minimizes water pollution. It also promotes healthier ecosystems and
      supports local communities.
      </p>

      <h3>Future of Farming</h3>
      <p>
      As climate challenges increase, sustainable agriculture and smart farming
      technologies will play a vital role in feeding the global population while
      protecting the planet.
      </p>
    `
  },

  4: {
    title: "Eco-Friendly Packaging and Waste Reduction",
    author: "Shreyashi Karki",
    image: "../Assets/Images/blog/blog4.jpg",
    content: `
      <h3>Introduction</h3>
      <p>
      Packaging waste is one of the largest contributors to environmental pollution.
      Eco-friendly packaging focuses on reducing waste, reusing materials, and
      promoting recycling to protect the environment.
      </p>

      <h3>Understanding Eco-Friendly Packaging</h3>
      <p>
      Eco-friendly packaging uses biodegradable, recyclable, or compostable materials.
      These alternatives reduce landfill waste and lower carbon footprints.
      </p>

      <h3>Role of Businesses in Waste Reduction</h3>
      <p>
      Businesses play a crucial role by redesigning packaging, minimizing excess
      materials, and adopting sustainable supply chain practices.
      </p>

      <h3>Consumer Responsibility</h3>
      <p>
      Consumers can support waste reduction by choosing products with sustainable
      packaging and practicing proper recycling habits.
      </p>

      <h3>Moving Towards a Circular Economy</h3>
      <p>
      A circular economy focuses on reusing resources and reducing waste.
      Eco-friendly packaging is a key step toward achieving a more sustainable
      and environmentally responsible future.
      </p>
    `
  }

};

function openArticle(id) {
  localStorage.setItem("articleId", id);
  window.location.href = "article.html";
}

window.onload = function () {
  const id = localStorage.getItem("articleId");
  if (!id) return;

  const article = articles[id];
  document.getElementById("article-title").innerText = article.title;
  document.getElementById("article-author").innerText = article.author;
  document.getElementById("article-image").src = article.image;
  document.getElementById("article-content").innerHTML = article.content;

  const other = id == 1 ? 2 : id == 2 ? 3 : id == 3 ? 4 : 1;
  document.getElementById("like-img").src = articles[other].image;
  document.getElementById("like-title").innerText = articles[other].title;
  document.getElementById("like-btn").onclick = () => openArticle(other);
};