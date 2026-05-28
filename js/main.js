/**
 * 谱策科技官网 — 交互脚本
 */

(function () {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const contactForm = document.getElementById("contactForm");

  // 滚动时导航栏样式切换
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 移动端菜单
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  // 点击导航链接后关闭菜单并更新高亮
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menuToggle.classList.remove("active");
      navLinks.forEach(function (l) {
        l.classList.remove("active");
      });
      link.classList.add("active");
    });
  });

  // 根据滚动位置高亮当前区块对应的导航项
  const sections = document.querySelectorAll("section[id]");

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });

  // 联系表单提交（演示：仅本地提示）
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("感谢您的留言！我们已收到您的信息，工作人员将尽快与您联系。\n\n（当前为演示模式，未实际发送）");
      contactForm.reset();
    });
  }
})();
