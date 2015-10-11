"""
Definition of models.
"""

from django.db import models

# Create your models here.
class Scored_Tweet(models.Model):
    username = ""
    tweet = ""
    score = ""

