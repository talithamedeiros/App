from django.shortcuts import render
from rest_framework import viewsets
from .models import Palestra
from .serializers import PalestraSerializer

class PalestraViewSet(viewsets.ModelViewSet):
    queryset = Palestra.objects.all()
    serializer_class = PalestraSerializer
