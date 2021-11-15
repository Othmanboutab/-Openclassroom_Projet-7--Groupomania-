<template>
  <div>
    <nav id="nav">
      <img src="../assets/icon-left-font-monochrome-black.png" alt="logo" class="Groupomania" />
      <ul class="links">
        <li>
          <router-link to="/login">Connexion</router-link>
        </li>
      </ul>
    </nav>
    <signup></signup>
  </div>
</template>

<script>
import signup from "../components/signup";
export default {
  name: "Home",
  components: {
    signup,
  },
};
</script>