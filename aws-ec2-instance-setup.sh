#!/bin/bash
sudo yum install git -y
sudo yum install docker -y
sudo systemctl enable docker
sudo systemctl start docker
sudo systemctl stop httpd.service
git clone https://github.com/Youngermaster/ST0255-2022-2-Projects.git
cd project-2/MyCompanySA
docker build -t mycompanysa:release .
docker run -it -p 80:8000 mycompanysa:release