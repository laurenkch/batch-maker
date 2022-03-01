from rest_framework import generics
from .serializers import RecipeSerializer
from .models import Recipe
from .permissions import IsAuthorOrReadOnly

class PublicRecipeList(generics.ListAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    serializer_class = RecipeSerializer

    def get_queryset(self):
        """
        filters list to return public recipes by all authors
        """
        queryset = Recipe.objects.order_by('-created_at')
        queryset = queryset.filter(is_public=True)
        return queryset


class UserRecipeList(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer
    permission_classes = (IsAuthorOrReadOnly,)

    def get_queryset(self):
        """
        filters list to return recipes for the requesting user
        """
        queryset = Recipe.objects.order_by('-created_at')
        queryset = queryset.filter(author=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RecipeSerializer
    permission_classes = (IsAuthorOrReadOnly,)

    def get_queryset(self):
        """
        filters list to return recipes by the requesting user 
        """
        queryset = Recipe.objects.order_by('-created_at')
        queryset = queryset.filter(author = self.request.user)
        return queryset
