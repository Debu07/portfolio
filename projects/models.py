from django.db import models

class Project(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField()
    imageone=models.ImageField(upload_to='projects/images',blank=True)
    imagetwo=models.ImageField(upload_to='projects/images',blank=True)
    technologies=models.TextField()
    url=models.URLField(blank=True)

    def __str__(self):
        return self.title
