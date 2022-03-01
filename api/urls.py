from django.urls import path, include

app_name= 'api'

urlpatterns =[
    path('recipes/', include('recipes.urls')),
]