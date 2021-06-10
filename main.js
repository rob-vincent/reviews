const people = [
  {
    name: "Philip Knowles",
    job: "Software developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi cupiditate tempore deserunt, impedit quo. Tenetur reiciendis aut beatae molestias!",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "Ana Smith",
    job: "Sales manager",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugit pariatur. Cum odio pariatur repellat perspiciatis.",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "Shane Wright",
    job: "Product manager",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum tenetur blanditiis perferendis. Consequuntur culpa recusandae atque consequatur explicabo adipisci pariatur?",
    pic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
  },
  {
    name: "James Bradley",
    job: "Process engineer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam vero libero harum laborum iure amet expedita inventore!",
    pic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
]

let index = 0

const image = document.querySelector(".img-container")
const details = document.querySelector(".person-details")
const count = document.querySelector(".reviews-count")

const renderData = () => {
  people.forEach((person, personIndex) => {
    const { name, job, review, pic } = person

    if (personIndex === index) {
      image.innerHTML = `<img src=${pic} alt='random person'/>`
      details.innerHTML = `<h1>${name}</h1>
    <h3>${job}</h3>
    <p>${review}</p>`
    }

    count.innerHTML += `<div class='dot' data-count=${personIndex} data-active=${personIndex === index}></div>`
  })
}

count.addEventListener("click", (e) => {
  if (e.target.className === "dot") {
    index = +e.target.dataset.count
    count.innerHTML = ""
    renderData()
  }
})

renderData()
