from rest_framework import serializers
from .models import Palestra

class PalestraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Palestra
        fields = ('id', 'palestrante', 'descricao', 'data', 'sala',)