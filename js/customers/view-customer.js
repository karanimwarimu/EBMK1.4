function openTab(evt, tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

function previewImage(input) {
  const preview = document.getElementById("profileImage");
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.alt = "User Uploaded Image";
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// 🟢 Main loader (runs on full or partial load)
function loadCustomerView() {
  const data = JSON.parse(localStorage.getItem("selectedCustomer"));
  if (!data) return console.warn("No customer data found in localStorage");

  document.querySelector(".top-bar h1").textContent =
    `Individual Information File #${data.fileNo || ""}`;

  const map = {
    mainName: data.name,
    idRegNo: data.fileNo,
    phoneNo: data.contact,
    creditLimit: data.amount,
  };
  for (const [id, val] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) el.value = val ?? "";
  }

  const initials = encodeURIComponent((data.name || "User").split(" ")[0]);
  const img = document.getElementById("profileImage");
  if (img) img.src = `https://via.placeholder.com/150x150/000000/ffffff?text=${initials}`;

  const badge = document.querySelector(".status-badge");
  if (badge) {
    badge.textContent = data.status;
    badge.className = `status-badge ${data.status === "Active" ? "active" : "inactive"}`;
  }

  // default tab
  document.querySelectorAll(".tab-button")[0].click();
  console.log("Loaded customer:", data);
}

// 🟢 Run immediately (even if injected dynamically)
if (document.readyState !== "loading") loadCustomerView();
else document.addEventListener("DOMContentLoaded", loadCustomerView);
