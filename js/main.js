document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin sản phẩm từ URL
    const queryString = window.location.search; // Thêm dòng này để lấy queryString
    const urlParams = new URLSearchParams(queryString);
    const imageUrl = urlParams.get('imageUrl');
    const productName = urlParams.get('name');
    const productDescription = urlParams.get('description');
  
    // Cập nhật nội dung các phần tử trong trang
    const productImg = document.getElementById('image-product');
    const productNameElement = document.getElementById('name-product');
    const productDescriptionElement = document.getElementById('productDescription');
    const titleProduct = document.getElementById("title")
  
    productImg.src = imageUrl;
    productNameElement.textContent = productName;
    titleProduct.textContent = productName;
    productDescriptionElement.textContent = productDescription;

  });
  function showProduct(imageUrl, name, description) {
    // Tạo URL với các tham số dữ liệu sản phẩm
    const url = `chi_tiet_san_pham.html?imageUrl=${encodeURIComponent(imageUrl)}&name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}`;
  
    // Chuyển hướng đến trang chi_tiet_san_pham.html
    window.location.href = url;
  }