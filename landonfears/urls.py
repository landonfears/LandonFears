from django.conf.urls import include, url, patterns
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from salesfiction.views import IndexView, ContactView

admin.autodiscover()

from tastypie.api import Api
from landonfears.api import ChordResource, SongResource

v1_api = Api(api_name='v1')
v1_api.register(SongResource())
v1_api.register(ChordResource())

urlpatterns = [
    # Examples:
    # url(r'^$', 'landonfears.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
	
    url(r'^admin/', include(admin.site.urls)),
	url(r'^api/', include('salesfiction.urls', namespace='salesfiction')),
	url(r'^music/', include('music.urls', namespace="music")),
	url(r'^api2/', include(v1_api.urls)),
	url(r'^contact/', ContactView.as_view(), name='contact'),
	url('^.*$', IndexView.as_view(), name='index'),
	
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
