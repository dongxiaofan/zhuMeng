<template>
	<view class="examine-wrap">
		<!-- <image src="/static/images/zanweikaifa.png" mode="" style="width: 132px; height: 128px;"></image>
		<view class="examine-tip">暂未开发，敬请期待~</view> -->
		<view class="examine-title-wrap">
			<text class="iconfont icon-mulu"></text>
			<text class="examine-title">考核类目</text>
		</view>
		<view class="examine-block">
			<view class="examine-title-mulu-list">
				<view class="mulu-item" v-for="(item,index) of muluList" :key="index">
					<text :class="'iconfont ' + (item.status == 1 ? 'icon-gou text-primary' : 'icon-weiwancheng')"></text>
					<view class="mulu-item-txt">{{item.title}}</view>
					<view :class="'mulu-item-status ' + (item.status == 1 ? 'text-primary' : 'text-grey')">{{item.status == 1 ? '已完成' : '待考核'}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';

const muluList = reactive([
	{ title: '高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定', status: 1 },
	{ title: '高速公路设施清洗', status: 0 },
	{ title: '边坡小塌方、开裂和沉陷处理', status: 0 },
	{ title: '死亡事故上报及处理方法', status: 1 },
	{ title: '护栏更换作业要点', status: 0 },
	{ title: '伸缩装置安装作业要点', status: 0 },
	{ title: '高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定', status: 0 },
	{ title: '高速公路设施清洗', status: 0 },
	{ title: '边坡小塌方、开裂和沉陷处理', status: 0 },
	{ title: '死亡事故上报及处理方法', status: 1 },
	{ title: '护栏更换作业要点', status: 0 },
	{ title: '伸缩装置安装作业要点', status: 0 },
])	
</script>

<style lang="scss">
.examine-wrap{
	padding: 10px;
	.examine-title-wrap{
		margin-bottom: 10px;
		.examine-title{
			font-size: 14px;
			color: #333;
			margin-left: 5px;
		}
	}
}
.examine-block{
	letter-spacing: 1px;
	background-color: #f2f6f9;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 18px;
}
.examine-title-mulu-list{
	padding: 10px;
	box-sizing: border-box;
	.mulu-item{
		display: flex;
		position: relative;
		margin-bottom: 10px;
		border-bottom: dotted 1px #ebebeb;
		padding-bottom: 10px;
		&:last-child{
			border-bottom: 0;
		}
		.iconfont{
			width: 6%;
			display: inline-block;
			// color: #999;
		}
		.mulu-item-txt{
			width: 80%;
			font-size: 12px;
			color: #666;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			padding-right: 10px;
		}
		.mulu-item-status{
			width: 14%;
			display: inline-block;
			font-size: 12px;
			text-align: right;
		}
	}
}
.text-primary{
	color: $uni-color-primary;
}
.text-grey{
	color: $uni-text-color-grey;
}
</style>
