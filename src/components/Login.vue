<template>
  <div class="login_container">
    <p>RNG</p>
    <div class="login_box">
      <div class="login_icon">
        <img src="../assets/rng.png" alt="">
      </div>
      <el-form label-width="0px" class="login_input">
        <el-form-item>
          <el-input prefix-icon="el-icon-s-custom" v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input :type="see_pwd" v-model="password">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            <i slot="suffix" class="el-input__icon el-icon-view xiaoshou" @click="see_pw"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary">提交</el-button>
          <el-button :type="col" @click="clr">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      see_pwd: 'password',
      see_tab: true,
      col: 'info'
    }
  },
  methods: {
    see_pw () {
      this.see_tab = !this.see_tab
      if (this.see_tab) {
        this.see_pwd = 'text'
      } else {
        this.see_pwd = 'password'
      }
    },
    clr () {
      this.username = ''
      this.password = ''
    }
  },
  watch: {
    username () {
      if (this.username === '') {
        this.col = 'info'
      } else {
        this.col = 'primary'
      }
    },
    password () {
      if (this.password === '') {
        this.col = 'info'
      } else {
        this.col = 'primary'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background: rgb(158, 35, 35);
  height: 100%;
  p {
    position: absolute;
    left:50%;
    top:10%;
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    transform: translate(-50%, 0);
  }
  .login_box {
    width: 350px;
    height: 300px;
    background: rgb(255, 255, 255);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .login_icon {
      width: 150px;
      height: 150px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .login_input {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .xiaoshou {
        cursor: pointer;
      }
      .login_btn {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}

</style>
