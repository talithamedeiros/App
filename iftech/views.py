from django.shortcuts import render
from rest_framework import viewsets
from .models import Programacao
from .serializers import ProgramacaoSerializer

class ProgramacaoViewSet(viewsets.ModelViewSet):
    queryset = Programacao.objects.all()
    serializer_class = ProgramacaoSerializer
