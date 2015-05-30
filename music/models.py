from django.db import models

# Create your models here.
class Song(models.Model):
    name = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
    	return self.name
#	def __unicode__(self): 
#		return self.name

class Chord(models.Model):
    song = models.ForeignKey(Song)
    chord_name = models.CharField(max_length=50)
    order = models.IntegerField(default=0)
    def __str__(self):
    	return self.chord_name
#	def __unicode__(self): 
#		return self.chord_name