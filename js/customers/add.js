
function openTab(evt, tabName) {
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tab-button").click();
});


document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    document.getElementById("profilePreview").src = event.target.result;
  };
  reader.readAsDataURL(file);
});

const cameraBtn = document.getElementById("cameraBtn");
const cameraContainer = document.getElementById("cameraContainer");
const video = document.getElementById("cameraStream");
const captureBtn = document.getElementById("captureBtn");

cameraBtn.addEventListener("click", async () => {
  cameraContainer.style.display = "block";
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
});

captureBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  document.getElementById("profilePreview").src = canvas.toDataURL("image/png");

  // Stop camera stream
  video.srcObject.getTracks().forEach(track => track.stop());
  cameraContainer.style.display = "none";
});

