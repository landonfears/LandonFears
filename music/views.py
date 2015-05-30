from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
#from django.template import RequestContext, loader

from music.models import Song
def index(request):
    #return HttpResponse("Hello, world. You're at the song index.")
    latest_song_list = Song.objects.order_by('-pub_date')[:5]
    context = {'latest_song_list': latest_song_list}
    return render(request, 'music/index.html', context)
	
def detail(request, song_id):
    context = {}
    return render_to_response('detail.html', context)
    #return HttpResponse("You're looking at song %s." % song_id)
