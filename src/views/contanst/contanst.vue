<template>
    <div class="pages">
        <div class="topBody">
            <div class="next leftbtn ">
                <img src="../../static/contanst/leftbtn.png" @click="el2 > -1 && next(-15)" >
            </div>
            <div  class="list">
                <div v-for="(item,index) in lists " :key="index" class="imgshow" >
                   <img v-if="el2 < index  && index < el"  :src="item.images"  class="img" @mouseover="istrue = item.id" @mouseout="istrue = -1"/>
                </div>

            </div>
            <div class="next rightbtn ">
                    <img src="../../static/contanst/rightbtn.png" @click="el < lists.length+1 && next(15)">
            </div>
        </div>
        <div class="foot">
            <span>沪ICP备09109183号-25</span>
            <span>©WILLMID, powered by shanghai wenzheng</span>
        </div>
</div>
</template>

<script>

export default {
    components: {

    },

    data() {
        return {
            lists:[
                // {img:require('../../static/contanst/1.png'),imghover:require('../../static/contanst/1_1.png'),id:1},
                // {img:require('../../static/contanst/2.png'),imghover:require('../../static/contanst/2_1.png'),id:2},
                // {img:require('../../static/contanst/3.png'),imghover:require('../../static/contanst/3_1.png'),id:3},
                // {img:require('../../static/contanst/4.png'),imghover:require('../../static/contanst/4_1.png'),id:4},
                // {img:require('../../static/contanst/5.png'),imghover:require('../../static/contanst/5_1.png'),id:5},
                // {img:require('../../static/contanst/6.png'),imghover:require('../../static/contanst/6_1.png'),id:6},
                // {img:require('../../static/contanst/7.png'),imghover:require('../../static/contanst/7_1.png'),id:7},
                // {img:require('../../static/contanst/8.png'),imghover:require('../../static/contanst/8_1.png'),id:8},
                // {img:require('../../static/contanst/9.png'),imghover:require('../../static/contanst/9_1.png'),id:9},
                // {img:require('../../static/contanst/10.png'),imghover:require('../../static/contanst/10_1.png'),id:10},
                // {img:require('../../static/contanst/11.png'),imghover:require('../../static/contanst/11_1.png'),id:11},
                // {img:require('../../static/contanst/12.png'),imghover:require('../../static/contanst/12_1.png'),id:12},
                // {img:require('../../static/contanst/13.png'),imghover:require('../../static/contanst/13_1.png'),id:13},
                // {img:require('../../static/contanst/14.png'),imghover:require('../../static/contanst/14_1.png'),id:14},
                // {img:require('../../static/contanst/15.png'),imghover:require('../../static/contanst/15_1.png'),id:15},
            ],
            istrue:false,
            el:15,
            el2:-1,
            page:1,
        };
    },
    mounted(){
        this.getInfoList()
    },
    computed: {},
    watch: {},
    methods: {
        getInfoList(){
             this.$http
                .get(
                    "http://n.chenhong.xyz/api/index/partners",{ params: { page: this.page } },
                    { emulateJSON: true }
                )
                .then((result) => {
                    this.lists = result.body.data.data
                    console.log(333);
                    console.log(result);
                });
        },
        next(a){
            this.el = this.el + a
            this.el2 = this.el2 + a
            if (a>0) {
                this.page = this.page + 1 
            }else{
                 this.page = this.page - 1 
            }
            this.getInfoList()
        }
    },
    created() {},
    }
</script>
<style lang='scss' scoped>
.pages{
    margin-left: 300px;
    width: calc(100vw - 300px);
    display: flex;
    flex-direction: column;
	align-items: center;
    justify-content: center;
    >.topBody{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 100px;
        > .list{
            width: 1058px;
            max-height: 750px ;
            display: flex;
            flex-direction: row;
			justify-content: space-between;
            flex-wrap: wrap;
            margin: 0 45px;
            > .imgshow{
				width: 210px;
				height: 210px;
				margin-top: 40px;
                > .img{
					width: 100%;
					height: 100%;
                }
            }
        }
        > .next{
            min-width: 40px;
            min-height: 40px;
            > img{
               width: 40px;
               height: 40px;
            }
        }
    }
    > .foot{
        position:absolute;
        bottom: 26px;
        right: 60px;
        font-size: 14px;
        font-weight: 500;
        color: #808080;
        display: flex;
        flex-direction: row;
        > span:first-child{
            margin-right: 19px;
        }
    }
}
@media screen and (max-width: 1600px) {
    .pages {
		> .topBody{
			width: calc(100vw - 300px);
			margin-top: 100px;
			padding: 0 0 ;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			> .list{
				width: 900px;
				height: 700px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				> .imgshow{
					width: 173px;
					height: 180px;
					margin-top: 40px;
					> .img{
						width: 100%;
						height: 100%;
					}
				}
			}
			>.leftbtn{
				margin-left: 50px;
			}
			> .rightbtn{
				margin-left: auto;
				margin-right: 50px;
			}
		}
    }
}
@media screen and (max-width: 1440px) {
    .pages{
		> .topBody{
			width: calc(100vw - 300px);
			margin-top: 100px;
			padding: 0 0 ;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			> .list{
				min-width: 750px;
				max-height: 650px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				> .imgshow{
					width: 150px;
					height: 150px;
					margin-top: 40px;
					> .img{
						width: 100%;
						height: 100%;
					}
				}
			}
			>.leftbtn{
				margin-left: 50px;
			}
			> .rightbtn{
				margin-left: auto;
				margin-right: 50px;
			}
		}
	}
}
@media screen and (max-width: 1280px) {
    .pages{
        >.topBody{
			width: calc(100vw - 300px);
			padding: 0 0 ;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			position: relative;
			> .list{
                min-width: 661px;
				max-height: 550px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
                > .imgshow{
					width: 130px;
					height: 130px;
					margin-top: 40px;
					> .img{
						width: 100%;
						height: 100%;
					}
                }
            }
			>.leftbtn{
				margin-left: 50px;
			}
			> .rightbtn{
				margin-left: auto;
				margin-right: 50px;
			}
		}
	}
}
</style>