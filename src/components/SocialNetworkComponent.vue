<template>
  <div class="ContainerIcons">
    <a href="https://www.linkedin.com/in/matías-e-andrés/" target="_blank" class="iconSocial">
      <FontAwesomeIcon :icon="['fab', 'linkedin']" />
    </a>
    <a href="https://wa.me/5491169592814" target="_blank" class="iconSocial">
      <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
    </a>
    <a href="https://github.com/a-matias" target="_blank" class="iconSocial">
      <FontAwesomeIcon :icon="['fab', 'github']" />
    </a>
    <a href="https://gitlab.com/matias-andres" target="_blank" class="iconSocial">
      <FontAwesomeIcon :icon="['fab', 'gitlab']" />
    </a>
    <a href="mailto:matias.e.andres@gmail.com" class="iconSocial">
      <FontAwesomeIcon :icon="['fas', 'envelope']" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faWhatsapp, faLinkedin, faEnvelope, faGithub, faGitlab);
</script>

<style scoped>
.ContainerIcons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 20vw;
  height: 10vh;
  align-items: flex-end;
}

.iconSocial {
  display: flex;
  width: 3vw;
  height: 3vw;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid rgb(27, 27, 26);
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}

.iconSocial svg {
  font-size: 1.6em;
}

.iconSocial:hover {
  background-color: rgb(27, 27, 26);
  color: aliceblue;
  transition: 0.4s;
  cursor: pointer;
}

@media (max-width: 576px) {
  .ContainerIcons {
    width: 80vw;
    height: 10vh;
  }

  .iconSocial {
    width: 10vw;
    height: 5vh;
    font-size: 16px;
    margin-left: 2px;
    margin-right: 2px;
  }

  .iconSocial svg {
    font-size: 1.6em;
  }

}
</style>
