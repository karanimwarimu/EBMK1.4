           function viewCustomer(el) {
  const row = el.closest('tr');
  const data = {
    ccin: row.cells[1].innerText,
    fileNo: row.cells[2].innerText,
    name: row.cells[3].innerText,
    contact: row.cells[4].innerText,
    status: row.cells[5].querySelector('input').checked ? "Active" : "Inactive",
    amount: row.cells[6].innerText,
    lta: row.cells[7].innerText
  };

  // Save data temporarily
  localStorage.setItem('selectedCustomer', JSON.stringify(data));

  // Load the view page
  loadContent(el, 'customers/view_customer');
}

function editCustomer(el) {
  const row = el.closest('tr');
  const data = {
    ccin: row.cells[1].innerText,
    fileNo: row.cells[2].innerText,
    name: row.cells[3].innerText,
    contact: row.cells[4].innerText,
    status: row.cells[5].querySelector('input').checked ? "Active" : "Inactive",
    amount: row.cells[6].innerText,
    lta: row.cells[7].innerText
  };

  localStorage.setItem('selectedCustomer', JSON.stringify(data));
  loadContent(el, 'customers/view_customer');
}