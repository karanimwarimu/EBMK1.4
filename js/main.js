
function toggleSub(el){
  const next = el.nextElementSibling;
  next.classList.toggle('open');
  const icon = el.querySelector('i');
  icon.style.transform = next.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
}

async function loadContent(el, pagePath) {
  // 1️⃣ Clear previous active links
  document.querySelectorAll('.active').forEach(a => a.classList.remove('active'));
  if (el) el.classList.add('active');

  // 2️⃣ Set title based on page name
  const title = pagePath.split('/').pop().replace(/_/g, ' ');
  document.getElementById('content-title').innerText = title.charAt(0).toUpperCase() + title.slice(1);

  const contentBody = document.getElementById('content-body');

  // 3️⃣ Build path safely (handles nested folders like 'customers/list')
  const filePath = `pages/${pagePath.toLowerCase().replace(/\s+/g, '_')}.html`;

  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    contentBody.innerHTML = html;
  } catch (err) {
    contentBody.innerHTML = `<p style="color:red;">Error loading <b>${pagePath}</b>: ${err.message}</p>`;
  }
}



document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});