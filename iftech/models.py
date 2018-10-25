from django.db import models

class Palestra(models.Model):
    palestrante = models.CharField(max_length=50)
    descricao = models.TextField(max_length=160)
    data = models.DateTimeField()
    sala = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.palestrante} - {self.descricao} - {self.data} - {self.sala}'