<template>
  <main>
    <div id="home" />
    <HomeHeroSection />
    <HomeShineSection />
    <HomeProjectsSection />
    <HomeContactSection />
  </main>
</template>

<style lang="scss">
  // simple anchor for scrolling all the way to the top
  #home {
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
  }
</style>
