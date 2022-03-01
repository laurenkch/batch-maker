
from django.urls import path
from .views import PublicRecipeList,  UserRecipeList, RecipeDetail

app_name= 'recipes'

urlpatterns = [
    path('share/', PublicRecipeList.as_view()),
    path('', UserRecipeList.as_view()),
    path('<int:pk>/', RecipeDetail.as_view()),
]
