import tomli
from os import system

command = './target/release/iplb --bind'


def add_to_command(param):
    global command
    command += f' {param} '


with open("server_config.toml", mode="rb") as fp:
    # * Loading config
    config = tomli.load(fp)

    # * IP Binding
    add_to_command(config['bind'])

    # * Server Binding
    for server in config['servers']:
        add_to_command(server)

    # * Redis setup
    if config['disable_redis']:
        add_to_command('--no-redis')
    else:
        add_to_command('-r')
        add_to_command(config['redis_url'])

    # * Log level
    add_to_command('-l')
    add_to_command(config['log_level'])

    system(command)
