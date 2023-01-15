<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			domain: 'http://110.42.177.170:8889',
			// 优先使用server的接口
			
			interface: [
				"https://jsap.attakids.com/?url=",
				"https://jx.bozrc.com:4433/player/?url=",
				"https://lecurl.cn/?url=",
				"http://17kyun.com/api.php?url=",
				"https://z1.m1907.cn/?jx="
			]
		}
	}
</script>

<style>
	/*每个页面公共css */
	body {
		background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);
	}
</style>
