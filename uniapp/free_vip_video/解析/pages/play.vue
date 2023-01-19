<template>
	<view>

		
		<iframe allowfullscreen :src="playConf.playUrl" class="iframeStyle"></iframe>
		<!-- 		<web-view  allow="fullscreen" :fullscreen="false" src="https://jx.bozrc.com:4433/player/?url=https://m.iqiyi.com/v_19rwfig6cs.html"></web-view> -->

		<input type="text" :value="'当前解析地址：'+(playConf.playUrl?playConf.playUrl:'正在等待操作...')"
			style="text-align: center;">

		<radio-group @change="radioChange">
			<label class="radio" v-for="index of interface.length" :key="index">
				<radio :value="index.toString()" :checked="index == playConf.interfaceIndex" />接口{{index}}
			</label>
		</radio-group>

		<view class="p_n-group">
			<view class="item" @click="clickNav(playConf.videoIndex - 1)">上一集</view>
			<view class="item" @click="clickNav(playConf.videoIndex)">播放</view>
			<view class="item" @click="clickNav(playConf.videoIndex + 1)">下一集</view>
		</view>


		<view class="catalogue">
			<view v-for="body,index in videoList" :class="playConf.videoIndex==index ? 'item active':'item'"
				@click="clickNav(index)">{{body.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				interface: getApp().globalData.interface,
				playConf: {
					// 接口的索引
					interfaceIndex: 1,
					// 视频目录的索引
					videoIndex: 0,
					// 播放地址
					playUrl: ""
				},
				// 视频json列表
				videoList: []
			}
		},
		onLoad(option) {
			uni.getStorage({
				key: 'videoList',
				success: res => {
					this.videoList = res.data;
				}
			});
			uni.getStorage({
				key: 'playConf',
				success: res => {
					this.playConf = res.data;
				}
			});
			this.getServerApi();
			// console.log(option , this.videoList)
		},
		methods: {
			getServerApi(){
				let getDate = function () {
					let date = new Date(Date.parse(new Date()));
					let datakey = date.getMonth() + "" + date.getDate();
					return datakey;
				}
				let that = this;
				let getApi = function() {
					that.$jsonp(getApp().globalData.domain + "/api").then((res) => {
						that.interface = res;
						uni.setStorage({
							key: 'api',
							data: {
								date: getDate(),
								api: res
							}
						});
					}).catch(err => {
					})
				
				}
				uni.getStorage({
					key: 'api',
					success: res => {
						if (res.data.date === getDate()) {
							this.interface = res.data.api;
						} else {
							getApi();
						}
						console.log(this.interface);
					},
					fail: (err) => {
						getApi();
					}
				});
			},
			
			
			radioChange: function(evt) {
				this.playConf.interfaceIndex = evt.detail.value;

				this.clickNav(this.playConf.videoIndex);
			},
			clickNav: function(index) {
				// console.log(index)
				if (index < 0 || index >= this.videoList.length) {
					uni.showToast({
						title: '不能继续了',
						icon: "error",
						duration: 2000
					});
					return
				}

				this.playConf.videoIndex = index;

				let playUrl = this.interface[this.playConf.interfaceIndex - 1] + this.videoList[this.playConf
					.videoIndex].url;

				// 保存配置信息

				this.playConf.playUrl = "";
				uni.setStorage({
					key: 'playConf',
					data: this.playConf
				});

				this.playConf.playUrl = playUrl;
			}
		}
	}
</script>

<style lang="scss">
	.p_n-group {
		display: flex;
		justify-content: center;

		view {
			box-shadow: none
		}

	}

	.iframeStyle {
		width: 100%;
		height: 25%;
		background: #000;
		border: 0px;
	}


	radio-group {
		margin-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-between;
		justify-content: center;

		.radio {
			margin: 7rpx;
		}
	}

	.item {
		padding: 10px 2%;
		// min-width: auto;
		transition: all 0.5s;
		color: #fff;
		height: auto;
		border-radius: 5px;
		background: #000;
		// box-shadow: 0 0 10px #03e9f4, 0 0 20px #03e9f4, 0 0 20px #03e9f4, 0 0 10px #03e9f4;
		box-shadow: 0 0 10px #ff0000, 0 0 20px #5600ff, 0 0 20px #05ff0d, 0 0 10px #ffffff;
		margin: 15px;
	}


	.catalogue {
		position: fixed;
		max-height: 52%;
		width: 100%;
		overflow-y: scroll;
		overflow-x: hidden;

		justify-content: center;
		display: flex;
		flex-wrap: wrap;
	}

	// .catalogue {
	// 	display: flex;
	// 	flex-wrap: wrap;

	// 	justify-content: center;
	// }

	.active {
		background: red;
	}
</style>
