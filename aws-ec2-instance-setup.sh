#!/bin/bash
sudo yum install git -y
sudo yum install docker -y
sudo systemctl enable docker
sudo systemctl start docker
sudo systemctl stop httpd.service
git clone https://github.com/Youngermaster/ST0255-2022-2-Projects.git
cd ST0255-2022-2-Projects/project-2/MyCompanySA
sudo docker build -t mycompanysa:release .
sudo docker run -d -it -p 80:8000 mycompanysa:release