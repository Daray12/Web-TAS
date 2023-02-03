<script setup>
import { onMounted } from "vue";
import Main from "../components/Main.vue";
import axios from "axios";
import StudentItem from "../components/Main.vue"
onMounted(()=>{
  axios.get('https://my-json-server.typicode.com/Daray12/Web-TAS/db').then((response)=> {
    studentData = response.data;
    console.log(response.data);
    //Add a way to send this to the main.Vue file
  }).catch((error)=>{
    console.log(error)
  })
})

</script>

<script>
var studentToSend = [];
studentData.forEach(x => {studentToSend[i] = new Student(x.Name, x.AbsentReason, x.Period);});


class Student {
  FirstName = "";
  AbsentReason = "";
  Period = "";
  constructor(fname, absent, period) 
  {
    this.FirstName = fname;
    this.AbsentReason = absent;
    this.Period = period;
  }
  getFirstName()
  {
    return this.FirstName;
  }
  getAbsentReason()
  {
    return this.AbsentReason;
  }        
 getPeriod()
  {
    return this.AbsentReason;
  }        
}

export default 
{
  components: { StudentItem },    
  data()
  {
    return{
      items: studentToSend
    }
  }
}
</script>

<template>
  <main>
    <Main/>
  </main>
</template>
