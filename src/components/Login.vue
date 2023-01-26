
<template>
  <body>
    <div class="login-div">
      <div class="title">TAS</div>
      <div class="sub-title">Teacher Attendance Sheet</div>

      <div class="form">
        <div class="username">
          <input type="text" placeholder="Username">
        </div>
        <div class="password">
          <input type="password" placeholder="Password">
        </div>

        <div class="options">
          <div class="remember-me">
            <input id="remember-me" type="checkbox">
            <label for="remember-me">Remember Me</label>
          </div>

          <div class="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

        </div>

        <router-link to="/main" custom v-slot="{ navigate }">
          <button class="signin-btn" @click="navigate" role="link">
            Login
          </button>
        </router-link>

      </div>
    </div>
  </body>
</template>

