<template>
  <div id="app">
    <input type="text" v-model="newword" @keyup.enter="addword">
    <h1>你要输入的单词是：{{ newword }}</h1>
    <button @click="addword">添加</button>
    <button @click="clearword">删除</button>
    <div class="tishi" :style="textStyle" >别加了，单词数量太多了！！！</div>
    <p class="warning" >单词列表</p>
    <ul class="warning">
      <li v-for="(item, index) in wordlist" :key="index" :style="getItemTextStyle">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script >

export default {
  data() {
    return {
      newword: '',
     
      wordlist:[],
    }
  },
  methods: {
  addword() {
   if(this.newword.trim() !== '') {
    this.wordlist.push(this.newword);
    this.newword = '';
    // console.log(this.wordlist);
   
    }
  },
  
  clearword() {
    if(this.wordlist.length > 0) {
    this.wordlist.pop()
    // console.log(this.wordlist);
    }
  }
},
 computed: {
    textStyle() {
      return this.wordlist.length > 5? { opacity: 1 } : {};
    },
    getItemTextStyle() {
      return this.wordlist.length > 5? { color:'red' } : {};
    }
  }
}

</script>

<style>
#app {
  width: 600px;
  height: 600px;
  border: 0px solid black;
  margin: 0 auto;
 
}
input{
  border:2px solid black;
  width: 200px;
  height: 30px;
  margin: 10px;
  display: block;
  margin-top: 20px;
}
h1{
  margin:10px
}
button{
  margin: 10px;
  width: 50px;
  height: 30px;
}
.tishi{
 margin:10px;
 font-size: 20px;
 font-weight: 700;
 opacity: 0;
 color:red;
}

</style>    