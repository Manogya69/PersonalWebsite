const testimonialsContainer = document.querySelector(".testimonials-container");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "hero hera lal 1",
    position: "Hero",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem! Corrupti dolorum quidem omnis aliquam commodi? Vitae sequi sapiente ab ratione minima natus, in modi illo, fugiat vel eveniet cupiditate. Perspiciatis repellendus expedita tempora inventore veniam sunt aliquid adipisci alias aperiam, assumenda nobis nisi aspernatur eligendi quod officia, ab ex.",
  },
  {
    name: "hero hera lal 2",
    position: "Hero",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem! Corrupti dolorum quidem omnis aliquam commodi? Vitae sequi sapiente ab ratione minima natus, in modi illo, fugiat vel eveniet cupiditate. Perspiciatis repellendus expedita tempora inventore veniam sunt aliquid adipisci alias aperiam, assumenda nobis nisi aspernatur eligendi quod officia, ab ex.",
  },
  {
    name: "hero hera lal 3",
    position: "Hero",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem! Corrupti dolorum quidem omnis aliquam commodi? Vitae sequi sapiente ab ratione minima natus, in modi illo, fugiat vel eveniet cupiditate. Perspiciatis repellendus expedita tempora inventore veniam sunt aliquid adipisci alias aperiam, assumenda nobis nisi aspernatur eligendi quod officia, ab ex.",
  },
  {
    name: "hero hera lal 4",
    position: "Hero",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem! Corrupti dolorum quidem omnis aliquam commodi? Vitae sequi sapiente ab ratione minima natus, in modi illo, fugiat vel eveniet cupiditate. Perspiciatis repellendus expedita tempora inventore veniam sunt aliquid adipisci alias aperiam, assumenda nobis nisi aspernatur eligendi quod officia, ab ex.",
  },
  {
    name: "hero hera lal 5",
    position: "Hero",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem! Corrupti dolorum quidem omnis aliquam commodi? Vitae sequi sapiente ab ratione minima natus, in modi illo, fugiat vel eveniet cupiditate. Perspiciatis repellendus expedita tempora inventore veniam sunt aliquid adipisci alias aperiam, assumenda nobis nisi aspernatur eligendi quod officia, ab ex.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonials.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
