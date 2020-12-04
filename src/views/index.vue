<template>
    <div class="pages">
        <el-carousel  trigger="click" height="100vh">
            <el-carousel-item v-for="(item , index) in imgList" :key="index">
               <!-- <img src="../static/indexImg/banner.png" class="imgcss" alt=""> -->
               <img :src="item.images" class="imgcss" >
            </el-carousel-item>
        </el-carousel>
     </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            imgList:[]
        };
    },
    mounted(){
        this.getImg()
    },
    methods:{
        getImg(){
            this.$http
                .get("http://n.chenhong.xyz/api/index/index")
                .then((res) => {
                  if (res.status === 200) {
                      this.imgList = res.body.data
                      console.log(this.imgList);
                  }
                })
                .catch((msg) => {
                    console.log(msg);
                });
        }
    }
}
</script>
<style lang="scss" scoped >
.pages{
    position: absolute;
    left: 300px;
    width:calc(100vw - 300px);
    height: 100vh;
    .imgcss{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
@media screen and (max-width: 1680px) {
    .pages {

       >.projectBody{

       }
    }
}
@media screen and (max-width: 1440px) {
    .pages {
 
        >.projectBody{
           
       }
    }
}
@media screen and (max-width: 1280px) {
    .pages {
  
        >.projectBody{
           
       }
    }
}
</style>