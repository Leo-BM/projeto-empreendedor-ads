<template>
  <div>
    <h1 class="text-3xl">SISC</h1>
    <header class="mb-4">
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'DashboardPage' }">Início</RouterLink>
          </li>
          <li>
            <a href="javascript:;">Exames</a>
          </li>
          <li>
            <a href="javascript:;">Consultas</a>
          </li>
          <li>
            <a href="javascript:;">Vacinas</a>
          </li>
          <li>
            <a href="javascript:;">Aval.</a>
          </li>
          <li>
            <a href="javascript:;">Help</a>
          </li>
        </ul>
      </nav>
    </header>
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
ul {
  @apply flex justify-between;
}
li {
  @apply block flex-1 text-center;
}

ul li:not(:first-child) a::after {
  position: absolute;
  top: 0;
  display: block;
  content: "";
  height: 100%;
  border-right: 2px solid red;
}

ul li a {
  @apply block relative;
}
</style>
