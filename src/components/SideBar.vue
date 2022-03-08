<template>
  <nav class="sidebarPrincipal">
    <header>
      <div class="image-text">
        <span class="image">
          <img src="logo.png" alt="" />
        </span>

        <div class="text logo-text">
          <span class="name">CadWABA</span>
          <span class="profession">Cadastro de WABA</span>
        </div>
      </div>
      <i class="bx bx-chevron-right toggle" @click="activeClose"></i>
    </header>

    <div class="menu-barPrincipal">
      <div class="menuPrincipal">
        <ul class="menu-linksPrincipal">
          <li class="nav-linkPrincipal">
            <router-link to="/">
              <a href="#">
                <i class="bx bxs-dashboard icon"></i>
                <span class="text nav-text">Dashboard</span>
              </a>
            </router-link>
          </li>

          <li class="nav-linkPrincipal">
            <router-link to="/Register">
              <a href="#">
                <i class="bx bxs-edit icon"></i>
                <span class="text nav-text">Cadastro</span>
              </a>
            </router-link>
          </li>

          <li class="nav-linkPrincipal">
            <router-link to="/Consult">
              <a href="#">
                <i class="bx bx-search-alt icon"></i>
                <span class="text nav-text">Consulta</span>
              </a>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="bottom-content">
        <li class="mode">
          <div class="sun-moon">
            <i class="bx bx-moon icon moon"></i>
            <i class="bx bx-sun icon sun"></i>
          </div>
          <span class="mode-text text">Modo Escuro</span>

          <div class="toggle-switch" @click="activeMode">
            <span class="switch"></span>
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    activeClose() {
      let main = document.querySelector(".mainPrincipal");
      let sidebar = document.querySelector(".sidebarPrincipal");
      sidebar.classList.toggle("close");
      main.classList.toggle("active");
    },

    activeMode() {
      let modeText = document.querySelector(".mode-text");
      let body = document.querySelector("body");
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Modo Claro";
      } else {
        modeText.innerText = "Modo Escuro";
      }
    },
  },
};
</script>