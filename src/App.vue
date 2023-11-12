<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

button, input, textarea {
  background: transparent;
  border: none;
  outline: none;
}

a, span {
  color: inherit;
  display: inline-block;
}

.auth_title {
  color: #121111;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
}
</style>
