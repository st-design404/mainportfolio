// avatar fallback
const avatarImg = document.getElementById("avatarImg");
const fallback = document.getElementById("avatarFallback");

avatarImg.onerror = () => {
  avatarImg.style.display = "none";
  fallback.style.display = "flex";
};

// works image fallback
document.querySelectorAll(".work-img").forEach(img => {
  img.onerror = () => {
    img.style.opacity = "0";
  };
});