from profiles.models import Address
from rest_framework import viewsets, permissions
from .serializers import AddressSerializer

#Address Viewset
class AddressViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = AddressSerializer

    def get_queryset(self):
        return self.request.user.profiles.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)