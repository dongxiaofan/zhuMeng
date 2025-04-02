<template>
	<view class="mine-wrap">
		<view class="mine-info">
			<image src="/static/images/avatar.png" mode="" class="info-avatar"></image>
			<view class="info-cont">
				<view class="info-name">体验账号</view>
				<view class="info-phone">
					<text class="iconfont icon-shouji"></text>
					<text class="info-txt">15812345678</text>
				</view>
				<view class="info-desc">
					<text class="iconfont icon-xiugaikehumingcheng"></text>
					<text class="info-txt">中翰内部测试ID号</text>
				</view>
			</view>
		</view>
		
		<!-- menu -->
		<view class="mine-menu">
			<view class="mine-menu-item" v-for="(item, index) of menuList" :key="index">
				<text :class="'iconfont ' + item.icon"></text>
				<view class="item-txt">{{item.txt}}</view>
			</view>
		</view>
		
		<!-- study -->
		<view class="mine-study">
			<view class="study-title">学习视图</view>
			<view class="study-block">
				<view class="study-block-item">
					<view class="item-txt1">今日学习</view>
					<view class="item-txt2">56分钟</view>
				</view>
				<view class="study-block-item">
					<view class="item-txt1">累计学习</view>
					<view class="item-txt2">223小时</view>
				</view>
			</view>
		</view>
		
		<!-- 个人资料 -->
		<view class="mine-data">
			
		</view>
		
		<!-- charts -->
		<view class="mine-echarts" id="mine_echarts"></view>
		<!-- <view style="width:750rpx; height:750rpx"><l-echart ref="chartRef"></l-echart></view> -->
		<lEchart ref="barChartRef"></lEchart>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { onReachBottom, onPullDownRefresh, onPageScroll, onReady } from "@dcloudio/uni-app";
import * as echarts from "echarts";
import lEchart from '@/components/l-echart/l-echart.vue'
// const echarts = require('@/static/js/echarts.min.js')

let menuList = reactive([
	{ icon: 'icon-wodexuexi', txt: '我的学习'},
	{ icon: 'icon-wodejifen', txt: '我的积分'},
	{ icon: 'icon-wodekaohe', txt: '我的考核'},
	{ icon: 'icon-wodepaiming', txt: '我的排名'},
])

const chartRef = ref(null)

const optionData = ref({
	xAxis: {
		type: 'category',
		data: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		type: 'line',
		data: [120, 110, 340, 301, 230, 110]
	}]
});

const init = () => {
  var myChart = echarts.init(document.getElementById('mine_echarts'));
  var option = optionData.value;
  myChart.setOption(option);
}

onMounted(() => {
	init()
});
</script>

<style lang="less">
.mine-wrap{
	background-color: #f2f6f9;
	padding: 10px;
}
.mine-info{
	display: flex;
	margin-bottom: 12px;
	.info-avatar{
		width: 80px;
		height: 80px;
		border-radius: 100%;
		border: solid 2px #fff;
		margin-right: 14px;
	}
	.info-cont{
		color: #666;
		display: inline-block;
		padding-top: 5px;
		margin-bottom: 6px;
		letter-spacing: 1px;
		line-height: 24px;
		.info-name{
			font-size: 14px;
			font-weight: bold;
			margin-bottom: 5px;
		}
		.iconfont{
			margin-right: 5px;
		}
		.info-txt{
			font-size: 12px;
		}
	}
}
.mine-menu{
	overflow: hidden;
	background-color: #fff;
	border-radius: 8px;
	padding: 10px 0;
	margin-bottom: 12px;
	.mine-menu-item{
		width: 25%;
		display: inline-block;
		text-align: center;
		.iconfont{
			font-size: 28px;
			margin-bottom: 5px;
			color: #999;
		}
		.item-txt{
			font-size: 12px;
			color: #666;
		}
	}
}

.mine-study{
	overflow: hidden;
	background-color: #fff;
	border-radius: 8px;
	padding: 14px 10px;
	margin-bottom: 12px;
	.study-title{
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.study-block{
		display: flex;
		.study-block-item{
			width: calc(50% - 5px);
			height: 48px;
			text-align: center;
			padding: 14px 0;
			color: #fff;
			border-radius: 5px;
			&:first-child{
				margin-right: 5px;
				background-color: #1677ff;
			}
			&:last-child{
				margin-left: 5px;
				background-color: #ff4d4f;
			}
			.item-txt1{
				font-size: 12px;
				margin-bottom: 6px;
				opacity: .8;
			}
			.item-txt2{
				font-size: 16px;
				font-weight: bold;
			}
		}
	}
}
.mine-echarts{
	width: 100%;
	height: 200px;
	background-color: #fff;
			border-radius: 5px;
}
</style>
