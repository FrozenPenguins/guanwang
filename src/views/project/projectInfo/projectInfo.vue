<template>
    <div class="pages">
        <div class="rightbody">
            <div class="rightbody_left">
                <span class="titleFont">{{ titleinfo }}</span>
                <span class="kong"></span>
                <span class="bodyFont">{{ bodyinfo }}</span>
            </div>
            <div class="rightbody_right">
                <div class="rightbody_left_head">
                   {{des}}
                </div>
                <!-- <div class="rightbody_left_colorAndFonts">
                    <div class="rightbody_left_colors">
                        <span class="colors">colors</span>
                        <div class="rightbody_left_colors_lists">
                            <div v-for="(item, index) in 5" :key="index">
                                <div class="rightbody_left_colors_list">
                                    <div class="img"></div>
                                    <span class="font">#1585cc</span>
                                </div>
                            </div>
                            <div class="zhan"></div>
                        </div>
                    </div>

                    <div class="rightbody_left_font">
                        <span class="fonts">Fonts</span>
                        <div class="rightbody_left_font_list">
                            <span class="Aa">Aa</span>
                            <div class="font">
                                <span class="font1">思源黑体</span>
                                <span class="font2"
                                    >60px 、48px 、 30px 、16px</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="left_home">
                    <img src="../../../static/project/1.png" class="img" />
                    <div class="home">
                        <span class="title">HOME</span>
                        <span class="shouye">首页</span>
                        <span class="font"
                            >首页通过大屏轮播海报快速的给用户展示出商家最新的促销活动，以及热门商品。
                            六大金刚区板块快速的能够分发首页流量到二级页面，让用户快速到达自己想去的页面，
                            底部通过列表展示商城产品给用户提供快速购买通道...</span
                        >
                    </div>
                </div>
                <div class="rightbody_left_info">
                    <img src="../../../static/project/2.png" class="img" />
                </div>
                <div class="rightbody_left_myself">
                    <div class="top">
                        <div class="top_left">
                            <span class="titile">Personal Center</span>
                            <span class="myself">个人中心</span>
                            <span class="font"
                                >个人中心面，提供常规的个人信息修改，商城订单功能，除此之外还特别提供商品海报功能，可以让商家做一系列的促销活动...</span
                            >
                        </div>
                        <img
                            src="../../../static/project/3.png"
                            class="top_right"
                            alt=""
                        />
                    </div>
                    <div class="rightbody_left_myself_bottom">
                        <img
                            src="../../../static/project/4.png"
                            class="img"
                            alt=""
                        />
                    </div>
                </div> -->
                <div v-html="content" class="contentCss"></div>
                <div class="footinfo">
                    <div class="span1">沪ICP备09109183号-25</div>
                    <div class="span2">
                        ©WILLMID, powered by shanghai wenzheng
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            titleinfo: '',
            bodyinfo: '',
            des:'',
            prijectId:this.$route.query.id,
            content: "",
        };
    },
    computed: {},
    mounted() {
        this.getInfo();
    },
    watch: {},
    methods: {
        getInfo() {
            console.log('id',this.prijectId);
            this.$http
                .get(
                    "http://n.chenhong.xyz/api/index/cases_info",
                    { params: { id: this.prijectId } },
                    { emulateJSON: true }
                )
                .then((result) => {
                    this.content = result.body.data.content;
                    this.titleinfo =  result.body.data.title
                    this.bodyinfo = result.body.data.category
                    this.des = result.body.data.intr
                    console.log(333);
                    console.log(result);
                });
        },
    },
    created() {},
};
</script>
<style lang="scss" scoped>
.pages {
    margin-left: 300px;
    flex-direction: row;
    /*  占位符 */
    .zhan {
        width: 50px;
        margin-left: 34px;
    }
    /*  右侧界面总大小 */
    > .rightbody {
        flex: 1;
        height: 3288px;
        display: flex;
        flex-direction: row;
        /* 右侧界面里面的左侧界面 */
        > .rightbody_left {
            width: 302px;
            margin: 131px 0 0 43px;
            display: flex;
            flex-direction: column;
            > .titleFont {
                font-size: 18px;
                font-family: HYQiHei 60s, HYQiHei 60s-60s;
                font-weight: 60s;
                text-align: left;
                color: #333333;
                line-height: 20px;
                letter-spacing: 1px;
                padding-bottom: 83px;
            }
            > .kong {
                width: 300px;
                height: 1px;
                background: #a6a6a6;
            }
            > .bodyFont {
                height: 13px;
                padding-top: 15px;
                font-size: 14px;
                font-family: HYQiHei 50s, HYQiHei 50s-50s;
                font-weight: 50s;
                text-align: left;
                color: #808080;
                line-height: 20px;
                letter-spacing: 1px;
            }
        }
        > .rightbody_right {
            padding: 24px 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            > .rightbody_left_head {
                margin: 131px 260px 0 148px;
                height: 56px;
                font-size: 16px;
                font-family: HYQiHei 50s, HYQiHei 50s-50s;
                font-weight: 50s;
                text-align: Left;
                color: #333333;
                line-height: 20px;
                letter-spacing: 1px;
            }
            .contentCss {
                width: 860px;
                display: flex;
                margin-left: 148px;
            }
            /*右侧颜色字体模块*/
            > .rightbody_left_colorAndFonts {
                width: 860px;
                margin-top: 71px;
                display: flex;
                margin-left: 148px;
                /* 右侧颜色模块*/
                > .rightbody_left_colors {
                    width: 292px;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    > .colors {
                        width: 292px;
                        height: 13px;
                        font-size: 16px;
                        font-family: Verdana Regular, Verdana Regular-Regular;
                        font-weight: bold;
                        font-style: italic;
                        text-align: justifyLeft;
                        color: #333333;
                        line-height: 20px;
                        margin-bottom: 18px;
                    }
                    > .rightbody_left_colors_lists {
                        width: 292px;
                        display: flex;
                        margin-top: 29px;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        .rightbody_left_colors_list {
                            margin-top: 20px;
                            &:nth-child(3n) {
                                margin-left: 34px;
                            }
                            &:nth-child(3n + 1) {
                                margin-right: 34px;
                            }
                            > .img {
                                width: 50px;
                                height: 50px;
                                background: #fa9d56;
                                border-radius: 25px;
                            }
                            > .font {
                                font-size: 14px;
                                font-family: Arial Regular,
                                    Arial Regular-Regular;
                                font-weight: 400;
                                text-align: justifyLeft;
                                color: #333333;
                                line-height: 20px;
                            }
                        }
                    }
                }
                /* 右侧模块里面的字体模块*/
                > .rightbody_left_font {
                    margin-left: 135px;
                    width: 423xp;
                    height: 205px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    > .fonts {
                        font-size: 16px;
                        font-family: Verdana Regular, Verdana Regular-Regular;
                        font-weight: bold;
                        font-style: italic;
                        text-align: justifyLeft;
                        color: #333333;
                        line-height: 20px;
                        padding-bottom: 40px;
                    }
                    > .rightbody_left_font_list {
                        margin-top: 71px;
                        display: flex;
                        flex-direction: row;
                        > .Aa {
                            width: 203px;
                            height: 116px;
                            font-size: 141px;
                            font-family: Verdana Bold, Verdana Bold-Bold;
                            font-weight: 700;
                            font-style: italic;
                            text-align: justifyLeft;
                            color: #333333;
                            line-height: 47px;
                        }
                        > .font {
                            margin-left: 13px;
                            display: flex;
                            flex-direction: column;
                            > .font1 {
                                width: 73px;
                                height: 18px;
                                padding-top: 30px;
                                font-size: 18px;
                                font-family: Source Han Sans SC Regular,
                                    Source Han Sans SC Regular-Regular;
                                font-weight: 400;
                                font-style: italic;
                                text-align: justifyLeft;
                                color: #333333;
                                line-height: 20px;
                            }
                            > .font2 {
                                width: 220px;
                                height: 16px;
                                padding-top: 13px;
                                font-size: 16px;
                                font-family: Source Han Sans SC Regular,
                                    Source Han Sans SC Regular-Regular;
                                font-weight: 400;
                                font-style: italic;
                                text-align: justifyLeft;
                                color: #333333;
                                line-height: 20px;
                            }
                        }
                    }
                }
            }
            /* 右侧首页home模块*/
            > .left_home {
                width: 891px;
                height: 1000px;
                margin-left: 115px;
                margin-top: 130px;
                display: flex;
                flex-direction: row;
                > .img {
                    width: 324px;
                    height: 591px;
                }
                > .home {
                    margin-left: 140px;
                    width: 427px;
                    height: 591px;
                    display: flex;
                    flex-direction: column;
                    > .title {
                        width: 146px;
                        height: 40px;
                        margin-top: 113px;
                        font-size: 60px;
                        font-family: Tw Cen MT Condensed Extra Bold Regular,
                            Tw Cen MT Condensed Extra Bold Regular-Regular;
                        font-weight: bold;
                        text-align: justifyLeft;
                        color: #333333;
                        line-height: 20px;
                        letter-spacing: 3px;
                    }
                    > .shouye {
                        margin-top: 19px;
                        width: 70px;
                        height: 28px;
                        font-size: 30px;
                        font-family: HYQiHei 50s, HYQiHei 50s-50s;
                        font-weight: bold;
                        text-align: justifyLeft;
                        color: #fa9d56;
                        line-height: 20px;
                        letter-spacing: 2px;
                    }
                    > .font {
                        width: 427px;
                        height: 112px;
                        margin-top: 78px;
                        font-size: 18px;
                        font-family: HYQiHei 40s, HYQiHei 40s-40s;
                        font-weight: bold;
                        text-align: Left;
                        color: #4d4d4d;
                        line-height: 24px;
                        letter-spacing: 1px;
                    }
                }
            }
            /* 右侧里面的3个组图（商品信息、订单详情、支付） */
            > .rightbody_left_info {
                margin-left: 148px;
                margin-top: 70px;
                display: flex;
                width: 862px;
                height: 427px;
                > .img {
                    widows: 100%;
                    height: 100%;
                }
            }
            /* 右侧个人中心 */
            > .rightbody_left_myself {
                width: 892px;
                height: 1180px;
                margin-left: 148px;
                margin-top: 159px;
                display: flex;
                flex-direction: column;
                > .top {
                    width: 892px;
                    height: 591px;
                    display: flex;
                    flex-direction: row;
                    > .top_left {
                        width: 568px;
                        height: 591px;
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        > .titile {
                            margin-top: 136px;
                            width: 478px;
                            height: 40px;
                            font-size: 60px;
                            font-family: Tw Cen MT Condensed Extra Bold Regular,
                                Tw Cen MT Condensed Extra Bold Regular-Regular;
                            font-weight: bold;
                            text-align: justifyLeft;
                            color: #333333;
                            line-height: 20px;
                        }
                        .myself {
                            margin-top: 20px;
                            width: 478px;
                            height: 27px;
                            font-size: 30px;
                            font-family: HYQiHei 50s, HYQiHei 50s-50s;
                            font-weight: bold;
                            text-align: justifyLeft;
                            color: #fa9d56;
                            line-height: 20px;
                            letter-spacing: 2px;
                        }
                        .font {
                            margin-top: 78px;
                            width: 478px;
                            height: 64px;
                            font-size: 18px;
                            font-family: HYQiHei 40s, HYQiHei 40s-40s;
                            font-weight: bold;
                            text-align: justifyLeft;
                            color: #4d4d4d;
                            line-height: 24px;
                            letter-spacing: 1px;
                        }
                    }
                    .top_right {
                        width: 324px;
                        height: 591px;
                    }
                }
                .rightbody_left_myself_bottom {
                    margin-top: 159px;
                    width: 1000px;
                    height: 427px;
                    display: flex;
                    flex-direction: row;
                    > .img {
                        widows: 100%;
                        height: 100%;
                    }
                }
            }
            /* 底部注册信息 */
            > .footinfo {
                display: flex;
                justify-content: flex-end;
                margin-top: 83px;
                padding-right: 60px;
                > .span1 {
                    width: 156px;
                    height: 13px;
                    font-size: 14px;
                    font-family: HYQiHei 50s, HYQiHei 50s-50s;
                    font-weight: 50s;
                    text-align: left;
                    color: #808080;
                    line-height: 20px;
                }
                > .span2 {
                    width: 318px;
                    height: 14px;
                    font-size: 14px;
                    font-family: HYQiHei 50s, HYQiHei 50s-50s;
                    font-weight: 50s;
                    text-align: left;
                    color: #808080;
                    line-height: 20px;
                    letter-spacing: 1px;
                }
            }
        }
    }
}
@media screen and (max-width: 1680px) {
    .pages {
        position: relative;
        .zhan {
            width: 50px;
            margin-left: 0;
        }
        > .rightbody {
            > .rightbody_left {
                width: 300px;
                display: flex;
                > .kong {
                    width: 300px;
                }
            }
            > .rightbody_right {
                height: 3200px;
                justify-content: center;
                > .rightbody_left_head {
                    width: 800px;
                    margin-right: 0;
                }
                .contentCss {
                width: 800px;
            }
                > .rightbody_left_colorAndFonts {
                    display: flex;
                    width: 800px;
                    > .rightbody_left_colors {
                        width: 350px;
                        > .rightbody_left_colors_lists {
                            width: 350px;
                            > div {
                                width: 80px;
                                margin-right: 10px;
                            }
                        }
                    }
                    > .rightbody_left_font {
                        width: 350px;
                        margin-left: 100px;
                        > .rightbody_left_font_list {
                            width: 350px;
                            > .Aa {
                                width: 200px;
                                font-size: 130px;
                            }
                            > .font {
                                width: 150px;
                                margin-left: 13px;
                                > .font1 {
                                    width: 150px;
                                    margin-left: 10px;
                                }
                                > .font2 {
                                    width: 150px;
                                }
                            }
                        }
                    }
                }
                > .left_home {
                    width: 800px;
                    height: 600px;
                    > .img {
                        width: 350px;
                        height: 581px;
                    }
                    > .home {
                        margin-left: 100px;
                        width: 350px;
                        > .title {
                            margin-top: 40px;
                            width: 146px;
                        }
                        > .font {
                            width: 350px;
                        }
                    }
                }
                > .rightbody_left_info {
                    width: 800px;
                    height: 450px;
                    margin-top: 80px;
                    .img {
                        width: 100%;
                    }
                }
                > .rightbody_left_myself {
                    width: 800px;
                    height: 1180px;
                    > .top {
                        width: 800px;
                        > .top_left {
                            width: 450px;

                            > .titile {
                                margin-top: 100px;
                                width: 400px;
                                font-size: 40px;
                            }
                            .myself {
                                width: 400px;
                            }
                            .font {
                                width: 400px;
                                font-size: 22px;
                            }
                        }
                        .top_right {
                            width: 354px;
                            height: 630px;
                        }
                    }
                    .rightbody_left_myself_bottom {
                        margin-top: 109px;
                        width: 800px;
                        height: 457px;
                        display: flex;
                        flex-direction: row;
                        .img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                > .footinfo {
                    margin-bottom: 0;
                    padding-right: 0;
                }
            }
        }
    }
}
@media screen and (max-width: 1450px) {
    .pages {
        height: 2900px;
        position: relative;
        > .rightbody {
            height: 2900px;
            > .rightbody_left {
                width: 260px;
                display: flex;
                > .kong {
                    width: 260px;
                }
            }
            > .rightbody_right {
                height: 2800px;
                justify-content: center;
                > .rightbody_left_head {
                    width: 600px;
                    margin-right: 0;
                }
                .contentCss {
                width: 600px;

            }
                > .rightbody_left_colorAndFonts {
                    display: flex;
                    width: 600px;
                    > .rightbody_left_colors {
                        width: 220px;
                        > .rightbody_left_colors_lists {
                            width: 220px;
                            .color {
                            }
                            > div {
                                width: 60px;
                                margin-right: 10px;
                            }
                        }
                    }
                    > .rightbody_left_font {
                        margin-left: 50px;
                        width: 250px;
                        margin-left: 100px;
                        > .rightbody_left_font_list {
                            width: 30px;
                            > .Aa {
                                width: 140px;
                                font-size: 120px;
                            }
                            > .font {
                                width: 150px;
                                margin-left: 13px;
                                > .font1 {
                                    width: 150px;
                                    margin-left: 10px;
                                }
                                > .font2 {
                                    width: 150px;
                                }
                            }
                        }
                    }
                }
                > .left_home {
                    width: 600px;
                    height: 600px;
                    > .img {
                        width: 250px;
                        height: 481px;
                    }
                    > .home {
                        margin-left: 100px;
                        width: 300px;

                        > .title {
                            margin-top: 40px;
                            width: 146px;
                        }
                        > .font {
                            width: 300px;
                        }
                    }
                }
                > .rightbody_left_info {
                    width: 600px;
                    height: 350px;
                    .img {
                        width: 100%;
                    }
                }
                > .rightbody_left_myself {
                    width: 600px;
                    height: 980px;
                    > .top {
                        width: 600px;
                        > .top_left {
                            width: 350px;

                            > .titile {
                                margin-top: 100px;
                                width: 300px;
                                font-size: 30px;
                            }
                            .myself {
                                width: 300px;
                            }
                            .font {
                                width: 300px;
                                font-size: 16px;
                            }
                        }
                        .top_right {
                            width: 254px;
                            height: 480px;
                        }
                    }
                    .rightbody_left_myself_bottom {
                        margin-top: 19px;
                        width: 600px;
                        height: 327px;
                        display: flex;
                        flex-direction: row;
                        .img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                > .footinfo {
                    padding-right: 0;
                }
            }
        }
    }
}
@media screen and (max-width: 1290px) {
    .pages {
        widows: 980px;
        height: 2000px;
        position: relative;
        > .rightbody {
            height: 2800px;
            > .rightbody_left {
                width: 200px;
                > .kong {
                    width: 200px;
                }
            }
            > .rightbody_right {
                height: 2800px;
                display: flex;
                justify-content: center;
                > .rightbody_left_head {
                    width: 500px;
                    margin-right: 0;
                }
                .contentCss {
                width: 50px;
            }
                > .rightbody_left_colorAndFonts {
                    display: flex;
                    width: 500px;
                    > .rightbody_left_colors {
                        width: 200px;
                        > .rightbody_left_colors_lists {
                            width: 200px;
                            .color {
                            }
                            > div {
                                width: 50px;
                                margin-right: 10px;
                            }
                        }
                    }
                    > .rightbody_left_font {
                        margin-left: 50px;
                        width: 250px;
                        > .rightbody_left_font_list {
                            width: 250px;
                            > .Aa {
                                width: 140px;
                                font-size: 120px;
                            }
                            > .font {
                                width: 130px;
                                margin-left: 13px;
                                > .font1 {
                                    width: 130px;
                                    margin-left: 10px;
                                }
                                > .font2 {
                                    width: 130px;
                                }
                            }
                        }
                    }
                }
                > .left_home {
                    width: 500px;
                    height: 600px;
                    > .img {
                        width: 200px;
                        height: 401px;
                    }
                    > .home {
                        margin-left: 60px;
                        width: 300px;

                        > .title {
                            margin-top: 40px;
                            width: 146px;
                        }
                        > .font {
                            width: 300px;
                        }
                    }
                }
                > .rightbody_left_info {
                    width: 500px;
                    height: 300px;
                    .img {
                        width: 100%;
                    }
                }
                > .rightbody_left_myself {
                    width: 500px;
                    height: 980px;
                    > .top {
                        width: 500px;
                        > .top_left {
                            width: 250px;

                            > .titile {
                                margin-top: 100px;
                                width: 250px;
                                font-size: 30px;
                            }
                            .myself {
                                width: 250px;
                            }
                            .font {
                                width: 250px;
                                font-size: 16px;
                            }
                        }
                        .top_right {
                            width: 324px;
                            height: 500px;
                        }
                    }
                    .rightbody_left_myself_bottom {
                        margin-top: 19px;
                        width: 500px;
                        height: 327px;
                        display: flex;
                        flex-direction: row;
                        .img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                > .footinfo {
                    padding-right: 0;
                }
            }
        }
    }
}
</style>