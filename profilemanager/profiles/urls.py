from rest_framework import routers
from .api import AddressViewSet

router = routers.DefaultRouter()
router.register('api/users', AddressViewSet, 'users')

urlpatterns = router.urls