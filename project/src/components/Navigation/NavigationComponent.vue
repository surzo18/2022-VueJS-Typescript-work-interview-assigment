<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src='@/assets/logo.png' class="logo" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="main-ul" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item active d-flex align-items-center">
            <router-link to="/" class="text-decoration-none">Home</router-link>
            <i class="bi bi-caret-down-fill ms-2"></i>
          </li>
          <li class="nav-item">
            <router-link to="/" class="text-decoration-none">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="text-decoration-none">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="text-decoration-none">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationComponent"
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100px;
  height: auto;
}

.navbar-brand {
  margin-left: 3%;
}

#main-ul {
  margin-right: 23%;

  .nav-item {
    margin-right: 15%;

    a {
      color: #2c3e50;
    }
  }
}

.bi-caret-down-fill{
font-size: 0.7em;
}
</style>