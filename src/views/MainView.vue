<script setup>
import { onMounted } from "vue";
import Main from "../components/Main.vue";
import axios from "axios";


onMounted(()=>{
  axios.get('https://my-json-server.typicode.com/Daray12/Web-TAS/db').then((response)=> {
    //studentData = response.data;
    //Add a way to send this to the main.Vue file
  }).catch((error)=>{
    console.log(error)
  })
})
</script>

<template>
  <main>
    <Main/>
  </main>
</template>
