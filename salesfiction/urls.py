from django.conf.urls import url
from salesfiction import views

urlpatterns = [
	url(r'^lateststory/$', views.latest_story),
    #url(r'^scripts/$', views.script_list),
    url(r'^script/(?P<pk>[0-9]+)/$', views.script_detail),
]