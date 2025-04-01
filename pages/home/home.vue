<template>	
	<view class="globa-mask" style="height: 100%;" v-if="showMask"></view>
	<scroll-view scroll-y="true" :style="showMask ? {'height': '100vh', 'overflow': 'hidden'} : {'height': '100%', 'overflow': 'auto'} ">
		
		<view class="home-wrap">
			<view class="home-bacn-top" v-if="scrollTop > 600" @click="scrollToTop">
				<text class="iconfont icon-huidaodingbu" style="font-size: 20px;"></text>
			</view>
			<!-- 搜索 -->
			<view class="home-search">
				<text class="iconfont icon-search"></text>
				<input type="text" class="search-input" placeholder="请输入想要搜索的内容…" />
				<view class="search-btn">搜索</view>
			</view>
			
			<!-- 菜单 -->
			<view class="home-top-menu">
				<scroll-view scroll-x="true" class="type-bar">
					<view v-for="(type, index) in typeTabList" :key="index" :class="'type-item ' + (currentTypeIndex==index ? 'active' : '')" @click="typeBarClick(index)">
						<text class="type-text">{{ type.text }}</text>
					</view>
				</scroll-view>
				<view class="fenlei" @click="chooseType()">
					<text class="iconfont icon-fenlei" style="font-size: 24px;"></text>
				</view>
				<view class="fenlei-cont" v-if="showMask" >
					<view class="fenlei-cont-item" @click="chooseTypeOk()">按状态分类</view>
					<view class="fenlei-cont-item" @click="chooseTypeOk()">按名称分类</view>
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
				<view class="home-list-item" v-for="(item,index) of videoList" :key="index">
					<view class="item-img">
						<image :src="'/static/images/home_video_list/' + item.name" mode=""></image>
					</view>
					<view class="item-title">{{item.title}}</view>
					<view class="item-cont">{{item.cont}}</view>
					<view class="item-pros" v-if="item.pros > 0">
						<view class="pros-img">
							<view class="pros-jd" :style="{ 'width': item.pros + 'px' }"></view>
							<view class="pros-di"></view>
						</view>
						<view class="pros-txt">已观看{{item.pros}}%</view>
					</view>
					<view class="item-tag-red" v-if="item.isNew">最新</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onReachBottom, onPullDownRefresh, onPageScroll } from "@dcloudio/uni-app";

let scrollTop = ref(0);
let showMask = ref(false)
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
	{ name: 'home_swiper_04' },
])

let videoList = ref([
	{ name: 'item_01.jpg', title: '高速公路养护作业控制区最小长度规定120km', pros: 30, isNew: '最新', cont: '高速公路养护' },
	{ name: 'item_02.jpg', title: '高速公路设施清洗', pros: 60, isNew: '最新', cont: '高速公路设施清洗是一项复杂且重要的工作，其目的是确保道路环境整洁、安全，为过往车辆提供良好的通行条件' },
	{ name: 'item_03.jpg', title: '边坡小塌方、开裂和沉陷处理', pros: 0, isNew: '最新', cont: '边坡小塌方、开裂和沉陷处理' },
	{ name: 'item_04.jpg', title: '死亡事故上报及处理方法', pros: 50, cont: '死亡事故上报及处理方法' },
	{ name: 'item_05.jpg', title: '护栏更换作业要点', pros: 20, cont: '1、准备工作；2、拆除旧护栏；3、测量与定位' },
	{ name: 'item_06.jpg', title: '伸缩装置安装作业要点', pros: 0, cont: '伸缩装置安装作业要点如下' },
	{ name: 'item_07.jpg', title: '中间护栏施工交通导改风险提示', pros: 0, cont: '中间护栏施工交通导改的风险主要包括以下几个方面' },
	{ name: 'item_08.jpg', title: '护栏更换风险提示', pros: 0, cont: '护栏更换风险提示、施工风险、法律与规范要求' },
	{ name: 'item_09.jpg', title: '路面铣刨风险提示', pros: 0, cont: '包括机械操作风险、施工环境风险以及对交通和人员的影响' },
	{ name: 'item_10.jpg', title: '桥梁顶升与支座更换风险提示', pros: 0, cont: '桥梁顶升与支座更换风险提示' }
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
	scrollTop.value = e.scrollTop
})

// 返回顶部
const scrollToTop = () => {
	uni.pageScrollTo({
		scrollTop: 0,
		duration: 100
	})
}

const chooseType = () => {
	showMask.value = true
}

const chooseTypeOk = () => {
	showMask.value = false;
	uni.showToast({
		title: '已分类'
	})
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
	transition: all .2s;
}
.home-search{
	padding: 10px;
	height: 34px;
	margin-bottom: 10px;
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
.home-top-menu{
	padding: 0 10px;
	position: relative;
	.type-bar {
		display: flex;
		flex-direction: row;
		// padding: 10px 30px 10px 0;
		border-radius: 10px;
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
		top: 0;
		right: 0;
	}
	.fenlei-cont{
		width: 20%;
		background-color: #fff;
		position: absolute;
		right: 10px;
		top: 30px;
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
				width: 55%;
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
				width: 45%;
				display: inline-block;
				line-height: 24px;
				text-align: right;
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
