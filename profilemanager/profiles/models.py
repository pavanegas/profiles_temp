from django.db import models
from django.contrib.auth.models import User

class Address(models.Model):
    owner = models.ForeignKey(User, related_name='profiles', on_delete=models.CASCADE, null=True)
    streetOne = models.CharField(max_length=100)
    streetTwo = models.CharField(max_length=100)
    city = models.CharField(max_length=100)    
    state = models.CharField(max_length=16)    
    zipcode = models.CharField(max_length=5)


