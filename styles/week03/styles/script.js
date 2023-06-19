document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
  
    const options = {
      threshold: 0,
      rootMargin: "0px 0px 100px 0px" // Adjust this margin to trigger loading earlier or later
    };
  
    const lazyLoadImage = (image) => {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.onload = () => {
        image.classList.add("picture-fade-in");
        image.removeAttribute("data-src");
      };
    };
  
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lazyLoadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    images.forEach((image) => {
      observer.observe(image);
    });
  });
  