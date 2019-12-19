<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4"></el-col>
            <el-col :span="16">
                <h2 style="margin-left:-430px;">豆瓣电影排行榜</h2>
                <h4 style="color:#072;margin-left:-459px;">豆瓣新片榜 · · · · · ·</h4>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[0].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="subList[0].star">{{subList[0].title}}/{{subList[0].alias}}</span></h4>
                        <h5>{{subList[0].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[0].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[0].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[1].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[1].title)">{{subList[1].title}}/{{subList[1].alias}}</span>
                        </h4>
                        <h5>{{subList[1].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[1].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[1].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[2].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[2].title)">{{subList[2].title}}/{{subList[2].alias}}</span>
                        </h4>
                        <h5>{{subList[2].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[2].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[2].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[3].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[3].title)">{{subList[3].title}}/{{subList[3].alias}}</span>
                        </h4>
                        <h5>{{subList[3].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[3].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[3].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[4].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[4].title)">{{subList[4].title}}/{{subList[4].alias}}</span>
                        </h4>
                        <h5>{{subList[4].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[4].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[4].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[5].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[5].title)">{{subList[5].title}}/{{subList[5].alias}}</span>
                        </h4>
                        <h5>{{subList[5].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[5].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[5].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[6].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[6].title)">{{subList[6].title}}/{{subList[6].alias}}</span>
                        </h4>
                        <h5>{{subList[6].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[6].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[6].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[7].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[7].title)">{{subList[7].title}}/{{subList[7].alias}}</span>
                        </h4>
                        <h5>{{subList[7].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[7].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[7].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[8].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[8].title)">{{subList[8].title}}/{{subList[8].alias}}</span>
                        </h4>
                        <h5>{{subList[8].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[8].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[8].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <hr size=1  class="xuxian">
                <el-row :gutter="20" v-for="subList in movieList" type="flex" justify="center" style="margin-top:20px;">
                    <el-col :span="7" style="text-align:right;"><img v-bind:src="subList[9].imgUrl"/></el-col>
                    <el-col :span="17" style="text-align:left;margin-top:-25px;">
                        <h4><span class="title-span"
                                  v-on:click="detailPage(subList[9].title)">{{subList[9].title}}/{{subList[9].alias}}</span>
                        </h4>
                        <h5>{{subList[9].describe}}</h5>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <el-rate disabled v-model="subList[9].star"></el-rate>
                            </el-col>
                            <el-col :span="1" class="pf">{{subList[9].score}}</el-col>
                            <el-col :span="18" class="pj">{{movie.scoring.amount}}人评价</el-col>
                        </el-row>
                    </el-col>
                </el-row>

            </el-col>
            <el-col :span="4">
                <div>
                    <h5 style="color:#072;margin-top:70px;">分类排行榜 · · · · · ·</h5>
                </div>
            </el-col>
        </el-row>
    </div>

</template>
<script>
    export default{
        data: function () {
            return {
                movie: {
                    scoring: {amount: 474206},
                },
                movieList: [
                    [
                        {
                            title: '爱尔兰人',
                            star: 4.5,
                            score: 9.1,
                            imgUrl: require('../assets/6.jpg'),
                            alias: "爱尔兰杀手(港) / 听说你刷房子了 / I Heard You Paint Houses",
                            describe: "2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇..."
                        },
                        {
                            title: '小丑',
                            star: 4.2,
                            score: 8.4,
                            imgUrl: require('../assets/1.jpg'),
                            alias: "小丑起源电影：罗密欧 / Romeo / Joker Origin ",
                            describe: '2019-08-31(威尼斯电影节) / 2019-10-04(美国) / 杰昆·菲尼克斯 / 罗伯特·德尼罗 / 马克·马龙 / 莎姬·贝兹 / 谢伊·惠格姆 / 弗兰西丝·康罗伊 / 布莱恩·考伦 / 布莱恩·泰里·亨利 / 布莱特·卡伦 / 道格拉斯·霍奇斯 / 格伦·弗莱施勒 / 比尔·坎普...'
                        },
                        {
                            title: '地久天长',
                            star: 4,
                            score: 8.0,
                            imgUrl: require('../assets/10.jpg'),
                            alias: "So Long, My Son",
                            describe: '2019-05-21(戛纳电影节) / 2019-07-26(美国) / 2019(中国大陆) / 莱昂纳多·迪卡普里奥 / 布拉德·皮特 / 玛格特·罗比 / 埃米尔·赫斯基 / 玛格丽特·库里 / 蒂莫西·奥利芬特 / 茱莉亚·巴特斯 / 奥斯汀·巴特勒 / 达科塔·范宁 / 布鲁斯·邓恩 /...'
                        },
                        {
                            title: '非凡夏日',
                            star: 3.7,
                            score: 7.5,
                            imgUrl: require('../assets/3.jpg'),
                            alias: "小丑起源电影：罗密欧 / Romeo / Joker Origin ",
                            describe: '2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇...'
                        },
                        {
                            title: '好莱坞往事',
                            star: 3.7,
                            score: 7.4,
                            imgUrl: require('../assets/2.jpg'),
                            alias: "从前，有个荷里活(港)/ Once Upon a Time in Hollywood / Once Upon a Time in… Hollywood",
                            describe: '2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇...'
                        },
                        {
                            title: '双子杀手',
                            star: 3.5,
                            score: 7.1,
                            imgUrl: require('../assets/9.jpg'),
                            alias: "双子任务：叠影危机(港) / 双子煞星",
                            describe: '2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇...'
                        },
                        {
                            title: '酷刑报告',
                            star: 3.5,
                            score: 7.0,
                            imgUrl: require('../assets/6.jpg'),
                            alias: "Ancient of Days / The Torture Report",
                            describe: '2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇...'
                        },
                        {
                            title: '准备好了没',
                            star: 3.5,
                            score: 6.8,
                            imgUrl: require('../assets/8.jpg'),
                            alias: " 弑婚游戏(台) / 爆血新婚夜(港)",
                            describe: '2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇...'
                        },
                        {
                            title: '我在你床下',
                            star: 3.3,
                            score: 6.7,
                            imgUrl: require('../assets/5.jpg'),
                            alias: "小丑起源电影：罗密欧 / Romeo / Joker Origin ",
                            describe: '2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇...'
                        },
                        {
                            title: '攀登者',
                            star: 3.1,
                            score: 6.2,
                            imgUrl: require('../assets/7.jpg'),
                            alias: "The Climbers",
                            describe: '2019-09-27(纽约电影节) / 2019-11-01(美国点映) / 2019-11-27(美国网络) / 罗伯特·德尼罗 / 阿尔·帕西诺 / 乔·佩西 / 安娜·帕奎因 / 杰西·普莱蒙 / 哈威·凯特尔 / 斯蒂芬·格拉汉姆 / 鲍比·坎纳瓦尔 / 杰克·休斯顿 / 阿莱卡萨·帕拉迪诺 / 凯瑟琳·纳杜奇...'
                        }
                    ]
                ]
            }
        },
        methods: {
            detailPage: function (title) {
                this.$router.push({name: "movie", params: {title: title}});
            }
        }
    }
</script>

<style>
    img {
        width: 75px;
    }

    .title-span {
        cursor: pointer;
        color: #489ace;
    }

    h5 {
        margin-top: -10px;
        color: lightgray
    }

    .pf {
        font-size: 15px;
        padding-left: 3px;
        margin-left: -25px;
        color: #f7ba2a
    }

    .pj {
        font-size: 12px;
        color: lightgray;
        padding-left: 3px
    }

    .xuxian {
        color: lightgray;
        border-style: dashed;
        width: 78%;
        margin-left: 215px
    }
</style>