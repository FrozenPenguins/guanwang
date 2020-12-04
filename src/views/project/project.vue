<template>
    <div class="pages">
        <div class="titleBar" >
            <div  v-for="(item ,index ) in titlelist" :key="index" @click="show(index)">
              <span>{{item}}</span>
            </div>
        </div>
        <div class="projectBody">
            <div v-for="(item,index) in bodylist" :key="index" class="project" @click="goRoute('projectinfo',item.id)">
                <img :src=item.images alt="" >
                <div class="title">
                    {{item.title}}
                </div>
                <div class="projectbody">
                    {{item.subtitle}}
                </div>
            </div>
        </div>
        <div class="nextbtn" v-if="bodylist.lenght>8">
            <el-pagination
                background
                layout="pager"
                :total="20" @size-change="handleSizeChange"  @current-change="handleCurrentChange" >
            </el-pagination>

        </div>
        <div class="foot">
            <span>沪ICP备09109183号-25</span>
            <span>©WILLMID, powered by shanghai wenzheng</span>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            titlelist:[
                '全部',
                '网站建设',
                '移动设计',
                '品牌形象',
                '电商设计',
                '软件开发'
            ],
            bodylist:[
                // {img:require('../../static/project/project1.png'),title:'上海船舶研究设计学院',body:'企业官网'},
                // {img:require('../../static/project/project2.png'),title:'上海船舶研究设计学院',body:'企业官网'},
                // {img:require('../../static/project/project2.png'),title:'上海船舶研究设计学院',body:'企业官网'},
                // {img:require('../../static/project/project2.png'),title:'上海船舶研究设计学院',body:'企业官网'},
                // {img:require('../../static/project/project2.png'),title:'上海船舶研究设计学院',body:'企业官网'},
                // {img:require('../../static/project/project2.png'),title:'上海船舶研究设计学院',body:'企业官网'},
                // {img:require('../../static/project/project2.png'),title:'上海船舶研究设计学院',body:'企业官网'},
                // {img:require('../../static/project/project2.png'),title:'上海船舶研究设计学院',body:'企业官网'},
            ],
            dd:1,
            changed:null,
            page:1,
        };
    },
    computed: {},
    watch: {},
    mounted(){
        this.getPrijectInfo()
    },
    methods: {
        getProjectList(){

        },
         goRoute(Url,id){
           console.log(this.menuIndex)
            this.$router.push({
                path: Url,
                query:{
                    id
                }
            })
        },
        handleSizeChange(val){
           console.log(val)
        },
        handleCurrentChange(val){
            this.page = val
            this.getPrijectInfo()
            console.log(val)
        },
        getPrijectInfo(){
            this.$http.get('http://n.chenhong.xyz/api/index/cases_lits',{ params: { page: this.page } },
                    {
                        emulateJSON: true,
                    }).then(res => {
                        this.bodylist = res.body.data.data
                        console.log(res);
                    }).catch(msg => {
                        console.log(msg);
                    })
        }
    },
}   
</script>

<style lang="scss" scoped>

.pages{
    display: flex;
    flex-direction: column;
    margin-left: 300px;
    min-width: calc(1216px - 300px);
    height: 100vh;
    position: relative;
    > .titleBar{
        display: flex;
        justify-content: flex-end;
        position: relative;
        margin: 121px 100px 55px 0;
        > div{
            width:104px;
            height: 24px;
            font-size: 14px;
            font-weight: 500;
            color: #808080;
            cursor: pointer;
            &:hover{
                color: red;
                > span{
                    padding-bottom: 11px ;
                    border-bottom: 1px solid #E11612;
                }
            }
        }
    }
    > .projectBody{
        margin: 0 100px 0 94px;
        display: flex;
        flex-wrap: wrap;
        min-width: 1337px;
        > .project{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            margin-top: 15px;
            margin-bottom: 36px;
            cursor: pointer;
            &:hover{
                transition: 0.2s;
                margin-top:0;
            }
            > img{
                width: 333px;
                height: 234px;
            }
            > .title{
                font-size: 18px;
                font-family: HYQiHei 60S, HYQiHei 60S-60S;
                font-weight: 60S;
                color: #333333;
                line-height: 20px;
                letter-spacing: 0px;
                margin: 13px 0;
            }
            > .projectbody{
                font-size: 14px;
                font-family: HYQiHei 50S, HYQiHei 50S-50S;
                font-weight: 50S;
                color: #808080;
                line-height: 20px;
                letter-spacing: 0px;
            }
        }
    }
    > .nextbtn{
        display: flex;
        flex-direction: row;
        position: relative;
        margin-left: 94px;
    }
    > .foot{
        display: flex;
        align-items: center;
        position:absolute;
        bottom: 20px;
        right: 20px;
        font-weight: 500;
        color: #808080;
        > span:first-child{
            margin-right: 19px;
        }
    }
}
@media screen and (max-width: 1680px) {
    .pages{
        width: calc(100vw - 300px);
        height: 100vh;
        > .titleBar{
            margin: 121px 72px 55px 0;
            > div{
                width:74px;
            }
        }
        > .projectBody{
            margin: 0 70px 0 70px;
            min-width: 843px;
            > .project{
                width: auto;
                justify-content: space-between;
                > img{
                    width: 250px;
                    height: 190px;
                }
            }
        }
    }
}
@media screen and (max-width: 1461px) {
    .pages{
        width: calc(100vw - 300px);
        height: 100vh;
        > .titleBar{
            margin: 121px 72px 55px 0;
            > div{
                width:74px;
            }
        }
        > .projectBody{
            margin: 0 70px 0 70px;
            min-width: 843px;
            > .project{
                width: auto;
                justify-content: space-between;
                > img{
                    width: 210px;
                    height: 160px;
                }
            }
        }
    }
}
@media screen and (max-width: 1280px) {
    .pages{
        width: calc(100vw - 300px);
        height: 100vh;
        > .titleBar{
            margin: 121px 67px 55px 0;
            > div{
                width:70px;
            }
        }
        > .projectBody{
            margin: 0 60px 0 60px;
            min-width: 843px;
            > .project{
                width: auto;
                justify-content: space-between;
                > img{
                    width: 200px;
                    height: 130px;
                }
            }
        }
    }
}
</style>