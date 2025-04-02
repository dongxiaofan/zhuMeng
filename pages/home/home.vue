<template>
	<view class="home-wrap">
		<view class="fenlei-mask" :style="{'height': contHeight + 'px', 'top': menuFixed ? '0px' : menuOffsetTop + 'px'}" v-if="showMask" @click="showMask = false"></view>
		<scroll-view scroll-y="true">
			<!-- 返回顶部 -->
			<view class="home-bacn-top" :style="{opacity: (scrollTop - 400) + '%'}" v-if="scrollTop > 400" @click="scrollToTop">
				<text class="iconfont icon-huidaodingbu" style="font-size: 20px;"></text>
			</view>
			<!-- 搜索 -->
			<view class="home-search">
				<text class="iconfont icon-search"></text>
				<input type="text" class="search-input" placeholder="请输入想要搜索的内容…" />
				<view class="search-btn">搜索</view>
			</view>
			
			<!-- 菜单 -->
			<view class="" style="position: relative;" v-if="menuFixed">
				<view :style="{'background': 'white', 'height': menuHeight+'px', 'opacity': scrollTop + '%'}"></view>
				<view class="copy-mene-fixed" :style="{'opacity': (scrollTop - menuScrollTop)*3 + '%'}"></view>
			</view>			
			<view :class="menuFixed ? 'home-top-menu menu-fixed' : 'home-top-menu'">
				<scroll-view scroll-x="true" class="type-bar">
					<view v-for="(type, index) in typeTabList" :key="index" :class="'type-item ' + (currentTypeIndex==index ? 'active' : '')" @click="typeBarClick(index)">
						<text class="type-text">{{ type.text }}</text>
					</view>
				</scroll-view>
				<view class="fenlei-wrap">
					<view class="fenlei" @click="chooseType()">
						<text class="iconfont icon-fenlei" style="font-size: 24px;"></text>
					</view>
					<view class="fenlei-cont" v-if="showMask">
						<view class="fenlei-cont-item" @click="chooseTypeOk()">按状态分类</view>
						<view class="fenlei-cont-item" @click="chooseTypeOk()">按名称分类</view>
					</view>
				</view>
			</view>

			<!-- 轮播 -->
			<view class="home-swiper">
				<swiper class="swiper" circular indicator-dots="true" autoplay interval="2000" duration="500" style="height: 200px;">
					<swiper-item v-for="(img,index) of swiperList" :key="index">
						<view class="swiper-item">
							<image :src="'/static/images/home_swiper/' + img.name + '.png'" mode="" style="border-radius: 8px !important; height: 200px !important;"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<!-- 视频列表 -->
			<view class="home-list">
				<view class="home-list-item" v-for="(item,index) of videoList" :key="index" @click="goDetail()">
					<view class="item-img">
						<image :src="'/static/images/home_video_list/' + item.name" mode=""></image>
					</view>
					<view class="item-title">{{item.title}}</view>
					<view class="item-cont">{{item.cont}}</view>
					<view class="item-pros" v-if="item.pros > 0">
						<view class="pros-img">
							<view class="pros-jd" :style="{ 'width': item.pros + '%' }"></view>
							<view class="pros-di"></view>
						</view>
						<view class="pros-txt">观看{{item.pros}}%</view>
					</view>
					<view class="item-tag-red" v-if="item.isNew">最新</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { onReachBottom, onPullDownRefresh, onPageScroll, onReady } from "@dcloudio/uni-app";

let showPopup = ref(true)
let scrollTop = ref(0); // 滚动条位置
let screenHeight = ref(0); // 设备高度
// let windowHeight = ref(0); // 页面高度
let contHeight = ref(0); // 页面高度
let menuOffsetTop = ref(0); // menu scrollTop + menu height
let menuScrollTop = ref(0);
let menuHeight = ref(0);
let menuFixed = ref(false);
let showMask = ref(false);
const gradientColor = ref('rgba(255, 255, 255, 0)'); // 初始背景色为透明

onMounted(() => {
	let query = uni.createSelectorQuery();
	query.select('.home-top-menu').boundingClientRect(res => {
		menuScrollTop.value = res.top;
		menuHeight.value = res.height;
		menuOffsetTop.value = res.top + res.height
	}).exec();
	
	query.select('.home-wrap').boundingClientRect(res => {
		contHeight.value = res.height;
	}).exec();
});

onReady(() => {
	const sysInfo = uni.getSystemInfoSync();
	screenHeight.value = sysInfo.screenHeight;
	// windowHeight.value = sysInfo.windowHeight;
	// console.log('zzzzzzzzzzzzzzzz', sysInfo)
})

let typeTabList = reactive([
	{ text: '首页', key: 0 },	{ text: '公路养护', key: 1 },	{ text: '风险提示', key: 2 },	{ text: '作业要点', key: 3 },	{ text: '平安工地', key: 4 },	{ text: '技术交流', key: 5 },	{ text: '三卡学习', key: 6 },	{ text: '三级安全教育', key: 7 },	{ text: '作业指导书', key: 8 },	{ text: '技能学习',key: 9 },
]);
let currentTypeIndex = ref(0);
const typeBarClick = (index) => {
	currentTypeIndex.value = index;
}

let swiperList = reactive([
	{ name: 'home_swiper_01' },
	{ name: 'home_swiper_02' },
	{ name: 'home_swiper_03' },
])

let videoList = ref([
	{ name: 'item_01.jpg', title: '高速公路养护作业控制区最小长度规定120km', pros: 30, isNew: '最新', cont: '高速公路养护' },
	{ name: 'item_02.jpg', title: '高速公路设施清洗', pros: 60, isNew: '最新', cont: '高速公路设施清洗是一项复杂且重要的工作，其目的是确保道路环境整洁、安全，为过往车辆提供良好的通行条件' },
	{ name: 'item_03.jpg', title: '边坡小塌方、开裂和沉陷处理', pros: 0, isNew: '最新', cont: '边坡小塌方、开裂和沉陷处理' },
	{ name: 'item_01.jpg', title: '死亡事故上报及处理方法', pros: 50, cont: '死亡事故上报及处理方法' },
	{ name: 'item_02.jpg', title: '护栏更换作业要点', pros: 20, cont: '1、准备工作；2、拆除旧护栏；3、测量与定位' },
	{ name: 'item_03.jpg', title: '伸缩装置安装作业要点', pros: 0, cont: '伸缩装置安装作业要点如下' },
	{ name: 'item_01.jpg', title: '中间护栏施工交通导改风险提示', pros: 0, cont: '中间护栏施工交通导改的风险主要包括以下几个方面' },
	{ name: 'item_02.jpg', title: '护栏更换风险提示', pros: 0, cont: '护栏更换风险提示、施工风险、法律与规范要求' },
	{ name: 'item_03.jpg', title: '路面铣刨风险提示', pros: 0, cont: '包括机械操作风险、施工环境风险以及对交通和人员的影响' },
	{ name: 'item_01.jpg', title: '桥梁顶升与支座更换风险提示', pros: 0, cont: '桥梁顶升与支座更换风险提示' }
])

// 触发下拉
onPullDownRefresh(() => {
  console.log('下拉刷新整个页面')
  videoList.value = videoList.value.slice(0, 10)
})

//触底调用
onReachBottom(() => {
	console.log('触底了')
	if (videoList.value.length <= 100) {
		console.log('数据复制')
		videoList.value = [...videoList.value, ...videoList.value]
	}
})


// 滚动监听
onPageScroll((e) => {
	scrollTop.value = e.scrollTop;
	// console.log('e.scrollTop: ', e.scrollTop)
	if (e.scrollTop >= menuScrollTop.value) {
		// console.log('顶部菜单栏可以固定了')
		menuFixed.value = true;
	} else {
		menuFixed.value = false;
	}
	
	// const scrollTop = e.scrollTop;
 //    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	// const gradientStartPoint = Math.min(Math.round(scrollTop / maxScroll * 100), 100); // 计算渐变起点百分比
	// const gradientEndPoint = 100; // 渐变终点为100%
	gradientColor.value = `rgba(0,0,0, ${e.scrollTop}%)`;
	
	// 滚动时
	showMask.value = false;
})

// 返回顶部
const scrollToTop = () => {
	uni.pageScrollTo({
		scrollTop: 0,
		duration: 100
	})
}

// 选择类型做筛选
const chooseType = () => {
	showMask.value = true;
	// let query = uni.createSelectorQuery();
	// query.select('.home-wrap').boundingClientRect(res => {
	// 	contHeight.value = res.height
	// }).exec();
}

// 选定类型
const chooseTypeOk = () => {
	showMask.value = false;
	uni.showToast({
		title: '已分类'
	})
}

// 去详情
const goDetail = () => {
	uni.navigateTo({
	  url: '/subPackage/pages/detail/detail'
	});
}
</script>

<style lang="scss">
.home-wrap{
	// background-image: linear-gradient(180deg, #f2fdb8 5%, #fff 10%, #e5e5e5);
	// padding: 20px 10px 10px 10px;
	background-color: #f2f6f9;
}
.home-bacn-top{
	width: 36px;
	height: 36px;
	background-color: $uni-color-primary;
	color: #fff;
	text-align: center;
	line-height: 36px;
	position: fixed;
	right: 5px;
	bottom: 10%;
	z-index: 9;
	border-radius: 100%;
	// transition: all .2s;
}
.home-search{
	padding: 10px;
	height: 34px;
	.search-input{
		width: calc(100% - 58px);
		height: 34px;
		position: absolute;
		background-color: #fff;
		font-size: 14px;
		border-radius: 5px 0 0 5px;
		padding: 0 10px;
		line-height: 34px;
	}
	.search-btn{
		width: 58px;
		background: $uni-color-primary;
		color: #fff;
		position: absolute;
		right: 10px;
		top: 10px;
		text-align: center;
		line-height: 34px;
		border-radius: 0 5px 5px 0;
		font-size: 14px;
	}
}
.copy-mene-fixed{
	width: 100%;
	height: 44px;
	position: fixed;
	left: 0;
	top: 0;
	background-color: #007aff;
	z-index: 9;
}
.home-top-menu{
	padding: 10px 10px 0px 10px;
	position: relative;
	box-sizing: border-box;
	&.menu-fixed{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		// background-color: #fbfbfb;
		z-index: 9;
		.type-bar{
			.type-item{
				color: #fff;
				&.active{
					color: #fff;
					&:before{
						background-color: #fff;
					}
				}
			}
		}
		.fenlei{
			color: #fff;
		}
	}
	.type-bar {
		display: flex;
		flex-direction: row;
		margin: 0;
		overflow-x: auto;
		white-space: nowrap;
		width: calc(100% - 36px);
		height: 34px;
		.type-item {
			// width: 48px;
			margin: 0 10px;
			height: 24px;
			text-align: center;
			display: inline-block;
			flex-direction: column;
			align-items: center;
			color: #999;
			&.active{
				position: relative;
				color: $uni-color-primary;
				&:before{
					content: "";
					width: 100%;
					height: 2px;
					background-color: $uni-color-primary;
					position: absolute;
					left: 0;
					bottom: 0;
				}
			}
			.type-text {
				font-size: 14px;
			}
		}
	}
	.fenlei{
		width: 34px;
		height: 24px;
		text-align: center;
		color: #999;
		border-left: solid 1px #ebebeb;
		position: absolute;
		top: 10px;
		right: 0;
	}
	.fenlei-cont{
		width: 24%;
		background-color: #fff;
		position: absolute;
		right: 10px;
		top: 40px;
		z-index: 10;
		padding: 10px;
		border-radius: 5px;
		.fenlei-cont-item{
			width: 100%;
			line-height: 40px;
			font-size: 14px;
			text-align: center;
		}
	}
}
.fenlei-mask{
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 9;
	left: 0;
}
.home-swiper{
	width: calc(100% - 20px);
	margin: 0 10px 10px 10px;
	border-radius: 8px;
	overflow: hidden;
	.swiper-item{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
		}
	}
}
.home-list{
	padding: 0 5px;
	.home-list-item{
		width: 50%;
		display: inline-block;
		padding: 0 5px;
		box-sizing: border-box;
		margin-bottom: 12px;
		position: relative;
		.item-img{
			width: 100%;
			height: 100px;
			border-radius: 5px;
			overflow: hidden;
			margin-bottom: 5px;
			image{
				width: 100%;
				height: 100px;

			}
		}
		.item-title{
			font-size: 14px;
			color: #333;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.item-cont{
			font-size: 12px;
			color: #999;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.item-pros{
			width: calc(100% - 10px);
			height: 24px;
			position: absolute;
			font-size: 12px;
			background-color: rgba(0,0,0,.5);
			color: #fff;
			z-index: 1;
			top: 76px;
			left: 5px;
			padding: 0 10px;
			box-sizing: border-box;
			.pros-img{
				width: 50%;
				display: inline-block;
				position: relative;
				.pros-di{
					width: 100%;
					height: 5px;
					border-radius: 5px;
					background-color: #999;
					position: absolute;
					left: 0;
					top: -6px;
					z-index: 1;
				}
				.pros-jd{
					width: 100%;
					height: 5px;
					border-radius: 5px;
					background-color: $uni-color-primary;
					position: absolute;
					left: 0;
					top: -6px;
					z-index: 2;
				}
			}
			.pros-txt{
				width: 50%;
				display: inline-block;
				line-height: 24px;
				text-align: right;
				font-size: 12px;
			}
		}
		.item-tag-red{
			position: absolute;
			font-size: 10px;
			color: #fff;
			background-color: $uni-color-error;
			border-radius: 0 5px 0 5px;
			z-index: 1;
			top: 0;
			right: 5px;
			padding: 2px 5px;
			letter-spacing: 1px;
		}
	}
}
</style>
