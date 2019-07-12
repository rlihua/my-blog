<template>
  <div class="">
    <el-input v-model="inpContent"></el-input>
    <el-button type="primary" @click="getValue">获取数据</el-button>
    <el-button type="primary" @click="setValue">添加数据</el-button>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      inpContent: ''
    }
  },
  methods: {
    getValue() {
      // axios.get('/', {params: ''})
      this.$http.get('/api/getValue', {
        params: {id: 1}
      }).then( (res) => {
        console.log('res', res);
        this.inpContent = res.data[0].name;
      })
    },
    setValue() {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        id: 1, name: this.inpContent
      }).then( (res) => {
        console.log('res', res);
      })
    }
  }
}
</script>