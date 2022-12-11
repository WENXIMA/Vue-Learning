<template>
<NavigationBar />
<main>
    <router-view>
  </router-view>
</main>

<FooterBar />
 
  
</template>

<script>
import NavigationBar from './component/Navgation/NavigationBar.vue';
import FooterBar from './component/Footer/FooterBar.vue';
export default{
  components:{NavigationBar,FooterBar}
}
</script>