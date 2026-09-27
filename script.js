let cart = 0;
      const count = document.getElementById("cartCount");
      const toast = document.getElementById("toast");
      document.querySelectorAll(".add-button").forEach((button) => {
        button.addEventListener("click", () => {
          cart += 1;
          count.textContent = cart;
          toast.textContent = button.dataset.item + " ditambahkan ke pesanan";
          toast.classList.add("show");
          window.setTimeout(() => toast.classList.remove("show"), 2200);
        });
      });
      document.getElementById("cartButton").addEventListener("click", () => {
        toast.textContent = cart
          ? "Pesananmu berisi " + cart + " item"
          : "Belum ada item di pesanan";
        toast.classList.add("show");
        window.setTimeout(() => toast.classList.remove("show"), 2200);
      });