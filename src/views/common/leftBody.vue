<template>
    <div class="leftBody" :class="{'yinying':this.$route.query.num!=1}"> 
        <div class="logo">  
            <img src="../../static/indexImg/logo.png" class="imgcss">    
        </div>
        <div class="tabBar">
            <div class="list" v-for="(menuItem, index) in menuList" :key="index" :class="{ 'active' : index == menuIndex}"   @click="goRoute(menuItem.Url,index)">
                <div class="line"></div>
                <div class="title">{{ menuItem.title }}</div>
            </div>
        </div>
        <div class="foot">
            <img src="@/static/indexImg/call.png" class="img" >
            <span class="font1"></span>
            <span class="font2">400-820-8898</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuList: [
                { title: '首页',Url:'index' },
                { title: '业务范围',Url:'business'  },
                { title: '项目案例',Url:'project'  },
                { title: '合作客户',Url:'contanst'  },
                { title: '联系我们',Url:'customer'  }
            ],
            menuIndex: 0,
            num:this.$route.query.el,
        };
    },
    mounted() {
        this.tabView(this.menuIndex)
    
    },

    methods:{
       goRoute(Url,el){
           this.menuIndex = el
           console.log(this.menuIndex)
            this.$router.push({
                path: Url,
            })
       },
       tabView(index) {
             this.menuIndex = index
       },
   }
}
</script>
<style lang='scss' scoped>
.leftBody{
    position: fixed;
    height: 100vh;
    width: 300px;
    text-align:left;
    background: #fafafa; 
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9;
    &.yinying{
        box-shadow: 3px 0px 3px 3px rgba(8,2,3,0.1);
    }
    >.logo{
        width: 60px;
        height: 60px;
        margin: 60px 160px 0 80px;
        > .imgcss{
            width: 100%;
            height: 100%;
        }
    }
    >.tabBar{
        margin-right: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        > .list {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 73px;
            &:hover {
                cursor: pointer;
                > .line {
                    opacity: 1;
                }
                > .title {
                    color: #E11612;
                }
            }
            &.active {
                > .line {
                    opacity: 1;
                }
                > .title {
                    color: #E11612;
                }
            }
            > .line {
                position: absolute;
                left: 0;
                width: 30px;
                height: 2px;
                background: #E11612;
                opacity: 0;
            }
            > .title {
                font-size: 16px;
                color: rgba($color: #333333, $alpha: .8);
                font-weight: 600;
                line-height: 16px;
                margin-left: 80px;
            }
        }
    }
    >.foot{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        margin-top: auto;
        margin-bottom: 60px;
        > .img{
            width: 20px;
            height: 20px;
        }
        >.font1{
            width: 1px;
            height: 18px;
            background: #333333;
            margin: 0 15px;
        }
        >.font2{
            width: 136px;
            height: 15px;
            font-size: 18px;
            font-family: Verdana Regular, Verdana Regular-Regular;
            font-weight: bold;
            text-align: left;
            color: #333333;
            line-height: 15px;
            letter-spacing: 0px;
        }
    }
}
</style>
