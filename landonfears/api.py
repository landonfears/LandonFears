# mysite/api.py
from tastypie.authorization import Authorization
from tastypie import fields
from tastypie.resources import ModelResource
from music.models import Song
from music.models import Chord

class SongResource(ModelResource):
    class Meta:
        queryset = Song.objects.all()
        resource_name = 'song'
        authorization= Authorization()
        always_return_data = True
		
class ChordResource(ModelResource):
    song = fields.ForeignKey(SongResource, 'song')
    class Meta:
        queryset = Chord.objects.all()
        resource_name = 'chord'
        authorization= Authorization()
        always_return_data = True