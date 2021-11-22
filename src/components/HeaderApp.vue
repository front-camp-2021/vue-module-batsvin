<template>
  <div>
    <header>
      <img src="img / logo.png" alt="" />
      <h1>Online Store</h1>
    </header>
    <nav class="nav">
      <ul class="nav__breadcrumb">
        <li>
          <a href="#"><img src="img / house - door.svg" alt="" /></a>
        </li>
        <li @click="$router.push('/')"><a href="#">Shop</a></li>
        <li @click="$router.push('/WishList')"><a href="#">Wish List</a></li>
        <li @click="$router.push('/Cart')"><a href="#">Cart</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>