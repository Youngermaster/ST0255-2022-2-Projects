# nsprimary

A simple Django Landing Page for *My Comany S.A.* built with Python and Django.

## Docker
```shell
docker build -t nsprimary-mycompanysa:release .
docker run -d -it -p 8000:8000 nsprimary-mycompanysa:release
```

## Screenshots [TODO]



## Technologies
* Python 3.6
* Django 3
* Javascript
* HTML5
* CSS3 
* Bootstrap 4
* Font awesome

## Setup

To run this app, you will need to follow these 3 steps:

#### 1. Requirements
  - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


#### 2. Install Python and Pipenv
  - [Python3](https://www.python.org/downloads/)
  

  - [Pipenv](https://pipenv-es.readthedocs.io/es/stable/)

#### 3. Local Setup and Running on Windows, Linux and Mac OS

  ```
  # Clone this repository into the directory of your choice
  $ git clone https://github.com/Williano/Landing-Page.git

  # Move into project folder
  $ cd Landing-Page

  # Install from Pipfile
  $ pipenv install

  # Activate the Pipenv shell
  $ pipenv shell

  # Start server
  $ python manage.py runserver
  
  # Copy the IP address provided once your server has completed building the site. (It will say something like >> Serving at 127.0.0.1....).
  
  # Open the address in the browser
  >>> http://127.0.0.1:XXXX
  
  ```
