# MyCompanySA

Django App review.

## Docker build 🐋

```
docker build -t mycompanysa:release .
docker run -it -p 8000:8000 mycompanysa:release
```

## Manual Setup ⚙️

Create a virtual environment :
```bash
# Let's install virtualenv first
pip install virtualenv

# Then we create our virtual environment
virtualenv envname
```

Activate the virtual environment:
```bash
envname\scripts\activate
```

Install the requirements :
```bash
pip install -r requirements.txt
```

### Running the App

--> To run the App, we use :
```bash
python manage.py runserver
```

> ⚠ Then, the development server will be started at http://127.0.0.1:8000/
