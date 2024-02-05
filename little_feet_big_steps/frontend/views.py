from django.shortcuts import render
from little_feet_big_steps.models import BlogPost

def index(request):
  
  return render(request, "frontend/index.html")
