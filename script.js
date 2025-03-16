document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const navLinks = document.querySelector(".nav-links")
  
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show")
      })
    }
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          })
        }
        // Close mobile menu if open
        if (navLinks.classList.contains("show")) {
          navLinks.classList.remove("show")
        }
      })
    })
  
    // Menu Category Tabs
    const categoryBtns = document.querySelectorAll(".category-btn")
    const categoryContents = document.querySelectorAll(".category-content")
  
    if (categoryBtns.length > 0) {
      categoryBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Remove active class from all buttons
          categoryBtns.forEach((b) => b.classList.remove("active"))
          // Add active class to clicked button
          this.classList.add("active")
  
          // Hide all category contents
          categoryContents.forEach((content) => content.classList.remove("active"))
  
          // Show the selected category content
          const categoryId = this.getAttribute("data-category")
          document.getElementById(categoryId).classList.add("active")
        })
      })
    }
  
    // Subcategory Tabs
    const subcategoryBtns = document.querySelectorAll(".subcategory-btn")
  
    if (subcategoryBtns.length > 0) {
      subcategoryBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Find parent category content
          const parentCategory = this.closest(".category-content")
  
          // Remove active class from all buttons in this category
          parentCategory.querySelectorAll(".subcategory-btn").forEach((b) => b.classList.remove("active"))
  
          // Add active class to clicked button
          this.classList.add("active")
  
          // Hide all subcategory contents in this category
          parentCategory.querySelectorAll(".subcategory-content").forEach((content) => content.classList.remove("active"))
  
          // Show the selected subcategory content
          const subcategoryId = this.getAttribute("data-subcategory")
          document.getElementById(subcategoryId).classList.add("active")
        })
      })
    }
  })
  
  