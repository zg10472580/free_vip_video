<template>
	<view class="body">
		<view class="mena">
			<view class="menb">
				<image src="/static/search.png"></image>
				<input type="text" placeholder="请输入视频地址(爱奇艺,腾讯视频,优酷)" v-model="jx_url" @confirm="init">
			</view>
		</view>
		<view class="search">
			<button type="primary" size="mini" @click="init">解析</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jx_url: "",
				videoList: []
			};
		},
		onLoad() {

			// 获取解析接口
			uni.request({
				url: getApp().globalData.domain + "/api",
				method: 'GET',
				data: {},
				success: res => {
					console.log(res)
					getApp().globalData.interface = res.data;
				},
				fail: () => {},
				complete: () => {}
			});

		},
		methods: {

			init() {
				if (!this.jx_url) {
					uni.showToast({
						title: '请输入',
						icon: 'error'
					});
					return
				}
				if (this.jx_url.search("iqiyi") !== -1) {
					this.aiqiyi();
				} else if (this.jx_url.search("qq.com") !== -1) {
					this.qqvideo();
				} else {
					this.nopull(this.jx_url);
					this.save();
				}

				try {
					uni.removeStorageSync('playConf');
				} catch (e) {
					// error
				}

			},
			save() {
				// 存到本地
				uni.setStorage({
					key: 'videoList',
					data: this.videoList,
					success() {

						// // 跳转到下一页
						uni.navigateTo({
							url: '/pages/play'
						});
					}
				});
			},
			nopull(_url) {
				this.videoList.push({
					url: _url,
					title: "无法获取-请点击播放"
				})
			},
			// 腾讯视频
			qqvideo() {
				var url = this.jx_url;
				var vid = url.match(/cid=(.*?)&/);
				if (vid == null) {
					vid = url.split("/")[5]
					vid = vid.split(".")[0]
				} else {
					vid = vid[1]

				}
				if (vid.indexOf("htm") && vid.indexOf("=") && vid.indexOf("&") !== -1) {
					this.nopull(url);
					return
				}


				var param = {
					id: vid,
					type: 4,
					range: "1-9999",
					otype: "json",

				};
				// 腾讯视频
				this.$jsonp("http://s.video.qq.com/get_playsource", param).then((json) => {
					try {
						for (let data of json.PlaylistItem.videoPlayList) {
							this.videoList.push({
								url: data.playUrl,
								title: data.title
							})
						}
					} catch (e) {
						this.nopull(url);
					}
					this.save();

				}).catch(err => {
					uni.showToast({
						title: '连接失败',
						icon: 'error'
					});
				})


			},
			// 封装请求方法
			requests(request) {
				uni.showLoading({
					mask: true,
					title: "数据正在验证"
				});

				uni.request({
					url: request.url,
					method: request.method,
					data: request.body,
					success: res => {
						uni.hideLoading();
						request.callback(res);

					},
					fail() {
						uni.showToast({
							title: '连接失败',
							icon: 'error'
						});
					}
				})

			},


			aiqiyi() {
				var param = {
					url: this.jx_url
				};

				// 爱奇艺
				this.$jsonp(getApp().globalData.domain + "/iqy", param).then((json) => {
					if (json.lfj_albumId) {
						this.requests({
							url: `https://pub.m.iqiyi.com/h5/main/videoList/album/?albumId=${json.lfj_albumId}&size=999999&page=1`,
							method: "GET",
							callback: res => {
								try {
									for (let data of res.data.data.videos) {
										this.videoList.push({
											url: "https:" + data.pageUrl,
											title: data.subTitle
										})
									}
								} catch (e) {
									this.nopull(param.url);
								}
								this.save();
							}
						})
					}else{
							this.nopull(param.url);
					}
				}).catch(err => {
					uni.showToast({
						title: '连接失败',
						icon: 'error'
					});
				})


			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100vh;
	}

	.search {
		width: 100%;
		padding-top: 2px;
		text-align: center;
	}

	.mena {
		height: 50px;
		padding: 2px;
		padding-top: 50vh;
		display: flex;
		align-items: center;


		.menb {
			height: 50px;
			display: flex;
			background: #fff;
			flex: 1;
			position: relative;
			border-radius: 10px;


			input {
				padding-left: 30px;
				flex: 1;
				height: 50px;
			}

			image {
				width: 25px;
				left: 0;
				align-self: center;
				position: absolute;
				height: 25px;
			}

		}

		.menc {
			padding-left: 10px;
		}
	}
</style>
