<script setup>
import {onMounted } from "vue";
import EventService from "../services/EventService";
var toSend;
onMounted(()=>{
  EventService.getEvents().then((response)=> {
   toSend.value = response.data;
    console.log(response.data);
    //Add a way to send this to the main.Vue file
  }).catch((error)=>{
    console.log(error)
  })
})
</script>

<script>
import EventService from "../services/EventService";
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


var studentToSend = [];
var student_data = EventService.passValue(0, true)
student_data.forEach(x => {studentToSend[i] = new Student(x.Name, x.AbsentReason, x.Period);});
export default 
{  
  data()
  {
    return{
      items: studentToSend
    }
  }
}
</script>

<template>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>TAS</title>
  <link href="style.css" rel="stylesheet" type="text/css" />

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://TAS-1.danielyanez1.repl.co">TAS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://TAS-1.danielyanez1.repl.co">Sign out</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Send a message</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container" id="app">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        What period are you looking for?
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="">one</a></li>
        <li><a class="dropdown-item" href="">two</a></li>
        <li><a class="dropdown-item" href="#">three</a></li>
      </ul>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Student</th>
          <th scope="col">Absence Reason</th>
          <th scope="col">Period</th>
        </tr>
      </thead>
      <tbody>
        <!--Put Vue Student Component--> 
        <tr v-for="(item, index) in items">
          <td> <b>{{ index }}</b> </td>
          <td>{{item.getFirstName()}}</td>
          <td> {{item.getAbsentReason()}}</td>
          <td class="test-left">{{item.getPeriod()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</template>