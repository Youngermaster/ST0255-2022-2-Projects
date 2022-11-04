#!/bin/bash
# * Developer Dependencies
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install git docker nodejs gcc make -y
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# * Services
sudo systemctl enable docker
sudo systemctl start docker
sudo systemctl stop httpd.service
# * Project setup
git clone https://github.com/Youngermaster/ST0255-2022-2-Projects.git
cd ST0255-2022-2-Projects/project-2/MyCompanySA
sudo docker build -t mycompanysa:release .
sudo docker run -d -it -p 80:8000 mycompanysa:release