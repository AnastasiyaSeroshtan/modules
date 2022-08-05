// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//       .then((users) => renderUserList(users))
//       .catch((error) => console.log(error));
//   });
  
//   function fetchUsers() {
//     return fetch("https://jsonplaceholder.typicode.com/users").then(
//       (response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       }
//     );
//   }
  
//   function renderUserList(users) {
//     const markup = users
//       .map((user) => {
//         return `<li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>`;
//       })
//       .join("");
//     userList.innerHTML = markup;
//   }

const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");
const alertPopup = document.querySelector(".alert");
let isAlertVisible = false;

// Controls the group number
let page = 1;
// Controls the number of items in the group
let limit = 20;
// In our case total number of pages is calculated on frontend
const totalPages = 100 / limit;

fetchPostsBtn.addEventListener("click", () => {
  // Check the end of the collection to display an alert
  if (page > totalPages) {
    return toggleAlertPopup();
  }

  fetchPosts()
    .then((posts) => {
      renderPosts(posts);
      // Increase the group number
      page += 1;

      // Replace button text after first request
      if (page > 1) {
        fetchPostsBtn.textContent = "Fetch more posts";
      }
    })
    .catch((error) => console.log(error));
});

function fetchPosts() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: page
  });

  return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}

function toggleAlertPopup() {
  if (isAlertVisible) {
    return;
  }
  isAlertVisible = true;
  alertPopup.classList.add("is-visible");
  setTimeout(() => {
    alertPopup.classList.remove("is-visible");
    isAlertVisible = false;
  }, 3000);
}





// const fetchPostsBtn = document.querySelector(".btn");
// const userList = document.querySelector(".posts");

// fetchPostsBtn.addEventListener("click", () => {
//   fetchPosts()
//     .then((posts) => renderPosts(posts))
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   // Change the number of items in the group here  
//   return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5&_page=5").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }