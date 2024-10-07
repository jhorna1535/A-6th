

// Fetch the data 
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
  .catch((error) => console.log(error));
};

// fetch all pets

const loadPictures = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
  .then((res) => res.json())
  .then((data) => displayPictures(data.pets))
  .catch((error) => console.log(error));
};

 const loadCategoryPictures = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
  .then((res) => res.json())
  .then((data) => displayPictures(data.data))
  .catch((error) => console.log(error));


 };

// card demo
const cardDemo = {
  
    "petId": 16,
    "breed": "English Angora",
    "category": "Rabbit",
    "date_of_birth": "2023-08-05",
    "price": 300,
    "image": "https://i.ibb.co.com/zZHPJNh/pet-16.jpg",
    "gender": "Female",
    "pet_details": "This fluffy female English Angora rabbit, born on August 5, 2023, is known for her long, luxurious fur. Priced at $300, she's perfect for families who enjoy grooming and cuddling. She is not vaccinated.",
    "vaccinated_status": "Not",
    "pet_name": "Snowball"

} ;

// display pets

// const displayPictures = (pets) =>{
//  const pictureContainer = document.getElementById("picture");
//  pictureContainer.innerHTML = "";

//  if(pets.length == 0){
//   pictureContainer.innerHTML = `
  
//   <section class="flex items-center justify-center h-screen w-full bg-gray-50">
//     <div class="bg-white p-10 rounded-lg shadow-lg text-center">
//         <!-- Image -->
//         <img src="images/error.webp" alt="No Info Icon" class="mx-auto mb-6 w-32">
        
//         <!-- Title -->
//         <h2 class="text-2xl font-bold text-gray-800 mb-4">No Information Available</h2>
        
//         <!-- Description -->
//         <p class="text-gray-500 text-sm">
//             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.
//         </p>
//     </div>
// </section>

//   `;

//   return;
  
//  }
//   pets.forEach(pet => {
//     console.log(pet);
//     const card = document.createElement("div");
//     card.classList = "card bg-base-100 w-full p-2 rounded shadow-xl"
//     card.innerHTML = 
//     `
//    <figure>
//     <img
//       src=${pet.image}
//       alt="pet" />
//   </figure>
//   <div class="card-body">
//   <h2 class="font-extrabold text-lg text-left">${pet.pet_name}</h2>
//   <div class="text-sm text-left text-gray-500">
//   <h6><i class="fa-solid fa-table-cells"></i> Breed: ${pet.breed}</h6>
//   <h6><i class="fa-regular fa-calendar-days"></i>Birth: ${pet.date_of_birth}</h6>
//   <h6><i class="fa-solid fa-mercury"></i>Gender: ${pet.gender}</h6>
//   <h6><i class="fa-solid fa-hand-holding-dollar"></i>Price: ${pet.price}$</h6>
//   <div class="divider"></div>
//   </div>

//     <div class="card-actions flex flex-row gap-2 justify-between lg:flex flex-row  px-0">
//       <button class="btn btn-xs bg-white shadow-xl"><i class="fa-regular fa-thumbs-up"></i></button>
//       <button class="btn btn-xs bg-white text-teal-600 shadow-xl">Adopt</button>
//       <button onclick="openModal(${JSON.stringify(pet)})" class="btn btn-xs bg-white text-teal-600 shadow-xl">Details</button>
    
//       </div>
//   </div>
//     `;
//     pictureContainer.append(card);

//   })

// }

const displayPictures = (pets) => {
  const pictureContainer = document.getElementById("picture");
  pictureContainer.innerHTML = "";

  if (pets.length == 0) {
    pictureContainer.innerHTML = `
      <section class="flex items-center justify-center h-screen w-full bg-gray-50">
        <div class="bg-white p-10 rounded-lg shadow-lg text-center">
          <!-- Image -->
          <img src="images/error.webp" alt="No Info Icon" class="mx-auto mb-6 w-32">
          <!-- Title -->
          <h2 class="text-2xl font-bold text-gray-800 mb-4">No Information Available</h2>
          <!-- Description -->
          <p class="text-gray-500 text-sm">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.
          </p>
        </div>
      </section>
    `;
    return;
  }

  pets.forEach(pet => {
    const card = document.createElement("div");
    card.classList = "card bg-base-100 w-full p-2 rounded shadow-xl";
    card.innerHTML = `
      <figure>
        <img src=${pet.image} alt="pet" />
      </figure>
      <div class="card-body">
        <h2 class="font-extrabold text-lg text-left">${pet.pet_name}</h2>
        <div class="text-sm text-left text-gray-500">
          <h6><i class="fa-solid fa-table-cells"></i> Breed: ${pet.breed}</h6>
          <h6><i class="fa-regular fa-calendar-days"></i>Birth: ${pet.date_of_birth}</h6>
          <h6><i class="fa-solid fa-mercury"></i>Gender: ${pet.gender}</h6>
          <h6><i class="fa-solid fa-hand-holding-dollar"></i>Price: ${pet.price}$</h6>
          <div class="divider"></div>
        </div>

        <div class="card-actions flex flex-row gap-2 justify-between lg:flex flex-row px-0">
          <button class="btn btn-xs bg-white shadow-xl"><i class="fa-regular fa-thumbs-up"></i></button>
          <button class="btn btn-xs bg-white text-teal-600 shadow-xl">Adopt</button>
          <button class="btn btn-xs bg-white text-teal-600 shadow-xl">Details</button>
        </div>
      </div>
    `;
    pictureContainer.append(card);
  });
}



// Create and display categories 
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById('categories');
  
  categories.forEach((item) => {
      // Create a button 
      const buttonContainer = document.createElement('div');
       buttonContainer.innerHTML = 
       `
      <button onclick ="loadCategoryPictures('${item.category}')"  class="btn">
       ${item.category}
     
       
       </button>

       `;

      // Create an image element 
      const img = document.createElement('img');
      img.src = item.category_icon; 
      img.alt = item.category; 
      img.classList = 'w-7 h-7 rounded-full';

      // Add  category name  
      const text = document.createElement('item');
      text.innerText = item.category;

      // Append image and text to  button 
      // button.appendChild(img);
      // button.appendChild(text);

    
      // Add the button to category container 
      categoryContainer.append(buttonContainer);
  });
};

loadCategories();
loadPictures();




// Open Modal Function
const openModal = (pet) => {
  const modal = document.getElementById('myModal');
  
  // Set the pet details dynamically in the modal
  document.getElementById('modal-image').src = pet.image;
  document.getElementById('modal-title').innerText = pet.pet_name;
  document.getElementById('modal-breed').innerText = `Breed: ${pet.breed}`;
  document.getElementById('modal-birth').innerText = `Birth Date: ${pet.date_of_birth}`;
  document.getElementById('modal-vaccination').innerText = `Vaccination Status: ${pet.vaccinated_status}`;
  document.getElementById('modal-description').innerText = pet.pet_details;

  modal.classList.remove('hidden');
};

// Close Modal Function
const closeModal = () => {
  const modal = document.getElementById('myModal');
  modal.classList.add('hidden');
};
