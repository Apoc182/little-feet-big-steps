from django.contrib import admin
from .models import BlogPost, Image

class ImageInline(admin.TabularInline):
    model = Image
    extra = 3  # How many empty image upload slots to display

class BlogPostAdmin(admin.ModelAdmin):
    inlines = [ImageInline,]

admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(Image)  # Optional, if you want a separate admin interface for images
