// function myModalFunc() {
//   const modalBtn = document.getElementById("open-modal");
//   const modal = document.querySelector(".modal__wrapper");
//   const overlay = document.querySelector(".modal__overlay");
//   const closeBtn = document.querySelector(".modal__close");

//   const openModal = () => {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   };

//   const closeModal = () => {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   };

//   // open modal function
//   modalBtn.addEventListener("click", openModal);

//   // closing modal&overlay on click and on ESC
//   closeBtn.addEventListener("click", closeModal);
//   overlay.addEventListener("click", closeModal);
//   document.addEventListener("keydown", (e) => {
//     if (e.keyCode === 27 && !modal.classList.contains("hidden")) {
//       closeModal();
//     }
//   });
// }
