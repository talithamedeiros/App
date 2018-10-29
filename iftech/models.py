from django.db import models

class Programacao(models.Model):
    TIPOS = (
        ('M', 'Minicurso'),
        ('P', 'Palestra'),
    )
    tipo = models.CharField(max_length=1, choices=TIPOS)
    palestrante = models.CharField(max_length=200)
    descricao = models.TextField(max_length=200)
    data = models.DateTimeField()
    sala = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.tipo} - {self.palestrante} - {self.descricao} - {self.data} - {self.sala}'