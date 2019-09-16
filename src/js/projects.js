class Project {
  constructor(title, link, description, img, style) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.img = img;
    this.style = style;
  }
}
const app = new Vue({
  el: "#app",
  data: {
    keyword: "",
    projectList: [
      new Project(
        "Weather View",
        "https://projects.codinglab.online/weather-view/",
        "A React Application to view the weather for US cities.",
        "images/pic01.jpg",
        "1"
      ),
      new Project(
        "National Animals",
        "https://projects.codinglab.online/national-animals-data-vis",
        "Using scraped data from Wikipedia, Python and D3.js, render national animals on a globe",
        "images/pic02.jpg",
        "2"
      ),
      new Project(
        "Classmate",
        "https://classmate.codinglab.tech/",
        "A question and answers social site made with PHP7 and Vue",
        "images/pic03.jpg",
        "3"
      ),
      new Project(
        "Blogby",
        "https://projects.codinglab.online/react-blog/",
        "A simple React blog",
        "images/pic01.jpg",
        "2"
      ),
      new Project(
        "Intersection",
        "https://github.com/harps116/intersection",
        "A plugin to provide extra functionality to the sectional Wordpress theme.",
        "images/pic01.jpg",
        "1"
      ),
      new Project(
        "adam.harpur.io",
        "https://adam.harpur.io",
        "A remix of the Grav Future theme using a little custom twig and styling",
        "images/pic01.jpg",
        "3"
      )
    ]
  },
  computed: {
    filteredList() {
      return this.projectList.filter(project => {
        const term = this.keyword.toLowerCase();
        return project.title.toLowerCase().includes(term);
      });
    }
  }
});