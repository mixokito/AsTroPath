window.showPage = function showPage(pageId) {
  // ซ่อนทุกหน้า
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // แสดงหน้าใหม่
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }
}

