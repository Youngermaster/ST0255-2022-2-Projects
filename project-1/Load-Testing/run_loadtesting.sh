#!/bin/bash
locust -f locust.py --host http://localhost:8000 --users 5000 --spawn-rate 20