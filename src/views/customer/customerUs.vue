<template>
    <div class="pages">
        <div class="customerUs_body">
            <img src="@/static/customerUs/bodyleft.png" alt="" class="img" />
            <div class="customerUs_body_right">
                <img src="../../static/customerUs/QRcode.png" class="erweima" />
                <div class="info">
                    <div>电话：021-69557550</div>
                    <div>传真：000-66668888</div>
                    <div>手机：13521041245</div>
                    <div>邮箱：hr@willmid.com</div>
                    <div>地址：上海市青浦区虹桥世界中心L1-A</div>
                    <div class="zhan"></div>
                </div>
                <div class="fromInfo">
                    <input
                        type="text"
                        placeholder="姓名"
                        v-model="contanst.name"
                    />
                    <input
                        type="text"
                        placeholder="邮箱"
                        v-model="contanst.email"
                    />
                    <input
                        type="text"
                        placeholder="电话"
                        v-model="contanst.phone"
                    />
                    <textarea
                        name=""
                        v-model="contanst.frombody"
                        cols="30"
                        rows="10"
                        placeholder="内容"
                    ></textarea>
                    <span @click="submitForm()">提交</span>
                </div>
                <div class="logo">
                    <span>上海闻峥文化传播有限公司</span>
                    <img src="@/static/customerUs/WB.png" alt="" />
                    <img src="@/static/customerUs/QQ.png" alt="" />
                    <img src="@/static/customerUs/WX.png" alt="" />
                </div>
                <div class="foot">
                    <span>沪ICP备09109183号-25</span>
                    <span>©WILLMID, powered by shanghai wenzheng</span>
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
            contanst: {
                name: null,
                email: null,
                phone: null,
                frombody: null,
            },
        };
    },
    computed: {},
    watch: {},
    methods: {
        submitForm() {
            this.$http
                .post(
                    "http://n.chenhong.xyz/api/index/contactus",
                    {
                        name: this.contanst.name,
                        email: this.contanst.email,
                        phone: this.contanst.phone,
                        content: this.contanst.frombody,
                    },
                    {
                        emulateJSON: true,
                    }
                )
                .then((res) => {
                    if (res.body.code == 200) {
                        alert("提交成功")
                    }
                })
                .catch((msg) => {
                    console.log("msg");
                    console.log(msg);
                });
            this.contanst.name = null;
            this.contanst.email = null;
            this.contanst.phone = null;
            this.contanst.frombody = null;
        },
    },
    created() {},
};
</script>
<style lang='scss' scoped>
.pages {
    margin-left: 300px;
    width: calc(100vw - 300px);
    height: 100vh;
    flex-direction: row;
    > .customerUs_body {
        display: flex;
        flex-direction: row;
        width: 20%;
        height: 100vh;
        /* 内容左侧 */
        > .img {
            width: 100%;
            height: 100%;
        }
        /* 内容右侧 */
        > .customerUs_body_right {
            display: flex;
            flex-direction: column;
            padding: 105px 200px 145px 136px;
            position: relative;
            /* 右侧二维码 */
            > .erweima {
                position: relative;
                width: 93px;
                height: 93px;
                margin-left: auto;
            }
            > .info {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                text-align: left;
                justify-content: space-between;
                margin: 171px 0 48px 0;
                > .zhan {
                    width: 280px;
                }
                > div {
                    width: 280px;
                    height: 14px;
                    font-size: 16px;
                    font-family: HYQiHei 50s, HYQiHei 50s-50s;
                    font-weight: 50s;
                    color: #333333;
                    margin-bottom: 35px;
                }
                > .zhan {
                    width: 280px;
                    height: 14px;
                }
            }
            > .fromInfo {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                position: relative;
                padding-bottom: 11px;
                border-bottom: 1px solid #bfbfbf;
                > input {
                    width: 242px;
                    height: 34px;
                    border-top: transparent;
                    border-left: transparent;
                    border-right: transparent;
                    border-bottom: 1px solid #bfbfbf;
                    outline: none;
                }
                > textarea {
                    margin-top: 43px;
                    width: 879px;
                    height: 77px;
                    border: transparent;
                    resize: none;
                    font-size: 16px;
                    font-family: HYQiHei 50s, HYQiHei 50s-50s;
                    font-weight: 50s;
                    text-align: left;
                    color: #333333;
                    outline: none;
                }
                > span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin-left: auto;
                    margin-right: 12px;
                    width: 90px;
                    height: 30px;
                    cursor: pointer;
                    border: 1px solid #bfbfbf;
                }
            }
            > .logo {
                display: flex;
                flex-direction: row;
                margin-top: 160px;
                align-items: center;
                justify-content: flex-end;
                > span {
                    height: 16px;
                    font-size: 18px;
                    font-family: HYQiHei 50s, HYQiHei 50s-50s;
                    font-weight: 50s;
                    text-align: left;
                    color: #808080;
                    line-height: 20px;
                    letter-spacing: 0px;
                    margin-right: auto;
                }
                > img {
                    width: 24px;
                    height: 24px;
                    opacity: 0.5;
                    margin-right: 15px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
            > .foot {
                position: relative;
                margin-top: 30px;
                margin-left: auto;
                font-size: 14px;
                font-weight: 500;
                color: #808080;
                display: flex;
                flex-direction: row;
                > span:first-child {
                    margin-right: 19px;
                }
            }
        }
    }
}
@media screen and (max-width: 1680px) {
    .pages {
        margin-left: 300px;
        width: calc(100vw - 300px);
        display: flex;
        > .customerUs_body {
            width: 260px;
            > .img {
                width: 100%;
                height: 100%;
            }
            > .customerUs_body_right {
                display: flex;
                width: 1000px;
                flex-direction: column;
                padding: 100px 50px;
                > .info {
                    margin-top: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 1000px;
                    > div {
                        width: 280px;
                    }
                }
                > .fromInfo {
                    widows: 1000px;
                    > input {
                        width: 200px;
                    }
                    > textarea {
                        margin-top: 43px;
                        width: 1000px;
                    }
                    > span {
                        width: 60px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1400px) {
    .pages {
        margin-left: 300px;
        width: calc(100vw - 300px);
        display: flex;
        > .customerUs_body {
            width: 260px;
            > .img {
                width: 100%;
            }
            > .customerUs_body_right {
                display: flex;
                flex: 1;
                flex-direction: column;
                padding: 100px auto;
                > .info {
                    margin-top: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 600px;
                    > div {
                        width: 240px;
                    }
                }
                > .fromInfo {
                    widows: 600px;
                    > input {
                        width: 152px;
                    }
                    > textarea {
                        margin-top: 43px;
                        width: 700px;
                    }
                    > span {
                        width: 60px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1280px) {
    .pages {
        margin-left: 300px;
        width: calc(100vw - 300px);
        display: flex;
        > .customerUs_body {
            width: 220px;
            > .img {
                width: 100%;
            }
            > .customerUs_body_right {
                display: flex;
                flex: 1;
                flex-direction: column;
                padding: 100px 50px;
                > .info {
                    margin-top: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    width: 600px;
                    > div {
                        width: 200px;
                    }
                }
                > .fromInfo {
                    widows: 600px;
                    > input {
                        width: 152px;
                    }
                    > textarea {
                        margin-top: 43px;
                        width: 600px;
                    }
                    > span {
                        width: 60px;
                    }
                }
            }
        }
    }
}
</style>