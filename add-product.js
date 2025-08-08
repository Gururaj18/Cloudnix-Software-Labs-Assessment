function goBack() {
  window.location.href = "index.html"; // Update path if needed
}

document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Product submitted!");
});
