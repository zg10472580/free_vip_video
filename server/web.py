# -*- coding: utf-8 -*-
# Time     :  2021/7/20 21:53
# Author   :  老飞机
# File     :  web.py
# Software :  PyCharm
import re
import json
import requests
from flask import Flask , request , render_template

app = Flask(__name__,template_folder='h5' , static_folder="h5/static")
app.config.update(DEBUG=True)


# 跨域支持
def after_request(resp):
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

app.after_request(after_request)


@app.route("/api",methods=["GET"])
def api():
    return [
				"https://jsap.attakids.com/?url=",
				"https://jx.bozrc.com:4433/player/?url=",
				"https://lecurl.cn/?url=",
				"http://17kyun.com/api.php?url=",
				"https://z1.m1907.cn/?jx="
			]

@app.route("/iqy",methods=["GET"])
def aqi():
    url = request.args.get("url")
    # 获取回调函数名称
    callback = request.args.get('callback')
    if url is None:
        return
    response = requests.get(url, headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}).text

    albumId = re.findall("""param\['albumid'\] = "(.*?)\"""" , response)
    result = {}
    if albumId:
        result["lfj_albumId"] = albumId[0]
    else:
        res = re.findall(' var param=(.*?});', response, re.DOTALL)
        if res:
            result["lfj_albumId"] = json.loads(res[0])['albumid']
    return callback + '(' + json.dumps(result) + ')'

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8889,
    )

