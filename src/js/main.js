(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const imgInput = document.querySelector("#inp-img-upload");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  function moveNext() {
    const items = document.querySelectorAll(".carousel-item");

    if (items.length > 1) {
      const currentItem = document.querySelector(".now");
      const nextItem = currentItem.nextElementSibling;
      carouselUl.appendChild(currentItem);
      currentItem.classList.remove("now");
      nextItem.classList.add("now");
    }
  }

  function movePrev() {
    const items = document.querySelectorAll(".carousel-item");
    if (items.length > 1) {
      const currentItem = document.querySelector(".now");
      const lastItem = carouselUl.lastElementChild;

      carouselUl.insertBefore(lastItem, items[0]);
      currentItem.classList.remove("now");
      lastItem.classList.add("now");
    }
  }

  function createTag(url) {
    const list = document.createElement("li");
    const img = document.createElement("img");
    list.classList.add("carousel-item");
    img.src = url;
    list.appendChild(img);

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => {
      item.classList.remove("now");
    });
    list.classList.add("now");

    return list;
  }

  function uploadImg(value) {
    const items = document.querySelectorAll(".carousel-item");

    if (value.files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgUrl = e.target.result;
        carouselUl.insertBefore(createTag(imgUrl), items[0]);
      };

      reader.readAsDataURL(value.files[0]);
    }
  }

  imgInput.addEventListener("change", (e) => {
    uploadImg(e.target);
  });
  nextBtn.addEventListener("click", moveNext);
  prevBtn.addEventListener("click", movePrev);
})();
