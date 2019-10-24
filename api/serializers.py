from rest_framework import serializers

from recipes.models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ("id", "title", "created_by", "image","is_public","recipe_type","prep_time","cook_time","cook_temp","directions")
