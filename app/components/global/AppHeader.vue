<template>
  <header class="bg-[#2196F3] py-4">
    <div class="container flex justify-between items-center text-white">
      <div class="logo">
        <nuxt-link to="/" class="text-2xl font-bold">Ayoub</nuxt-link>
      </div>
      <nav>
        <ul class="flex justify-between items-center gap-4">
          <li>
            <nuxt-link to="/" class="transition hover:text-[#FF9800]"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="#about" class="transition hover:text-[#FF9800]"
              >About</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="#services" class="transition hover:text-[#FF9800]"
              >Services</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="#portfolio" class="transition hover:text-[#FF9800]"
              >Portfolio</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="#contact" class="transition hover:text-[#FF9800]"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
