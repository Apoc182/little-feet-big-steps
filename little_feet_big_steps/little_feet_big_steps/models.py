from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    lat = models.FloatField()
    long = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def all_images(self):
        return Image.objects.filter(blog_post=self)
    
    def __str__(self):
        return self.title

class Image(models.Model):
    blog_post = models.ForeignKey(BlogPost, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='blog_images/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.caption[:20]} - {self.blog_post.title[:20]}"
