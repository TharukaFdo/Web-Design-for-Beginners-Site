// Simple JavaScript function to filter news based on the search bar
document.getElementById('searchBar').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const newsItems = document.querySelectorAll('.news-item');

  newsItems.forEach(item => {
    const title = item.querySelector('h3').textContent.toLowerCase();
    const content = item.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
