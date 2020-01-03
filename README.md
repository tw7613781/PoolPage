# Single Page for [mining.hycon.io](https://mining.hycon.io)

This is an one page application for Hycon mining pool written [by vue-js](https://vuejs.org/).

The application consist of 2 parts. A server retrieve data from mongo db which is generated by mining server and host a API server that expose the data. A client will retrieve the data from the API server periodically and bind with HTML DOM to display the data as form of website.

The [mining server source code](https://github.com/tw7613781/hycon-mining-pool) is opened as well. The Node is same with [Hycon master](https://github.com/Team-Hycon/hycon-core), difference is the miner part, which located at ```src/miner/```.

The miner is adopted PPS (Pay Per Share) schema to evaluate and distribute workers. Basically, the idea behind is to lower the hash target of job (candidate block). Fox example, let's say a candidate block's difficult is 1e-8, so the target is a corresponding string of the difficult. The worker will only submit their job when they found a hash string met the target. For the PPS schema, we can set the difficult to 1e-6 or other lower difficulty, and pass the corresponding target string to worker. The worker will submit their job when they found a hash string met the lower target, the hash string has a chance to be the solution of real difficulty. The chance here is 1/100 (1e-8/1e-6). 1 submission is called 1 share. So I can identify the real contribution by worker's shares and further estimate their hash-rate. 

Ref: [What is share](https://ethereum.stackexchange.com/questions/4529/for-pool-mining-what-exactly-is-a-share)






