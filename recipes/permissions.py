from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return True
        

    def has_object_permission(self, request, view, obj):

        if not obj.author == request.user:
            if request.method in permissions.SAFE_METHODS:
                return obj.is_public
        return True

