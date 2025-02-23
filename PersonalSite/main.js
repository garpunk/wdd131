import blogPosts from './blogposts.mjs';

console.log('Blog posts loaded:', blogPosts);

const themeSelector = document.getElementById('select');
const body = document.body;

// Function to change theme and store preference
function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Save to localStorage
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Save to localStorage
  }
}

// Check localStorage on page load and apply theme
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark');
    if (themeSelector) {
      themeSelector.value = 'dark'; // Ensure dropdown reflects the saved theme
    }
  } else {
    if (themeSelector) {
      themeSelector.value = 'light'; // Default value
    }
  }
});

// Add event listener to theme selector
if (themeSelector) {
  themeSelector.addEventListener('change', changeTheme);
}

function blogPost(post) {
  return `<div class="blog-container">
            <div class="blog-img-container">
                <img class="blog-img-2" src="${post.image}" alt="${post.name}">
            </div>
            <div class="sub-blog-container">
                
                <h3 class="blog-title">${post.name}</h3>
                <p class="blog-description">${post.description}</p>
                <p><strong>Author:</strong> ${post.author}</p>
                <p><strong>Published:</strong> ${post.datePublished}</p>
                <div class="blog-content">
                    ${post.blogContent
                      .map((paragraph) => `<p>${paragraph}</p>`)
                      .join('')}
                </div>
            </div>
        </div>`;
}

function renderBlogs(blogList) {
  console.log('Rendering blogs...', blogList);

  const outputElement = document.querySelector('.dynamic-blog-container');
  if (!outputElement) {
    console.error("Error: Container '.dynamic-blog-container' not found!");
    return;
  }
  console.log('Container found. Rendering posts...');
  outputElement.innerHTML = blogList.map(blogPost).join('');

  // Blog preview container (only show first post)
  const previewElement = document.querySelector('.dynamic-blog-preview');
  if (!previewElement) {
    console.error("Error: Container '.dynamic-blog-preview' not found!");
    return;
  }
  previewElement.innerHTML = blogPreviewTemplate(blogList[0]);
  // Show only first post as preview
}
// creating the function for the blogpost preview

function blogPreviewTemplate(post) {
  return `
  <div class="all-blogs">
  <div class="blog-preview-container">
      <div class="blog-img-preview">
          <img class="blog-img" src="${post.image}" alt="${post.image}">
      </div>
      <div class="sub-blog-preview">
          
          <h3 class="blog-title">${post.name}</h3>
          <p class="blog-description">${post.description}</p>
          <p>${post.author}</p>
      </div>
  </div>
  <div class="blog-preview-container">
      <div class="blog-img-preview">
          <img class="blog-img" src="${post.image}" alt="${post.image}">
      </div>
      <div class="sub-blog-preview">
          
          <h3 class="blog-title">${post.name}</h3>
          <p class="blog-description">${post.description}</p>
          <p>${post.author}</p>
      </div>
  </div>
  <div class="blog-preview-container">
      <div class="blog-img-preview">
          <img class="blog-img" src="${post.image}" alt="${post.image}">
      </div>
      <div class="sub-blog-preview">
          
          <h3 class="blog-title">${post.name}</h3>
          <p class="blog-description">${post.description}</p>
          <p>${post.author}</p>
      </div>
  </div>
  </div>
  `;
}

// Call the function to render the blog posts
renderBlogs(blogPosts);

document.addEventListener('DOMContentLoaded', function () {
  const blogPreviews = document.querySelectorAll('.blog-preview-container'); // Select all elements

  if (blogPreviews.length > 0) {
    blogPreviews.forEach((blogPreview) => {
      blogPreview.addEventListener('click', function () {
        window.location.href = 'blogpost.html';
        console.log('Click is registering on blog-preview');
      });
    });
  } else {
    console.error("Error: '.blog-preview-container' not found!");
  }
});
