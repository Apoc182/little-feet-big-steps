from django.urls import path
from .views import BlogPostViewSet

urlpatterns = [
    path('blogposts/', BlogPostViewSet.as_view({"get": "list"})),
]
