from rest_framework import serializers
from .models import Publication

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'
        # Alternatively, specify fields explicitly:
        # fields = ['id', 'title', 'content', 'author', 'created_at', 'updated_at']
