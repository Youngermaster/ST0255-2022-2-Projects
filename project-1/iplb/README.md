# IPLB

`IPLB` is a Reverse Proxy with Load balancing capabilities, that's where the
name came from (*Inverse Proxy + Load Balancing*).

## ⚠️ Requirements

- [`Rust`](https://www.rust-lang.org/tools/install).
- [`Docker`](https://docs.docker.com/engine/install/) (You can setup `Redis` and
`Node.js` manually, however it is easier with Docker).
- 🔔 [`Python 3`](https://www.python.org/downloads/) (This is optional, it is
just for load testing purposes only).

## ⚙️ Setup

### 🐋 Docker Nodes

#### ❤️ Redis Node

```Docker
# The following command is going to pull and build our Redis instance
# at the port 6379.
docker run -d --name our-redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
# And this command will lead us to be able to interact with the Redis
# CLI
docker exec -it our-redis-stack-server redis-cli
```

#### 💻 Nodes (Web pages)

In this section we can use whatever web app we want, however I suggest to use
this [repository](https://github.com/Youngermaster/My-Portfolio), it is just a
portfolio. Now with the following commands we can build and run the portfolio with Docker:
```docker
# Let's go first where you downloaded the repository.
cd ./My-Portfolio
# The following command is going to build the web app.
docker build -t jmyounghoyos-portfolio:release .
# Now let's run manually 4 instances of the web app.
docker run -d -p 3000:80 jmyounghoyos-portfolio:release --name jmyounghoyos-portfolio-0
docker run -d -p 3001:80 jmyounghoyos-portfolio:release --name jmyounghoyos-portfolio-1
docker run -d -p 3002:80 jmyounghoyos-portfolio:release --name jmyounghoyos-portfolio-2
docker run -d -p 3003:80 jmyounghoyos-portfolio:release --name jmyounghoyos-portfolio-3
```

### 🦀 Rust tool

To be able to build the tool in Rust, it is as simple as running:
```shell
cargo build --release
```

Then we will be able to run a binary located in the folder `target/release`, to
run it propperly just follow the commands below:
```shell
# Here we are creating a proxy at the port 8000
# we are manually adding the IPs, we can improve it later with Docker Compose or
# Kubernetes.
# As shown below that's the order to follow:
# ./iplb --bind 0.0.0.0:8000 $IPOfNodes:3000 $IPOfNodes:3001 $IPOfNodes:3002 -r redis://$IPOfNodes:6379
# Now, in my case I'll be using these parameters:
./iplb --bind 0.0.0.0:8000 172.22.16.1:3000 172.22.16.1:3001 172.22.16.1:3002 -r redis://127.0.0.1:6379
```

It is always necessary to have `Redis`? No, if you just want to add a series of
fixed nodes, just add the `--no-redis` option:
```shell
# As shown below that's the order to follow:
#./iplb --bind 0.0.0.0:8000 $IPOfNodes:3000 $IPOfNodes:3001 $IPOfNodes:3002 --no-redis
# Now, in my case I'll be using these parameters:
./iplb --bind 0.0.0.0:8000 172.22.16.1:3000 172.22.16.1:3001 172.22.16.1:3002 --no-redis
```

If you need more information about the tool just run `./iplb --help`.
```shell
Usage:
  ./iplb [OPTIONS] [SERVER ...]

Dynamic TCP load balancer

Positional arguments:
  server                Servers to load balance

Optional arguments:
  -h,--help             Show this help message and exit
  -b,--bind BIND        Bind the load balancer to address:port (127.0.0.1:8000)
  -r,--redis REDIS      URL of Redis database (redis://localhost)
  --no-redis            Disable updates of backend through Redis
  -l,--log LOG          Log level [debug, info, warn, error] (info)
```

#### 😮 We are using only 3 nodes, what about the 4th one?

Well, that's the whole idea with `Redis`, now we can have a
["`pub/sub`"](https://redis.io/docs/manual/pubsub/) module, but why? Well, what
if we want to add more modules? We will have to stop the app and then manually
add the changes. That *IS NOT OK* for a concurrent and modern app, that is why
is used `Redis` in this case, to be able to `ADD` or `REMOVE` nodes in a
**"production-like stage"**. Now, how is used? We should go back to the
`redis-cli` module and we can add the following:
```sh
# To add a node just add:
PUBLISH backend_add $IPNode:$IPNodePort
# To remove a node just add:
PUBLISH backend_remove $IPNode:$IPNodePort
```

## 💉 Load Testing

To load testing the application, just install [`locust`](https://locust.io) and run the `bash` script (`run_loadtesting.sh`), there is also a `batch` script for Windows (`run_locust.bat`), however that one is experimental.

```bash
pip3 install locust
./run_loadtesting.sh
```
