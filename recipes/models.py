from django.db import models
from django.conf import settings

class Recipe(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='recipes/', blank=True, null=True)
    title = models.CharField(max_length = 255)
    is_public = models.BooleanField(blank = True, default = False)
    prep_time = models.CharField(max_length = 255)
    cook_time = models.CharField(max_length= 255)
    cook_temp = models.IntegerField()
    makes_total = models.IntegerField()
    makes_descriptor = models.CharField(max_length=255)
    personal_notes = models.TextField(blank=True, null = True)
    steps = models.JSONField(blank=True, null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    FAHRENHEIT = 'F'
    CELCIUS = 'C'

    TEMP_CHOICES = [
        (FAHRENHEIT, 'F'),
        (CELCIUS, 'C'),
    ]

    BREAKFAST = 'Bre'
    LUNCH = 'Lun'
    DINNER ='Din'
    DESSERT = 'Des'
 
    CATEGORY_CHOICES = [
        (BREAKFAST,'Bre'),
        (LUNCH, 'Lun'),
        (DINNER, 'Din'),
        (DESSERT, 'Des')
    ]

    temp_system = models.CharField(max_length=255, choices = TEMP_CHOICES,default = 'F')
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES,
                            default='Din')

    def __str__(self):
        return self.title