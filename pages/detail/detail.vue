<template>
	<view class="detail-wrap">
		<view class="detail-video">
			<view class="video-status">进行中</view>
			<view class="video-cont">
				<video src="https://www.bilibili.com/video/BV1EQRwYEE8r" controls></video>
			</view>
		</view>
		<view class="detail-cont">
			<view class="cont-title">高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定</view>
			
			<!-- 课程简介 -->
			<view class="class-block">
				<view class="class-title-wrap">
					<text class="iconfont icon-kecheng"></text>
					<text class="class-title">课程简介</text>
				</view>
				<view class="class-desc" style="margin-bottom: 12px;">高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定</view>
				
				<view class="class-title-wrap">
					<text class="iconfont icon-mulu"></text>
					<text class="class-title">目录</text>
				</view>
				<view class="class-title-mulu-list">
					<view class="mulu-item" v-for="(item,index) of muluList" :key="index">
						<text :class="'iconfont ' + (item.status == 1 ? 'icon-bofang' : 'icon-zanting')"></text>
						<view class="mulu-item-txt">{{item.title}}</view>
						<view :class="'mulu-item-status ' + (item.status == 1 ? 'text-primary' : (item.status == 2 ? 'text-success': 'text-grey'))">{{item.statusName}}</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐 -->
			<view class="tuijian">
				<view class="tuijian-title">为你推荐</view>
				<scroll-view scroll-x="true" class="tuijian-list">
					<view class="tuijian-list-item" v-for="(item, index) in videoList" :key="index">
						<view class="item-img">
							<image :src="'/static/images/home_video_list/' + item.name" mode=""></image>
						</view>
						<view class="item-title">{{ item.title }}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';

const muluList = reactive([
	{ title: '高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定', status: 1, statusName: '播放中' },
	{ title: '高速公路设施清洗', status: 0, statusName: '待播放' },
	{ title: '边坡小塌方、开裂和沉陷处理', status: 0, statusName: '待播放' },
	{ title: '死亡事故上报及处理方法', status: 2, statusName: '已完成' },
	{ title: '护栏更换作业要点', status: 0, statusName: '待播放' },
	{ title: '伸缩装置安装作业要点', status: 0, statusName: '待播放' },
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
</script>

<style lang="scss">
.detail-wrap{
	background-color: #fff;
}
.detail-video{
	width: 100%;
	position: relative;
	.video-status{
		position: absolute;
		font-size: 10px;
		color: #fff;
		background-color: $uni-color-error;
		border-radius: 0 0 0 5px;
		z-index: 1;
		top: 0;
		right: 0;
		padding: 2px 5px;
		letter-spacing: 1px;
	}
	.video-cont{
		height: 300px;
		background-color: #f2f6f9;
		video{
			width: 100%;
			height: 100%;
		}
	}
}
.detail-cont{
	padding: 16px 10px;
}
.cont-title{
	display: flex;
	margin-bottom: 12px;
	.title-txt{
		width: 60%;
		font-size: 16px;
		font-weight: bold;
		display: inline-block;
	}
	.ttitle-status{
		width: 40%;
		font-size: 12px;
		color: $uni-color-error;
		display: inline-block;
		text-align: right;
	}
}
.class-block{
	letter-spacing: 1px;
	background-color: #f2f6f9;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 18px;
	.class-title-wrap{
		.class-title{
			font-size: 14px;
			color: #333;
			margin-left: 5px;
		}
	}
	.class-desc{
		font-size: 12px;
		color: #999;
		line-height: 20px;
		padding: 5px 0 5px 24px;
	}
}
.class-title-mulu-list{
	padding: 10px 0 5px 24px;
	.mulu-item{
		display: flex;
		position: relative;
		margin-bottom: 10px;
		.iconfont{
			width: 6%;
			display: inline-block;
			color: #999;
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
.tuijian{
	.tuijian-title{
		font-size: 14px;
		font-weight: bold;
		color: #333;
		margin-bottom: 10px;
	}
	.tuijian-list{
		display: flex;
		flex-direction: row;
		margin: 0 0  12px 0;
		overflow-x: auto;
		white-space: nowrap;
		width: 100%;
		height: 80px;
		.tuijian-list-item{
			margin: 0 2px;
			width: 30%;
			height: 80px;
			text-align: center;
			display: inline-block;
			flex-direction: column;
			align-items: center;
			color: #999;
			.item-img{
				width: 100%;
				height: 60px;
				border-radius: 5px;
				overflow: hidden;
				margin-bottom: 5px;
				image{
					width: 100%;
					height: 100px;
	
				}
			}
			.item-title{
				font-size: 12px;
				color: #333;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
				text-overflow: ellipsis;
				text-align: left;
				padding-right: 10px;
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
}
.text-primary{
	color: $uni-color-primary;
}
.text-success{
	color: $uni-color-success;
}
.text-grey{
	color: $uni-text-color-grey;
}
</style>
