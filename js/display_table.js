async function loadContent(el, page) {
  const contentBody = document.getElementById('content-body');
  try {
    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();
    contentBody.innerHTML = html;
  } catch (err) {
    contentBody.innerHTML = `<p style="color:red;">Error loading ${page}: ${err.message}</p>`;
  }
}
