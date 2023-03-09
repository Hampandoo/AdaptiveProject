<script setup></script>

<template>
  <div class="wrapper">
    <main class="page main-container">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  color: #333333;
}

hr {
  border: 1px solid #dadada;
}

textarea {
  resize: none;
}

input,
textarea,
select {
  -webkit-appearance: none;
}

.wrapper {
  min-width: 320px;
  max-width: 720px;
  margin: 0 auto;
}
.main-container {
  padding: 14px 18px 0px 18px;
}
</style>
