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
			<view class="mine-menu-item" v-for="(item, index) of menuList" :key="index" @click="globaTip()">
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
		
		<!-- echarts -->
		<view class="mine-echarts" id="mine_echarts" v-if="hostName !== 'WeChat'"></view>
		<view class="mine-echarts" v-if="hostName == 'WeChat'">
			<lEchart style="height:350rpx" ref="barChartRef"></lEchart>
		</view>
		
		<!-- 个人资料 -->
		<view class="mine-data">
			<view class="mine-data-item" @click="globaTip()">
				<view class="item-icon">
					<text class="iconfont icon-gerenziliao"></text>
				</view>
				<view class="item-txt">个人资料</view>
				<view class="item-jiantou">
					<text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</view>
			<view class="mine-data-item" @click="globaTip()">
				<view class="item-icon">
					<text class="iconfont icon-shezhi"></text>
				</view>
				<view class="item-txt">账号设置</view>
				<view class="item-jiantou">
					<text class="iconfont icon-xiangyoujiantou"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { onReachBottom, onPullDownRefresh, onPageScroll, onReady } from "@dcloudio/uni-app";
// import * as echarts from "echarts"; // echarts_h5
// import lEchart from '../../component/l-echart/l-echart.vue' // echarts_mini
import lEchart from '../../uni_modules/lime-echart/components/l-echart/l-echart.vue' // echarts_mini
const echarts = require('../../static/js/echarts.min.js'); // echarts_mini

// if (systemInfo.hostName == 'WeChat') {
// 	// import lEchart from '../../component/l-echart/l-echart.vue'
// 	// const echarts = require('../../static/js/echarts.min.js');
// } else {
// 	// import * as echarts from "echarts";
// }
let hostName = ref(null)
let menuList = reactive([
	{ icon: 'icon-wodexuexi', txt: '我的学习'},
	{ icon: 'icon-wodejifen', txt: '我的积分'},
	{ icon: 'icon-wodekaohe', txt: '我的考核'},
	{ icon: 'icon-wodepaiming', txt: '我的排名'},
])

const chartRef = ref(null)

const optionData = ref({
	grid: {
		top: '24px',
		bottom: '24px',
		left: '16px',
		right: '16px',
		containLabel: true
	},
	tooltip: {
		trigger: 'item', // 设置触发类型为数据项
		formatter: function (params) {
			return `${params.name} 观看: ${params.value} 分钟`; // 自定义提示框内容
		},
		backgroundColor: 'rgba(255, 255, 255, 0.8)', // 提示框背景颜色
		borderColor: 'rgba(0, 0, 0, 0.3)', // 提示框边框颜色
		borderWidth: 1, // 提示框边框宽度
		textStyle: {
		color: '#333', // 提示框文字颜色
		fontSize: 12 // 提示框文字大小
		}
	},
	xAxis: {
		type: 'category',
		data: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		type: 'line',
		data: [20, 10, 40, 30, 54, 23]
	}]
});

// echarts_h5
const initChart_h5 = () => {
  var myChart = echarts.init(document.getElementById('mine_echarts'));
  var option = optionData.value;
  myChart.setOption(option);
}


// echarts_mini
const barChartRef = ref({});
let myChart = null;
const initChart_mini = () => {
  if (!barChartRef.value) return
 
  const chartOptions = optionData.value;
  barChartRef.value.init(echarts, async (chart) => {
    chart.showLoading()
    chart.setOption(chartOptions)
    chart.hideLoading()
    myChart = chart
  })
}

const globaTip = () => {
	uni.showToast({
		title: '待开发，敬请期待~',
		icon: 'error'
	})
}

onMounted(() => {
	let systemInfo = uni.getSystemInfoSync();
	console.log('~~~~~~~~~~~~~~~~~~~~~ systemInfo: ', systemInfo, ',  env: ', systemInfo.hostName)
	hostName.value = systemInfo.hostName;
	setTimeout(() => {
		console.log('barChartRef: ', barChartRef)
		initChart_mini()
	}, 1000)
	
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
	height: 240px;
	background-color: #fff;
	border-radius: 5px;
	margin-bottom: 12px;
}

.mine-data{
	background-color: #fff;
	border-radius: 5px;
	padding: 10px 16px;
	.mine-data-item{
		display: flex;
		line-height: 24px;
		border-bottom: solid 1px #ebebeb;
		// padding-bottom: 6px;
		padding: 10px 0;
		margin-bottom: 5px;
		position: relative;
		&:last-child{
			border-bottom: none;
			margin-bottom: 0;
		}
		.item-icon{
			display: inline-block;
			margin-right: 10px;
			.iconfont{
				font-size: 22px;
				color: #999;
			}
		}
		.item-txt{
			display: inline-block;
			font-size: 14px;
		}
		.item-jiantou{
			display: inline-block;
			position: absolute;
			right: 0;
			.iconfont{
				color: #999;
			}
		}
	}
}
</style>
