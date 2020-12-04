<template>
    <div class="pages">
        <div class="list lista" v-for="(item, index) in lists" :key="index" >
            <div>
                <img :src="item.images" alt="">
                <div class="title">{{ item.title }}</div>
                <div class="line"></div>
            </div>
            <div>
                <div class="childrenList">
                    <div v-for="(childItem, childIndex) in item.tab" :key="childIndex">{{ childItem }}</div>
                </div>
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
    data: () => ({
        list: [
            {
                title: '网站建设',
                imageUrl: require('../../static/business/banenr.png'),
                childrenList: [ '响应式开发', '模板化网站', '网页界面设计', '网站整体规划']
            },
            {
                title: '网站建设',
                imageUrl: require('../../static/business/banenr2.png'),
                childrenList: [ '响应式开发', '模板化网站', '网页界面设计', '网站整体规划']
            },
            {
                title: '网站建设',
                imageUrl: require('../../static/business/banenr3.png'),
                childrenList: [ '响应式开发', '模板化网站', '网页界面设计', '网站整体规划']
            },
            {
                title: '网站建设',
                imageUrl: require('../../static/business/banenr4.png'),
                childrenList: [ '响应式开发', '模板化网站', '网页界面设计', '网站整体规划']
            },
            {
                title: '网站建设',
                imageUrl: require('../../static/business/banenr4.png'),
                childrenList: [ '响应式开发', '模板化网站', '网页界面设计', '网站整体规划']
            }
        ],
        lists:[]
    }),
    mounted(){
        this.getBusiness()
    },
    methods:{
        getBusiness(){
            this.$http
                .get("http://n.chenhong.xyz/api/index/cases_category")
                .then((res) => {
                  if (res.body.code === 200) {
                      this.lists = res.body.data
                      console.log(res.body.data);
                  }
                })
                .catch((msg) => {
                    console.log(msg);
                });
        }
    }
}
</script>
<style lang='scss' scoped>
* {
    transition: .5s;
}
.pages{
    margin-left: 300px;
    flex: 1;
    height: 100vh;
    width: calc(100vw - 300px);
    display: flex;
    flex-direction: row;
    position: relative;
    > .list {
        flex: 1;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        width: 262px;
        &:hover {
            > div {
                &:first-child {
                    z-index: 1;
                    > .title {
                        bottom: -60px;
                        color: #333333;
                    }
                    > img {
                        opacity: 1;
                    }
                }
                &:nth-child(2){
                    background-color: #FAF7F7;
                }
                > .childrenList {
                    margin-top: 80px;
                    display: grid;
                    grid-template-rows: repeat(auto-fill, 24px);
                    grid-template-columns: repeat(2, 1fr);
                    grid-row-gap: 26px;
                    grid-column-gap: 20px;
                    > div {
                        &:nth-child(2n) {
                            text-align: left;
                        }
                        &:nth-child(2n - 1) {
                            text-align: right;
                        }
                    }
                }
            }
        }
        > div {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            > img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                object-fit: cover;
                object-position: center;
            }
            > .title {
                position: absolute;
                bottom: 20px;
                line-height: 24px;
                color: #333333;
                font-weight: 600;
            }
            > .line {
                height: 4px;
                width: 80px;
                background: #E11612;
                position: absolute;
                bottom: -2px;
            }
            > .childrenList {
                margin-top: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                > div {
                    font-size: 18px;
                    line-height: 24px;
                    color: #333333;
                    font-weight: 450;
                    margin-top: 26px;
                }
            }
        }
    }
    > .foot{
        position:absolute;
        bottom: 26px;
        right: 60px;
        &:first-child{
            font-size: 14px;
            font-weight: 500;
            color: #808080;
        }
        &:last-child{
            font-size: 14px;
            font-weight: 500;
            color: #808080;
            margin-left: 19px;
        }
    }
}
@media screen and (max-width: 1280px) {
    .pages {
        position: fixed;
        width: 980px;
    }
}
</style>