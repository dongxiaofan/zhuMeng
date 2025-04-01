<template>
	<view class="home-wrap">
		<!-- 搜索 -->
		<view class="home-search">
			<text class="iconfont icon-search"></text>
			<input type="text" class="search-input" placeholder="请输入想要搜索的内容…" />
			<view class="search-btn">搜索</view>
		</view>
		
		<!-- 菜单 -->
		<view class="home-top-menu">
			<scroll-view scroll-x="true" class="type-bar">
				<view v-for="(tool, index) in typeTabList" :key="index" :class="'type-item ' + (currentTypeIndex==index ? 'active' : '')" @click="typeBarClick(index)">
					<text class="type-text">{{ tool.text }}</text>
				</view>
			</scroll-view>
			<view class="fenlei">
				<text class="iconfont icon-fenlei" style="font-size: 24px;"></text>
			</view>
		</view>
		
		<!-- 轮播 -->
		<view class="home-swiper">
			<swiper class="swiper" circular indicator-dots="true" autoplay interval="2000" duration="500" style="height: 200px;">
				<swiper-item v-for="img of swiperList">
					<view class="swiper-item">
						<image :src="'/static/images/home_swiper/' + img.name + '.png'" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 视频列表 -->
		<view class="home-list">
			<view class="home-list-item" v-for="item of videoList">
				<view class="item-img">
					<image :src="'/static/images/home_video_list/' + item.name" mode=""></image>
				</view>
				<view class="item-title">{{item.title}}</view>
				<view class="item-cont">cont</view>
				<view class="item-pros">进度</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';
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

let videoList = reactive([
	{ name: 'item_01.png', title: '高速公路养护作业控制区最小长度规定120km', cont: 'sssss' },
	{ name: 'item_02.jpg', title: '高速公路设施清洗', cont: 'sssss' },
	{ name: 'item_03.jpg', title: '边坡小塌方、开裂和沉陷处理', cont: 'sssss' },
	{ name: 'item_04.jpg', title: '死亡事故上报及处理方法', cont: 'sssss' },
	{ name: 'item_05.jpg', title: '护栏更换作业要点', cont: 'sssss' },
	{ name: 'item_06.jpg', title: '伸缩装置安装作业要点', cont: 'sssss' },
	{ name: 'item_07.jpg', title: '中间护栏施工交通导改风险提', cont: 'sssss' },
	{ name: 'item_08.jpg', title: '护栏更换风险提示', cont: 'sssss' },
	{ name: 'item_09.jpg', title: '路面铣刨风险提示', cont: 'sssss' },
	{ name: 'item_10.jpg', title: '桥梁顶升与支座更换风险提示', cont: 'sssss' },
])


</script>

<style lang="scss">
.home-wrap{
	// background-image: linear-gradient(180deg, #f2fdb8 5%, #fff 10%, #e5e5e5);
	// padding: 20px 10px 10px 10px;
	background-color: #f2f6f9;
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
}
.home-swiper{
	padding: 0 10px;
	margin-bottom: 10px;
	.swiper-item{
		width: 100%;
		height: 100%;
		border-radius: 8px;
		overflow: hidden;
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
		margin-bottom: 10px;
		// &:nth-child(1n){
		// 	padding-right: 5px;
		// }
		// &:nth-child(2n){
		// 	padding-left: 5px;
		// }
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
			// margin-bottom: 5px;
		}
		.item-cont{
			font-size: 12px;
			color: #999;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			// margin-bottom: 5px;
		}
		.item-pros{
			font-size: 12px;
		}
	}
}
</style>
