from rest_framework import serializers
from .models import Programacao

class ProgramacaoSerializer(serializers.ModelSerializer):
    tipo = serializers.SerializerMethodField()

    class Meta:
        model = Programacao
        fields = ('id', 'tipo', 'palestrante', 'descricao', 'data', 'sala',)

    def get_tipo(self, obj):
        return obj.get_tipo_display()