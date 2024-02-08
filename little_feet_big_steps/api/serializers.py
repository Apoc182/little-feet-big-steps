from rest_framework import serializers
from little_feet_big_steps.models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()


    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'body', 'lat', 'long', 'created_at', 'images', 'created_at']

    def get_images(self, obj):
        return [{"url" : x.image.url, "caption" : x.caption} for x in obj.all_images]
