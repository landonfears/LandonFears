from django.conf.urls import patterns, url

from music import views

urlpatterns = patterns('',
	# ex: /music/
    url(r'^$', views.index, name='index'),
	# ex: /music/1
	url(r'^(?P<song_id>\d+)/$', views.detail, name='detail')
)